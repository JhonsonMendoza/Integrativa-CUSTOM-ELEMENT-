class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["name", "description", "email", "phone", "github", "linkedin"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const name = this.getAttribute("name") || "Tu Nombre";
    const description =
      this.getAttribute("description") || "Descripción por defecto";
    const email = this.getAttribute("email") || "tu@email.com";
    const phone = this.getAttribute("phone") || "+1234567890";
    const github = this.getAttribute("github") || "#";
    const linkedin = this.getAttribute("linkedin") || "#";

    this.shadowRoot.innerHTML = `
                    <style>
                        :host {
                            display: block;
                            font-family: 'Arial', sans-serif;
                            line-height: 1.6;
                        }
                        .footer {
                            background-color: #1a1a1a;
                            color: #f0f0f0;
                            padding: 3rem 0;
                        }
                        .footer-content {
                            max-width: 1200px;
                            margin: 0 auto;
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: space-between;
                            padding: 0 20px;
                        }
                        .footer-section {
                            flex: 1;
                            margin-bottom: 2rem;
                            min-width: 250px;
                        }
                        .footer-section h3 {
                            color: #ffffff;
                            font-size: 1.2rem;
                            margin-bottom: 1rem;
                        }
                        .footer-section p {
                            font-size: 0.9rem;
                            margin-bottom: 0.5rem;
                        }
                        .social-links {
                            display: flex;
                            gap: 15px;
                        }
                        .social-links a {
                            color: #f0f0f0;
                            font-size: 1.5rem;
                            text-decoration: none;
                            transition: color 0.3s ease;
                        }
                        .social-links a:hover {
                            color: #4a90e2;
                        }
                        .contact-info {
                            display: flex;
                            align-items: center;
                            margin-bottom: 0.5rem;
                        }
                        .contact-info i {
                            margin-right: 10px;
                            font-size: 1.2rem;
                        }
                        .copyright {
                            text-align: center;
                            padding-top: 2rem;
                            margin-top: 2rem;
                            border-top: 1px solid #333;
                            font-size: 0.9rem;
                        }
                        @media (max-width: 768px) {
                            .footer-content {
                                flex-direction: column;
                            }
                            .footer-section {
                                margin-bottom: 2rem;
                            }
                        }
                    </style>
                    <footer class="footer">
                        <div class="footer-content">
                            <div class="footer-section">
                                <h3>Sobre Mí</h3>
                                <p>${description}</p>
                            </div>
                            <div class="footer-section">
                                <h3>Contacto</h3>
                                <p class="contact-info">
                                    <i class="fas fa-envelope"></i>
                                    <a href="mailto:${email}">${email}</a>
                                </p>
                                <p class="contact-info">
                                    <i class="fas fa-phone"></i>
                                    ${phone}
                                </p>
                            </div>
                            <div class="footer-section">
                                <h3>Sígueme</h3>
                                <div class="social-links">
                                    <a href="${github}" target="_blank" rel="noopener noreferrer">
                                        <i class="fab fa-github"></i>
                                    </a>
                                    <a href="${linkedin}" target="_blank" rel="noopener noreferrer">
                                        <i class="fab fa-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="copyright">
                            <p>&copy; <span id="current-year"></span> ${name}. Todos los derechos reservados.</p>
                        </div>
                    </footer>
                `;

    // Actualizar el año actual en el copyright
    const currentYearSpan = this.shadowRoot.getElementById("current-year");
    currentYearSpan.textContent = new Date().getFullYear();
  }
}

customElements.define("footer-component", FooterComponent);
