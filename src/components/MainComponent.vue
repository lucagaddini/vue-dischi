<template>
  <div class="main_wrapper">

    <div v-if="isLoaded" class="album_container container">

      <div class="row">
        <div 
        v-for=" (album,index) in albumArray" 
        :key="`album-${index}`" 
        class="col-6 col-md-4 col-lg-2"> <AlbumComponent :album="album" /> </div>
      </div>

    </div>

    <div class="container" v-else>
      <LoadingComponent loaderName="LOADING MUSIC"/>
    </div>

  </div>
</template>

<script>
import AlbumComponent from "./SecondaryComponent/AlbumComponent.vue";
import LoadingComponent from "./SecondaryComponent/LoadingComponent.vue";

import axios from 'axios';

export default {
    name: "MainComponent",

    components: { AlbumComponent, LoadingComponent },

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

<style lang="scss" scoped>

@import '../assets/style/general';
@import '../assets/style/mixins';
@import '../assets/style/utils';
@import '../assets/style/vars';

.main_wrapper{
  background-color: $primary-color;
  min-height: 100vh;
  height: 100%;
  color: white;

  .album_container{
    @include flex-cnt();
    padding-top: 70px;
    height: 100%;
    width: 100%;
  }
}

</style>