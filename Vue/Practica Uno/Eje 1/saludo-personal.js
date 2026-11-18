class SaludoPersonal extends HTMLElement{

constructor() {
    super();
    this.attachShadow({ mode: 'open' });
}

render() {
    const nombre = this.getAttribute('nombre') || 'desconocido';
    const color = this.getAttribute('color');

    this.shadowRoot.innerHTML = `
        <p style="color: ${color || 'inherit'}">
            Hola, ${nombre}
        </p>
    `;
}

static get observedAttributes() {
    return ['nombre', 'color'];
}

connectedCallback() {
    this.render();
}

attributeChangedCallback() {
    this.render();
}

}

customElements.define('saludo-personal', SaludoPersonal);