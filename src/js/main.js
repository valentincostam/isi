let materiasISI = [
  // Primer año
  // - Anual
  { id: '2', nombre: 'Sistemas y Organizaciones',         horas: '3',  ano: '1', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', analista: false, integradora: true,  electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: [] } },
  // - Primer cuatrimestre
  { id: '3', nombre: 'Álgebra y Geometría Analítica',     horas: '10', ano: '1', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: [] } },
  { id: '4', nombre: 'Matemática Discreta',               horas: '6',  ano: '1', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: [] } },
  { id: '5', nombre: 'Química',                           horas: '6',  ano: '1', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: [] } },
  { id: '6', nombre: 'Sistemas de Representación',        horas: '6',  ano: '1', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: [] } },
  // - Segundo cuatrimestre
  { id: '1', nombre: 'Análisis Matemático I',             horas: '10', ano: '1', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: [] } },
  { id: '7', nombre: 'Algoritmos y Estructuras de Datos', horas: '10', ano: '1', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: [] } },
  { id: '8', nombre: 'Arquitectura de Computadoras',      horas: '8',  ano: '1', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: [] } },

  // Segundo año
  // - Anual
  { id: '9',  nombre: 'Análisis Matemático II',                horas: '5', ano: '2', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['1', '3'],      necesitaAprobada: []} },
  { id: '11', nombre: 'Análisis de Sistemas',                  horas: '6', ano: '2', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', analista: false, integradora: true,  electiva: false, paraCursar: { necesitaRegular: ['2', '7'],      necesitaAprobada: []} },
  { id: '13', nombre: 'Inglés I',                              horas: '4', ano: '2', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: [],              necesitaAprobada: []} },
  // - Primer cuatrimestre
  { id: '10', nombre: 'Física I',                              horas: '10', ano: '2', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: [],              necesitaAprobada: []} },
  { id: '12', nombre: 'Sintaxis y Semántica de los Lenguajes', horas: '8', ano: '2', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['4', '7'],      necesitaAprobada: []} },
  // - Segundo cuatrimestre
  { id: '14', nombre: 'Paradigmas de Programación',            horas: '8', ano: '2', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['4', '7'],      necesitaAprobada: []} },
  { id: '15', nombre: 'Sistemas Operativos',                   horas: '8', ano: '2', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['4', '7', '8'], necesitaAprobada: []} },

  // Tercer año
  // - Anual
  { id: '16', nombre: 'Inglés II',                       horas: '4', ano: '3', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: [],                 necesitaAprobada: ['13']} },
  { id: '17', nombre: 'Diseño de Sistemas',              horas: '6', ano: '3', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', analista: false, integradora: true,  electiva: false, paraCursar: { necesitaRegular: ['11', '14'],       necesitaAprobada: ['2', '4', '7']} },
  { id: '21', nombre: 'Matemática Superior',             horas: '4', ano: '3', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['9'],              necesitaAprobada: ['1', '3']} },
  // - Primer cuatrimestre
  { id: '18', nombre: 'Física II',                       horas: '10', ano: '3', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['1', '10'],        necesitaAprobada: ['2', '4', '7']} },
  { id: '19', nombre: 'Economía',                        horas: '6', ano: '3', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['11'],             necesitaAprobada: ['2', '7']} },
  { id: '20', nombre: 'Gestión de Datos',                horas: '8', ano: '3', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['11', '12', '14'], necesitaAprobada: ['2', '4', '7']} },
  // - Segundo cuatrimestre
  { id: '22', nombre: 'Comunicaciones',                  horas: '8', ano: '3', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['8', '9', '18'],   necesitaAprobada: ['1', '3', '10']} },
  { id: '23', nombre: 'Probabilidades y Estadísticas',   horas: '6', ano: '3', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['1', '3'],         necesitaAprobada: []} },
  { id: '24', nombre: 'Ingeniería y Sociedad',           horas: '4', ano: '3', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: [],                 necesitaAprobada: []} },
  { id: '25', nombre: 'Metodología de la Investigación', horas: '4', ano: '3', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: true,  paraCursar: { necesitaRegular: [],                 necesitaAprobada: ['2']} },
  { id: '46', nombre: 'Taller de Programación',          horas: '8', ano: '3', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: true, integradora: false, electiva: true,  paraCursar: { necesitaRegular: ['12', '14'],       necesitaAprobada: ['7']} },

  // Cuarto año
  // - Anual
  { id: '26', nombre: 'Administración de Recursos', horas: '6', ano: '4', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', analista: false, integradora: true,  electiva: false, paraCursar: { necesitaRegular: ['15', '17', '19'], necesitaAprobada: ['8', '11', '13', '14']} },
  { id: '27', nombre: 'Investigación Operativa',    horas: '5', ano: '4', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['21', '23'],       necesitaAprobada: ['9']} },
  // { id: '47', nombre: 'Habilitación Profesional',   horas: '4', ano: '4', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', analista: true, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['17', '22', '20'], necesitaAprobada: ['9', '11', '12', '14', '15', '16']} },
  // - Primer cuatrimestre
  { id: '28', nombre: 'Legislación',                horas: '4', ano: '4', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['11', '24'],       necesitaAprobada: ['2', '7']} },
  { id: '29', nombre: 'Simulación',                 horas: '8', ano: '4', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['21', '23'],       necesitaAprobada: ['9']} },
  { id: '30', nombre: 'Redes de Información',       horas: '8', ano: '4', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['15', '22'],       necesitaAprobada: ['4', '7', '8', '9', '18']} },
  // - Segundo cuatrimestre
  { id: '31', nombre: 'Ingeniería de Software',     horas: '6', ano: '4', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['17', '20', '23'], necesitaAprobada: ['11', '12', '14']} },
  { id: '32', nombre: 'Teoría de Control',          horas: '6', ano: '4', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['5', '21'],        necesitaAprobada: ['8', '18']} },
  { id: '33', nombre: 'Sistemas Distribuidos',      horas: '8', ano: '4', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: true,  paraCursar: { necesitaRegular: ['30'],             necesitaAprobada: []} },

  // Quinto año
  // - Anual
  { id: '34', nombre: 'Proyecto Final',                                                      horas: '6', ano: '5', cuatrimestre: '0', esAnual: true, estado: 'desaprobada', analista: false, integradora: true, electiva: false,   paraCursar: { necesitaRegular: ['26', '28', '30', '31'], necesitaAprobada: ['6', '15', '16', '17', '19', '20', '22', '23', '24']} },
  // - Primer cuatrimestre
  { id: '35', nombre: 'Sistema de Gestión',                                                  horas: '8', ano: '5', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['26', '27', '29'], necesitaAprobada: ['15', '17', '19', '21', '23']} },
  { id: '37', nombre: 'Relaciones Humanas',                                                  horas: '5', ano: '5', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: true,  paraCursar: { necesitaRegular: ['26'], necesitaAprobada: []} },
  { id: '38', nombre: 'Tecnologías para la Explotación de Datos',                            horas: '6', ano: '5', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: true,  paraCursar: { necesitaRegular: ['26', '27', '31'], necesitaAprobada: ['29']} },
  { id: '41', nombre: 'Seguridad en Sistemas de Información',                                horas: '5', ano: '5', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: true,  paraCursar: { necesitaRegular: ['30'], necesitaAprobada: ['20']} },
  { id: '45', nombre: 'Consolidación de Tecnologías de la Información y las Comunicaciones', horas: '6', ano: '5', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: true,  paraCursar: { necesitaRegular: ['30'], necesitaAprobada: ['15']} },
  { id: '99', nombre: 'Práctica Supervisada',                                                horas: '7', ano: '5', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false,  paraCursar: { necesitaRegular: ['26', '28', '30', '31'], necesitaAprobada: ['6', '15', '16', '17', '19', '20', '22', '23', '24']} },
  // - Segundo cuatrimestre
  { id: '36', nombre: 'Desarrollo de Aplicaciones Cliente-Servidor', horas: '5', ano: '5', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: true,  paraCursar: { necesitaRegular: ['30'], necesitaAprobada: ['20']} },
  { id: '39', nombre: 'Administración Gerencial',                    horas: '6', ano: '5', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['26', '27'], necesitaAprobada: ['15', '17', '19', '21', '23']} },
  { id: '40', nombre: 'Inteligencia Artificial',                     horas: '6', ano: '5', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['27', '29'], necesitaAprobada: ['17', '21', '23']} },
  { id: '42', nombre: 'Gestión Avanzada de Datos',                   horas: '6', ano: '5', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: true, paraCursar: { necesitaRegular: ['30'], necesitaAprobada: ['20']} },
  { id: '43', nombre: 'Auditoría de Sistemas de Información',        horas: '6', ano: '5', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: true, paraCursar: { necesitaRegular: ['26', '31'], necesitaAprobada: []} },
  { id: '44', nombre: 'Emprendedorismo',                             horas: '4', ano: '5', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: true, paraCursar: { necesitaRegular: ['19'], necesitaAprobada: []} },
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
    getMateriasCursando: state => {
      return state.materias.filter(materia => materia.estado === 'cursando');
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
      const regulares = materia.paraCursar.necesitaRegular.map(idMateria => getters.getMateriaById(idMateria));
      const aprobadas = materia.paraCursar.necesitaAprobada.map(idMateria => getters.getMateriaById(idMateria));
      return { regulares, aprobadas };
    },
    getMateriasElectivas: state => {
      return state.materias.filter(materia => materia.electiva);
    },
    getMateriasElectivasAprobadas: (state, getters) => {
      return getters.getMateriasElectivas.filter(materia => materia.estado === 'aprobada');
    },
    getMateriasObligatorias: state => {
      return state.materias.filter(materia => !materia.electiva);
    },
    getMateriasObligatoriasAprobadas: (state, getters) => {
      return getters.getMateriasObligatorias.filter(materia => materia.estado === 'aprobada');
    }
  },
  mutations: {
    cambiarEstadoMateria (state, payload) {
      state.materias.find(materia => materia.id === payload.id).estado = payload.estado;
    },
    aprobarAno (state, payload) {
      for (var i = 0, len = payload.materias.length; i < len; i++) {
        payload.materias[i].estado = 'aprobada';
      }
    },
    desaprobarAno (state, payload) {
      for (var i = 0, len = payload.materias.length; i < len; i++) {
        payload.materias[i].estado = 'desaprobada';
      }
    }
  }
});

const Materia = {
  props: ['id', 'nombre', 'horas', 'integradora', 'electiva', 'analista'],
  template: '\
    <div :class="`materia materia--` + estado + (this.cursable ? ` materia--cursable` : ``)" @click="mostrarDependencias">\
      <div class="materia__detalles">\
        <span class="materia__descripcion">\
          {{ nombre }}\
          <em class="materia__tipo" v-if="integradora">Integradora</em>\
          <em class="materia__tipo" v-if="electiva">Electiva</em>\
        </span>\
        <span class="materia__horas">{{ horas }} hs.</span>\
      </div>\
      <div class="materia__condicion">\
        <input\
          class="materia__radio"\
          type="radio"\
          value="desaprobada"\
          v-model="estado"\
          :name="[`m-${ id }`]"\
          :id="[`m-${ id }-desaprobada`]"\
          :disabled="!cursable">\
        <label\
          class="materia__boton materia__boton--desaprobada"\
          :for="[`m-${ id }-desaprobada`]">D</label>\
        <input\
          class="materia__radio"\
          type="radio"\
          value="regular"\
          v-model="estado"\
          :name="[`m-${ id }`]"\
          :id="[`m-${ id }-regular`]"\
          :disabled="!cursable">\
        <label\
          class="materia__boton materia__boton--regular"\
          :for="[`m-${ id }-regular`]">R</label>\
        <input\
          class="materia__radio"\
          type="radio"\
          value="aprobada"\
          v-model="estado"\
          :name="[`m-${ id }`]"\
          :id="[`m-${ id }-aprobada`]"\
          :disabled="!cursable">\
        <label\
          class="materia__boton materia__boton--aprobada"\
          :for="[`m-${ id }-aprobada`]">A</label>\
        <input\
          class="materia__radio"\
          type="radio"\
          value="cursando"\
          v-model="estado"\
          :name="[`m-${ id }`]"\
          :id="[`m-${ id }-cursando`]"\
          :disabled="!cursable">\
        <label\
          class="materia__boton materia__boton--cursando"\
          :for="[`m-${ id }-cursando`]">C</label>\
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
    cursable: {
      get: function () {            
        const materia = this.$store.getters.getMateriaById(this.id);
        const necesitaRegulares = materia.paraCursar.necesitaRegular;
        const necesitaAprobadas = materia.paraCursar.necesitaAprobada;
        const estanRegulares = this.$store.getters.getMateriasRegulares.map(m => m.id);
        const estanAprobadas = this.$store.getters.getMateriasAprobadas.map(m => m.id);
        const regularesYAprobadas = estanRegulares.concat(estanAprobadas);

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
    mostrarDependencias: function () {
      if (this.cursable) return;
      
      const correlativas = this.$store.getters.getMateriaCorrelativas(this.id);
      const elementoDependencias = document.querySelectorAll('.dependencias')[0];

      let textoRegulares = '';
      let textoAprobadas = '';

      if (correlativas.regulares.length > 0)
        correlativas.regulares.forEach(m => textoRegulares += `<li class="dependencias__item dependencias__item--${ m.estado }">${ m.nombre }</li>`)
      else
        textoRegulares = '<li class="dependencias__item--off">Ninguna.</li>';

      if (correlativas.aprobadas.length > 0)
        correlativas.aprobadas.forEach(m => textoAprobadas += `<li class="dependencias__item dependencias__item--${ m.estado }">${ m.nombre }</li>`)
      else
        textoAprobadas = '<li class="dependencias__item--off">Ninguna.</li>';

      elementoDependencias.innerHTML = `
        <h4 class="dependencias__titulo">Para cursar <span>${ this.nombre }</span> necesitás:</h5>
        <h5 class="dependencias__subtitulo dependencias__subtitulo--regular">Regular:</h5>
        <ul class="dependencias__lista">${ textoRegulares }</ul>
        <h5 class="dependencias__subtitulo dependencias__subtitulo--aprobadas">Aprobadas:</h5>
        <ul class="dependencias__lista">${ textoAprobadas }</ul>
        <p class="dependencias__pista">CLICK O TAP PARA CERRAR</p>`;

      elementoDependencias.classList.add('dependencias--visible');
    }
  }
};

const app = new Vue({
  el: '#app',
  store,
  components: { Materia },
  computed: {
    horasElectivasAprobadas: function () {
      const horasElectivas = this.$store.getters.getMateriasElectivasAprobadas.map(m => m.horas);
      return horasElectivas.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    },
    horasSemanalesCursando: function () {
      const horasSemanales = this.$store.getters.getMateriasCursando.map(m => m.horas);
      return horasSemanales.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    },
    cantidadMaterias: function () {
      return this.$store.getters.getCantidadMaterias;
    },
    cantidadMateriasAprobadas: function () {
      return this.$store.getters.getCantidadMateriasAprobadas;
    },
    progreso: function () {
      const horasObligatorias = this.$store.getters.getMateriasObligatorias.map(m => m.horas).reduce((a, b) => parseInt(a) + parseInt(b), 0);
      const horasObligatoriasAprobadas = this.$store.getters.getMateriasObligatoriasAprobadas.map(m => m.horas).reduce((a, b) => parseInt(a) + parseInt(b), 0);
      const horasElectivas = 44;
      const horasElectivasAprobadas = (this.horasElectivasAprobadas > horasElectivas ? 44 : this.horasElectivasAprobadas);
      const horasTotalesMinimas = horasObligatorias + horasElectivas;
      return ((horasObligatoriasAprobadas + horasElectivasAprobadas) / horasTotalesMinimas * 100).toFixed(2);
    },
    primerAnoAprobado: function () {
      return this.$store.getters.getMateriasAno('1').every(m => m.estado === 'aprobada');
    },
    segundoAnoAprobado: function () {
      return this.$store.getters.getMateriasAno('2').every(m => m.estado === 'aprobada');
    },
    tercerAnoAprobado: function () {
      return this.$store.getters.getMateriasAno('3').every(m => m.estado === 'aprobada');
    },
    cuartoAnoAprobado: function () {
      return this.$store.getters.getMateriasAno('4').every(m => m.estado === 'aprobada');
    },
    quintoAnoAprobado: function () {
      return this.$store.getters.getMateriasAno('5').every(m => m.estado === 'aprobada');
    }
  },
  methods: {
    aprobarAno: (ano) => {
      const materiasAno = store.getters.getMateriasAno(ano);
      const anoEstaAprobado = materiasAno.every(m => m.estado === 'aprobada');

      if (anoEstaAprobado)
        store.commit('desaprobarAno', { materias: materiasAno });        
      else
        store.commit('aprobarAno', { materias: materiasAno });
    },
    ocultarDependencias: () => {
      document.querySelectorAll('.dependencias')[0].classList.remove('dependencias--visible');
    }
  }
});


function arrayContainsArray (superset, subset) {
  return subset.every(function (value) {
    return (superset.indexOf(value) >= 0);
  });
}

const elementoInformacion = document.querySelectorAll('.informacion')[0];
const elementoInformacionCuerpo = elementoInformacion.querySelectorAll('.informacion__cuerpo')[0]
const elementoInformacionTitulo = elementoInformacion.querySelectorAll('.informacion__titulo span')[0]

elementoInformacion.addEventListener('click', () => {
  elementoInformacionCuerpo.classList.toggle('informacion__cuerpo--activo');

  elementoInformacionTitulo.textContent = elementoInformacionTitulo.textContent == '(+)' ? '(-)' : '(+)';
});


document.addEventListener("DOMContentLoaded", function(){
  document.body.lastChild.previousSibling.remove()
});