class SkillSection extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const skills = this.getAttribute('skills')
      ? JSON.parse(this.getAttribute('skills'))
      : [];

    this.shadowRoot.innerHTML = `
    <style>
        :host {
          font-family: 'Roboto', sans-serif;
        }

        .skill {
          padding: 3rem 1rem;
          width: auto;
          background: linear-gradient(135deg, #f0f4f8, #d9eaf5);
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .skill .container {
          max-width: auto;
          margin: 0 auto;
        }

        .skill .content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        .skill .content .title {
          font-size: 2rem;
          font-weight: bold;
          color: #007BFF;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
        }

        .skill .content .skills {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 20px;
          width: 100%;
          justify-items: center;
        }

        .skill .content .skills .skill-box {
          background-color: white;
          padding: 16px;
          border: 2px solid #e0e0e0;
          border-radius: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 120px;
          width: 120px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .skill .content .skills .skill-box:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .skill .content .skills .skill-box img {
          max-width: 60%;
          max-height: 60%;
          object-fit: contain;
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }

        .skill .content .skills .skill-box:hover img {
          filter: grayscale(0);
        }
          
      </style>
      <section class="skill">
        <div class="container">
          <div class="content">
            <h1 class="title">Habilidades</h1>
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

customElements.define('skill-section', SkillSection);
