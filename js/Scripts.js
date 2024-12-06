
// Validación del formulario de contacto
function validarForm() {
    let nom = document.getElementById("nom").value.trim();
    let mail = document.getElementById("mail").value.trim();
    let cel = document.getElementById("cel").value.trim();
    let dir = document.getElementById("dir").value.trim();
    
    if (!nom || !mail || !cel || !dir) {
        alert("Por favor, completa todos los campos.");
        return false;
    }
    alert("Formulario enviado correctamente.");
    return true;
}


// Validación adicional para correos electrónicos
function validarCorreo(mail) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(mail);
}

// Interactividad con la lista de pasatiempos
document.addEventListener("DOMContentLoaded", function() {
    const hobbies = document.querySelectorAll("ul li");
    hobbies.forEach((item) => {
        item.addEventListener("mouseover", function() {
            this.style.color = "aqua";
        });
        item.addEventListener("mouseout", function() {
            this.style.color = "";
        });
    });
});
