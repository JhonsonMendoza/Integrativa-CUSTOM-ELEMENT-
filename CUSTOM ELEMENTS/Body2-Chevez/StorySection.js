class StorySection extends HTMLElement {
  constructor() {
      super(); // Llamada al constructor de HTMLElement
  }

  // Se ejecuta cuando el elemento se conecta al DOM
  connectedCallback() {
      // Crear el Shadow DOM
      const shadowRoot = this.attachShadow({ mode: 'open' });

<<<<<<< HEAD
=======
      const imgSrc = this.getAttribute('src') || 'default-profile.jpg'; 

>>>>>>> 17c498d7bd766d5a6307e167f745c6ceb96552ab
      // Crear los estilos directamente desde JavaScript
      const styles = `
      :host {
        --white: #ffffff;
        --black: #74caf0;
        --shadow-color: rgba(0, 0, 0, 0.8);
      }

      .container {
        display: flex;
        width: auto;
        justify-content: center;
        align-items: center;
        background-color: var(--black);
        color: var(--white);
        padding: 40px;
        box-sizing: border-box;
        text-align: left;
        z-index: 1;
        border-radius: 20px;
        margin: 10px;
      }

      
      .container .text {
          max-width: 70%; 
      }
      .container h2 {
        font-size: 3em;
        font-weight: 700;
        margin: 0;
        text-transform: uppercase;
      }

      .container p {
        font-size: 1.2em;
        line-height: 1.6;
        margin-top: 20px;
        margin-bottom: 30px;
      }

      .btn {
        margin-top: 20px;
        padding: 10px 20px;
        background-color: var(--white);
        color: var(--black);
        font-weight: bold;
        border: none;
        text-transform: uppercase;
        cursor: pointer;
        border-radius: 5px;
        text-decoration: none;
        display: inline-block;
        letter-spacing: 0;
        transition: all 0.3s ease;
        transform-origin: left center;
      }

      .btn:hover {
        letter-spacing: 3px;
        padding-right: 20px;
        transform: scale(1.1);
      }

      .text {
        max-width: 500px;
      }
<<<<<<< HEAD
=======

         .profile-container {
            display: flex;
            width: 200px;
            margin-right: 50px;
            height: 200px;
            border-radius: 50%;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f2f2f2;
          }
  
          .profile-container img {
            width: 100%;
            height: 100%;
            object-fit: cover; /* Asegura que la imagen cubra el contenedor */
          }
        
>>>>>>> 17c498d7bd766d5a6307e167f745c6ceb96552ab
    `;

      // Crear un elemento <style> e insertar los estilos
      const styleElement = document.createElement('style');
      styleElement.textContent = styles;

      // Obtener el valor del atributo 'history'
      const historyText = this.getAttribute('history') || 'Descripción no disponible';

      // Crear el contenido del template con la historia dinámica
      const templateContent = `
      <div class="container">
<<<<<<< HEAD
=======
      <div class="profile-container">
          <img src="${imgSrc}" alt="Profile Photo" />
        </div>
>>>>>>> 17c498d7bd766d5a6307e167f745c6ceb96552ab
        <div class="text">
          <h2>MIS FUERTES Y MIS DEBILIDADES</h2>
          <p>${historyText}</p>
          <a href="#" class="btn">INICIO</a>
        </div>
      </div>
    `;

      // Crear un elemento contenedor para el contenido del template
      const templateElement = document.createElement('div');
      templateElement.innerHTML = templateContent;

      // Adjuntar los estilos y el contenido al Shadow DOM
      shadowRoot.appendChild(styleElement);
      shadowRoot.appendChild(templateElement);
  }
}

// Registrar el componente en el navegador
window.customElements.define('story-section', StorySection);
