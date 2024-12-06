import { mount } from '@vue/test-utils' // Usamos 'mount' en lugar de 'shallowMount'
import { createStore } from 'vuex'
import EjercicioUno from '@/views/EjercicioUno.vue' // Asegúrate de que la ruta esté correcta
import ContadorApp from '@/components/ContadorApp.vue' // Asegúrate de que la ruta esté correcta

// Crear un store de Vuex para las pruebas
const store = createStore({
  state() {
    return {
      contador: 0,
    }
  },
  mutations: {
    incrementar(state) {
      state.contador++
    },
    decrementar(state) {
      state.contador--
    },
  },
})

describe('EjercicioUno.vue', () => {
  it('debe mostrar el valor inicial del contador', () => {
    const wrapper = mount(EjercicioUno, { global: { plugins: [store] } })
    // Verificamos que el valor del contador sea 0
    const contadorText = wrapper.findComponent(ContadorApp).find('.card-title').text() // Solo obtenemos el texto de la tarjeta
    expect(contadorText).toContain('Contador: 0')
  })

  it('debe incrementar el contador', async () => {
    const wrapper = mount(EjercicioUno, { global: { plugins: [store] } })
    // Simula el clic en el botón de incrementar
    await wrapper.findComponent(ContadorApp).find('button.btn-success').trigger('click')
    // Verificamos que el contador haya aumentado a 1
    const contadorText = wrapper.findComponent(ContadorApp).find('.card-title').text() // Solo obtenemos el texto de la tarjeta
    expect(contadorText).toContain('Contador: 1')
  })
})
