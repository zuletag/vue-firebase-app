import { createRouter, createWebHistory } from 'vue-router'
import EjercicioUno from '../views/EjercicioUno.vue' // Actualizado
import EjercicioDos from '../views/EjercicioDos.vue' // Actualizado
import EjercicioTres from '../views/EjercicioTres.vue' // Actualizado

const routes = [
  {
    path: '/',
    name: 'ejercicioUno',
    component: EjercicioUno,
  },
  {
    path: '/ejercicio-dos',
    name: 'ejercicioDos',
    component: EjercicioDos,
  },
  {
    path: '/ejercicio-tres',
    name: 'ejercicioTres',
    component: EjercicioTres,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
