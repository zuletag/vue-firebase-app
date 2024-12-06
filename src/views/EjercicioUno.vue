<template>
  <div class="container mt-5">
    <h1 class="mb-4">Ejercicio 1: Manejo del estado con Vuex</h1>
    <div class="card shadow-sm">
      <div class="card-body">
        <ContadorApp />
      </div>
    </div>
  </div>
</template>

<script>
// Importamos el componente ContadorApp
import ContadorApp from '@/components/ContadorApp.vue';

export default {
  name: 'EjercicioUno',
  components: {
    ContadorApp
  }
};
</script>

<style scoped>
.card {
  max-width: 500px;
  margin: 0 auto;
}
</style>
