class SkillSection extends HTMLElement {
  constructor() {
    super();

    // Crea un Shadow DOM
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // Obtén el atributo de habilidades (si existe)
    const skills = this.getAttribute('skills')
      ? JSON.parse(this.getAttribute('skills'))
      : [];

    // Renderiza las habilidades dinámicamente
    this.shadowRoot.innerHTML = `
      <style>
        .skill {
          padding: 3rem 0;
          width: 100%;
        }
        .skill .container .content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 64px;
          width: 100%;
        }
        .skill .container .content .skills {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 50%;
        }
        .skill .container .content .skills .skill-box {
          padding: 4px;
          border: 2px solid #fff;
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100px;
          filter: grayscale(100);
          transition: all 0.2s linear;
        }
        .skill .container .content .skills .skill-box:hover {
          filter: grayscale(0);
          transform: scale(1.02);
          transition: all 0.2s linear;
        }
        .skill .container .content .skills .skill-box img {
          width: 100%;
          height: 75%;
        }
      </style>
      <section class="skill">
        <div class="container">
          <div class="content">
            <h1 class="title">Skill</h1>
            <div class="skills">
              ${skills
                .map(
                  (skill) => `
                <div class="skill-box">
                  <img src="assets/icon/${skill}.svg" alt="${skill}" />
                </div>
              `
                )
                .join('')}
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

// Define el elemento personalizado
customElements.define('skill-section', SkillSection);
