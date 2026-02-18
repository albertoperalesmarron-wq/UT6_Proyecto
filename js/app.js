/**
 * APP.JS - Lógica del Wizard
 * * OBJETIVO: Gestionar la navegación entre pasos y guardar los datos.
 */

// 1. ESTADO DE LA APLICACIÓN
// Aquí guardaremos los datos que vaya escribiendo el usuario.
const matricula = {
    nombre: '',
    dni: '',
    ciclo: ''
};

// 2. REFERENCIAS AL DOM
// TODO: Selecciona los botones de "Siguiente" y "Atrás" de cada paso
const btnNext1 = document.getElementById('btn-next-1');
// ... completa el resto

const pasos = document.querySelectorAll('.step-content');


// 3. FUNCIONES DE VALIDACIÓN
// TODO: Crea una función que valide el DNI usando Expresiones Regulares
function validarDNI(dni) {
    // Escribe tu RegEx aquí...
    return false; // Cambiar
}


// 4. GESTIÓN DE EVENTOS
// Evento para pasar del Paso 1 al Paso 2
btnNext1.addEventListener('click', () => {
    
    // a) Recoger valores de los inputs
    const nombreInput = document.getElementById('nombre').value;
    
    // b) Validar (Si hay errores, mostramos alerta y paramos)
    if (nombreInput === "") {
        alert("¡El nombre es obligatorio!");
        return; 
    }

    // c) Guardar en el estado
    matricula.nombre = nombreInput;

    // d) Avanzar de paso
    cambiarPaso(0, 1); // De paso 0 a paso 1
});


/**
 * Función de utilidad para gestionar las clases CSS
 * Oculta el paso actual y muestra el siguiente.
 */
function cambiarPaso(origen, destino) {
    // TODO: Elimina la clase 'active' y añade 'hidden' al paso origen
    // TODO: Elimina la clase 'hidden' y añade 'active' al paso destino
    
    console.log("Cambiando al paso...", destino);
}

// TODO: Programa el resto de botones (Atrás y Enviar)
