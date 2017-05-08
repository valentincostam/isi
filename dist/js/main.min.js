let materiasISI = [
  // Primer año
  // - Anual
  { id: '2', nombre: 'Sistemas y Organizaciones',         ano: '1', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', integradora: true,  electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: []}, paraAprobarNecesitaAprobada: [] },
  // - Primer cuatrimestre
  { id: '3', nombre: 'Álgebra y Geometría Analítica',     ano: '1', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: []}, paraAprobarNecesitaAprobada: [] },
  { id: '4', nombre: 'Matemática Discreta',               ano: '1', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: []}, paraAprobarNecesitaAprobada: [] },
  { id: '5', nombre: 'Química',                           ano: '1', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: []}, paraAprobarNecesitaAprobada: [] },
  { id: '6', nombre: 'Sistemas de Representación',        ano: '1', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: []}, paraAprobarNecesitaAprobada: [] },
  // - Segundo cuatrimestre
  { id: '1', nombre: 'Análisis Matemático I',             ano: '1', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: []}, paraAprobarNecesitaAprobada: [] },
  { id: '7', nombre: 'Algoritmos y Estructuras de Datos', ano: '1', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: []}, paraAprobarNecesitaAprobada: [] },
  { id: '8', nombre: 'Arquitectura de Computadoras',      ano: '1', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: true,  paraCursar: { necesitaRegular: [], necesitaAprobada: []}, paraAprobarNecesitaAprobada: [] },

  // Segundo año
  // - Anual
  { id: '9',  nombre: 'Análisis Matemático II',                ano: '2', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['1', '3'],      necesitaAprobada: []}, paraAprobarNecesitaAprobada: ['1', '3'] },
  { id: '11', nombre: 'Análisis de Sistemas',                  ano: '2', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', integradora: true,  electiva: false, paraCursar: { necesitaRegular: ['2', '7'],      necesitaAprobada: []}, paraAprobarNecesitaAprobada: ['2', '7'] },
  { id: '13', nombre: 'Inglés I',                              ano: '2', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: [],              necesitaAprobada: []}, paraAprobarNecesitaAprobada: [] },
  // - Primer cuatrimestre
  { id: '10', nombre: 'Física I',                              ano: '2', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: [],              necesitaAprobada: []}, paraAprobarNecesitaAprobada: [] },
  { id: '12', nombre: 'Sintaxis y Semántica de los Lenguajes', ano: '2', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['4', '7'],      necesitaAprobada: []}, paraAprobarNecesitaAprobada: ['4', '7'] },
  // - Segundo cuatrimestre
  { id: '14', nombre: 'Paradigmas de Programación',            ano: '2', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['4', '7'],      necesitaAprobada: []}, paraAprobarNecesitaAprobada: ['4', '7'] },
  { id: '15', nombre: 'Sistemas Operativos',                   ano: '2', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['4', '7', '8'], necesitaAprobada: []}, paraAprobarNecesitaAprobada: ['4', '7', '8'] },

  // Tercer año
  // - Anual
  { id: '16', nombre: 'Inglés II',                       ano: '3', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: [],                 necesitaAprobada: ['13']},           paraAprobarNecesitaAprobada: [] },
  { id: '17', nombre: 'Diseño de Sistemas',              ano: '3', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', integradora: true,  electiva: false, paraCursar: { necesitaRegular: ['11', '14'],       necesitaAprobada: ['2', '4', '7']},  paraAprobarNecesitaAprobada: ['11', '14'] },
  { id: '21', nombre: 'Matemática Superior',             ano: '3', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['9'],              necesitaAprobada: ['1', '3']},       paraAprobarNecesitaAprobada: ['9'] },
  // - Primer cuatrimestre
  { id: '18', nombre: 'Física II',                       ano: '3', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['1', '10'],        necesitaAprobada: ['2', '4', '7']},  paraAprobarNecesitaAprobada: ['1', '10'] },
  { id: '19', nombre: 'Economía',                        ano: '3', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['11'],             necesitaAprobada: ['2', '7']},       paraAprobarNecesitaAprobada: ['11'] },
  { id: '20', nombre: 'Gestión de Datos',                ano: '3', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['11', '12', '14'], necesitaAprobada: ['2', '4', '7']},  paraAprobarNecesitaAprobada: ['11', '12', '14'] },
  // - Segundo cuatrimestre
  { id: '22', nombre: 'Comunicaciones',                  ano: '3', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['8', '9', '18'],   necesitaAprobada: ['1', '3', '10']}, paraAprobarNecesitaAprobada: ['8', '9', '18'] },
  { id: '23', nombre: 'Probabilidades y Estadísticas',   ano: '3', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['1', '3'],         necesitaAprobada: []},               paraAprobarNecesitaAprobada: ['1', '3'] },
  { id: '24', nombre: 'Ingeniería y Sociedad',           ano: '3', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: [],                 necesitaAprobada: []},               paraAprobarNecesitaAprobada: [] },
  { id: '25', nombre: 'Metodología de la Investigación', ano: '3', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: true,  paraCursar: { necesitaRegular: [],                 necesitaAprobada: ['2']},            paraAprobarNecesitaAprobada: [] },
  { id: '46', nombre: 'Taller de Programación',          ano: '3', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: true,  paraCursar: { necesitaRegular: ['12', '14'],       necesitaAprobada: ['7']},            paraAprobarNecesitaAprobada: ['12', '14'] },

  // Cuarto año
  // - Anual
  { id: '26', nombre: 'Administración de Recursos', ano: '4', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', integradora: true,  electiva: false, paraCursar: { necesitaRegular: ['15', '17', '19'], necesitaAprobada: ['8', '11', '13', '14']},     paraAprobarNecesitaAprobada: ['15', '17', '19'] },
  { id: '27', nombre: 'Investigación Operativa',    ano: '4', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['21', '23'],       necesitaAprobada: ['9']},                       paraAprobarNecesitaAprobada: ['21', '23'] },
  // - Primer cuatrimestre
  { id: '28', nombre: 'Legislación',                ano: '4', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['11', '24'],       necesitaAprobada: ['2', '7']},                  paraAprobarNecesitaAprobada: ['11', '24'] },
  { id: '29', nombre: 'Simulación',                 ano: '4', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['21', '23'],       necesitaAprobada: ['9']},                       paraAprobarNecesitaAprobada: ['21', '23'] },
  { id: '30', nombre: 'Redes de Información',       ano: '4', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['15', '22'],       necesitaAprobada: ['4', '7', '8', '9', '18']},  paraAprobarNecesitaAprobada: ['15', '22'] },
  // - Segundo cuatrimestre
  { id: '31', nombre: 'Ingeniería de Software',     ano: '4', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['17', '20', '23'], necesitaAprobada: ['11', '12', '14']},          paraAprobarNecesitaAprobada: ['17', '20', '23'] },
  { id: '32', nombre: 'Teoría de Control',          ano: '4', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['5', '21'],        necesitaAprobada: ['8', '18']},                 paraAprobarNecesitaAprobada: ['5', '21'] },
  { id: '33', nombre: 'Sistemas Distribuidos',      ano: '4', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: true,  paraCursar: { necesitaRegular: ['30'],             necesitaAprobada: []},                          paraAprobarNecesitaAprobada: ['30'] },

  // Quinto año
  // - Anual
  // - Primer cuatrimestre
  // - Segundo cuatrimestre
];

const store = new Vuex.Store({
  state: {
    materias: materiasISI
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
    getMateriasAno: (state, getters) => (ano) => {
      return state.materias.filter(materia => materia.ano === ano)
    },
    getMateriasAnoAnuales: (state, getters) => (ano) => {
      return getters.getMateriasAno(ano).filter(materia => materia.esAnual)
    },
    getMateriasAnoCuatrimestre: (state, getters) => (ano, cuatrimestre) => {
      return getters.getMateriasAno(ano).filter(materia => materia.cuatrimestre === cuatrimestre)
    },
    getCantidadMaterias: state => {
      return state.materias.length;
    },
    getCantidadMateriasAprobadas: (state, getters) => {
      return getters.getMateriasAprobadas.length;
    },
    getMateriaCorrelativas: (state, getters) => (id) => {
      const materia = getters.getMateriaById(id);
      const regulares = materia.paraCursar.necesitaRegular.map(idMateria => getters.getMateriaById(idMateria).nombre);
      const aprobadas = materia.paraCursar.necesitaAprobada.map(idMateria => getters.getMateriaById(idMateria).nombre);
      return { regulares, aprobadas };
    },
  },
  mutations: {
    cambiarEstadoMateria (state, payload) {
      state.materias.find(materia => materia.id === payload.id).estado = payload.estado;
    },
    aprobarAno (state, payload) {

    }
  }
});

const Materia = {
  props: ['id', 'nombre', 'integradora', 'electiva'],
  template: '\
    <div class="materia" :class="[`${ clases }`]" @click="mostrarCorrelativas">\
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
        const necesitaRegulares = materia.paraCursar.necesitaRegular;
        const necesitaAprobadas = materia.paraCursar.necesitaAprobada;
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
        const necesitaAprobadas = materia.paraAprobarNecesitaAprobada;
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
    mostrarCorrelativas: function () {
      if (this.seCursa) return;

      const correlativas = this.$store.getters.getMateriaCorrelativas(this.id);
      console.log('Necesita regulares:');
      correlativas.regulares.forEach(nombre_materia => console.log('- ' + nombre_materia));
      console.log('Necesita aprobadas:');
      correlativas.aprobadas.forEach(nombre_materia => console.log('- ' + nombre_materia));

      // alert('Necesita regulares: \n- '+ correlativas.regulares + '\nNecesita aprobadas: \n- ' + correlativas.aprobadas)
    }
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
  },
  methods: {
    aprobarAno: (ano) => {

    }
  }
});