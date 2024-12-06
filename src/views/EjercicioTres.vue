<template>
  <div class="container mt-5">
    <h1 class="mb-4">Ejercicio 3: Comunicación entre Componentes</h1>
    <div class="card shadow-sm">
      <div class="card-body">
        <ParentComponent />
      </div>
    </div>
  </div>
</template>

<script>

import ParentComponent from '@/components/ParentComponent.vue';

export default {
  name: 'EjercicioTres',
  components: {
    ParentComponent
  }
};
</script>

<style scoped>
.card {
  max-width: 500px;
  margin: 0 auto;
}
</style>
