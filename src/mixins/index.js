//客户端扩展模块
const context = weex.requireModule('context');
const modal = weex.requireModule("modal");
const stream = weex.requireModule("stream");
const device = weex.requireModule("weex-devices");
const Toast = weex.requireModule("weex-toast");
const qrCode = weex.requireModule("qr-code");
const faceRec = weex.requireModule("facedetect");
const locationP = weex.requireModule("weex-permission");
const tools = weex.requireModule("weex-tools");

import * as math from 'mathjs'

export default {
    methods: {
        //加法函数，用来得到精确的加法结果
        accAdd(arg1, arg2) {
            arg1 = Number(arg1);
            arg2 = Number(arg2);
            var ans = math.add(math.bignumber(arg1), math.bignumber(arg2));
            ans = math.format(ans, {
                number: 'BigNumber',
                precision: 20
            });
            return math.number(ans);
        },
        //减法函数，用来得到精确的减法结果
        accSub(arg1, arg2) {
            arg1 = Number(arg1);
            arg2 = Number(arg2);
            var ans = math.add(math.bignumber(arg1), math.bignumber(-arg2));
            ans = math.format(ans, {
                number: 'BigNumber',
                precision: 20
            });
            return math.number(ans);
        },
        //乘法函数，用来得到精确的乘法结果
        accMul(arg1, arg2) {
            arg1 = Number(arg1);
            arg2 = Number(arg2);
            var ans = math.multiply(math.bignumber(arg1), math.bignumber(arg2));
            ans = math.format(ans, {
                number: 'BigNumber',
                precision: 20
            });
            return math.number(ans);
        },
        //除法函数，用来得到精确的除法结果
        accDiv(arg1, arg2) {
            arg1 = Number(arg1);
            arg2 = Number(arg2);
            var ans = math.divide(math.bignumber(arg1), math.bignumber(arg2));
            ans = math.format(ans, {
                number: 'BigNumber',
                precision: 20
            });
            return math.number(ans);
        },
        loginOutMsgCode(phone, callback) {
            const param = {
                "_TokenType": "FC",
                "_MsgContent": "",
                "_SelfRegFlg": "1",
                "_TelNo": phone
            }
            this.postDo("OTPPreAuthenticate.do", param, data => {
                callback(data);
            })
        },
        //二类户开户
        getDZCountInfo() {
            this.postDo("SelfRegistrationOpenAcNo.do", {}, data => {
                context.sessionSetString("DZCountInfo", JSON.stringify(data));
                context.launchStage("main.openCount");
            });
        },
        jump(to, flag) {
            if (this.$router) {
                if (flag) {
                    this.$router.replace(to)
                } else {
                    this.$router.push(to)
                }

            }
        },
        // 时间比较大小
        compareTime(date1, date2) {
            var oDate1 = new Date(date1);
            var oDate2 = new Date(date2);
            if (oDate1.getTime() > oDate2.getTime()) {
                return true;
            } else {
                return false;
            }
        },
        // 日期转时间格式
        dateFormat(fmt, date) {
            let ret;
            const opt = {
                // 有其他格式化字符需求可以继续添加，必须转化成字符串
                "y+": date.getFullYear().toString(), // 年
                "M+": (date.getMonth() + 1).toString(), // 月
                "d+": date.getDate().toString(), // 日
                "H+": date.getHours().toString(), // 时
                "m+": date.getMinutes().toString(), // 分
                "s+": date.getSeconds().toString(), // 秒
            };
            for (let k in opt) {
                ret = new RegExp("(" + k + ")").exec(fmt);
                if (ret) {
                    fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
                };
            };
            return fmt;
        },
        // 判断字符串是否为空
        isEmpty(value) {
            value = value.trim();
            if (value === null || value === '' || value === 'undefined') return true;
            return false;
        },
        //银行卡
        cardDefault(NoCard) {
            var val = NoCard.replace(/ /g, '');
            var result = ""
            for (var i = 0; i < val.length; i++) {
                if ((i + 1) % 4 == 0) {
                    result = result + val[i] + " ";
                } else {
                    result = result + val[i];
                }
            }
            return result;
        },

        // 金额校验
        moneyCheck(money) {
            var reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
            if (!reg.test(money)) {
                return false;
            } else {
                return true;
            }
        },

        // 金额格式化
        moneyDefault(val) {
            if (val == "" || val == undefined) {
                return "0.00"
            } else {
                var Astr = val.toString();
                Astr = Astr.replace(/,/g, '');
                if (Astr.indexOf(".") != -1) {
                    var str = Astr.split(".")[0]
                    var afDot = Astr.split(".")[1]
                    if (afDot.length == 1) {
                        afDot = afDot + "0"
                    }
                    var newVal = "";
                    for (var i = 0; i <= str.length - 1; i++) {
                        if ((str.length - i) % 3 == 1 && i != (str.length - 1)) {
                            newVal = newVal + str.charAt(i) + ",";
                        } else {
                            newVal = newVal + str.charAt(i);
                        }
                    }
                    return newVal + "." + afDot;
                } else {
                    var str = val.toString();
                    var newVal = "";
                    for (var i = 0; i <= str.length - 1; i++) {
                        if ((str.length - i) % 3 == 1 && i != (str.length - 1)) {
                            newVal = newVal + str.charAt(i) + ",";
                        } else {
                            newVal = newVal + str.charAt(i);
                        }
                    }
                    return newVal + ".00";
                }
            }
        },

        loginOut() {
            this.postDo("logout.do", {}, data => {
                context.sessionSetString("loginMsg", "");
                context.sessionSetString("cifName", ""); //用户名
                context.sessionSetString("secreNotice", ""); //预留信息
                context.sessionSetString("lastLoginTime", ""); //上次登录时间
                context.sessionSetString('isLogin', 'false');
                context.sessionSetString("ForceChangePwd", "");
                context.sessionSetString("ForceChangePwd", "");

                this.$store.state.myProperty = "";
                this.$store.state.ProductList = [];

                context.clearToken();
                // this.$router.back()
                context.finish();
            });

        },

        goto() {
            context.launchStage("main.login?return=finish");
        },
        //是否是iphoneX iphoneXS iphoneXSMax
        isipx(fn) {
            if (WXEnvironment.platform === "iOS") {
                device.isDeviceSupportTypeFaceID(data => {
                    fn(data ? true : false);
                });
            } else {
                fn(false);
            }
        },
        goBack() {
            if (this.$router) {
                let arr = ['/zhiWen', '/kuaidai', '/paymentRecord', '/SetFinger', '/SetGersture', '/wodyuy', '/webView',
                    '/Tab_finance1', '/daik', '/addReferralInfo', '/referralInfoResult', "/utilProtocol2", "/paymentRecord",
                    "/waterPayment", "/elePayment", "/coalPayment", "/quotaApplication", "/eleReturnDetails1", "/eleReturnProductDetails", "/eleReturnDetails",
                    "/woqiManagement", "/chaozhidai", "/lookCertificate", "/limitSetting",
                    "/QrcodeLogin", "/eleReturnQry", "/locationOppoin", "/studyPayment", "/propertyPayment", "/waterPayment",
                    "/phonePayment", "/aliasSetting", "/myLoan", "/aboutMe", "/moreMenu", "/helpCenterFirst", "/riskRating",
                    "/openCountFirst", "/myQuota", "/LoanDetail", "/myRiskAssessment", "/detailsInfoD", "/detailsInfo", "/moneyIn",
                    "/moneyInSign", "/moneyOut", "/phoneNumber", "/transferMM", "/myBoundCard", "/financeInfo", "/addFundCollection",
                    "/otherCardMain", "/otherCardPaySign", "/myProperty", "/appoinGetNumber", "/appointDEDrawQry", "/appointDEDraw",
                    "/appointQYOpenCountQuery", "/appointQYOpenCount", "/locationHome", "/otherCardSign", "/otherCardGetMoney",
                    '/homeYYH', '/homeFMD', '/homeJJG', '/myYYH', '/myFMD', '/myJJG', "/myCXC", "/myCountList", "/homeCXC",
                    "/depositHome", "/myXLD", "/myXLD1", '/myCYC', "/czbHome", "/QRdraw", "/myFinance", "/financeHome", "/Loans",
                    "/financeCYC", "/msgCenter", "/msgList", "/financeZM", "/ChangePwd", "/Login", "/fingerLogin", "/SecurityCenter", '/myFSC',
                    '/waterEleFirePay', '/wefPayConfim', '/paymentResult', '/becameCommonBorrowers', '/homeXLD', '/alwaysPay',
                    '/Tab_life', '/utilProtocol1', '/studyPaymentDetail', '/payBill', '/payBillXQ', '/historyBill', '/historyBillXQ',
                    '/PropertyManagement', '/financeRedemption', '/yijianbangka', '/myRYC', '/mycztty', '/mycztty1', '/changeCardQueryHome',
                    "/AmountBepaid", "/AmountBepaidXQ", '/LShistoryBill', '/shouShi', '/myId', '/eLoanTips', '/myWfc', '/paymentRecordList',
                    '/homeFMD_zx', '/changeCard', '/cardMailMsg', '/eleCardApply', '/bankCardActivate', '/cardApplyRuslut', '/firstLoginAddPsw',
                    '/cecHome', '/cecBindAccList', '/changeCardIntroduce', '/homeJKC', '/myJKC', '/mobileTransferSign', '/mobileTransferSignChangeFirst'
                ]
                if (this.$route.path == '/Launcher' || this.$route.path == '/LauncherOld') {
                    this.$store.state.show = true;
                } else if (arr.toString().indexOf(this.$route.path) !== -1) {
                    if (this.$route.path === "/Login") {
                        context.sessionSetString("isFromRegistAndFpwd", "");
                    }
                    context.finish();
                } else if (this.$route.path === "/appointQYOpenResult" || this.$route.path == "/appointGetNumResult" || this.$route.path == "/utilResult" || this.$route.path == '/resultPage' || this.$route.path == "/appointDEDrawResult" || this.$route.path == "/repaymentSuccess") {
                    return;
                } else if (this.$route.path === "/Equipment") { //设备绑定返回退出登录
                    this.loginOut();
                    return;
                } else if (this.$route.path === "/forgetPassword" || this.$route.path === "/RegisterFirst") {
                    context.sessionSetString("isFromRegistAndFpwd", "true");
                    context.finish();
                } else {
                    this.$router.back()
                }
            }
        },
        commonTransResponse(response, sucessCallback, failCallback) {
            if (response.status == 200) {

                if (response.data._RejCode == "000000") {
                    sucessCallback(response.data);

                } else {
                    this.alertMsg(
                        JSON.stringify(response.data.errmsg),
                    );
                    failCallback(JSON.stringify(response.data.errmsg));
                }
            } else {
                this.alertMsg(
                    "网络异常",
                );
                failCallback("通讯异常");

            }
        },
        confirm(message, callback) {
            modal.confirm({
                message: message,
                okTitle: '确定',
                cancelTitle: "取消",
                duration: 3
            }, function(value) {
                callback(value);
            })
        },
        alertMsgCallBack(message, callback) {
            modal.alert({
                message: message,
                okTitle: '确定',
                duration: 3
            }, function(value) {
                callback(value);
            })
        },
        alertMsg(message) {
            modal.alert({
                message: message,
                okTitle: '确定',
                duration: 3
            })
        },
        toastMsg(message) {
            Toast.showToast(message);
        },
        toastMsg1(message) {
            modal.toast({
                message: message,
                duration: 4
            })
        },
        getHeight() {
            const {
                env: {
                    deviceHeight,
                    deviceWidth
                }
            } = weex.config;
            var pageHeight = deviceHeight / deviceWidth * 750;
            return pageHeight;
        },
        propName(value) {
            if (value == '') {
                this.alertMsg('用户名或手机号不能为空')
                return true;
            }
        },
        propSms(value) {
            if (value == '') {
                this.alertMsg('图形验证码不能为空')
                return true;
            }
        },
        // 数据请求
        postDo(url, formData, sucessCallback, failCallback) {
            var head = {
                "_locale": "zh_CN",
                "content-type": "application/json;charset=utf-8",
                "Accept": "application/json"
            }
            this.addCommonParams(formData);
            device.getMachineCode(data => {
                formData["MachineCode"] = data;
                device.getMachineOS(data => {
                    formData["MachineOS"] = data;
                    device.getIpAddr(data => {
                        formData["IpAddr"] = data;
                        device.getMacAdrr(data => {
                            formData["MacAdrr"] = data;

                            if (url !== "MyTotalAssetsInfoQry.do" && url !== "BranchMapQryByCity.do" && url !== "CustomerApplyStatusQry.do" && url !== "CardBinInfoQry.do") {
                                Toast.showLoadingToast();
                            }
                            stream.fetch({
                                    method: "POST",
                                    url: `/pmobile/` + url,
                                    type: "json",
                                    body: JSON.stringify(formData),
                                    headers: head,
                                },
                                response => {

                                    if (url !== "MyTotalAssetsInfoQry.do" && url !== "BranchMapQryByCity.do" && url !== "CustomerApplyStatusQry.do" && url !== "CardBinInfoQry.do") {
                                        Toast.dismissToast();
                                    }

                                    this.responseDataDispose(url, response, sucessCallback, failCallback);

                                }
                            );
                        })
                    })
                })
            })
        },
        //添加一个字段 是否有loading
        postOneDo(url, formData, isShowLoading, sucessCallback, failCallback) {
            var head = {
                "_locale": "zh_CN",
                "content-type": "application/json;charset=utf-8",
                "Accept": "application/json"
            }
            this.addCommonParams(formData);
            device.getMachineCode(data => {
                formData["MachineCode"] = data;
                device.getMachineOS(data => {
                    formData["MachineOS"] = data;
                    device.getIpAddr(data => {
                        formData["IpAddr"] = data;
                        device.getMacAdrr(data => {
                            formData["MacAdrr"] = data;

                            if (isShowLoading) {
                                Toast.showLoadingToast();
                            }
                            stream.fetch({
                                    method: "POST",
                                    url: `/pmobile/` + url,
                                    type: "json",
                                    body: JSON.stringify(formData),
                                    headers: head,
                                },
                                response => {

                                    if (isShowLoading) {
                                        Toast.dismissToast();
                                    }

                                    this.responseDataDispose(url, response, sucessCallback, failCallback);
                                }
                            );
                        })
                    })
                })
            })
        },
        // 相应数据处理
        responseDataDispose(url, response, sucessCallback, failCallback) {

            if (response.status != 200) {
                this.alertMsg("网络异常" + response.status);
                failCallback()
                return;
            }

            if (response.data._RejCode === "999999") {
                this.alertMsgCallBack(response.data.jsonError, () => {
                    context.sessionSetString("cifName", ""); //用户名
                    context.sessionSetString("secreNotice", ""); //预留信息
                    context.sessionSetString("lastLoginTime", ""); //上次登录时间
                    context.sessionSetString("isLogin", 'false');
                    context.sessionSetString("loginMsg", "");
                    context.sessionSetString("authResultData", "");
                    context.clearToken();
                    if (url === "logout.do") {
                        context.launchStage("main.login?return=finish");
                    } else if (url === "MyTotalAssetsInfoQry.do") {
                        context.launchStage("main.login?return=finish");
                    } else {
                        context.replaceStage("main.login?return=finish");
                    }
                })
                return;

            }
            if (response.data._RejCode === "999995") { //登录外超时
                this.alertMsgCallBack(response.data.jsonError, () => {
                    context.sessionSetString("cifName", ""); //用户名
                    context.sessionSetString("secreNotice", ""); //预留信息
                    context.sessionSetString("lastLoginTime", ""); //上次登录时间
                    context.sessionSetString("isLogin", 'false');
                    context.sessionSetString("loginMsg", "");
                    context.sessionSetString("authResultData", "");
                    context.clearToken();
                    if (url === "logout.do") {
                        context.launchStage("main.login?return=finish");
                    } else if (url === "MyTotalAssetsInfoQry.do") {
                        context.launchStage("main.login?return=finish");
                    } else {
                        context.replaceStage("main.login?return=finish");
                    }
                })
                return;

            }
            if (response.data._RejCode === "999996") {
                this.alertMsgCallBack(response.data.jsonError, () => {
                    context.finish();
                })
                return;
            }
            if (response.data.jsonError) {
                if (response.data.jsonError.indexOf("session.invalid_info") !== -1 || response.data.jsonError.indexOf("role.invalid_user") !== -1) {
                    this.alertMsgCallBack(response.data.jsonError, () => {
                        context.sessionSetString("cifName", ""); //用户名
                        context.sessionSetString("secreNotice", ""); //预留信息
                        context.sessionSetString("lastLoginTime", ""); //上次登录时间
                        context.sessionSetString("isLogin", 'false');
                        context.sessionSetString("loginMsg", "");
                        context.sessionSetString("authResultData", "");
                        context.clearToken();
                        if (url === "logout.do") {
                            context.launchStage("main.login?return=finish");
                        } else if (url === "MyTotalAssetsInfoQry.do") {
                            context.launchStage("main.login?return=finish");
                        } else {
                            context.replaceStage("main.login?return=finish");
                        }
                    });
                    return;
                }
                if (response.data.jsonError.indexOf("此产品已到期，不能购买") !== -1) {
                    this.alertMsgCallBack(response.data.jsonError, () => {
                        context.finish();
                    });
                    return;
                }
                if (response.data._RejCode === "999997") {
                    if (url === "TXlogin.do") { //手势登录
                        failCallback(response.data);
                        return;
                    } else {
                        this.alertMsg(response.data.jsonError);
                        failCallback(response.data);
                        return;
                    }

                }
                this.alertMsg(response.data.jsonError);
                failCallback(response.data);
                return;
            }
            if (response.data._RejCode == "000000") {
                sucessCallback(response.data)
            } else {
                failCallback(response.data);
                //交易失败
                this.alertMsg("网络异常");
            }
        },
        //增加公共参数
        addCommonParams(params) {
            // 公共参数
            params["_locale"] = "zh_CN";
            params["BankId"] = "9999";
            params["LoginType"] = "Q";
            params["_ChannelId"] = "PMBS";
        },
        confirmMsg(msg, ot, ct, callback) {
            modal.confirm({
                message: msg,
                okTitle: ot,
                cancelTitle: ct,
                duration: 3
            }, function(val) {
                callback(val);
            });
        },

        // 获取未读消息数量
        getUnreadMessageNum(callBack) {

            const param = {
                extra: "28",
                pageSize: "3"
            };
            this.postOneDo("PlanQuery.do", param, false, data => {
                // 当前消息
                var num = 0;
                var curMsgList = data.List;

                for (var i = 0; i < curMsgList.length; i++) {
                    var exist = this.findSeqMsgExist(curMsgList[i].seq);
                    if (!exist) {
                        num++;
                    }
                }
                callBack(num, curMsgList);
            });
        },
        // 查找某个消息是否在缓存已经存在
        findSeqMsgExist(seq) {

            var historyMsgList = [];

            var str = context.secureGetString("HistoryMsgList");

            if (str == undefined || str == '' || str.length == 0) {
                historyMsgList = [];
            } else {
                historyMsgList = JSON.parse(str);
            }

            var exist = false; // 默认不存在

            for (var i = 0; i < historyMsgList.length; i++) {
                if (seq == historyMsgList[i]) {
                    exist = true;
                    break;
                }
            }
            return exist;
        },
        // 登录提示弹框 返回true 表示可以继续进行交易 false 不可以继续进行交易
        loginAlretMsg(obj, fn) {

            if (obj.IdentityExpDateFlag == '2') {
                // 您的身份证有效期即将到期，为了不影响您在我行业务的正常办理，请及时在手机银行“证件信息更新”中更新您的证件信息
                this.confirmMsg('您的身份证有效期即将到期，为了不影响您在我行业务的正常办理，请及时在手机银行“证件信息更新”中更新您的证件信息',
                    '更新', '取消', val => {
                        fn(val)
                    })
                return true;
            }
            if (obj.IdentityExpDateFlag == '1') {
                // 您的身份证有效期已过期，为了不影响您在我行业务的正常办理，请及时在手机银行“我的个人信息”中更新您的证件信息
                this.confirmMsg('您的身份证有效期已过期，为了不影响您在我行业务的正常办理，请及时在手机银行“证件信息更新”中更新您的证件信息',
                    '更新', '取消', val => {
                        fn(val)
                    })
                return;
            }

            fn('正常');
        },
        // 数字金额大写转换(可以处理整数,小数,负数) 封装
        smalltoBIG(n) {
            var fraction = ['角', '分'];
            var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
            var unit = [
                ['元', '万', '亿'],
                ['', '拾', '佰', '仟']
            ];
            var head = n < 0 ? '欠' : '';
            n = Math.abs(n);

            var s = '';

            for (var i = 0; i < fraction.length; i++) {
                s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
            }
            s = s || '整';
            n = Math.floor(n);

            for (var i = 0; i < unit[0].length && n > 0; i++) {
                var p = '';
                for (var j = 0; j < unit[1].length && n > 0; j++) {
                    p = digit[n % 10] + unit[1][j] + p;
                    n = Math.floor(n / 10);
                }
                s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
            }
            return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
        },
        // 扫码逻辑封装
        qrCodeClick() {
            qrCode.scanQRcode(data => {
                var name = data.split(":")[0];
                if (data.indexOf("http") !== -1) {
                    if (data.indexOf("ScanQry.do") !== -1) {
                        //查看凭证
                        context.sessionSetString("contentid", data.split("=")[1]);
                        context.launchStage("main.lookCertificate");
                    }
                } else if (name === "cyc") {
                    //跳转诚意存  cyc:fdsfsdfssd
                    if (this.$store.state.login) {
                        if (context.sessionGetString("IsEcFlag") === "") {
                            this.confirm(
                                "诚意存需使用专属产品账户购买，您还没有专属产品账户，是否现在为您开立？",
                                data => {
                                    if (data === "确定") {
                                        this.getDZCountInfo();
                                    } else {
                                        return;
                                    }
                                }
                            );
                        } else {
                            context.sessionSetString("productInfo", data.split(":")[1]);
                            context.launchStage("main.financeCYC");
                        }
                    } else {
                        this.goto();
                    }
                } else if (name == "PATM") {
                    //跳转二维码取款
                    context.sessionSetString("productInfo", data.split(":")[1]);
                    context.launchStage("main.QRdraw");
                } else if (name == "cxc") {
                    //跳转超享存
                    if (this.$store.state.login) {
                        if (context.sessionGetString("IsEcFlag") === "") {
                            this.confirm(
                                "超享存需使用专属产品账户购买，您还没有专属产品账户，是否现在为您开立？",
                                data => {
                                    if (data == "确定") {
                                        this.getDZCountInfo();
                                    } else {
                                        return;
                                    }
                                }
                            );
                        } else {
                            context.sessionSetString("productInfo", data.split(":")[1]);
                            context.launchStage("main.homeCXC");
                        }
                    } else {
                        this.goto();
                    }
                } else if (name === "QRLOGING") {
                    //二维码登录 QRLOGING:eefsdf
                    context.sessionSetString("QRcodeLoginID", data.split(":")[1]);
                    context.launchStage("main.QrcodeLogin");

                } else if (name === 'czd') { // 超置贷成为共同借款人

                    if (this.$store.state.login) {
                        const para = { 'BorrData': data.split(":")[1] };

                        this.postDo('CommonBorrowerInfoDecrypt.do', para, requestData => {

                            context.sessionSetString("dataDic", JSON.stringify(requestData.resultMap));
                            context.launchStage('main.becameCommonBorrowers');
                        }, () => {

                        });
                    } else {
                        this.goto();
                    }
                }
            });
        },
        // 腾讯云人脸识别封装
        txFaceCheck(callBack, trsType) {

            var param = {
                "IdNo": context.secureGetString("idNumber"), //身份证号
                "UserName": context.secureGetString("UserName"), //用户名称
            };

            if (trsType != undefined && trsType != '') {
                param = {
                    "IdNo": context.secureGetString("idNumber"), //身份证号
                    "UserName": context.secureGetString("UserName"), //用户名称
                    'TrsType': trsType
                };
            }

            this.postDo("NONCESignQry.do", param, result => {
                const ocrMsg = {
                    "faceId": result.resultMap.FaceId,
                    "agreementNo": result.resultMap.OrderNo,
                    "appId": result.resultMap.AppId,
                    "version": result.resultMap.Version,
                    "nonce": result.resultMap.Nonce,
                    "userId": result.resultMap.UserId,
                    "sign": result.resultMap.NONCESign,
                    "license": result.resultMap.License,
                    "idNo": param.IdNo,
                    "name": param.UserName,
                }

                faceRec.openCloudFaceService(ocrMsg, data => {
                    if (data.code == undefined || data.code == '' || data.code.length == 0) {
                        this.alertMsg(data.errorMsg);
                    } else {
                        // 不管识别成功与否 都忘服务端走
                        callBack(data);
                    }
                });

            });
        },
        // 平安人脸封装
        paOCFTFace(callBack) {
            faceRec.openOCFTFace(data => {
                var resultData = JSON.parse(data);
                if (resultData.success) {
                    callBack(resultData.imgStr);
                } else {
                    this.alertMsg('人脸识别失败');
                }
            });
        },
        // 平安反欺诈封装
        paArmorSDK(callBack) {
            if (this.$store.state.isUserArmorSDK) {
                Toast.showLoadingToast();
                // 需要链接外网
                locationP.getLocationPermission(data => { //判断是否开启定位
                    if (data) {
                        tools.requestArmorSDK(paData => {
                            Toast.dismissToast();
                            if (paData.success) {
                                callBack(paData);
                            } else {
                                this.alertMsg(paData.errorMsg);
                            }
                        });
                    } else {
                        Toast.dismissToast();
                    }
                });
            } else {
                var obj = { 'latitude': '1', 'longitude': '2' };
                var paData = { 'finger': 'ffff', 'ip': '123', 'GPS': JSON.stringify(obj) };
                callBack(paData);
            }

        },
        // 广告banner 跳转逻辑封装
        adBannerJump(item) {
            if (item.url == undefined || item.url == '') {
                return;
            }

            if (item.url.indexOf('http') != -1) {
                const param = {
                    "name": item.name,
                    "url": item.url,
                    'dataDic': {
                        'type': 'xy',
                        'isShowBtn': false,
                        'data': {}
                    }
                };
                context.sessionSetString("ProtocolInfo", JSON.stringify(param));
                context.launchStage("main.utilProtocol1");

            } else if (item.url.indexOf("main.") != -1) {
                context.launchStage(item.url);
            } else {
                const param = {
                    "name": item.name,
                    "url": this.$store.state.serveApi + item.url,
                    'dataDic': {
                        'type': 'xy',
                        'isShowBtn': false,
                        'data': {
                            'UserName': context.sessionGetString("cifName"),
                            'SysTime': context.sessionGetString("SysTime")
                        }
                    }
                };
                context.sessionSetString("ProtocolInfo", JSON.stringify(param));
                context.launchStage("main.utilProtocol1");
            }
        }
    }
}