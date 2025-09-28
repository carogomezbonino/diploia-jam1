// ===== VARIABLES GLOBALES =====
let currentChallenge = null;

// ===== DATOS DE LOS DESAFÍOS =====
const challengesData = {
  1: {
    title: "El Contenido que Nadie Escucha",
    problem: "Tienes un texto excelente sobre tu materia, pero sabes que tus estudiantes no lo van a leer. Necesitas transformar ese contenido en algo que realmente consuman y que genere una experiencia de aprendizaje memorable.",
    routes: [
      {
        name: "RUTA A: El Podcast Automático",
        tool: "NotebookLM de Google",
        strategy: "Subir tu texto y que la IA genere un podcast conversacional automático con dos voces que debaten el tema",
        advantage: "Cero esfuerzo técnico, resultado muy natural"
      },
      {
        name: "RUTA B: El Audio Personalizado", 
        tool: "ChatGPT/Gemini + Google AI Studio Speech/ElevenLabs",
        strategy: "Crear un guión conversacional con la IA y luego convertirlo a audio con voces sintéticas",
        advantage: "Control total sobre el contenido y el tono"
      },
      {
        name: "RUTA C: La Explicación Grabada",
        tool: "ChatGPT/Gemini + Loom/grabación móvil", 
        strategy: "Usar IA para estructurar tu explicación y luego grabarla con tu propia voz",
        advantage: "Mantiene tu personalidad docente, muy auténtico"
      },
      {
        name: "RUTA D: El Audio Interactivo",
        tool: "TTSMaker/TurboScribe + Audacity",
        strategy: "Crear múltiples segmentos de audio con pausas para reflexión",
        advantage: "Permite interacción durante la escucha"
      }
    ],
    levels: [
      "BÁSICO (1-2 horas): Crear un audio de 5-10 minutos + 3 preguntas de comprensión",
      "INTERMEDIO (2-3 horas): Audio + guía de escucha con timestamps + actividad de debate", 
      "AVANZADO (3-4 horas): Serie de audios + secuencia didáctica completa que los integre"
    ]
  },
  2: {
    title: "El Concepto Invisible",
    problem: "Hay un concepto clave en tu materia que los estudiantes 'no ven'. Por más que lo expliques con palabras, no logran visualizarlo o comprenderlo profundamente. Necesitas hacer visible lo invisible, crear representaciones que hagan 'click' en sus mentes.",
    routes: [
      {
        name: "RUTA A: Diagramas Automáticos",
        tool: "Napkin AI",
        strategy: "Escribir el concepto y que la IA genere múltiples visualizaciones automáticamente",
        advantage: "Rapidez extrema, múltiples opciones para elegir"
      },
      {
        name: "RUTA B: Infografías Inteligentes",
        tool: "Canva IA (Magic Design) + ChatGPT",
        strategy: "Usar IA para estructurar la información y Canva para crear infografías profesionales",
        advantage: "Resultado muy pulido y profesional"
      },
      {
        name: "RUTA C: Simuladores Visuales",
        tool: "Claude (artefactos) + Miro IA",
        strategy: "Crear artefactos interactivos o simuladores simples que muestren el concepto en acción",
        advantage: "Interactividad y exploración activa"
      },
      {
        name: "RUTA D: Imágenes Conceptuales",
        tool: "DALL-E/Bing Image Creator + Canva",
        strategy: "Generar imágenes que representen metafóricamente el concepto y editarlas",
        advantage: "Creatividad ilimitada, metáforas visuales potentes"
      },
      {
        name: "RUTA E: Experiencias Interactivas",
        tool: "Genially/H5P + Notion",
        strategy: "Crear recursos interactivos donde los estudiantes exploren el concepto paso a paso",
        advantage: "Aprendizaje activo y personalizado"
      }
    ],
    levels: [
      "BÁSICO (1-2 horas): 3 visualizaciones del mismo concepto + explicación de cuál funciona mejor",
      "INTERMEDIO (2-3 horas): Progresión visual (5-6 pasos) que explique un proceso completo",
      "AVANZADO (3-4 horas): 'Atlas visual' del tema + actividad interactiva para estudiantes"
    ]
  },
  3: {
    title: "La Pregunta que No Sabemos Hacer",
    problem: "Intuyes que algo importante está pasando con la IA en tu contexto educativo, pero no sabes bien qué preguntar ni cómo investigarlo. Necesitas diseñar una investigación rápida que te dé insights reales sobre cómo tus colegas y estudiantes están viviendo esta transformación.",
    routes: [
      {
        name: "RUTA A: La Encuesta Inteligente",
        tool: "ChatGPT/Gemini + Google Forms",
        strategy: "Usar IA para diseñar preguntas que revelen insights profundos, no solo datos superficiales",
        advantage: "Simplicidad y familiaridad de las herramientas"
      },
      {
        name: "RUTA B: El Formulario Conversacional",
        tool: "Perplexity + OpnForm/Monica Forms",
        strategy: "Crear formularios que se adapten a las respuestas, como una conversación guiada",
        advantage: "Respuestas más ricas y contextualizadas"
      },
      {
        name: "RUTA C: La Investigación Visual",
        tool: "DeepSeek + Typeform + Flourish",
        strategy: "Diseñar la investigación pensando desde el inicio en cómo visualizar los resultados",
        advantage: "Impacto visual inmediato de los hallazgos"
      },
      {
        name: "RUTA D: El Análisis Automático",
        tool: "Qwen + Google Sheets + WordArt",
        strategy: "Recolectar respuestas abiertas y usar IA para encontrar patrones y crear nubes de palabras",
        advantage: "Descubre insights que no esperabas encontrar"
      }
    ],
    levels: [
      "BÁSICO (1-2 horas): Encuesta de 5 preguntas aplicada a 5-10 personas + resultados básicos",
      "INTERMEDIO (2-3 horas): Encuesta + análisis con IA + infografía de hallazgos principales",
      "AVANZADO (3-4 horas): Investigación completa + reporte visual ejecutivo + recomendaciones"
    ]
  },
  4: {
    title: "El Protocolo que No Existe",
    problem: "Tu institución necesita lineamientos sobre IA, pero nadie sabe por dónde empezar. Hay ejemplos dispersos en internet, pero ¿cuáles sirven para tu contexto? Necesitas investigar qué están haciendo otras instituciones, comparar enfoques, y proponer algo concreto y visual que realmente se pueda implementar.",
    routes: [
      {
        name: "RUTA A: El Detective de Políticas",
        tool: "Perplexity + ChatGPT + Canva",
        strategy: "Usar IA especializada en búsqueda para encontrar políticas reales y compararlas visualmente",
        advantage: "Información actualizada y verificada"
      },
      {
        name: "RUTA B: El Presentador Automático",
        tool: "DeepSeek + Gamma/Beautiful.ai",
        strategy: "Investigar con IA y crear presentaciones ejecutivas automáticas para directivos",
        advantage: "Formato profesional listo para presentar"
      },
      {
        name: "RUTA C: El Comunicador Visual",
        tool: "Gemini + Vidnoz/HeyGen + Napkin",
        strategy: "Crear videos explicativos con avatares que presenten las políticas de forma atractiva",
        advantage: "Impacto audiovisual, fácil de compartir"
      },
      {
        name: "RUTA D: La Comparación Interactiva",
        tool: "Qwen + InVideo/Renderforest + Claude",
        strategy: "Crear comparaciones dinámicas que muestren pros y contras de diferentes enfoques",
        advantage: "Permite exploración activa de opciones"
      }
    ],
    levels: [
      "BÁSICO (1-2 horas): Tabla comparativa de 3 políticas + reflexión sobre cuál se adapta mejor",
      "INTERMEDIO (2-3 horas): Comparación + infografía visual + propuesta de 5 lineamientos básicos",
      "AVANZADO (3-4 horas): Investigación completa + presentación/video ejecutivo + plan de implementación"
    ]
  },
  5: {
    title: "El Taller que Nadie Quiere Dar",
    problem: "Tus colegas necesitan formación en IA, pero nadie tiene tiempo para diseñar un taller desde cero. Además, cada docente tiene un nivel diferente de conocimiento tecnológico. Necesitas crear una propuesta de formación que sea atractiva, accesible, y que prácticamente 'se facilite sola'.",
    routes: [
      {
        name: "RUTA A: El Asistente Virtual",
        tool: "Poe + Canva IA",
        strategy: "Crear un chatbot que funcione como tutor personal para cada docente",
        advantage: "Atención personalizada 24/7, ritmo individual"
      },
      {
        name: "RUTA B: El Mentor Público",
        tool: "Gemini Gems + Padlet + Gamma",
        strategy: "Crear un asistente público especializado que todos puedan consultar",
        advantage: "Acceso abierto, construcción colaborativa del conocimiento"
      },
      {
        name: "RUTA C: La Conversación Simulada",
        tool: "Character.ai + ElevenLabs + Notion",
        strategy: "Crear personajes que representen diferentes niveles de experiencia con IA",
        advantage: "Aprendizaje a través de diálogos realistas"
      },
      {
        name: "RUTA D: El Kit Completo",
        tool: "ChatGPT personalizado + Miro + HeyGen",
        strategy: "Crear un paquete completo con materiales, actividades y videos explicativos",
        advantage: "Solución 'llave en mano' para otros formadores"
      }
    ],
    levels: [
      "BÁSICO (1-2 horas): Chatbot que responde 10 preguntas frecuentes + lista de lo que puede hacer",
      "INTERMEDIO (2-3 horas): Chatbot + guía de uso + ejemplos de conversaciones útiles",
      "AVANZADO (3-4 horas): Chatbot + diseño de taller virtual + materiales complementarios"
    ]
  }
};

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeScrollAnimations();
  initializeSmoothScrolling();
  initializeNavbarScroll();
});

// ===== NAVEGACIÓN =====
function initializeNavigation() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle del menú móvil
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
  }

  // Cerrar menú al hacer click en un enlace
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });

  // Cerrar menú al hacer click fuera
  document.addEventListener('click', function(e) {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    }
  });
}

// ===== NAVBAR SCROLL EFFECT =====
function initializeNavbarScroll() {
  const navbar = document.getElementById('navbar');
  let lastScrollTop = 0;

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      navbar.style.boxShadow = 'none';
    }

    lastScrollTop = scrollTop;
  });
}

// ===== SMOOTH SCROLLING =====
function initializeSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70; // Altura del navbar
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ===== ANIMACIONES AL SCROLL =====
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  // Observar elementos que deben animarse
  const animatedElements = document.querySelectorAll('.challenge-card, .objective-card, .timeline-phase, .telegram-space, .resource-category');
  
  animatedElements.forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });
}

// ===== FUNCIONES DE DESAFÍOS =====
function toggleChallenge(challengeId) {
  const detailsContainer = document.getElementById('challenge-details');
  const contentContainer = document.getElementById('challenge-content');
  
  if (currentChallenge === challengeId) {
    closeChallenge();
    return;
  }
  
  currentChallenge = challengeId;
  const challenge = challengesData[challengeId];
  
  if (!challenge) return;
  
  // Generar contenido del desafío
  const content = generateChallengeContent(challenge);
  contentContainer.innerHTML = content;
  
  // Mostrar modal
  detailsContainer.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  
  // Animación de entrada
  setTimeout(() => {
    detailsContainer.style.opacity = '1';
  }, 10);
}

function closeChallenge() {
  const detailsContainer = document.getElementById('challenge-details');
  
  detailsContainer.style.opacity = '0';
  setTimeout(() => {
    detailsContainer.style.display = 'none';
    document.body.style.overflow = 'auto';
  }, 300);
  
  currentChallenge = null;
}

function generateChallengeContent(challenge) {
  let routesHtml = '';
  
  challenge.routes.forEach((route, index) => {
    routesHtml += `
      <div class="route-card">
        <h4 class="route-name">${route.name}</h4>
        <div class="route-details">
          <div class="route-item">
            <strong>Herramienta:</strong> ${route.tool}
          </div>
          <div class="route-item">
            <strong>Estrategia:</strong> ${route.strategy}
          </div>
          <div class="route-item">
            <strong>Ventaja:</strong> ${route.advantage}
          </div>
        </div>
      </div>
    `;
  });
  
  let levelsHtml = '';
  challenge.levels.forEach(level => {
    levelsHtml += `<li>${level}</li>`;
  });
  
  return `
    <div class="challenge-detail-header">
      <h2>${challenge.title}</h2>
    </div>
    
    <div class="challenge-detail-section">
      <h3><i class="fas fa-exclamation-triangle"></i> Situación Problema</h3>
      <p class="problem-text">${challenge.problem}</p>
    </div>
    
    <div class="challenge-detail-section">
      <h3><i class="fas fa-route"></i> Rutas de Solución</h3>
      <div class="routes-container">
        ${routesHtml}
      </div>
    </div>
    
    <div class="challenge-detail-section">
      <h3><i class="fas fa-layer-group"></i> Niveles de Desarrollo</h3>
      <ul class="levels-list">
        ${levelsHtml}
      </ul>
    </div>
    
    <div class="challenge-actions">
      <button class="btn btn-primary" onclick="closeChallenge()">
        <i class="fas fa-rocket"></i>
        ¡Empezar este Desafío!
      </button>
    </div>
  `;
}

// ===== EFECTOS VISUALES ADICIONALES =====

// Efecto parallax suave en el hero
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const heroImage = document.querySelector('.hero-img');
  
  if (heroImage && scrolled < window.innerHeight) {
    const rate = scrolled * -0.5;
    heroImage.style.transform = `translateY(${rate}px) scale(1.02)`;
  }
});

// Contador animado para las estadísticas
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  counters.forEach(counter => {
    const target = counter.textContent;
    if (target === '∞') return;
    
    const count = +target;
    const increment = count / 100;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= count) {
        counter.textContent = target;
        clearInterval(timer);
      } else {
        counter.textContent = Math.ceil(current);
      }
    }, 20);
  });
}

// Activar contadores cuando entren en viewport
const statsObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      statsObserver.unobserve(entry.target);
    }
  });
});

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
  statsObserver.observe(heroStats);
}

// ===== ESTILOS DINÁMICOS PARA MODAL =====
const modalStyles = `
<style>
.challenge-detail-header {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--gray-200);
}

.challenge-detail-header h2 {
  font-size: 2rem;
  font-weight: 700;
  background: var(--gradient-main);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.challenge-detail-section {
  margin-bottom: 2rem;
}

.challenge-detail-section h3 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--gray-800);
}

.challenge-detail-section i {
  color: var(--primary-green);
}

.problem-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--gray-600);
  background: var(--gray-50);
  padding: 1.5rem;
  border-radius: 0.75rem;
  border-left: 4px solid var(--primary-green);
}

.routes-container {
  display: grid;
  gap: 1rem;
}

.route-card {
  background: var(--white);
  border: 2px solid var(--gray-200);
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.route-card:hover {
  border-color: var(--primary-green);
  box-shadow: 0 4px 12px rgba(0, 200, 150, 0.1);
}

.route-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary-green);
  margin-bottom: 1rem;
}

.route-details {
  display: grid;
  gap: 0.75rem;
}

.route-item {
  font-size: 0.95rem;
  line-height: 1.5;
}

.route-item strong {
  color: var(--gray-800);
}

.levels-list {
  list-style: none;
  padding: 0;
}

.levels-list li {
  background: var(--gray-50);
  padding: 1rem 1.5rem;
  margin-bottom: 0.75rem;
  border-radius: 0.5rem;
  border-left: 4px solid var(--primary-green);
  font-weight: 500;
}

.challenge-actions {
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid var(--gray-200);
}

#challenge-details {
  opacity: 0;
  transition: opacity 0.3s ease;
}
</style>
`;

// Insertar estilos del modal
document.head.insertAdjacentHTML('beforeend', modalStyles);

// ===== CERRAR MODAL CON ESC =====
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && currentChallenge !== null) {
    closeChallenge();
  }
});

// ===== CERRAR MODAL CLICKEANDO FUERA =====
document.addEventListener('click', function(e) {
  const detailsContainer = document.getElementById('challenge-details');
  const detailsContent = document.querySelector('.details-content');
  
  if (detailsContainer && e.target === detailsContainer && !detailsContent.contains(e.target)) {
    closeChallenge();
  }
});

// ===== LOADING STATES =====
function showLoading(element) {
  element.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Cargando...';
  element.disabled = true;
}

function hideLoading(element, originalText) {
  element.innerHTML = originalText;
  element.disabled = false;
}

// ===== UTILIDADES =====
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ===== PERFORMANCE OPTIMIZATIONS =====
const debouncedScroll = debounce(function() {
  // Funciones de scroll optimizadas aquí
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScroll);

// ===== ACCESSIBILITY =====
// Mejorar navegación por teclado
document.addEventListener('keydown', function(e) {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-navigation');
  }
});

document.addEventListener('mousedown', function() {
  document.body.classList.remove('keyboard-navigation');
});

// ===== ANALYTICS TRACKING (placeholder) =====
function trackEvent(category, action, label) {
  // Aquí se puede integrar Google Analytics o similar
  console.log('Event tracked:', { category, action, label });
}

// Trackear clicks en desafíos
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('challenge-btn')) {
    const challengeCard = e.target.closest('.challenge-card');
    const challengeTitle = challengeCard.querySelector('.challenge-title').textContent;
    trackEvent('Challenge', 'View Details', challengeTitle);
  }
});

console.log('🚀 JAM 1 Micrositio cargado correctamente!');
