<template>
  <div>
    
    <select 
    @change="onChangeSelect"
    name="music-genre" id="genre">
      <option value="all" selected>Seleziona un genere</option>
      <option value="Pop">Pop</option>
      <option value="Rock">Rock</option>
      <option value="Jazz">Jazz</option>
      <option value="Metal">Metal</option>
    </select>
  </div>
</template>

<script>
export default {
  name:'SelectComponent',
  methods:{
    onChangeSelect () {
        this.$emit('selectedItem', event.target.value)
        console.log("CHILDREN -----> CHANGED");
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
  color: white;
  background-color: lighten($primary-color, 40%);
  border: 1px solid lighten($primary-color, 80%);
  border-radius: 5px;
}

</style>