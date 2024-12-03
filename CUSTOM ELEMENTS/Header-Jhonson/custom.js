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
                background-color: #74caf0; 
                width: 100%; 
                border: 1px solid #e0e0e0; 
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                border-radius: 12px;
                padding: 40px 20px;
                color: #333; 
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
                transition: background-color 0.3s ease;
            }
            .div:hover {
                background-color: #99defc;
            }
            h1 {
                font-size: 2rem;
                margin-bottom: 30px;
                font-weight: 600; 
                color: white; 
                text-align: center;
            }
            .divU {
                display: flex;
                gap: 20px;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
            }
            .button {
                background-color: #007BFF;
                border: none;
                color: white;
                border-radius: 6px;
                padding: 12px 24px;
                font-size: 1rem;
                font-weight: 500; 
                cursor: pointer;
                transition: all 0.3s ease; 
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            .button:hover {
                background-color: #0056b3; 
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); 
                transform: translateY(-2px); 
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
