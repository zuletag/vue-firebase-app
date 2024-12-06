<template>
  <div>
    <h5 class="card-title">Mensaje del Hijo: {{ mensaje }}</h5>
    <ChildComponent @mensajeEnviado="mostrarMensaje" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';  // Importamos el componente hijo

export default {
  name: 'ParentComponent',  // Nombre del componente padre
  components: {
    ChildComponent  // Declaramos el componente hijo
  },
  data() {
    return {
      mensaje: ''
    };
  },
  methods: {
    mostrarMensaje(mensaje) {
      this.mensaje = mensaje;
    }
  }
};
</script>

<style scoped>
.card-title {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
