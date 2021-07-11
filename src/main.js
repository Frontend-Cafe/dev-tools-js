import vaccinesData from '../assets/covid.json'

/**
 * @typedef {{
 *   jurisdiccion_codigo_indec: string
 *   jurisdiccion_nombre: string
 *   vacuna_nombre: string
 *   primera_dosis_cantidad: string
 *   segunda_dosis_cantidad: string
 * }} VaccineData
 */

/** @var {VaccineData}[] vaccinesData */

/**
 * @param {VaccineData} vaccineData
 */
function vaccineToHtml(vaccineData) {
  const {
    jurisdiccion_codigo_indec,
    jurisdiccion_nombre,
    vacuna_nombre,
    primera_dosis_cantidad,
    segunda_dosis_cantidad,
  } = vaccineData

  const p = document.createElement('p')
  p.textContent = `
    cod_juridiccion: ${jurisdiccion_codigo_indec}
    jurisdiccion: ${jurisdiccion_nombre}
    vacuna: ${vacuna_nombre}
    primera_dosis: ${primera_dosis_cantidad}
    segunda_dosis: ${segunda_dosis_cantidad}
  `

  return p
}

const html = vaccinesData.map(vaccineToHtml)
const app = document.querySelector('#app')

html.forEach((h) => {
  app.appendChild(h)
})
