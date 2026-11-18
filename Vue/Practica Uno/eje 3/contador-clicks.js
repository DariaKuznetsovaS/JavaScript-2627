class ContadorClicks extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.valor = Number(this.getAttribute('inicio')) || 0;

        this.shadowRoot.innerHTML = `
            <div>
                <p>Contador: <span id="valor">${this.valor}</span></p>
                <button id="restar">-</button>
                <button id="sumar">+</button>
            </div>
        `;

        this.shadowRoot.querySelector('#sumar').addEventListener('click', () => {
            this.sumar();
        });

        this.shadowRoot.querySelector('#restar').addEventListener('click', () => {
            this.restar();
        });
    }

    sumar() {
        const max = this.getAttribute('max');

        if (max === 10 || this.valor < Number(max)) {
            this.valor++;
            this.actualizar();
        }
    }

    restar() {
        this.valor--;
        this.actualizar();
    }

    actualizar() {
        this.shadowRoot.querySelector('#valor').textContent = this.valor;

        this.dispatchEvent(new CustomEvent('cambio', {
            detail: this.valor,
            bubbles: true
        }));
    }

}

customElements.define('contador-clicks', ContadorClicks);
