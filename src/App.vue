<template>
  <div>
    <HeaderComponent 
    @filterItemsGenre="filterAlbumGenre"
    @filterItemsArtist="filterAlbumArtist"/>
    <MainComponent 
    :filterKeyGenre="filterForGenre"
    :filterKeyArtist="filterForArtist"/>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";

import '../node_modules/bootstrap/scss/bootstrap.scss';


export default {
  components: { HeaderComponent, MainComponent },
  data(){
    return{
      filterForGenre: "all",
      filterForArtist: "all"
    }
  },
  methods:{
    filterAlbumGenre(value) {
        this.filterForGenre = value;
        console.log("VUE.APP -----> Select Genre Value:", value);
    },
    filterAlbumArtist(value) {
        this.filterForArtist = value;
        console.log("VUE.APP -----> Select Artist Value:", value);
    }
  }
}
</script>

<style lang="scss">

</style>
