function openModal(element) {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";

    // Obtiene el número del atributo personalizado data-modal-number
    const modalNumber = element.getAttribute("data-modal-number");

    // Utiliza el número para determinar qué contenido mostrar
    if (modalNumber === "1") {
        document.getElementById("modalTitle").textContent = "El Vestíbulo de los Condenados";
        document.getElementById("modalContent").textContent = "El 0vestíbulo de los condenados es un concepto que proviene de la literatura y la religión, y no tiene una base sólida en las enseñanzas religiosas principales, como la Biblia. Se refiere a un espacio o lugar imaginario donde se cree que las almas de los pecadores o los no redimidos esperan su destino después de la muerte. En la literatura y la cultura popular, se ha utilizado en varias obras para describir un lugar donde las almas están en una especie de limbo o estado intermedio antes de ser juzgadas o enviadas al Infierno.";
      
        document.getElementById("modalImage").src = "https://github.com/Grimmeon-Studios/Lemegeton_WebPage/blob/main/NamelssSite/src/imgs/elVestibulo.jpg?raw=true";
    } else if (modalNumber === "2") {
        document.getElementById("modalTitle").textContent = "Infierno de las Llamas";
        document.getElementById("modalContent").textContent = "La conjunción de los tres primeros círculos del infierno: limbo, lujuria y gula. Es la primera de las tres partes del infierno, siendo la más comúnmente conocida. Su color principal es el rojo vivo, está lleno de naranjas y toques amarillos, contrastados por grises oscuros para los detalles. El suelo parece hecho de carne viva y roca, las paredes son roca pura. No hay nada humano aquí, parece un entramado de cuevas ardientes.";
      
        document.getElementById("modalImage").src = "https://github.com/Grimmeon-Studios/Lemegeton_WebPage/blob/main/NamelssSite/src/imgs/llamas.jpg?raw=true";
    } else if (modalNumber === "3") {
        document.getElementById("modalTitle").textContent = "Infierno de la escarcha";
        document.getElementById("modalContent").textContent = "La conjunción de los tres últimos círculos del infierno: violencia, fraude y traición, está ampliamente basado en este último. Cuando El Diablo fue expulsado del cielo y tocó la tierra, dejó a su paso una grieta física y etérica enorme, esos son los círculos del infierno. Esta última parte es el hogar de El Diablo, cuyas alas son tan fuertes y poderosas que un mínimo movimiento destruye todo a su paso y congela lo que se atraviese, por eso toda esta última parte está sumergida en un hielo eterno e imposible de derretir. Los colores son azules muy cercanos al blanco, las paredes y el suelo están hechas de hielo eterno, se ven aún las grietas de cómo fue creado por el batir de las enormes alas, por lo que se ven las marcas de la tormenta, creando pinchos y surcos. ";
      
        document.getElementById("modalImage").src = "https://github.com/Grimmeon-Studios/Lemegeton_WebPage/blob/main/NamelssSite/src/imgs/escarcha.jpg?raw=true";  
    } else if (modalNumber === "4") {
        document.getElementById("modalTitle").textContent = "Infierno de la soledad";
        document.getElementById("modalContent").textContent = "La conjunción de los tres círculos del infierno que siguen: codicia, ira y herejía. Es la segunda parte del infierno, y está basado en el concepto de la soledad eterna, la quietud, la nada. Su paleta de color se basa en el negro para casi todo, con unas paredes de mármol pulido. El suelo es de mármol derruido y quebrantado por el tiempo, aunque aún se ven un poco las líneas de los baldosines. Este mármol es de un color amarillo pálido, casi blanco, y contrasta con algunas lámparas de fuego morado que hay en las paredes.";

        document.getElementById("modalImage").src = "https://github.com/Grimmeon-Studios/Lemegeton_WebPage/blob/main/NamelssSite/src/imgs/FrostBitting.jpg?raw=true";
    } else if (modalNumber === "5") {
        document.getElementById("modalTitle").textContent = "Infierno de la soberbia";
        document.getElementById("modalContent").textContent = "La conjunción de los tres círculos del infierno que siguen: codicia, ira y herejía. Es la segunda parte del infierno, y está basado en el concepto de la soledad eterna, la quietud, la nada. Su paleta de color se basa en el negro para casi todo, con unas paredes de mármol pulido. El suelo es de mármol derruido y quebrantado por el tiempo, aunque aún se ven un poco las líneas de los baldosines. Este mármol es de un color amarillo pálido, casi blanco, y contrasta con algunas lámparas de fuego morado que hay en las paredes. ";
        // Agrega condiciones para otros números de modal si es necesario
        document.getElementById("modalImage").src = "https://github.com/Grimmeon-Studios/Lemegeton_WebPage/blob/main/NamelssSite/src/imgs/kingambit.png?raw=true";
    }
}

// Cierra el modal
function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Cierra el modal si se hace clic fuera de él (opcional)
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
