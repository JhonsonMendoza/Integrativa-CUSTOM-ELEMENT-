class ContactSection extends HTMLElement {
    constructor() {
      super();
  
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      const facebookLink = this.getAttribute('facebook-link') || '#';
      const whatsappLink = this.getAttribute('whatsapp-link') || '#';
      const githubLink = this.getAttribute('github-link') || '#';
  
      this.shadowRoot.innerHTML = `
      <style>
        :host {
          font-family: 'Roboto', sans-serif;
        }
  
        .floating-contact {
          margin-right: 10px;
          position: fixed;
          top: 80%;
          right: 0;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 1000;
        }
  
        .floating-contact a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60px;
          height: 60px;
          background-color: white;
          border: 2px solid #e0e0e0;
          border-radius: 50%;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-decoration: none;
        }
  
        .floating-contact a:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
  
        .floating-contact img {
          max-width: 50%;
          max-height: 50%;
        }
      </style>
      <div class="floating-contact">
        <a href="${facebookLink}" target="_blank" >
          <img src="assets/icon/facebook.svg" alt="Facebook" />
        </a>
        <a href="${whatsappLink}" target="_blank" >
          <img src="assets/icon/whatsapp.svg" alt="WhatsApp" />
        </a>
             <a href="${githubLink}" target="_blank" >
          <img src="assets/icon/githu.svg" alt="GitHub" />
        </a>
      </div>
      `;
    }
  }
  
  customElements.define('contact-section', ContactSection);
  