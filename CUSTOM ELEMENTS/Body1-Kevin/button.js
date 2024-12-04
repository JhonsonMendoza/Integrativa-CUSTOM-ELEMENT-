class GitButton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      // Obtiene el atributo para el enlace a GitHub
      const gitLink = this.getAttribute('link') || 'https://github.com/';
  
      // Estilos y estructura del botón
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: inline-block;
            font-family: 'Roboto', sans-serif;
          }
          .git-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background-color: #333;
            color: #fff;
            padding: 12px 24px;
            font-size: 1rem;
            font-weight: bold;
            text-transform: uppercase;
            text-decoration: none;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .git-button:hover {
            background-color: #555;
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
          }
          .git-button:active {
            transform: translateY(0);
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
          }
          .git-button svg {
            margin-right: 8px;
            width: 20px;
            height: 20px;
            fill: white;
          }
        </style>
        <a href="${gitLink}" class="git-button" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38v-1.4c-2.23.48-2.7-1.08-2.7-1.08-.36-.92-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.81.06 1.24.83 1.24.83.72 1.23 1.89.88 2.35.68.07-.52.28-.88.5-1.08-1.78-.2-3.64-.89-3.64-3.97 0-.88.31-1.6.82-2.17-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.83a7.59 7.59 0 014.01 0c1.53-1.05 2.2-.83 2.2-.83.44 1.1.16 1.92.08 2.12.51.57.82 1.29.82 2.17 0 3.1-1.87 3.77-3.65 3.97.28.24.54.73.54 1.48v2.2c0 .21.15.45.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
          Mis Trabajos en GitHub
        </a>
      `;
    }
  }
  
  customElements.define('git-button', GitButton);
  