function openModal(element) {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
    // Obtiene el número del atributo personalizado data-modal-number
    const modalNumber = element.getAttribute("data-modal-number");
    // Utiliza el número para determinar qué contenido mostrar
    if (modalNumber === "1") {
        document.getElementById("modalTitle").textContent = "Belfegor";
        document.getElementById("modalContent").textContent = "Belfegor es un demonio en la demonolog\xeda cristiana y la mitolog\xeda cananea que representa el pecado de la pereza. Se le considera uno de los Siete Pr\xedncipes del Infierno y se le representa como un seductor demonio que intenta tentar a las personas hacia la indolencia y el placer f\xe1cil, llev\xe1ndolas a renunciar al trabajo y al esfuerzo en busca de comodidad y ociosidad. Su nombre se deriva de la deidad cananea Baal-Peor, asociada con el culto a los \xeddolos y la lujuria.";
        document.getElementById("modalImage").src = "https://github.com/Grimmeon-Studios/Lemegeton_WebPage/blob/main/NamelssSite/src/imgs/Belphegor%202.jpg?raw=true";
    } else if (modalNumber === "2") {
        document.getElementById("modalTitle").textContent = "Behamut";
        document.getElementById("modalContent").textContent = "En la mitolog\xeda isl\xe1mica, Bahamut es un pez gigante que sostiene a la Tierra sobre sus espaldas y est\xe1 suspendido en el oc\xe9ano del espacio. No es un demonio en el sentido tradicional, sino una criatura m\xedtica que desempe\xf1a un papel en la cosmolog\xeda isl\xe1mica.";
        document.getElementById("modalImage").src = "https://github.com/Grimmeon-Studios/Lemegeton_WebPage/blob/main/NamelssSite/src/imgs/bahamut%202.jpg?raw=true";
    } else if (modalNumber === "3") {
        document.getElementById("modalTitle").textContent = "Belial";
        document.getElementById("modalContent").textContent = " En la demonolog\xeda, Belial es considerado uno de los Siete Pr\xedncipes del Infierno. Se le asocia con la maldad y la rebeld\xeda, y a menudo se le representa como un demonio seductor que incita a la inmoralidad y la mentira.";
        document.getElementById("modalImage").src = "https://github.com/Grimmeon-Studios/Lemegeton_WebPage/blob/main/NamelssSite/src/imgs/Belial%202.5.jpg?raw=true";
    } else if (modalNumber === "4") {
        document.getElementById("modalTitle").textContent = "Imp";
        document.getElementById("modalContent").textContent = "Los imps son peque\xf1os demonios en la mitolog\xeda y el folclore, a menudo representados como seres traviesos y juguetones. No son necesariamente mal\xe9volos, pero pueden causar problemas o desorden en la vida de las personas.";
        document.getElementById("modalImage").src = "https://github.com/Grimmeon-Studios/Lemegeton_WebPage/blob/main/NamelssSite/src/imgs/imp%202.png?raw=true";
    } else if (modalNumber === "5") {
        document.getElementById("modalTitle").textContent = "\xcdncubo";
        document.getElementById("modalContent").textContent = "Un \xedncubo es un demonio masculino que, seg\xfan la leyenda, se aparece a las mujeres en sus sue\xf1os y busca tener relaciones sexuales con ellas. A menudo se le representa como seductor y peligroso. Su contraparte femenina se llama s\xfacubo.";
        // Agrega condiciones para otros números de modal si es necesario
        document.getElementById("modalImage").src = "https://github.com/Grimmeon-Studios/Lemegeton_WebPage/blob/main/NamelssSite/src/imgs/Incubo%202.jpg?raw=true";
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
    if (event.target == modal) modal.style.display = "none";
};

//# sourceMappingURL=DemonsList.ca063936.js.map
