<template>
<nav class="navbar navbar-expand-lg navbar_personal">
  <div class="container-fluid">
    <a class="navbar-brand logo" href="#">
      <img src="../assets/img/logo.png" alt="Logo">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fa-solid fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse navbar_select_container" id="navbarNav">
      
      <!-- Il componente genitore rimane in ascolto ad allo scaturirsi di uno dei due eventi chiama la relativa funzione -->
      <SelectComponent 
      @selectedItemArtist="onChangedArtist"
      @selectedItemGenre="onChangedGenre" />
    </div>
  </div>
</nav>
  
</template>

<script>
import SelectComponent from "./SecondaryComponent/SelectComponent.vue";



export default {
    name: "HeaderComponent",
    components: { SelectComponent },
    data(){
      return{
        selectGenreValue: "all",
        selectArtistValue: "all"
      }
    },
    methods: {
      // Funzione che al verificarsi dell'evento passa il valore della select al componente genitore
      onChangedGenre(value) {
        console.log('onChangedGenre',value)
        this.selectGenreValue = value; // someValue
        this.$emit('filterItemsGenre', this.selectGenreValue)
      },

      // Funzione che al verificarsi dell'evento passa il valore della select al componente genitore
      onChangedArtist(value) {
        console.log('onChangedArtist',value)
        this.selectArtistValue = value; // someValue
        this.$emit('filterItemsArtist', this.selectArtistValue)
      },

  }
}
</script>

<style lang="scss" scoped>

@import '../assets/style/general';
@import '../assets/style/mixins';
@import '../assets/style/utils';
@import '../assets/style/vars';


.navbar_personal{
  background-color: $secondary-color;
  padding: 20px;

  @include flex-sbtw();
  .logo{
    img{
      width: 45px;
    }
  }

  .navbar_select_container{
    flex-grow: 0;
  }

  .fa-solid{
    color: $logo-primary-color;
  }

}


</style>