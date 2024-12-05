class StorySection extends HTMLElement {
  constructor() {
    super(); 
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });

    const imgSrc = this.getAttribute('src') || 'default-profile.jpg'; 

    const styles = `
      :host {
      font-family: 'Roboto', sans-serif;
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

    .profile-container {
    display: flex;
    width: 200px;
    margin-right: 50px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
    transition: all 0.3s ease; /* Añade la transición suave */
}

.profile-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.profile-container:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}

    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = styles;

    const historyText = this.getAttribute('history') || 'Descripción no disponible';

    const Nombre = this.getAttribute('nombre') || 'No hay nombre!';

    const templateContent = `
      <div class="container">
        <div class="profile-container">
          <img src="${imgSrc}" alt="Profile Photo" />
        </div>
        <div class="text">
          <h2>${Nombre}</h2>
          <p>${historyText}</p>
        </div>
      </div>
    `;

    const templateElement = document.createElement('div');
    templateElement.innerHTML = templateContent;

    shadowRoot.appendChild(styleElement);
    shadowRoot.appendChild(templateElement);
  }
}

window.customElements.define('story-section', StorySection);
