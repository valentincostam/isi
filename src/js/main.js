let materiasISI = [
  // Primer año
  // - Anual
  { id: '2', nombre: 'Sistemas y Organizaciones',         ano: '1', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', integradora: true,  electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: [] } },
  // - Primer cuatrimestre
  { id: '3', nombre: 'Álgebra y Geometría Analítica',     ano: '1', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: [] } },
  { id: '4', nombre: 'Matemática Discreta',               ano: '1', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: [] } },
  { id: '5', nombre: 'Química',                           ano: '1', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: [] } },
  { id: '6', nombre: 'Sistemas de Representación',        ano: '1', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: [] } },
  // - Segundo cuatrimestre
  { id: '1', nombre: 'Análisis Matemático I',             ano: '1', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: [] } },
  { id: '7', nombre: 'Algoritmos y Estructuras de Datos', ano: '1', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: [] } },
  { id: '8', nombre: 'Arquitectura de Computadoras',      ano: '1', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: true,  paraCursar: { necesitaRegular: [], necesitaAprobada: [] } },

  // Segundo año
  // - Anual
  { id: '9',  nombre: 'Análisis Matemático II',                ano: '2', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['1', '3'],      necesitaAprobada: []} },
  { id: '11', nombre: 'Análisis de Sistemas',                  ano: '2', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', integradora: true,  electiva: false, paraCursar: { necesitaRegular: ['2', '7'],      necesitaAprobada: []} },
  { id: '13', nombre: 'Inglés I',                              ano: '2', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: [],              necesitaAprobada: []} },
  // - Primer cuatrimestre
  { id: '10', nombre: 'Física I',                              ano: '2', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: [],              necesitaAprobada: []} },
  { id: '12', nombre: 'Sintaxis y Semántica de los Lenguajes', ano: '2', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['4', '7'],      necesitaAprobada: []} },
  // - Segundo cuatrimestre
  { id: '14', nombre: 'Paradigmas de Programación',            ano: '2', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['4', '7'],      necesitaAprobada: []} },
  { id: '15', nombre: 'Sistemas Operativos',                   ano: '2', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['4', '7', '8'], necesitaAprobada: []} },

  // Tercer año
  // - Anual
  { id: '16', nombre: 'Inglés II',                       ano: '3', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: [],                 necesitaAprobada: ['13']} },
  { id: '17', nombre: 'Diseño de Sistemas',              ano: '3', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', integradora: true,  electiva: false, paraCursar: { necesitaRegular: ['11', '14'],       necesitaAprobada: ['2', '4', '7']} },
  { id: '21', nombre: 'Matemática Superior',             ano: '3', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['9'],              necesitaAprobada: ['1', '3']} },
  // - Primer cuatrimestre
  { id: '18', nombre: 'Física II',                       ano: '3', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['1', '10'],        necesitaAprobada: ['2', '4', '7']} },
  { id: '19', nombre: 'Economía',                        ano: '3', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['11'],             necesitaAprobada: ['2', '7']} },
  { id: '20', nombre: 'Gestión de Datos',                ano: '3', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['11', '12', '14'], necesitaAprobada: ['2', '4', '7']} },
  // - Segundo cuatrimestre
  { id: '22', nombre: 'Comunicaciones',                  ano: '3', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['8', '9', '18'],   necesitaAprobada: ['1', '3', '10']} },
  { id: '23', nombre: 'Probabilidades y Estadísticas',   ano: '3', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['1', '3'],         necesitaAprobada: []} },
  { id: '24', nombre: 'Ingeniería y Sociedad',           ano: '3', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: [],                 necesitaAprobada: []} },
  { id: '25', nombre: 'Metodología de la Investigación', ano: '3', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: true,  paraCursar: { necesitaRegular: [],                 necesitaAprobada: ['2']} },
  { id: '46', nombre: 'Taller de Programación',          ano: '3', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: true,  paraCursar: { necesitaRegular: ['12', '14'],       necesitaAprobada: ['7']} },

  // Cuarto año
  // - Anual
  { id: '26', nombre: 'Administración de Recursos', ano: '4', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', integradora: true,  electiva: false, paraCursar: { necesitaRegular: ['15', '17', '19'], necesitaAprobada: ['8', '11', '13', '14']} },
  { id: '27', nombre: 'Investigación Operativa',    ano: '4', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['21', '23'],       necesitaAprobada: ['9']} },
  { id: '47', nombre: 'Habilitación Profesional',   ano: '4', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['17', '22', '20'], necesitaAprobada: ['9', '11', '12', '14', '15', '16']} },
  // - Primer cuatrimestre
  { id: '28', nombre: 'Legislación',                ano: '4', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['11', '24'],       necesitaAprobada: ['2', '7']} },
  { id: '29', nombre: 'Simulación',                 ano: '4', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['21', '23'],       necesitaAprobada: ['9']} },
  { id: '30', nombre: 'Redes de Información',       ano: '4', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['15', '22'],       necesitaAprobada: ['4', '7', '8', '9', '18']} },
  // - Segundo cuatrimestre
  { id: '31', nombre: 'Ingeniería de Software',     ano: '4', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['17', '20', '23'], necesitaAprobada: ['11', '12', '14']} },
  { id: '32', nombre: 'Teoría de Control',          ano: '4', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['5', '21'],        necesitaAprobada: ['8', '18']} },
  { id: '33', nombre: 'Sistemas Distribuidos',      ano: '4', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: true,  paraCursar: { necesitaRegular: ['30'],             necesitaAprobada: []} },

  // Quinto año
  // - Anual
  { id: '34', nombre: 'Proyecto Final',                                                      ano: '5', cuatrimestre: '0', esAnual: true, estado: 'desaprobada', integradora: true, electiva: false,   paraCursar: { necesitaRegular: ['26', '28', '30', '31'], necesitaAprobada: ['6', '15', '16', '17', '19', '20', '22', '23', '24']} },
  // - Primer cuatrimestre
  { id: '35', nombre: 'Sistema de Gestión',                                                  ano: '5', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['26', '27', '29'], necesitaAprobada: ['15', '17', '19', '21', '23']} },
  { id: '37', nombre: 'Relaciones Humanas',                                                  ano: '5', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: true,  paraCursar: { necesitaRegular: ['26'], necesitaAprobada: []} },
  { id: '38', nombre: 'Tecnologías para la Explotación de Datos',                            ano: '5', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: true,  paraCursar: { necesitaRegular: ['26', '27', '31'], necesitaAprobada: ['29']} },
  { id: '41', nombre: 'Seguridad en Sistemas de Información',                                ano: '5', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: true,  paraCursar: { necesitaRegular: ['30'], necesitaAprobada: ['20']} },
  { id: '45', nombre: 'Consolidación de Tecnologías de la Información y las Comunicaciones', ano: '5', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', integradora: false, electiva: true,  paraCursar: { necesitaRegular: ['30'], necesitaAprobada: ['15']} },
  // - Segundo cuatrimestre
  { id: '36', nombre: 'Desarrollo de Aplicaciones Cliente-Servidor', ano: '5', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: true,  paraCursar: { necesitaRegular: ['30'], necesitaAprobada: ['20']} },
  { id: '39', nombre: 'Administración Gerencial',                    ano: '5', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['26', '27'], necesitaAprobada: ['15', '17', '19', '21', '23']} },
  { id: '40', nombre: 'Inteligencia Artificial',                     ano: '5', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: false, paraCursar: { necesitaRegular: ['27', '29'], necesitaAprobada: ['17', '21', '23']} },
  { id: '42', nombre: 'Gestión Avanzada de Datos',                   ano: '5', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: true, paraCursar: { necesitaRegular: ['30'], necesitaAprobada: ['20']} },
  { id: '43', nombre: 'Auditoría de Sistemas de Información',        ano: '5', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: true, paraCursar: { necesitaRegular: ['26', '31'], necesitaAprobada: []} },
  { id: '44', nombre: 'Emprendedorismo',                             ano: '5', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', integradora: false, electiva: true, paraCursar: { necesitaRegular: ['19'], necesitaAprobada: []} },
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
      // Vue.nextTick();
      // Vue.set(state.materias.find(materia => materia.id === payload.id), 'estado', payload.estado)
    },
    aprobarAno (state, payload) {
      for (var i = 0, len = payload.materias.length; i < len; i++) {
        payload.materias[i].estado = 'aprobada';
      }
    }
  }
});

const Materia = {
  props: ['id', 'nombre', 'integradora', 'electiva'],
  template: '\
    <div class="materia" :class="`materia ` + estado + (this.seCursa ? ` se-cursa` : ``)" @click="mostrarCorrelativas">\
      <span class="nombre">{{ nombre }}</span>\
      <em class="tipo" v-if="integradora">Integradora</em>\
      <em class="tipo" v-if="electiva">Electiva</em>\
      <div class="condicion">\
        <input\
          type="radio"\
          value="desaprobada"\
          v-model="estado"\
          :name="[`m-${ id }`]"\
          :id="[`m-${ id }-desaprobada`]"\
          :disabled="!seCursa">\
        <label :for="[`m-${ id }-desaprobada`]">D</label>\
        <input\
          type="radio"\
          value="regular"\
          v-model="estado"\
          :name="[`m-${ id }`]"\
          :id="[`m-${ id }-regular`]"\
          :disabled="!seCursa">\
        <label :for="[`m-${ id }-regular`]">R</label>\
        <input\
          type="radio"\
          value="aprobada"\
          v-model="estado"\
          :name="[`m-${ id }`]"\
          :id="[`m-${ id }-aprobada`]"\
          :disabled="!seCursa">\
        <label :for="[`m-${ id }-aprobada`]">A</label>\
      </div>\
    </div>',
  computed: {
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

        if (!sePuedeCursar) {
          store.commit('cambiarEstadoMateria', {
            id: materia.id,
            estado: 'desaprobada'
          });
        }

        return sePuedeCursar;
      }
    }
  },
  methods: {
    mostrarCorrelativas: function () {
      if (this.seCursa) return;

      const correlativas = this.$store.getters.getMateriaCorrelativas(this.id);
      console.log('%c' + this.nombre, 'background: steelblue; color: #fff; font-weight: bold;');
      console.log('%c+ Para cursarla necesita regulares:', 'font-weight: bold');
      correlativas.regulares.forEach(nombre_materia => console.log('  - ' + nombre_materia));
      console.log('%c+ Para cursarla necesita aprobadas:', 'font-weight: bold');
      correlativas.aprobadas.forEach(nombre_materia => console.log('  - ' + nombre_materia));

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
    aprobarAno: (anoAprobado) => {
      store.commit('aprobarAno', {
        materias: store.getters.getMateriasAno(anoAprobado)
      });
    }
  }
});