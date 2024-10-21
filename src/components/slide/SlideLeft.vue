<template>
  <v-app>
    <v-navigation-drawer class="div-slide-left">
      <v-list-item title="Componentes" subtitle="Lista"></v-list-item>
      <v-divider></v-divider>
      <v-list-item v-for="(item, index) in categories" @click="handleComponents(item.categoryId)"
        :title="item.categoryNameEsp" :key="index">
      </v-list-item>
    </v-navigation-drawer>
    <SubSliderLeft v-show="showSlideComponents" :components="componentsList" />
  </v-app>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from '../../axios';
import SubSliderLeft from './SubSliderLeft.vue';
import { useShowComponentsSlideStore } from '../../stores/componentsSlide';

const storeSlide = useShowComponentsSlideStore();
const categories = ref([]);
const componentsList = ref([]);
const error = ref(null);
const showSlideComponents = computed(() => storeSlide.show);

onMounted(async () => {
  try {
    const response = await axios.get('categories');
    categories.value = response?.data;
  } catch (err) {
    error.value = 'Error al traer categorias: ' + err.message;
  }
});

const handleComponents = async (categoryId) => {
  try {
    const response = await axios.get('components/' + categoryId + '/7');
    componentsList.value = response?.data;
    storeSlide.showSlide()
  } catch (err) {
    error.value = 'Error al traer los componentes: ' + err.message;
    storeSlide.hideSlide()
  }
};

</script>

<style scoped>
.div-slide-left {
  width: 250px;
  background: #eee;
}
</style>
