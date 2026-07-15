(() => {
  const TAG = 'nmx-project-showcase';
  if (customElements.get(TAG)) return;

  class NmxProjectShowcase extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = `
        <style>
          :host {
            display: block;
            width: 100%;
            min-width: 0;
            background: #071f22;
          }
          * { box-sizing: border-box; }
          .frame {
            display: block;
            width: 100%;
            height: 8500px;
            border: 0;
            margin: 0;
            padding: 0;
            background: #071f22;
          }
          @media (max-width: 980px) {
            .frame { height: 9800px; }
          }
          @media (max-width: 680px) {
            .frame { height: 11400px; }
          }
        </style>
        <iframe
          class="frame"
          src="https://nmx-infraestructura.danteobregon.chatgpt.site"
          title="NMX | Infraestructura y Construcción"
          loading="eager"
          allow="fullscreen"
        ></iframe>`;
    }
  }

  customElements.define(TAG, NmxProjectShowcase);
})();
