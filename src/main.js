import vaccinesData from '../assets/covid.json'

/**
 * @param {{
 *   jurisdiccion_nombre: string
 *   vacuna_nombre: string
 *   primera_dosis_cantidad: string
 *   segunda_dosis_cantidad: string
 * }} vaccineData
 */
function vaccineToHtml(vaccineData) {
  const {
    vacuna_nombre,
    jurisdiccion_nombre,
    primera_dosis_cantidad,
    segunda_dosis_cantidad,
  } = vaccineData

  const div = document.createElement('div')
  const pNombre = document.createElement('p')
  pNombre.innerText = vacuna_nombre
  pNombre.classList.add('vacuna-nombre')

  const pJurisdiccion = document.createElement('p')
  pJurisdiccion.innerText = jurisdiccion_nombre
  pJurisdiccion.classList.add('vacuna-jurisdiccion')

  div.appendChild(pNombre)
  div.appendChild(pJurisdiccion)

  return div
}

const html = vaccinesData.map(vaccineToHtml)
const app = document.querySelector('#app')

html.forEach((h) => {
  app.appendChild(h)
})
