var input = document.querySelector("#cantidad")
var incrementBtn = document.querySelector("#btnIncrement")
var decrementBtn = document.querySelector("#btnDecrement")
var precio = document.querySelector("#precio")
var total = document.querySelector("#total")
var deleteBtn = document.querySelector("#eliminar")
var cantProduct = document.querySelector("#cant-product")

incrementBtn.addEventListener("click", function () {
    let auxCant = parseInt(input.value)
    if (auxCant < 10) {
        auxCant++
        input.value = auxCant
    }
    if (auxCant == 1) {
        var valor_producto = parseInt(precio.innerHTML)
        total.innerHTML = valor_producto
        cantProduct.innerHTML = "1 Producto"

    } else {
        var total_nuevo = auxCant * parseInt(precio.innerHTML)
        total.innerHTML = total_nuevo
        cantProduct.innerHTML = `${auxCant} Productos`
    }
})


decrementBtn.addEventListener("click", function () {
    let auxCant = parseInt(input.value)
    if (auxCant == 0) {
        return;
    }
    if (auxCant <= 10) {
        auxCant--
        input.value = auxCant
        var precio_producto = parseInt(precio.innerHTML)
        var total_actual = parseInt(total.innerHTML)
        total.innerHTML = total_actual - precio_producto 
        cantProduct.innerHTML = `${auxCant} Productos`
    }
})

deleteBtn.addEventListener("click", function () {
    window.location.reload()
})
