<template>
  <div class="header_container container-fluid">
    <div class="logo">
      <img src="../assets/img/logo.png" alt="Logo">
    </div>
    <div class="selector">
      <SelectComponent @selectedItem="onChangedChildren" />
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
        selectValue: "all"
      }
    },
    methods: {
    onChangedChildren (value) {
      console.log(value)
      this.selectValue = value; // someValue
      this.$emit('filterItems', value)
    }
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