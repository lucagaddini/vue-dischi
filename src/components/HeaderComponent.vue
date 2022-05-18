<template>
  <div class="header_container container-fluid">
    <div class="logo">
      <img src="../assets/img/logo.png" alt="Logo">
    </div>
    <div class="selector">
      <SelectComponent 
      @selectedItemArtist="onChangedArtist"
      @selectedItemGenre="onChangedGenre" />
    </div>
  </div>
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
      onChangedGenre(value) {
        console.log('onChangedGenre',value)
        this.selectGenreValue = value; // someValue
        this.$emit('filterItemsGenre', this.selectGenreValue)
      },
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

.header_container{
  background-color: $secondary-color;
  padding: 20px;

  @include flex-sbtw();
  .logo{
    img{
      width: 45px;
    }
  }

}


</style>