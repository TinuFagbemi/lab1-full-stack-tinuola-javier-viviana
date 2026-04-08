// ─────────────────────────────────────────────────────────────────────────────
//  Conceptos aplicados: variables, función, llamado de función,
//  manipulación DOM (getElementById, innerHTML, .value) y condiciones if/else
// ─────────────────────────────────────────────────────────────────────────────

// FUNCIÓN PRINCIPAL — se dispara con el evento onclick del botón en index.html
function verificarNota() {

  // 1. Leer valores del DOM (manipulación HTML-DOM)
  let nombre = document.getElementById("campoNombre").value.trim();
  let nota   = parseFloat(document.getElementById("campoNota").value);

  // 2. Declarar variables para guardar el resultado
  let estado  = "";
  let clase   = "";
  let label   = "";
  let detalle = "";

  // 3. Condición if / else if / else
  if (nombre === "" || isNaN(nota) || nota < 0 || nota > 10) {
    // Caso A: campos vacíos o valor fuera de rango
    label   = "Atención";
    estado  = "Completa ambos campos correctamente.";
    detalle = "La nota debe estar entre 0 y 10.";
    clase   = "alerta";

  } else if (nota >= 6) {
    // Caso B: nota aprobatoria
    label   = "Resultado para " + nombre;
    estado  = "¡Aprobado! ✦";
    detalle = "Nota: " + nota + " / 10";
    clase   = "aprobado";

  } else {
    // Caso C: nota reprobatoria
    label   = "Resultado para " + nombre;
    estado  = "Reprobado — ¡sigue adelante!";
    detalle = "Nota: " + nota + " / 10";
    clase   = "reprobado";
  }

  // 4. Actualizar el DOM con innerHTML y aplicar clase CSS al resultado
  document.getElementById("txtLabel").innerHTML  = label;
  document.getElementById("txtEstado").innerHTML = estado;
  document.getElementById("txtNota").innerHTML   = detalle;

  let caja = document.getElementById("resultado");
  caja.className     = clase;
  caja.style.display = "block";
}
