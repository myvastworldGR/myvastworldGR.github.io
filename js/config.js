import "./regSw.js";
import "/lib/movil.js";
import "/lib/campo-dinamico.js";
class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<a href="index.html">
      <span
      class="material-icons">
      home
    </span>
        Control
      </a>
      <a href="dispositivo.html">
      <span class="material-icons">
phone_iphone
</span>
        Dispositivo
      </a>
      <a href="historial.html">
        <span
          class="material-icons">
          fact_check
        </span>
        Historial
      </a>
      <a href="gps.html">
        <span
          class="material-icons">
          location_searching
        </span>
        GPS
      </a>
      <a href="archivos.html">
        <span
          class="material-icons">
          attach_file
        </span>
        Archivos
      </a>
      <a href="ayuda.html">
        <span
          class="material-icons">
          help
        </span>
        Ayuda
      </a>`;
  }
}
customElements.define(
  "mi-nav", MiNav);