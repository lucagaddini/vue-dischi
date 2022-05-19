<template>
  <div>
    <!-- Il componente genitore rimane in ascolto ad allo scaturirsi di uno dei due eventi chiama la relativa funzione -->
    <HeaderComponent 
    @filterItemsGenre="filterAlbumGenre"
    @filterItemsArtist="filterAlbumArtist"/>

    <!-- Il componente genitore passa al componente figlio i valori delle props presenti in quest'ultimo -->
    <MainComponent 
    :filterKeyGenre="filterForGenre"
    :filterKeyArtist="filterForArtist"/>

  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";


export default {
  components: { HeaderComponent, MainComponent },
  data(){
    return{
      filterForGenre: "all",
      filterForArtist: "all"
    }
  },
  methods:{
    // Funzione che salva il valore del parametro ricevuto dal componente figlio in una variabile del componente stesso
    filterAlbumGenre(value) {
        this.filterForGenre = value;
        console.log("VUE.APP -----> Select Genre Value:", value);
    },

    // Funzione che salva il valore del parametro ricevuto dal componente figlio in una variabile del componente stesso
    filterAlbumArtist(value) {
        this.filterForArtist = value;
        console.log("VUE.APP -----> Select Artist Value:", value);
    }
  }
}
</script>

<style lang="scss" >
@import './assets/style/general';
@import './assets/style/mixins';
@import './assets/style/utils';
@import './assets/style/vars';

</style>
