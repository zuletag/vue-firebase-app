<template>
  <div id="app">
    <!-- Navbar de Bootstrap a pantalla completa -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Vue Ejercicios</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Ejercicio 1</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/ejercicio-dos">Ejercicio 2</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/ejercicio-tres">Ejercicio 3</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Contenido dinámico según la ruta -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
/* Personalización del navbar para hacerlo a pantalla completa */
.navbar {
  width: 100%;
  /* Hace que ocupe todo el ancho */
}

.navbar-nav {
  flex-grow: 1;
  /* Permite que los elementos de la navbar se distribuyan de manera más eficiente */
}

.nav-link {
  font-size: 1.1rem;
  font-weight: 600;
}

.nav-link:hover {
  color: #6DBE45 !important;
}

.navbar-toggler-icon {
  color: #2A6041;
  /* Asegura que el ícono sea visible en dispositivos móviles */
}
</style>
