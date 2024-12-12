export class ProjectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['title', 'description', 'technologies', 'link', 'image'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const title = this.getAttribute('title') || '';
        const description = this.getAttribute('description') || 'no hay el texto';
        const technologies = this.getAttribute('technologies') || 'no hay el texto';
        const link = this.getAttribute('link') || 'no hay el texto';
        const image = this.getAttribute('image') || 'no hay el texto';

        this.shadowRoot.innerHTML = `
            <style>
            :host {
                display: block;
                flex: 1; /* Permite que el componente tome espacio proporcional */
                max-width: 300px; /* Limita el ancho máximo */
                margin: 15px; /* Espacio alrededor */
                box-sizing: border-box; /* Asegura que los márgenes y el padding no desborden */
            }
            .project-card {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                width: 100%;
                border: 1px solid #ddd;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                transition: transform 0.3s ease;
            }
            .project-card:hover {
                transform: scale(1.05);
            }
            .project-image {
                width: 100%;
                height: 200px;
                object-fit: cover;
            }
            .project-content {
                padding: 15px;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
            }
            .project-title {
                margin: 0 0 10px 0;
                font-size: 1.2em;
                color: #333;
                text-align: center;
            }
            .project-description {
            margin: 10px;
                color: #666;
                margin-bottom: 10px;
                text-align: justify;
            }
            .project-technologies {
                font-size: 0.9em;
                color: #888;
                margin-bottom: 10px;
                text-align: center;
            }
            .project-link {
                display: inline-block;
                background-color: #007bff;
                color: white;
                padding: 8px 15px;
                text-decoration: none;
                border-radius: 4px;
                transition: background-color 0.3s ease;
                text-align: center;
            }
            .project-link:hover {
                background-color: #0056b3;
            }
        </style>
            <div class="project-card">
                <img src="${image}" alt="${title}" class="project-image">
                <div class="project-content">
       
                    <p class="project-description">${description}</p>
                    <p class="project-technologies">Tecnologías: ${technologies}</p>
                    <a href="${link}" class="project-link" target="_blank">Información de la Empresa</a>
                </div>
            </div>
        `;
    }
}

customElements.define('portfolio-project-card', ProjectCard);