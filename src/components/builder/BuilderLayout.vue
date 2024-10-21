<template>

  <div class="div-layout" @click="handleCloseSlide()">
    <h1>Hola</h1>
  </div>

</template>
<script setup>
import { useShowComponentsSlideStore } from '../../stores/componentsSlide';
const storeSlide = useShowComponentsSlideStore();

const handleCloseSlide = () => {
  storeSlide.hideSlide();
}
</script>
<style scoped>
.div-layout {
  width: 100%;
  height: 100vh;
  background: #fff;
  position: absolute;
  top: 0px;
  left: 0px;
}
</style>
