class personalCard extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = `
            <style>
            .div {
                background-color: skyblue;
                width: auto; /* Ojo: parece haber un error tipográfico, "width" estaba mal escrito como "witdh" */
                height: auto;
                border: 2px dashed blue;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                border-radius: 30px;
                margin-bottom: 20px; 
                color: white;
            }
            .divU {
                display: flex;
                gap: 30px;
            }
            .button {
                background-color: #92DDF7;
                border: 2px solid #3C9EBF;
                color: white;
                border-radius: 10px;
                padding: 20px 40px        
            }
            .button:hover {
                background-color: #A5A6E6;
                border: 2px solid #6C6DC6;
            }
            </style>
            <div class="div">
                <h1>INTEGRANTES GRUPO 1</h1>
                <div class="divU">
                    <button class="button">JHONSON MENDOZA</button>
                    <button class="button">KEVIN ORDOÑEZ</button>
                    <button class="button">KARLOS CHEVEZ</button>
                </div>
            </div>
        `;
    }
}
window.customElements.define('personal-card', personalCard);