<template>
    <list>
    <header>
      <search-bar :autofocus="true" :searchBtn="true"></search-bar>
    </header>
    <cell>
      <div>
          <house-list></house-list>
      </div>
    </cell>

  </list> 
</template>

<script>
import searchBar from "./../home/components/searchBar.vue";
import HouseList from "./../home/components/houseList.vue";

export default {
    components: {
        searchBar,
        HouseList
    }
}

</script>

<style scoped>

</style>