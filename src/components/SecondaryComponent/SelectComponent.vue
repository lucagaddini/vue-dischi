<template>
  <div>
    
    <select 
    @change="onChangeSelectGenre"
    name="music-genre" id="genre">
      <option value="all" selected>Seleziona un genere</option>
      <option value="Pop">Pop</option>
      <option value="Rock">Rock</option>
      <option value="Jazz">Jazz</option>
      <option value="Metal">Metal</option>
    </select>

  <select 
    @change="onChangeSelectArtist"
    name="music-artist" id="artist">
      <option value="all" selected>Seleziona un'artista</option>
      <option value="Bon Jovi">Bon Jovi</option>
      <option value="Queen">Queen</option>
      <option value="Sting">Sting</option>
    </select>


  </div>
</template>

<script>
export default {
  name:'SelectComponent',
  methods:{
    onChangeSelectGenre () {
        this.$emit('selectedItemGenre', event.target.value)
        console.log("CHILDREN Genre ---> CHANGED", event.target.value);
    },
    onChangeSelectArtist (){
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