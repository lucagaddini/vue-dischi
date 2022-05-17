<template>
  <div>
    <HeaderComponent />
    <MainComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";

import axios from 'axios';
import '../node_modules/bootstrap/scss/bootstrap.scss';


export default {
    components: { HeaderComponent, MainComponent },
    data(){
      return{
        baseURL:'https://flynn.boolean.careers/exercises/api/array/music',
        albumArray:[],
        isLoaded : false
      }
    },
    mounted(){
      this.getAPI()
    },
    methods:{
      getAPI(){
        axios.get(this.baseURL)
        .then(r => {
          this.albumArray = r.data.response;
          console.log(r.data);
          this.isLoaded = true
        })
      }
    }
}
</script>

<style lang="scss">

</style>
