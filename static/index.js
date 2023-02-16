import { comidas } from '../data/comidas.js'

const contenedor = document.querySelector('.comida')

function crearElemento(objeto) {
  const miniContainer = document.createElement('div')
  miniContainer.className = 'miniContainer'
  const seccion1 = document.createElement('section')
  const nombre = document.createElement('label')
  nombre.innerHTML = objeto.name
  nombre.id = 'nombre'
  seccion1.appendChild(nombre)
  const seccion2 = document.createElement('section')
  const img = document.createElement('img')
  img.setAttribute('src', objeto.img)
  const seccion3 = document.createElement('section')
  seccion2.appendChild(img)
  const tiempo = document.createElement('label')
  const exp = document.createElement('label')
  tiempo.innerHTML = objeto.time
  exp.innerHTML = objeto.exp
  tiempo.id = 'tiempo'
  exp.id = 'exp'
  seccion3.append(tiempo, exp)
  const seccion4 = document.createElement('section')
  seccion1.className = 'seccion1'
  seccion2.className = 'seccion2'
  seccion3.className = 'seccion3'
  seccion4.className = 'seccion4'
  const precio = document.createElement('p')
  const rendimiento = document.createElement('p')
  seccion4.append(precio, rendimiento)

  let precioTotal = 0
  objeto.ingredientes.forEach(e => {
    let [cantidad, ingrediente] = e.split(' ')
    const inputPrice = document.querySelector(`.${ingrediente}`)
    if (inputPrice) {
      // console.log({cantidad,ingrediente})
      precioTotal += Number(inputPrice.value) * Number(cantidad)
    } else {
      precioTotal = 0
    }
  })
  precioTotal = precioTotal.toFixed(3)

  // console.log(precioTotal)
  precio.innerHTML = precioTotal + ' SFL'
  rendimiento.innerHTML =
    (precioTotal / Number(objeto.exp.split(' ')[0])).toFixed(6) + '  1xp '
  miniContainer.append(seccion1, seccion2, seccion3, seccion4)
  contenedor.appendChild(miniContainer)
}

comidas.forEach(e => crearElemento(e))
