# 🧙‍♂️ Proyecto UT6: Wizard de Matriculación IES Trassierra

¡Bienvenido al reto final de la Unidad 6! Tu misión es dar vida a este formulario de matriculación.
Actualmente es estático (no hace nada). Debes usar JavaScript para gestionar los eventos, validar los datos y simular el envío.

## 🎯 Objetivos
1. Crear una **Single Page Application (SPA)** simulada: no recargar la página al cambiar de paso.
2. Validar los datos (DNI, CP, etc.) antes de permitir avanzar.
3. Guardar la información en un Objeto JS (`estado`).

## 🚀 Instrucciones (Paso a paso)

### Hito 1: Navegación
- [ ] Abre `js/app.js`.
- [ ] Programa los botones "Siguiente" y "Atrás" para que quiten la clase `.hidden` del paso actual y se la pongan al siguiente.

### Hito 2: Validación
- [ ] Crea las funciones de validación usando RegEx (puedes reutilizar tu librería de la Actividad 2).
- [ ] Impide avanzar de paso si los `inputs` están vacíos o son inválidos.

### Hito 3: Resumen y Envío
- [ ] En el paso 3, inyecta en el HTML los datos recogidos en los pasos anteriores.
- [ ] Muestra un mensaje de éxito al finalizar.

## 🛠️ Herramientas
- Ya tienes el archivo `css/style.css` vinculado. No hace falta que toques el diseño, pero fíjate en la clase `.hidden` y `.active`.
- Busca los comentarios `// TODO:` en el archivo JavaScript.
