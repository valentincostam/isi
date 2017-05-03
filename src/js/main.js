const store = new Vuex.Store({
  state: {
    materias: [
      // Primer año
      { id: '1', nombre: 'Análisis Matemático I',             ano: '1', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, cursar: { regular: [], aprobada: []}, aprobar: [] },
      { id: '2', nombre: 'Sistemas y Organizaciones',         ano: '1', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', integradora: true,  electiva: false, cursar: { regular: [], aprobada: []}, aprobar: [] },
      { id: '3', nombre: 'Álgebra y Geometría Analítica',     ano: '1', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, cursar: { regular: [], aprobada: []}, aprobar: [] },
      { id: '4', nombre: 'Matemática Discreta',               ano: '1', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, cursar: { regular: [], aprobada: []}, aprobar: [] },
      { id: '5', nombre: 'Química',                           ano: '1', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, cursar: { regular: [], aprobada: []}, aprobar: [] },
      { id: '6', nombre: 'Sistemas de Representación',        ano: '1', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, cursar: { regular: [], aprobada: []}, aprobar: [] },
      { id: '7', nombre: 'Algoritmos y Estructuras de Datos', ano: '1', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, cursar: { regular: [], aprobada: []}, aprobar: [] },
      { id: '8', nombre: 'Arquitectura de Computadoras',      ano: '1', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: true,  cursar: { regular: [], aprobada: []}, aprobar: [] },
      
      // Segundo año
      { id: '9',  nombre: 'Análisis Matemático II',                ano: '2', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', integradora: false, electiva: false, cursar: { regular: ['1', '3'], aprobada: []}, aprobar: ['1', '3'] },
      { id: '10', nombre: 'Física I',                              ano: '2', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, cursar: { regular: [], aprobada: []}, aprobar: [] },
      { id: '11', nombre: 'Análisis de Sistemas',                  ano: '2', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', integradora: true,  electiva: false, cursar: { regular: ['2', '7'], aprobada: []}, aprobar: ['2', '7'] },
      { id: '12', nombre: 'Sintaxis y Semántica de los Lenguajes', ano: '2', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, cursar: { regular: ['4', '7'], aprobada: []}, aprobar: ['4', '7'] },
      { id: '13', nombre: 'Inglés I',                              ano: '2', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', integradora: false, electiva: false, cursar: { regular: [], aprobada: []}, aprobar: [] },
      { id: '14', nombre: 'Paradigmas de Programación',            ano: '2', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, cursar: { regular: ['4', '7'], aprobada: []}, aprobar: ['4', '7'] },
      { id: '15', nombre: 'Sistemas Operativos',                   ano: '2', cuatrimestre: '2', esAnual: false,  estado: 'desaprobada', integradora: false, electiva: false, cursar: { regular: ['4', '7', '8'], aprobada: []}, aprobar: ['4', '7', '8'] },
      
      // Tercer año
      //   Anual
      { id: '16', nombre: 'Inglés II',           ano: '3', cuatrimestre: '0', esAnual: true, estado: 'desaprobada', integradora: false, electiva: false, cursar: { regular: [], aprobada: ['13']}, aprobar: [] },
      { id: '17', nombre: 'Diseño de Sistemas',  ano: '3', cuatrimestre: '0', esAnual: true, estado: 'desaprobada', integradora: true,  electiva: false, cursar: { regular: ['11', '14'], aprobada: ['2', '4', '7']}, aprobar: ['11', '14'] },
      { id: '21', nombre: 'Matemática Superior', ano: '3', cuatrimestre: '0', esAnual: true, estado: 'desaprobada', integradora: false, electiva: false, cursar: { regular: ['9'], aprobada: ['1', '3']}, aprobar: ['9'] },
      //   Primer cuatrimestre
      { id: '18', nombre: 'Física II', ano: '3', cuatrimestre: '1', esAnual: false,  estado: 'desaprobada', integradora: false, electiva: false, cursar: { regular: ['1', '10'], aprobada: ['2', '4', '7']}, aprobar: ['1', '10'] },
      { id: '19', nombre: 'Economía', ano: '3', cuatrimestre: '1', esAnual: false,  estado: 'desaprobada', integradora: false, electiva: false, cursar: { regular: ['11'], aprobada: ['2', '7']}, aprobar: ['11'] },
      { id: '20', nombre: 'Gestión de Datos', ano: '3', cuatrimestre: '1', esAnual: false,  estado: 'desaprobada', integradora: false, electiva: false, cursar: { regular: ['11', '12', '14'], aprobada: ['2', '4', '7']}, aprobar: ['11', '12', '14'] },
    
      // Cuarto año



      // Quinto año
    ]
  },
  getters: {
    getMaterias: state => {
      return state.materias;
    },
    getMateriaById: (state, getters) => (id) => {
      return state.materias.find(materia => materia.id === id)
    },
    getMateriasAprobadas: state => {
      return state.materias.filter(materia => materia.estado === 'aprobada');
    },
    getMateriasRegulares: state => {
      return state.materias.filter(materia => materia.estado === 'regular');
    },
    getMateriasAnoAnuales: (state, getters) => (ano) => {
      return state.materias.filter(materia => materia.ano === ano && materia.esAnual)
    },
    getMateriasAnoCuatrimestre: (state, getters) => (ano, cuatrimestre) => {
      return state.materias.filter(materia => materia.ano === ano && materia.cuatrimestre === cuatrimestre)
    },
    getCantidadMaterias: state => {
      return state.materias.length;
    },
    getCantidadMateriasAprobadas: (state, getters) => {
      return getters.getMateriasAprobadas.length;
    }
  },
  mutations: {
    cambiarEstadoMateria (state, payload) {
      state.materias.find(materia => materia.id === payload.id).estado = payload.estado;
    }
  }
});

const Materia = {
  props: ['id', 'nombre', 'integradora', 'electiva'],
  template: '\
    <div class="materia" :class="[`${ clases }`]">\
      <span class="nombre">{{ nombre }}</span>\
      <em class="tipo" v-if="integradora">Integradora</em>\
      <em class="tipo" v-if="electiva">Electiva</em>\
      <div class="condicion">\
        <input type="radio" :name="[`m-${ id }`]" :id="[`m-${ id }-desaprobada`]" v-model="estado" :disabled="!seCursa" value="desaprobada">\
        <label :for="[`m-${ id }-desaprobada`]">D</label>\
        <input type="radio" :name="[`m-${ id }`]" :id="[`m-${ id }-regular`]" v-model="estado" :disabled="!seCursa" value="regular">\
        <label :for="[`m-${ id }-regular`]">R</label>\
        <input type="radio" :name="[`m-${ id }`]" :id="[`m-${ id }-aprobada`]" v-model="estado" :disabled="!seCursa || !seAprueba" value="aprobada">\
        <label :for="[`m-${ id }-aprobada`]">A</label>\
      </div>\
    </div>',
  computed: {
    clases: {
      get: function () {
        return this.estado + (this.seCursa ? ' se-cursa' : '')
      }
    },
    estado: {
      get: function () {
        return this.$store.getters.getMateriaById(this.id).estado;
      },
      set: function (valor) {
        store.commit('cambiarEstadoMateria', {
          id: this.id,
          estado: valor
        });
      }
    },
    seCursa: {
      get: function () {            
        const materia = this.$store.getters.getMateriaById(this.id);
        const necesitaRegulares = materia.cursar.regular;
        const necesitaAprobadas = materia.cursar.aprobada;
        const estanRegulares = this.$store.getters.getMateriasRegulares.map(m => m.id);
        const estanAprobadas = this.$store.getters.getMateriasAprobadas.map(m => m.id);
        const regularesYAprobadas = estanRegulares.concat(estanAprobadas);

        function arrayContainsArray (superset, subset) {
          return subset.every(function (value) {
            return (superset.indexOf(value) >= 0);
          });
        }

        const sePuedeCursar = arrayContainsArray(regularesYAprobadas, necesitaRegulares)
            && arrayContainsArray(estanAprobadas, necesitaAprobadas);

        if (!sePuedeCursar)
          store.commit('cambiarEstadoMateria', {
            id: materia.id,
            estado: 'desaprobada'
          });

        return sePuedeCursar;
      }
    },
    seAprueba: {
      get: function () {            
        const materia = this.$store.getters.getMateriaById(this.id);
        const necesitaAprobadas = materia.aprobar;
        const estanAprobadas = this.$store.getters.getMateriasAprobadas.map(m => m.id);

        function arrayContainsArray (superset, subset) {
          return subset.every(function (value) {
            return (superset.indexOf(value) >= 0);
          });
        }

        const sePuedeAprobar = arrayContainsArray(estanAprobadas, necesitaAprobadas);

        if (!sePuedeAprobar && this.estado != 'regular')
          store.commit('cambiarEstadoMateria', {
            id: materia.id,
            estado: 'desaprobada'
          });

        return sePuedeAprobar;
      }
    }
  },
  methods: {

  }
};

const app = new Vue({
  el: '#app',
  store,
  components: { Materia },
  computed: {
    progreso: function () {
      return (this.$store.getters.getCantidadMateriasAprobadas / this.$store.getters.getCantidadMaterias * 100).toFixed(2);
    }
  }
});