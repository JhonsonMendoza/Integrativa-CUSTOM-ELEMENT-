class SkillChart extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const skills = JSON.parse(this.getAttribute('skills') || '[]');
        this.render(skills);
    }

    render(skills) {
        const chartHTML = skills.map(skill => `
            <div class="skill">
                <div class="skill-name">${skill.name}</div>
                <div class="skill-bar-container">
                    <div class="skill-bar" style="width: ${skill.value}%;">
                        <span class="skill-value">${skill.value}%</span>
                    </div>
                </div>
            </div>
        `).join('');

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    font-family: Arial, sans-serif;
                    max-width: 600px;
                    margin: 0 auto;
                }
                .skill {
                    margin-bottom: 20px;
                }
                .skill-name {
                    font-weight: bold;
                    margin-bottom: 5px;
                }
                .skill-bar-container {
                    background-color: #e0e0e0;
                    height: 25px;
                    border-radius: 12.5px;
                    overflow: hidden;
                }
                .skill-bar {
                    height: 100%;
                    background-color: #4CAF50;
                    text-align: right;
                    color: white;
                    transition: width 1s ease-in-out;
                }
                .skill-value {
                    padding-right: 10px;
                    line-height: 25px;
                }
            </style>
            <div class="chart">
                ${chartHTML}
            </div>
        `;
    }
}

customElements.define('skill-chart', SkillChart);