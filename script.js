// --- Animación de texto en el encabezado ---
document.addEventListener("DOMContentLoaded", () => {
  const subtitle = document.querySelector("header p");
  const text = "Técnico IT orientado a Cloud & AWS | DevOps Jr | Automatización";
  
  subtitle.textContent = ""; // limpia el texto inicial
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      subtitle.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 50); // velocidad de escritura
    }
  }

  typeEffect();

  // --- Pequeña animación al pasar el ratón por el nombre ---
  const title = document.querySelector("header h1");
  title.addEventListener("mouseenter", () => {
    title.style.transform = "scale(1.1)";
    title.style.transition = "transform 0.3s ease";
  });

  title.addEventListener("mouseleave", () => {
    title.style.transform = "scale(1)";
  });

  // --- Mensaje en consola (detalle para desarrolladores curiosos 😄) ---
  console.log("👋 Bienvenido al portfolio de Victor Durán - hecho con HTML, CSS y JavaScript");
});
