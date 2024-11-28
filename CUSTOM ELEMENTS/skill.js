class SkillSection extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
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
              <h1 data-aos="zoom-in-down" data-aos-delay="300" class="title">Skill</h1>
              <div class="skills" data-aos-delay="500">
                <div data-aos="zoom-in-down" class="skill-box">
                  <img src="assets/icon/html5.svg" alt="html" />
                </div>
                <div data-aos="zoom-in-down" class="skill-box">
                  <img src="assets/icon/css3.svg" alt="css" />
                </div>
                <div data-aos="zoom-in-down" class="skill-box">
                  <img src="assets/icon/php.svg" alt="php" />
                </div>
                <div data-aos="zoom-in-down" class="skill-box">
                  <img src="assets/icon/javascript.svg" alt="javascript" />
                </div>
                <div data-aos="zoom-in-down" class="skill-box">
                  <img src="assets/icon/typescript.svg" alt="typescript" />
                </div>
                <div data-aos="zoom-in-down" class="skill-box">
                  <img src="assets/icon/mysql.svg" alt="mysql" />
                </div>
                <div data-aos="zoom-in-down" class="skill-box">
                  <img src="assets/icon/postgresql.svg" alt="postgresql" />
                </div>
                <div data-aos="zoom-in-down" class="skill-box">
                  <img src="assets/icon/figma.svg" alt="figma" />
                </div>
                <div data-aos="zoom-in-down" class="skill-box">
                  <img src="assets/icon/github.svg" alt="github" />
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    }
  }
  
  customElements.define('skill-section', SkillSection);
  