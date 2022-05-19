<template>
  <div class="main_wrapper">

    <div v-if="isLoaded" class="album_container container">

      <div 
      v-for="(album,index) in filteredAlbum" 
      :key="`album-${index}`"
      class="album_card"> <AlbumComponent :album="album" /> </div>
  
    </div>

    <div class="container" v-else>
      <LoadingComponent loaderName="LOADING YOUR FAVORITE MUSIC ..."/>
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
    props:{
      filterKeyGenre : String,
      filterKeyArtist : String
    },

    data(){
      return{
        baseURL:'https://flynn.boolean.careers/exercises/api/array/music',
        albumArray:[],
        isLoaded : false
      }
    },
    mounted(){
      this.getAPI();
    },
    methods:{
      getAPI(){
        axios.get(this.baseURL)
        .then(r => {
          this.albumArray = r.data.response;
          console.log('Risposta API MainComponent ---->',r.data);
          setTimeout(() => {this.isLoaded = true}, 3000);
        })
      }
    },
    computed:{
      filteredAlbum(){

        let arrayFiltered = [];
        if (this.filterKeyGenre == "all" && this.filterKeyArtist == "all"){
          arrayFiltered = this.albumArray;

        } else if (this.filterKeyGenre == "all" && this.filterKeyArtist != "all"){
          arrayFiltered = this.albumArray.filter( album => {
            return album.author.includes(this.filterKeyArtist);
          })

        } else if (this.filterKeyArtist == "all" && this.filterKeyGenre != "all"){
          arrayFiltered = this.albumArray.filter( album => {
            return album.genre.includes(this.filterKeyGenre);
          })

        } else if (this.filterKeyArtist != "all" && this.filterKeyGenre != "all"){
          arrayFiltered = this.albumArray.filter( album => {
            return (album.genre.includes(this.filterKeyGenre) && album.author.includes(this.filterKeyArtist));
          })
        }

        return arrayFiltered;

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

    .album_card{
      @include flex-cnt();
      width: calc(100%/2 - 30px);
      height: 420px;
      margin: 0 15px;
    }

      // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) { 
      .album_card{
          width: calc(100%/2 - 30px);
          height: 430px;
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
      .album_card{
          width: calc(100%/3 - 30px);
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) { 
      .album_card{
          width: calc(100%/4 - 30px);
        }
    }

    // X-Large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) { 
      .album_card{
          width: calc(100%/5 - 30px);
        }
    }
  }
}

</style>