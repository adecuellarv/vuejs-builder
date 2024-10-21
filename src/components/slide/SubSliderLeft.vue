<template>
  <v-app>
    <div class="div-components-list">
      <h1>Componentes</h1>
      <div
        v-for="(item, index) in components"
        :key="index"
        class="item-components-list"
      >
        <h2>{{ item.componentNameEsp }}</h2>
        <img :src="item.componentImage" class="img-component-list" />
      </div>
    </div>
  </v-app>
</template>
<script setup>
import { defineProps } from 'vue';

defineProps({
  components: {
    type: Array,
    required: true
  }
})

</script>

<style scoped>
.div-components-list {
  position: fixed;
  top: 0px;
  left: 250px;
  width: 400px;
  height: 100vh;
  background: #fff;
  z-index: 9999;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
  box-shadow: 10px 10px 18px 0px rgba(235, 235, 235, 1);
  padding: 20px;
}
.item-components-list{
  margin-top: 20px;
}
.item-components-list h2{
  font-weight: 800;
}
.img-component-list{
  width: 100%;
}
</style>
