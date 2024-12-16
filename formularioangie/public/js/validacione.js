document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    var errorMessage = document.getElementById('errorMessage');

    // Validar que todos los campos estén completos
    if (firstName === "" || lastName === "" || email === "" || message === "") {
        errorMessage.style.display = "block"; // Mostrar mensaje de error
    } else {
        errorMessage.style.display = "none"; // Ocultar mensaje de error
        
        // Aquí podrías enviar el formulario a un servidor o procesarlo de alguna forma
        alert('Formulario enviado correctamente!');
        
        // Limpiar el formulario
        document.getElementById('contactForm').reset();
    }
}); 