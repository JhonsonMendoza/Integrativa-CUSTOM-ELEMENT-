// Definir el custom element 'custom-button'
class CustomButton extends HTMLElement {
    constructor() {
        super();

        // Crear el botón
        const button = document.createElement('button');
        button.textContent = this.getAttribute('label') || 'Ver Curriculum';

        // Añadir un evento para redirigir al hacer clic
        button.addEventListener('click', () => {
            window.location.href = 'index2.html';
        });

        // Crear y aplicar el Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Estilos dentro del Shadow DOM
        const style = document.createElement('style');
        style.textContent = `
            button {
            margin: 10px;
                background-color: #4CAF50; /* Color de fondo verde */
                color: white; /* Texto blanco */
                font-size: 16px; /* Tamaño de la fuente */
                padding: 15px 32px; /* Espaciado dentro del botón */
                text-align: center; /* Centrar el texto */
                text-decoration: none; /* Sin subrayado */
                display: inline-block; /* Mostrar en línea */
                border: none; /* Sin borde */
                border-radius: 5px; /* Bordes redondeados */
                cursor: pointer; /* Cursor de mano */
                transition: background-color 0.3s ease; /* Animación al pasar el ratón */
            }

            button:hover {
                background-color: #45a049; /* Color más oscuro al pasar el ratón */
            }

            button:active {
                background-color: #388e3c; /* Color aún más oscuro cuando se hace clic */
            }
        `;

        // Adjuntar el estilo y el botón al Shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(button);
    }
}

// Registrar el Custom Element
customElements.define('custom-button', CustomButton);