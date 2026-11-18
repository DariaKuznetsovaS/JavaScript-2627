class TarjetaUsuario extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        const template = document.getElementById('tarjeta-template');
        const contenido = template.content.cloneNode(true);
        this.shadowRoot.appendChild(contenido);

        const rol = this.getAttribute('rol') || 'Sin rol';
        this.shadowRoot.querySelector('.rol').textContent = rol;
    }
    

}


customElements.define('tarjeta-usuario', TarjetaUsuario);