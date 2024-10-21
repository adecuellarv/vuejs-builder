<template>
  <v-app>
    <v-navigation-drawer>
      <v-list-item title="Componentes" subtitle="Lista"></v-list-item>
      <v-divider></v-divider>
      <v-list-item link title="List Item 1"></v-list-item>
      <v-list-item link title="List Item 2"></v-list-item>
      <v-list-item link title="List Item 3"></v-list-item>
    </v-navigation-drawer>
  </v-app>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from '../../axios';

const data = ref(null);
const error = ref(null);

console.log('#data', data, '#error', error)
onMounted(async () => {
  try {
    const response = await axios.get('categories');
    data.value = response.data;
  } catch (err) {
    error.value = 'Error al cargar los datos: ' + err.message;
  }
});

</script>
