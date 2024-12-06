<template>
  <div>
    <input v-model="texto" placeholder="Escribe algo" class="form-control mb-3" />
    <button class="btn btn-primary" @click="enviarMensaje">Enviar</button>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  data() {
    return {
      texto: ''
    };
  },
  methods: {
    enviarMensaje() {
      this.$emit('mensajeEnviado', this.texto);
    }
  }
};
</script>

<style scoped>
button {
  margin-top: 10px;
}
</style>
