class personalCard extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
          <style>
            :host {
                display: block;
                font-family: 'Roboto', sans-serif;
            }
            .div {
                background: linear-gradient(135deg, #007BFF, #74caf0); 
                width: 100%; 
                border: none; 
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                border-radius: 16px;
                padding: 40px 20px;
                color: white; 
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); 
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
    
            h1 {
                font-size: 2.5rem;
                margin-bottom: 30px;
                font-weight: 700; 
                color: white; 
                text-align: center;
                text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
            }
            .divU {
                display: flex;
                gap: 20px;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
            }
            .button {
                background: linear-gradient(135deg, #0056b3, #007BFF);
                border: none;
                color: white;
                border-radius: 8px;
                padding: 12px 24px;
                font-size: 1rem;
                font-weight: 600; 
                cursor: pointer;
                transition: all 0.3s ease; 
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            }
            .button:hover {
                background: linear-gradient(135deg, #004080, #0056b3); 
                box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2); 
                transform: translateY(-3px); 
            }
            .button:active {
                transform: translateY(0); 
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
            }

            </style>
            <div class="div">
                <h1>INTEGRANTES GRUPO 1</h1>
                <div class="divU">
                    <button class="button" id="btn1">JHONSON MENDOZA</button>
                    <button class="button" id="btn2">KEVIN ORDOÑEZ</button>
                    <button class="button" id="btn3">KARLOS CHEVEZ</button>
                </div>
            </div>
        `;
        this.querySelector('#btn1').addEventListener('click', () => this.showInfo(1));
        this.querySelector('#btn2').addEventListener('click', () => this.showInfo(2));
        this.querySelector('#btn3').addEventListener('click', () => this.showInfo(3));
    }

    showInfo(personNumber) {
        const skillSections = document.querySelectorAll('.skill-section1');
        const storySections = document.querySelectorAll('.story-section1');
        skillSections.forEach(section => section.style.display = 'none');
        storySections.forEach(section => section.style.display = 'none');

        const selectedSkills = document.getElementById('skills' + personNumber);
        const selectedStory = document.getElementById('story' + personNumber);
        selectedSkills.style.display = 'block';
        selectedStory.style.display = 'block';
    }
}
window.customElements.define('personal-card', personalCard);
