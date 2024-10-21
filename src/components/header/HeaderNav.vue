<template>
  <v-app>
    <v-app-bar :elevation="8" rounded>
      <template v-slot:prepend>
      </template>
      <v-app-bar-title><b>Portafolio</b> Ade Cuellar </v-app-bar-title>

      <template v-slot:append>
        <v-btn class="ma-3">
          Guardar y ver
          <v-btn icon="mdi-content-save-check"></v-btn>
        </v-btn>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
    </v-app-bar>
  </v-app>
</template>
<script setup>

</script>
