<template>
  <div>
    <HeaderComponent />
    <MainComponent/>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";

import '../node_modules/bootstrap/scss/bootstrap.scss';


export default {
  components: { HeaderComponent, MainComponent },
}
</script>

<style lang="scss">

</style>
