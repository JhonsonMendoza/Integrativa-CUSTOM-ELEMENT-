class ResumeProfile extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });

        const nombre = this.getAttribute('nombre') || 'Luis García Benítez';
        const foto = this.getAttribute('foto') || 'no hay nada';
        const perfil = this.getAttribute('perfil') || 'Administrador de sistemas y experto en la configuración de infraestructuras de hardware y software. Dinámico y con experiencia en entornos empresariales exigentes.';
        const experiencia1 = this.getAttribute('experiencia1') || 'Administrador de sistemas - ABC Corp (2017-2020)';
        const experiencia2 = this.getAttribute('experiencia2') || 'Analista Técnico - XYZ Solutions (2015-2017)';
        const contacto = this.getAttribute('contacto') || 'luis.garcia@example.com';
        const telefono = this.getAttribute('telefono') || '+34 612 345 678';

        const styles = `
        body {
            background-color: #f4f7fa;
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }

        .resume-container {
            max-width: 800px;
            margin: 40px auto;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
            background-color: #ffffff;
            transition: transform 0.3s;
            padding: 20px;
            background: linear-gradient(rgba(173, 216, 230, 0.2), rgba(173, 216, 230, 0.2));
        }

        .resume-header {
            background-color: #4a90e2;
            color: #ffffff;
            text-align: center;
            padding: 24px;
            border-bottom: 4px solid #3a7bd5;
        }

        .resume-header h1 {
            font-size: 28px;
            margin: 0;
            font-weight: 600;
        }

        .resume-header p {
            font-size: 16px;
            color: #e0e0e0;
            margin-top: 8px;
        }

        .resume-content {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 24px;
            padding: 24px;
        }

        .profile-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .profile-section img {
            width: 100%;
            border-radius: 50%;
            max-width: 160px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin-bottom: 16px;
        }

        .profile-section h2 {
            font-size: 20px;
            font-weight: 600;
            margin: 8px 0;
            color: #333;
        }

        .profile-section p {
            font-size: 14px;
            color: #666;
            line-height: 1.5;
        }

        .experience-section {
            padding: 20px;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            background-color: #f9f9f9;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .experience-section h2 {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 12px;
            color: #4a90e2;
        }

        .experience-section ul {
            list-style: none;
            padding: 0;
        }

        .experience-section ul li {
            margin-bottom: 12px;
        }

        .experience-section ul li h3 {
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 4px;
            color: #333;
        }

        .experience-section ul li p {
            font-size: 14px;
            color: #666;
            opacity: 0.8;
        }

        .btn {
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #4a90e2;
            color: #ffffff;
            font-weight: bold;
            font-size: 0.9em;
            border: none;
            text-transform: uppercase;
            cursor: pointer;
            border-radius: 5px;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .btn:hover {
            background-color: #3a7bd5;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .resume-footer {
            text-align: center;
            padding: 16px;
            background-color: #f9fafb;
            font-size: 0.9rem;
            border-top: 1px solid #d1d5db;
            color: #666;
        }

        ul {
            list-style: none;
            padding: 0;
        }

        ul li {
            margin-bottom: 8px;
        }
        `;
        const styleElement = document.createElement('style');
        styleElement.textContent = styles;

        const templateContent = `
        <div class="resume-container">
          <header class="resume-header">
            <h1>${nombre}</h1>
          </header>
          <div class="resume-content">
            <section class="profile-section">
              <img src="${foto}" alt="Foto de perfil">
              <h2>PERFIL PROFESIONAL</h2>
              <p>${perfil}</p>
            </section>
            <section class="experience-section">
              <h2>EXPERIENCIA LABORAL</h2>
              <ul>
                <li><strong>${experiencia1}</strong></li>
                <li><strong>${experiencia2}</strong></li>
              </ul>
              
            </section>
            <section class="contact-section">
              <h2>CONTACTO</h2>
              <p>Email: ${contacto}</p>
              <p>Teléfono: ${telefono}</p>
            </section>
          </div>
          <footer class="resume-footer">
            <p> 2024 ${nombre}</p>
          </footer>
        </div>
        <a href="index.html" class="btn">Regresar al inicio</a>
      `;

        const templateElement = document.createElement('div');
        templateElement.innerHTML = templateContent;

        shadowRoot.appendChild(styleElement);
        shadowRoot.appendChild(templateElement);
    }
}

window.customElements.define('resume-profile', ResumeProfile);