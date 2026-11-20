$(document).ready(function() {

    function mostrarAlerta() {
        $("#alertaMensaje").css({
            "display": "block",
            "background-color": "#f8d7da"
        }).html("Dimensiones invalidas");
    }

    let semillas = document.getElementById("semillas");
    function cargarSemillas(x, y) {
        semillas.innerHTML = '';
        semillas.style.gridTemplateColumns = `repeat(${x}, 1fr)`;

        for (let i = 0; i < x; i++) {
            for (let j = 0; j < y; j++) {
                const cell = document.createElement('div');
                const img = document.createElement("img");
                img.setAttribute("src", "semilla_girasol.jpg");
                img.setAttribute("width", 100);
                img.setAttribute("height", 50);
                cell.appendChild(img);
                semillas.appendChild(cell);
            }
        }
    }
    cargarSemillas(2, 2);

    let nido = document.getElementById("nido");
    function cargarNido(x) {
        nido.innerHTML = '';
        nido.style.gridTemplateColumns = `repeat(${x}, 1fr)`;

        for (let i = 0; i < x; i++) {
            for (let j = 0; j < x; j++) {
                const cell = document.createElement('div');
                const text = document.createElement("p");
                text.innerHTML = "0";
                cell.appendChild(text);

                let pos = i.toString() + j.toString();
                cell.setAttribute("id", pos);
                cell.setAttribute("i", i);
                cell.setAttribute("j", j);

                cell.classList.add('grid-cell');
                nido.appendChild(cell);
            }
        }
    }
    cargarNido(5);

    $("#btn-reiniciar").on("click", function() {
        cargarNido(5);
    });

    $("#btn-pausar").on("click", function() {
        cargarNido(5)
    });

    function aumentarHambre() {

    }

    setInterval(() => {
        aumentarHambre();
    }, 8000);
})