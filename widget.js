(() => {
  const TAG = 'nmx-project-showcase';
  if (customElements.get(TAG)) return;
  class NmxProjectShowcase extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;
      const root = this.attachShadow({mode:'open'});
      root.innerHTML = `
<style>
:host{display:block;width:100%;min-height:100%;font-family:Arial,Helvetica,sans-serif;color:#fff;background:#0c2f32}*{box-sizing:border-box}
.wrap{min-height:100%;background:linear-gradient(145deg,#0b292c 0%,#123c40 60%,#0b292c 100%);overflow:hidden}
.hero{position:relative;min-height:580px;padding:70px clamp(24px,6vw,90px);display:flex;align-items:flex-end;background:linear-gradient(110deg,rgba(5,25,27,.96),rgba(18,60,64,.75)),radial-gradient(circle at 85% 20%,rgba(62,226,158,.4),transparent 35%)}
.grid{position:absolute;inset:0;opacity:.12;background-image:linear-gradient(rgba(255,255,255,.2) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.2) 1px,transparent 1px);background-size:48px 48px}
.content{position:relative;max-width:920px}.eyebrow{display:inline-block;color:#3ee29e;font-size:13px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;margin-bottom:20px}
h1{font-size:clamp(42px,7vw,84px);line-height:.96;letter-spacing:-.045em;margin:0 0 24px;max-width:850px}
p{font-size:clamp(17px,2vw,23px);line-height:1.55;color:#d9eeeb;max-width:720px;margin:0 0 34px}
.cta{display:inline-flex;padding:15px 22px;border-radius:4px;background:#3ee29e;color:#082426;text-decoration:none;font-weight:800}
.projects{padding:64px clamp(24px,6vw,90px) 80px;background:#f4f8f7;color:#123c40}.projects h2{font-size:clamp(30px,4vw,52px);margin:0 0 12px;letter-spacing:-.03em}
.lead{color:#516a6c;font-size:18px;margin-bottom:34px}.cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.card{min-height:260px;padding:26px;border-radius:10px;display:flex;flex-direction:column;justify-content:flex-end;color:#fff;background:linear-gradient(145deg,#123c40,#1b5559);box-shadow:0 18px 40px rgba(18,60,64,.15)}
.card:nth-child(2){background:linear-gradient(145deg,#17484b,#0e3033)}.card:nth-child(3){background:linear-gradient(145deg,#0e3033,#1d6761)}
.num{color:#3ee29e;font-weight:800;font-size:13px;letter-spacing:.12em;margin-bottom:auto}.card h3{font-size:23px;margin:0 0 10px}.card span{color:#c8dedb;line-height:1.45}
@media(max-width:760px){.hero{min-height:520px;padding-top:50px}.cards{grid-template-columns:1fr}.card{min-height:220px}}
</style>
<main class="wrap"><section class="hero"><div class="grid"></div><div class="content"><span class="eyebrow">NMX · Infraestructura que trasciende</span><h1>Construimos capacidad. Entregamos confianza.</h1><p>Desarrollo y ejecución integral de infraestructura, carreteras, puentes, edificación vertical y proyectos industriales especializados.</p><a class="cta" href="#contacto">Hablemos de su proyecto</a></div></section><section class="projects"><h2>Proyectos que hablan por nosotros</h2><p class="lead">Capacidad técnica, ejecución segura y presencia en campo.</p><div class="cards"><article class="card"><span class="num">01 · PORTUARIO</span><h3>Hutchison Ports LCT</h3><span>Infraestructura hidráulica y estación de suministro tipo garza.</span></article><article class="card"><span class="num">02 · INFRAESTRUCTURA</span><h3>Carreteras y puentes</h3><span>Construcción, rehabilitación y conservación con control técnico.</span></article><article class="card"><span class="num">03 · EDIFICACIÓN</span><h3>Industrial y vertical</h3><span>Soluciones integrales desde ingeniería hasta puesta en operación.</span></article></div></section></main>`;
    }
  }
  customElements.define(TAG,NmxProjectShowcase);
})();