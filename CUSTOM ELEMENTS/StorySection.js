class StorySection extends HTMLElement {
    constructor() {
        super(); // Llamada al constructor de HTMLElement
    }

    // Se ejecuta cuando el elemento se conecta al DOM
    connectedCallback() {
        // Crear el Shadow DOM
        const shadowRoot = this.attachShadow({ mode: 'open' });

        // Crear los estilos directamente desde JavaScript
        const styles = `
        :host {
          --white: #ffffff;
          --black: #000000;
          --shadow-color: rgba(0, 0, 0, 0.8);
        }
  
        body, html {
          margin: 0;
          padding: 0;
          height: 100%;
          background-color: var(--black);
        }
  
        .container {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          background-color: var(--black);
          color: var(--white);
          height: 100vh;
          padding: 40px;
          box-sizing: border-box;
          text-align: left;
          position: relative;
          z-index: 1;
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
  
        .container h3 {
          font-size: 4em;
          margin-top: 10px;
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
      `;

        // Crear el contenido del template
        const templateContent = `
        <div class="container">
          <div class="text">
            <h2>MI</h2>
            <h3>HISTORIA</h3>
            <p>
              DFDFDSSSDFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
              DFFFFFFFFFFFFFFFFFFFFFSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
              FSDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDFSFFSSF
              SFFFSFSFFSMFSMFSMFSFSKFSKFKFMMFSDFJNJNJDFGDFGJGJMJMMGKMK
              JJGMBGKMBKBMKMGFKGFMBGBFBFBFGBGFBGBGFBB
            </p>
            <a href="#" class="btn">INICIO</a>
          </div>
        </div>
      `;

        // Crear un elemento <style> e insertar los estilos
        const styleElement = document.createElement('style');
        styleElement.textContent = styles;

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
