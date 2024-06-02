document.addEventListener('DOMContentLoaded', function() {
    function validarCampo(input, errorSpan, successSpan, errorMessage, successMessage) {
        if (input.value.trim() === '') {
            errorSpan.textContent = errorMessage;
            successSpan.textContent = '';
            return false;
        } else {
            errorSpan.textContent = '';
            successSpan.textContent = successMessage;
            return true;
        }
    }

    // Validar nombre
    document.getElementById('nombre').addEventListener('blur', function() {
        validarCampo(this, document.getElementById('nombreError'), document.getElementById('nombreSuccess'), 'Por favor, ingresa tu nombre.', 'Nombre correctamente ingresado.');
    });

    // Validar email
    document.getElementById('email').addEventListener('blur', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const valid = validarCampo(this, document.getElementById('emailError'), document.getElementById('emailSuccess'), 'Por favor, ingresa tu correo electrónico.', 'Correo electrónico correctamente ingresado.');
        if (this.value.trim() !== '' && !emailRegex.test(this.value)) {
            document.getElementById('emailError').textContent = 'Por favor, ingresa un correo electrónico válido.';
            document.getElementById('emailSuccess').textContent = '';
            return false;
        }
        return valid;
    });

    // Validar tipo de solicitud
    document.getElementById('tipoSolicitud').addEventListener('blur', function() {
        validarCampo(this, document.getElementById('tipoSolicitudError'), document.getElementById('tipoSolicitudSuccess'), 'Por favor, selecciona un tipo de solicitud.', 'Tipo de solicitud correctamente seleccionado.');
    });

    // Validar comentarios
    document.getElementById('comentarios').addEventListener('blur', function() {
        validarCampo(this, document.getElementById('comentariosError'), document.getElementById('comentariosSuccess'), 'Por favor, ingresa tus comentarios.', 'Comentarios correctamente ingresados.');
    });

    document.getElementById('miFormulario').addEventListener('submit', function(event) {
        // Prevenir el envío del formulario
        event.preventDefault();

        // Limpiar mensajes de error y éxito anteriores
        document.querySelectorAll('.error').forEach(el => el.textContent = '');
        document.querySelectorAll('.success').forEach(el => el.textContent = '');

        let valid = true;

        // Validar campos
        if (!validarCampo(document.getElementById('nombre'), document.getElementById('nombreError'), document.getElementById('nombreSuccess'), 'Por favor, ingresa tu nombre.', 'Nombre correctamente ingresado.')) {
            valid = false;
        }

        const emailInput = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!validarCampo(emailInput, document.getElementById('emailError'), document.getElementById('emailSuccess'), 'Por favor, ingresa tu correo electrónico.', 'Correo electrónico correctamente ingresado.') || (emailInput.value.trim() !== '' && !emailRegex.test(emailInput.value))) {
            document.getElementById('emailError').textContent = 'Por favor, ingresa un correo electrónico válido.';
            document.getElementById('emailSuccess').textContent = '';
            valid = false;
        }

        if (!validarCampo(document.getElementById('tipoSolicitud'), document.getElementById('tipoSolicitudError'), document.getElementById('tipoSolicitudSuccess'), 'Por favor, selecciona un tipo de solicitud.', 'Tipo de solicitud correctamente seleccionado.')) {
            valid = false;
        }

        if (!validarCampo(document.getElementById('comentarios'), document.getElementById('comentariosError'), document.getElementById('comentariosSuccess'), 'Por favor, ingresa tus comentarios.', 'Comentarios correctamente ingresados.')) {
            valid = false;
        }

        // Si todas las validaciones son correctas, se puede enviar el formulario
        if (valid) {
            // Mensaje de confirmación
            confirm('Éxito.');
            // Aquí podrías enviar el formulario usando Ajax si es necesario
            // this.submit(); // Descomenta esta línea para permitir el envío del formulario
        } else {
            // Mensaje de error si falta ingresar al menos un campo
            alert('Error.');
        }
    });

    document.getElementById('comentarios').addEventListener('input', function() {
        const comentarios = this.value.toLowerCase();
        const tipoSolicitudSelect = document.getElementById('tipoSolicitud');
        if (comentarios.includes('compra')) {
            tipoSolicitudSelect.value = 'compra';
        } else if (comentarios.includes('venta')) {
            tipoSolicitudSelect.value = 'venta';
        }
    });
});
