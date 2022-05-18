<template>
  <div class="card_container">
    <img :src="Album.poster" :alt="Album.title">
    <h5>{{Album.title}}</h5>
    <span>{{Album.author}}</span>
    <span>{{Album.year}}</span>

  </div>
</template>

<script>
export default {
  name:'AlbumComponent',

  props: {
    Album : Object
  }
}
</script>

<style lang="scss" scoped>

@import '../../assets/style/general';
@import '../../assets/style/mixins';
@import '../../assets/style/utils';
@import '../../assets/style/vars';

.card_container{
  @include flex-column-start-ctn();
  background-color: $secondary-color;
  width: 100%;
  height: calc(100% - 30px);
  padding-top: 10px;
  padding-bottom: 50px;

  img{
    width: 100%;
    padding: 10px;
  }
  h5{
    padding: 20px 0;
    text-transform: uppercase;
    text-align: center;
    font-size: 1rem;
  }

  span{
    color: grey;
    font-size: .9rem;
  }
}

</style>