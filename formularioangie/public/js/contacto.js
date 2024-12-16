document.getElementById('contactForm').addEventListener('submit', function(event) {  
    event.preventDefault(); // Evita el envío normal del formulario  

    const formData = new FormData(this);  

    fetch('/contact', {  
        method: 'POST',  
        body: formData  
    })  
    .then(response => {  
        if (!response.ok) {  
            throw new Error('Network response was not ok');  
        }  
        return response.text();  
    })  
    .then(data => {  
        // Aquí puedes manejar la respuesta del servidor  
        alert(data); // Muestra el mensaje de éxito  
        document.getElementById('contactForm').reset(); // Opcional: reiniciar el formulario  
    })  
    .catch(error => {  
        alert('Hubo un problema al enviar los datos: ' + error.message);  
    });  
});  