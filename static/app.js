function cambiarMensaje() {
    document.getElementById("mensaje").innerHTML = "¡Gracias por aceptar ser mi San Valentín! 💘";
}

// Crear corazones flotantes dinámicamente
function crearCorazones() {
    for (let i = 0; i < 20; i++) {
        let corazon = document.createElement("div");
        corazon.className = "corazon";
        corazon.innerHTML = "❤️";
        corazon.style.left = Math.random() * window.innerWidth + "px";
        corazon.style.top = Math.random() * window.innerHeight + "px";
        corazon.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 5000);
    }
}

setInterval(crearCorazones, 1000);
