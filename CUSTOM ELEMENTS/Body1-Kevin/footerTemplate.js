class FooterComponent extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById('footer-template');
        const templateContent = template.content;

        // Adjuntar el contenido del template al Shadow DOM
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(templateContent.cloneNode(true));
    }

    static get observedAttributes() {
        return ["location", "hours", "email"];
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
        const location = this.getAttribute("location") || "XD";
        const hours = this.getAttribute("hours") || "XD";
        const email = this.getAttribute("email") || "XD";

        this.shadowRoot.querySelector('.footer-section:nth-of-type(1) p').textContent = location;
        this.shadowRoot.querySelector('.footer-section:nth-of-type(2) p').textContent = hours;
        this.shadowRoot.querySelector('.footer-section:nth-of-type(3) p a').textContent = email;
        this.shadowRoot.querySelector('.footer-section:nth-of-type(3) p a').setAttribute('href', `mailto:${email}`);
    }
}

customElements.define("footer-component", FooterComponent);
