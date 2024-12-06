<template>
  <div>
    <h5 class="card-title">Contador: {{ contador }}</h5>
    <div class="d-flex gap-3">
      <button class="btn btn-success" @click="incrementar">Incrementar</button>
      <button class="btn btn-danger" @click="decrementar">Decrementar</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'ContadorApp',
  computed: {
    ...mapState(['contador'])
  },
  methods: {
    ...mapMutations(['incrementar', 'decrementar'])
  }
};
</script>

<style scoped>
.card-title {
  font-size: 2rem;
  font-weight: bold;
}
</style>
