// --- Efecto de escritura en el encabezado ---
document.addEventListener("DOMContentLoaded", () => {
  const text = "Técnico IT orientado a Cloud & AWS | DevOps Jr | Automatización";
  const typingEl = document.getElementById("typing-text");
  let i = 0;

  function type() {
    if (i < text.length) {
      typingEl.textContent += text.charAt(i);
      i++;
      setTimeout(type, 40);
    }
  }
  type();

  // --- Animaciones al hacer scroll (habilidades, secciones, etc) ---
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.fade-up, .fade-in, .skill-card').forEach(el => observer.observe(el));

  // --- Pequeño toque: al pasar el ratón por el nombre ---
  const title = document.querySelector("header h1");
  title.addEventListener("mouseenter", () => {
    title.style.textShadow = "0 0 20px rgba(255,255,255,0.8)";
    title.style.transform = "scale(1.05)";
    title.style.transition = "all 0.4s ease";
  });
  title.addEventListener("mouseleave", () => {
    title.style.textShadow = "none";
    title.style.transform = "scale(1)";
  });

  console.log("☁️ Portfolio cargado correctamente - Victor Durán");
});
