<template>
  <div>
    <HeaderComponent @filterItems="filterAlbum"/>
    <MainComponent :filterKey="filterValue"/>
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
      filterValue: "all"
    }
  },
  methods:{
    filterAlbum(value) {
        this.filterValue = value;
        console.log("VUE.APP -----> Select Value:", value);
    }
  }
}
</script>

<style lang="scss">

</style>
