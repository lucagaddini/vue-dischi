<template>
  <div>
    <!-- Al cambio del valore della select chiamo la relativa funzione che passa parametri al componente genitore -->
    <select 
    @change="onChangeSelectGenre"
    name="music-genre" id="genre">
      <option value="all" selected>Seleziona un genere</option>
      <option 
        v-for="(element, index) in genreArray" 
        :key="`genre-${index}`" 
        :value="element">{{element}}</option>
    </select>

  <!-- Al cambio del valore della select chiamo la relativa funzione che passa parametri al componente genitore -->
  <select 
    @change="onChangeSelectArtist"
    name="music-artist" id="artist">
      <option value="all" selected>Seleziona un'artista</option>
      <option 
        v-for="(element, index) in artistArray" 
        :key="`genre-${index}`" 
        :value="element">{{element}}</option>
    </select>

  </div>
</template>

<script>

import axios from 'axios';

export default {
  name:'SelectComponent',
  data(){
    return{
      baseURL:'https://flynn.boolean.careers/exercises/api/array/music',
      responseArray: [],
      genreArray: [],
      artistArray: [],
      isLoaded: false
    }
  },

  mounted(){
    this.getAPI();
  },

  methods:{

    getAPI(){
      // Funzione che chiama l'API ed inserisce il contenuto nell'array (responseArray)
      axios.get(this.baseURL)
      .then(r => {
        this.responseArray = r.data.response;
        console.log('Risposta API SelectComponent ---->',r.data);
        this.isLoaded = true;
        // Terminata la chiamata API chiama la funzione di creazione dei valore delle due select
        this.createSelectOption();

      })
    },

    createSelectOption(){
      console.log('START createSelectOption');

      // Ciclo l'array della risposta API ed push gli elementi non presenti nell'array del genere musicale
      this.responseArray.forEach(element => {
        if(!this.genreArray.includes(element.genre)){
          console.log(element.genre);
          this.genreArray.push(element.genre);
        }
      });

      // Ciclo l'array della risposta API ed push gli elementi non presenti nell'array degli artisti
      this.responseArray.forEach(element => {
        if(!this.artistArray.includes(element.author)){
          console.log(element.author);
          this.artistArray.push(element.author);
        }
      });
    },

    onChangeSelectGenre () {
      // Funzione che al cambio di valore della select dei generi invia l'evento ed il valore della select stessa al componente genitore
        this.$emit('selectedItemGenre', event.target.value)
        console.log("CHILDREN Genre ---> CHANGED", event.target.value);
    },

    onChangeSelectArtist (){
      // Funzione che al cambio di valore della select degli artisti invia l'evento ed il valore della select stessa al componente genitore
      this.$emit('selectedItemArtist', event.target.value)
      console.log("CHILDREN Artist ---> CHANGED", event.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../../assets/style/general';
@import '../../assets/style/mixins';
@import '../../assets/style/utils';
@import '../../assets/style/vars';



select{
  padding: 10px;
  margin: 0 10px;
  color: white;
  background-color: lighten($primary-color, 40%);
  border: 1px solid lighten($primary-color, 80%);
  border-radius: 5px;
}

</style>