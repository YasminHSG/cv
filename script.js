// Calcul de l'âge automatique
(function() {
  var birthDate = new Date(2004, 4, 12); // Mois = 4 (Mai en index 0)
  var now = new Date();
  var age = now.getFullYear() - birthDate.getFullYear();
  if (now < new Date(now.getFullYear(), 4, 12)) {
    age--;
  }
  document.getElementById('age').textContent = age;
})();

// Basculement de thème (Clair / Sombre)
document.getElementById('th').onclick = function() {
  var root = document.documentElement;
  var isDark = root.dataset.theme === 'dark' || (!root.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches);
  root.dataset.theme = isDark ? 'light' : 'dark';
};

// Gestion des filtres (onglets) de la section Projets
document.querySelectorAll('.tabs button').forEach(function(btn) {
  btn.onclick = function() {
    // Mise à jour de l'état actif des boutons
    document.querySelectorAll('.tabs button').forEach(function(x) {
      x.setAttribute('aria-pressed', x === btn);
    });
    
    // Filtrage des cartes
    document.querySelectorAll('#pj .card').forEach(function(card) {
      var showAll = btn.dataset.f === 'all';
      var matchFilter = card.dataset.t === btn.dataset.f;
      card.classList.toggle('hide', !(showAll || matchFilter));
    });
  };
});

// Observer pour le défilement et la mise à jour du point de navigation (Sidebar)
var links = document.querySelectorAll('#idx a');
var dot = document.getElementById('dot');

function markActive(link) {
  if (!link) return;
  
  links.forEach(function(x) {
    x.classList.toggle('on', x === link);
  });
  
  // Positionnement du point indicateur
  dot.style.transform = 'translateY(' + (link.parentNode.offsetTop + link.offsetHeight / 2 - 4) + 'px)';
  
  // Défilement horizontal automatique du menu sur mobile
  if (innerWidth <= 860) {
    link.scrollIntoView({ block: 'nearest', inline: 'center' });
  }
}

var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      markActive(document.querySelector('#idx a[href="#' + entry.target.id + '"]'));
    }
  });
}, { rootMargin: '-35% 0px -60% 0px' });

// Initialiser l'observation pour toutes les sections ayant un ID
document.querySelectorAll('section[id]').forEach(function(section) {
  observer.observe(section);
});

// Initialisation au chargement
markActive(links[0]);

// Recalcul de la position en cas de redimensionnement de l'écran
addEventListener('resize', function() {
  markActive(document.querySelector('#idx a.on') || links[0]);
});