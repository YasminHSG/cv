(function () {
  'use strict';

  var root = document.documentElement;

  var english = {
    '00 — intro': '00 — intro',
    '01 — profil': '01 — profile',
    '02 — formation': '02 — education',
    '03 — expériences': '03 — experience',
    '04 — projets': '04 — projects',
    '05 — engagement': '05 — involvement',
    '06 — compétences': '06 — skills',
    '07 — langues': '07 — languages',
    '08 — intérêts': '08 — interests',
    '09 — contact': '09 — contact',
    '· Profil': '· Profile',
    '· Formation': '· Education',
    '· Expériences': '· Experience',
    '· Projets': '· Projects',
    '· Engagement': '· Involvement',
    '· Compétences': '· Skills',
    '· Langues': '· Languages',
    '· Centres d’intérêt': '· Interests',
    '· Contact': '· Contact',
    'Ingénieure': 'Engineer in',
    'Systèmes Microélectroniques': 'Microelectronics Systems',
    '& Informatique': '& Computer Science',
    'Étudiante à l’École des Mines de Saint-Étienne et à HEC Montréal. FPGA, systèmes embarqués, robotique et administration des affaires.': 'Engineering student at École des Mines de Saint-Étienne and HEC Montréal. FPGA, embedded systems, robotics and business administration.',
    'voir les projets': 'view projects',
    'me contacter': 'get in touch',
    'Étudiante à l’École des Mines de Saint-Étienne dans le cursus Systèmes Microélectroniques et Informatique, je suis en train de compléter ma formation avec un DESS en administration des affaires à HEC Montréal afin d’acquérir une double compétence technique et managériale.': 'I am studying Microelectronics and Computer Science Engineering at École des Mines de Saint-Étienne and complementing my education with a graduate diploma in business administration at HEC Montréal to develop both technical and management expertise.',
    'Nationalité française': 'French nationality',
    'ans · née le 12 mai 2004 à Rio de Janeiro': 'years old · born on May 12, 2004 in Rio de Janeiro',
    'DESS en administration des affaires : double compétence technique et managériale.': 'Graduate diploma in Business Administration, combining technical and management expertise.',
    'Cursus ingénieur Systèmes Microélectroniques et Informatique. Formation de prévention des violences sexistes et sexuelles (VSS).': 'Engineering degree in Microelectronics Systems and Computer Science. Training in the prevention of sexist and sexual violence.',
    'Classes préparatoires aux grandes écoles : MPSI, MP.': 'French preparatory classes for elite engineering schools: MPSI and MP.',
    'Baccalauréat scientifique, mention Très Bien, major de promo.': 'French scientific baccalaureate with highest honors; top of the class.',
    'DELE, niveau B2': 'DELE, B2 level',
    'Diploma de Español como Lengua Extranjera.': 'Diploma of Spanish as a Foreign Language.',
    'Avril – juillet 2026': 'April – July 2026',
    'Stage · Renault': 'Internship · Renault',
    'Outil de gestion et de monitoring pour l’Après-Vente.': 'Management and monitoring tool for After-Sales Engineering.',
    'Conception et développement de bout en bout de la Control Tower OV360 pour le suivi des validations des outils de diagnostic à l’échelle internationale.': 'Designed and developed the OV360 Control Tower end to end to track the validation of diagnostic tools worldwide.',
    'Centralisation des activités France, Inde et Roumanie dans un seul espace de pilotage, avec suivi des dossiers et des étapes critiques.': 'Centralized activities in France, India and Romania in a single management space, tracking cases and critical milestones.',
    'Automatisation du reporting et du pilotage via SharePoint, Power Automate, BigQuery et Looker pour optimiser le suivi des KPI et du Right First Time.': 'Automated reporting and operations using SharePoint, Power Automate, BigQuery and Looker to improve KPI and Right First Time tracking.',
    'Création d’entreprise': 'Business creation',
    'Cabinet conseil innovant en IA et mobilité internationale.': 'Innovative consulting firm focused on AI and international mobility.',
    'Création d’un cabinet conseil axé sur l’intelligence artificielle appliquée à la mobilité internationale et aux services de conseil.': 'Founded a consulting firm focused on applying artificial intelligence to international mobility and advisory services.',
    'Développement d’une proposition de valeur claire autour de l’optimisation des process, de la transformation digitale et de la stratégie de croissance.': 'Developed a clear value proposition focused on process optimization, digital transformation and growth strategy.',
    'Mise en place des fondements de l’activité et des premiers cadrages commerciaux et opérationnels.': 'Established the foundations of the business and its initial commercial and operational frameworks.',
    'Juillet 2025': 'July 2025',
    'Stage · FACOFRI, Algérie': 'Internship · FACOFRI, Algeria',
    'Automatisation et pilotage d’une presse plieuse.': 'Automation and control of a press brake.',
    'Intégration d’un bras robotisé pour automatiser une presse plieuse et améliorer la précision du cycle de production.': 'Integrated a robotic arm to automate a press brake and improve production-cycle precision.',
    'Développement d’un logiciel Python simulant le pilotage d’une presse plieuse, avec commande automatisée de pédale synchronisée à la simulation.': 'Developed Python software to simulate press-brake operation, including automated pedal control synchronized with the simulation.',
    'Contribution au pilotage et à l’optimisation des opérations de production grâce à une meilleure maîtrise des flux et du temps de cycle.': 'Helped manage and optimize production operations through improved workflow and cycle-time control.',
    'Janvier 2025': 'January 2025',
    'Stage · EDF, Colombes': 'Internship · EDF, Colombes',
    'Outil de gestion des demandes d’autorisation.': 'Authorization request management tool.',
    'Direction Services Informatiques et Numériques, rattachée à la Direction Commerce (équipe CSC Supervision).': 'Digital and IT Services Department, within the Sales Division (CSC Supervision team).',
    'Création d’un outil de gestion des demandes d’autorisation à l’échelle de l’équipe pour centraliser les procédures d’arrivée et de départ.': 'Created a team-wide authorization request management tool to centralize onboarding and offboarding procedures.',
    'Structuration du suivi des demandes et simplification des échanges entre les acteurs pour réduire les frictions et gagner en visibilité.': 'Structured request tracking and streamlined communication to reduce friction and improve visibility.',
    'Conception d’une solution pratique et conforme aux besoins opérationnels de l’équipe, avec un suivi clair des validations.': 'Designed a practical solution tailored to the team’s operational needs, with clear approval tracking.',
    '2019 – 2021': '2019 – 2021',
    'Soutien scolaire': 'Private tutoring',
    'Cours de mathématiques et de physique.': 'Mathematics and physics tutoring.',
    'Tutorat d’élèves de lycée en mathématiques et en physique pour renforcer leur compréhension des notions fondamentales.': 'Tutored high-school students in mathematics and physics to strengthen their understanding of core concepts.',
    'Accompagnement personnalisé dans la préparation aux contrôles et dans la progression sur le long terme.': 'Provided tailored support for test preparation and long-term academic progress.',
    'Stage · Filiale brésilienne d’EDF': 'Internship · EDF subsidiary in Brazil',
    'Immersion dans une entreprise française à l’étranger.': 'Experience within a French company abroad.',
    'Découverte des différents secteurs d’une entreprise : finance, production, RH, juridique et environnement.': 'Explored different company departments, including finance, production, human resources, legal affairs and the environment.',
    'Immersion dans le fonctionnement d’une structure internationale et compréhension des enjeux de gestion d’une entreprise multiforme.': 'Gained insight into how an international organization operates and the management challenges of a diverse business.',
    'tous': 'all',
    'électronique & fpga': 'electronics & FPGA',
    'robotique': 'robotics',
    'études': 'research',
    'Février – mars 2026': 'February – March 2026',
    'Monitoring ECG sécurisé': 'Secure ECG Monitoring',
    'Acquisition temps réel et chiffrement ASCON sur FPGA.': 'Real-time acquisition and ASCON encryption on FPGA.',
    'Ce projet de monitoring ECG sécurisé repose sur l’acquisition en temps réel et le chiffrement matériel de données médicales via une carte FPGA Zynq-7020.': 'This secure ECG monitoring project combines real-time acquisition and hardware encryption of medical data on a Zynq-7020 FPGA board.',
    'Développé en SystemVerilog sous Vivado dans le cadre de mon cursus à l’École des Mines de Saint-Étienne, le système intègre une gestion précise des communications I2C et UART par machine d’états (FSM) cadencée à 50 MHz.': 'Developed in SystemVerilog with Vivado as part of my degree at École des Mines de Saint-Étienne, the system manages I2C and UART communications using a finite-state machine (FSM) clocked at 50 MHz.',
    'L’architecture s’articule autour d’un cœur de chiffrement matériel ASCON interagissant avec une RAM double port pour sécuriser les trames ECG à la volée.': 'The architecture centers on an ASCON hardware encryption core that interfaces with dual-port RAM to secure ECG frames on the fly.',
    'En aval, la chaîne est complétée par un outil logiciel développé en Python qui comprend un émulateur matériel pour les tests, assure le déchiffrement des données et propose une interface graphique de monitoring en direct, capable d’analyser l’onde ECG, de détecter le complexe PQRST et d’afficher le rythme cardiaque en temps réel.': 'The processing chain is completed by a Python software tool with a hardware emulator for testing, data decryption and a live monitoring interface that analyzes the ECG waveform, detects the PQRST complex and displays heart rate in real time.',
    'Février – mai 2025': 'February – May 2025',
    'Chiffrement ASCON-128': 'ASCON-128 Encryption',
    'Implémentation matérielle de l’algorithme de chiffrement léger ASCON-AEAD128.': 'Hardware implementation of the lightweight ASCON-AEAD128 encryption algorithm.',
    'Cryptographie': 'Cryptography',
    'Conception et développement de bout en bout d’un circuit numérique en SystemVerilog pour garantir la confidentialité et l’authenticité des échanges de données.': 'Designed and developed a complete digital circuit in SystemVerilog to ensure the confidentiality and authenticity of data exchanges.',
    'Modélisation des différentes couches de permutation (addition de constantes, substitution par S-box, diffusion) et création d’une machine d’états pour piloter les quatre phases clés du processus.': 'Modeled the permutation layers (constant addition, S-box substitution and diffusion) and created a finite-state machine to control the four key phases of the process.',
    'Intégration de l’architecture globale et validation complète du système via des outils de simulation, pour assurer la fiabilité du circuit et le débogage des signaux.': 'Integrated the overall architecture and fully validated the system using simulation tools to ensure circuit reliability and debug signals.',
    'Novembre – décembre 2025': 'November – December 2025',
    'Projet IoT': 'IoT Project',
    'Système connecté de monitoring environnemental et de mesure de la qualité de l’air.': 'Connected environmental monitoring and air-quality measurement system.',
    'Conception et développement de bout en bout d’un dispositif d’alerte IoT pour la prévention des risques, dédié au monitoring environnemental et à la mesure de la qualité de l’air.': 'Designed and developed an end-to-end IoT alert device for risk prevention, environmental monitoring and air-quality measurement.',
    'Intégration matérielle de capteurs avec indicateurs LED et transmission des données sans fil via le réseau The Things Network (LoRaWAN).': 'Integrated sensors and LED indicators, with wireless data transmission over The Things Network (LoRaWAN).',
    'Création de dashboards de supervision pour centraliser l’historique des mesures d’IAQ (Indoor Air Quality) et visualiser les données de qualité de l’air en temps réel.': 'Created monitoring dashboards to centralize Indoor Air Quality (IAQ) measurement history and display air-quality data in real time.',
    'Avril – juin 2026': 'April – June 2026',
    'Borne d’arcade Flappy Bird à contrôle capacitif': 'Capacitive-Controlled Flappy Bird Arcade Machine',
    'Borne portable et autonome avec une interface de jeu sans contact.': 'Portable, self-contained arcade machine with a touchless game interface.',
    'Capteurs': 'Sensors',
    'Robotique': 'Robotics',
    'Conception d’une borne d’arcade portable et autonome revisitant Flappy Bird avec une interface sans contact. Le joueur contrôle l’altitude de l’oiseau sur un écran OLED en approchant sa main d’une plaque en cuivre capacitive : plus la main est proche, plus le personnage monte.': 'Designed a portable, self-contained arcade machine reimagining Flappy Bird with a touchless interface. Players control the bird’s altitude on an OLED screen by moving their hand near a capacitive copper plate: the closer the hand, the higher the bird flies.',
    'Développement de l’architecture complète, de la conception du capteur à l’intégration finale. Réalisation du routage d’un circuit conditionneur sur PCB pour traiter le signal, puis programmation de l’acquisition et du filtrage des données sur un microcontrôleur STM32 NUCLEO-F301K8 et de la logique du jeu en C++ sur une carte NUCLEO-L432KC.': 'Developed the complete system, from sensor design to final integration. Routed a signal-conditioning circuit on a PCB, programmed data acquisition and filtering on an STM32 NUCLEO-F301K8, and implemented the game logic in C++ on a NUCLEO-L432KC board.',
    'Intégration de l’électronique dans un boîtier compact inspiré du Minitel et modélisé en 3D, mobilisant des compétences en électronique analogique, en programmation embarquée et en intégration de systèmes.': 'Integrated the electronics into a compact, 3D-modelled case inspired by the Minitel, combining skills in analog electronics, embedded programming and system integration.',
    'Septembre 2024 – mai 2025': 'September 2024 – May 2025',
    'Coupe de France de Robotique': 'French Robotics Cup',
    'Conception d’actionneurs et amélioration mécanique des robots de compétition.': 'Actuator design and mechanical improvements to competition robots.',
    'Équipe': 'Teamwork',
    'Conception du système de lancement des PAMIS (petits actionneurs mobiles indépendants), déclenché par un interrupteur magnétique.': 'Designed the launch system for PAMIS (small independent mobile actuators), triggered by a magnetic switch.',
    'Développement d’un actionneur répondant à la contrainte de la compétition (« faire la fête »).': 'Developed an actuator to meet the competition challenge of “celebrating”.',
    'Mise à jour de la modélisation 3D des robots pour résoudre les problèmes de fermeture du châssis et simplifier sa conception grâce à un système coulissant.': 'Updated the robots’ 3D models to fix chassis closure issues and simplify the design with a sliding mechanism.',
    'Victoire au Hackathon': 'Hackathon Victory',
    'Compétition de robotique avec STMicroelectronics.': 'Robotics competition with STMicroelectronics.',
    'Compétition par équipe organisée par l’AREM avec STMicroelectronics, à Gardanne.': 'Team competition organized in Gardanne by AREM and STMicroelectronics.',
    '2024 – 2025': '2024 – 2025',
    'Étude de la glisse à ski': 'Study of Ski Gliding',
    'Modélisation et conception d’un simulateur de pente glacée.': 'Modelling and design of an icy-slope simulator.',
    'Expérimentation': 'Experimentation',
    'Étude théorique et expérimentale de la glisse d’un ski en laboratoire, avec conception et réalisation d’un dispositif de test simulant une pente glacée.': 'Theoretical and experimental study of ski gliding in a laboratory, including the design and construction of a test rig simulating an icy slope.',
    '2023 – 2024': '2023 – 2024',
    'Étude des éoliennes Savonius': 'Study of Savonius Wind Turbines',
    'Analyse et test d’un prototype d’éolienne verticale.': 'Analysis and testing of a vertical-axis wind turbine prototype.',
    'Énergie': 'Energy',
    'Modélisation': 'Modelling',
    'Étude théorique de l’écartement optimal entre les pales d’une éolienne verticale dans le contexte de l’urbanisme contemporain, suivie de tests sur une éolienne conçue et réalisée par nos soins.': 'Theoretical study of optimal blade spacing for a vertical-axis wind turbine in a contemporary urban-planning context, followed by testing a turbine designed and built by our team.',
    'Présidente de l’AREM': 'AREM President',
    'Leadership technique et implication associative.': 'Technical leadership and community involvement.',
    'Association de Robotique et Électronique des Mines : leadership technique en robotique et implication dans la vie étudiante.': 'The Mines Robotics and Electronics Association: technical leadership in robotics and active participation in student life.',
    'Management et gouvernance': 'Management and Governance',
    'Équipe de 14 personnes, tenue des conseils d’administration.': 'Led a 14-member team and chaired board meetings.',
    'Nouvel organigramme et entretiens de recrutement du mandat EI25 (environ 10 heures).': 'Created a new organizational chart and conducted recruitment interviews for the EI25 term (approximately 10 hours).',
    'Partenariats': 'Partnerships',
    'Représentante légale et porte-parole auprès de l’école et des partenaires.': 'Served as legal representative and spokesperson with the school and partners.',
    'Subvention FDVA de 2 300 € obtenue (dossier Mairie de Gardanne).': 'Secured a €2,300 FDVA grant through an application to Gardanne City Hall.',
    'Négociation avec des industriels majeurs, dont Alstom et STMicroelectronics.': 'Negotiated with major industry partners, including Alstom and STMicroelectronics.',
    'Événements': 'Events',
    'Coupe de France de Robotique 2025, préparation de 2026, Hackathon de programmation de robots.': '2025 French Robotics Cup, preparation for 2026, and a robot-programming hackathon.',
    'Paquathon (50 participants) et Défi Actionneurs, initiation à la robotique pour les étudiants de première année.': 'Paquathon (50 participants) and the Actuator Challenge; robotics workshops for first-year students.',
    'Intégration : soirée AREM, comité d’intégration, « Famille Verte ».': 'Student integration: AREM evening, integration committee and “Green Family”.',
    'Communication': 'Communications',
    'Kakémonos, dépliants, plaquettes, T-shirts du mandat, porte-clés imprimés en 3D.': 'Designed banners, flyers, brochures, term T-shirts and 3D-printed key rings.',
    '2025': '2025',
    'Ingénieurs Solidaires en Action (ISA)': 'Engineers in Solidarity in Action (ISA)',
    'Gestion de projet pour une association d’accompagnement.': 'Project management for a support organization.',
    'Gestion de projet pour l’Association Accompagnement Initiative (Gardanne) : journée bien-être pour des personnes à faibles revenus, avec contacts professionnels et entreprises donatrices, logistique, autofinancement et coordination des bénévoles.': 'Managed a wellbeing day for people on low incomes with Association Accompagnement Initiative (Gardanne), coordinating professional contacts, corporate donors, logistics, self-funding and volunteers.',
    '2025 – 2026': '2025 – 2026',
    'Capitaine · équipe féminine de volley-ball': 'Captain · Women’s Volleyball Team',
    'Coordination d’équipe et planification.': 'Team coordination and scheduling.',
    'Coordination de l’équipe, cohésion de groupe, planification des créneaux et interface avec les équipes adverses de la ligue universitaire.': 'Coordinated the team, built cohesion, scheduled practice sessions and liaised with opposing university-league teams.',
    'Bureau des Internationaux': 'International Students Office',
    'Intégration des étudiants internationaux.': 'Welcoming and integrating international students.',
    'Accueil et intégration des étudiants internationaux, événements de promotion des cultures (repas internationaux).': 'Welcomed and integrated international students and organized cultural events, including international meals.',
    'COMIF · T’ipause': 'COMIF · T’ipause',
    'Accueil et distribution à la cafétéria associative.': 'Cafeteria service and welcoming guests at the student-run cafeteria.',
    'Service et accueil à la cafétéria associative, distribution de repas aux étudiants du campus (rythme bimensuel).': 'Served meals and welcomed students at the campus student-run cafeteria twice a month.',
    'Sensibilisation et science': 'Science Outreach and Awareness',
    'Fête de la Science et recyclage du plastique (PLA).': 'Science Festival and plastic (PLA) recycling.',
    'Broyage Extrême : sensibilisation au recyclage du PLA lors de la journée ODD.': 'Broyage Extrême: raised awareness of PLA recycling during Sustainable Development Goals Day.',
    'Fête de la Science : organisation sur plusieurs mois (d’avril à octobre), gestion des stands.': 'Science Festival: several months of organization (April to October) and stand management.',
    '· Compétences': '· Skills',
    'Programmation': 'Programming',
    'Systèmes embarqués': 'Embedded Systems',
    'Conception et modélisation': 'Design and Modelling',
    'Autres outils': 'Other Tools',
    '· Langues': '· Languages',
    'Langues maternelles': 'Native Languages',
    'Français': 'French',
    'Portugais': 'Portuguese',
    'Niveau avancé': 'Advanced',
    'Anglais (C1)': 'English (C1)',
    'Espagnol (B2, DELE)': 'Spanish (B2, DELE)',
    'Niveau élémentaire': 'Beginner',
    'Arabe (A2)': 'Arabic (A2)',
    '· Centres d’intérêt': '· Interests',
    'Sport et musique': 'Sports and Music',
    'Volley-ball': 'Volleyball',
    'Guitare': 'Guitar',
    'Technologie': 'Technology',
    'Voyages': 'Travel',
    'Europe': 'Europe',
    'Afrique': 'Africa',
    'Amérique du Nord': 'North America',
    'Amérique du Sud': 'South America',
    '· Contact': '· Contact',
    'Changer de thème': 'Change theme',
    '◐ thème': '◐ theme',
    'Filtrer les projets': 'Filter projects'
  };
  var french = {};
  Object.keys(english).forEach(function (source) {
    if (english[source] !== source) french[english[source]] = source;
  });

  function setLanguage(language) {
    var dictionary = language === 'en' ? english : french;
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var node;
    while ((node = walker.nextNode())) {
      var value = node.nodeValue;
      var key = value.replace(/\u00a0/g, ' ').trim();
      if (dictionary[key]) {
        var leading = value.match(/^\s*/)[0];
        var trailing = value.match(/\s*$/)[0];
        node.nodeValue = leading + dictionary[key] + trailing;
      }
    }
    root.lang = language;
    document.title = language === 'en'
      ? 'Yasmin Hadj-Said · Microelectronics Systems & Computer Science Engineer'
      : 'Yasmin Hadj-Said · Ingénieure Systèmes Microélectroniques & Informatique';
    document.querySelector('meta[name="description"]').content = language === 'en'
      ? 'Engineering student at École des Mines de Saint-Étienne: FPGA, embedded systems, robotics and management.'
      : 'Étudiante ingénieure à l’École des Mines de Saint-Étienne : FPGA, systèmes embarqués, robotique, management.';
    var languageButton = document.getElementById('lang');
    languageButton.textContent = language === 'en' ? 'FR' : 'EN';
    languageButton.setAttribute('aria-label', language === 'en' ? 'Passer en français' : 'Switch to English');
    document.getElementById('th').setAttribute('aria-label', language === 'en' ? 'Change theme' : 'Changer de thème');
    document.querySelector('.tabs').setAttribute('aria-label', language === 'en' ? 'Filter projects' : 'Filtrer les projets');
    try { localStorage.setItem('language', language); } catch (e) {}
    if (typeof sections !== 'undefined') spy();
  }

  var languageButton = document.getElementById('lang');
  if (languageButton) {
    var initialLanguage = 'fr';
    try {
      if (localStorage.getItem('language') === 'en') initialLanguage = 'en';
    } catch (e) {}
    if (initialLanguage !== 'fr') setLanguage(initialLanguage);
    languageButton.addEventListener('click', function () {
      setLanguage(root.lang === 'en' ? 'fr' : 'en');
    });
  }

  /* ---- Âge calculé automatiquement ---- */
  var ageEl = document.getElementById('age');
  if (ageEl) {
    var now = new Date(), age = now.getFullYear() - 2004;
    if (now < new Date(now.getFullYear(), 4, 12)) age--;
    ageEl.textContent = age;
  }

  /* ---- Thème clair / sombre (mémorisé) ---- */
  try {
    var saved = localStorage.getItem('theme');
    if (saved) root.dataset.theme = saved;
  } catch (e) {}
  var th = document.getElementById('th');
  if (th) {
    th.addEventListener('click', function () {
      var dark = root.dataset.theme === 'dark' ||
        (!root.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches);
      root.dataset.theme = dark ? 'light' : 'dark';
      try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
    });
  }

  /* ---- Filtre des projets ---- */
  var tabs = document.querySelectorAll('.tabs button');
  var cards = document.querySelectorAll('#pj > .card');
  tabs.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabs.forEach(function (b) { b.setAttribute('aria-pressed', b === btn); });
      cards.forEach(function (c) {
        c.classList.toggle('hide', btn.dataset.f !== 'all' && c.dataset.t !== btn.dataset.f);
      });
    });
  });

  /* ---- Menu : section active + point mobile ---- */
  var links = Array.prototype.slice.call(document.querySelectorAll('#idx a'));
  var dot = document.getElementById('dot');
  var sections = links.map(function (a) {
    return document.querySelector(a.getAttribute('href'));
  });
  var current = -1;

  function mark(i) {
    if (i === current) return;
    current = i;
    var a = links[i];
    links.forEach(function (x) { x.classList.toggle('on', x === a); });
    placeDot();
    if (innerWidth <= 860) {
      var box = a.closest('div');
      box.scrollTo({ left: a.offsetLeft - box.clientWidth / 2 + a.offsetWidth / 2, behavior: 'smooth' });
    }
  }

  function placeDot() {
    if (!dot || current < 0) return;
    var li = links[current].parentNode;
    dot.style.transform = 'translateY(' + (li.offsetTop + li.offsetHeight / 2 - 4) + 'px)';
  }

  function spy() {
    var line = innerHeight * 0.35, idx = 0;
    sections.forEach(function (s, i) {
      if (s && s.getBoundingClientRect().top <= line) idx = i;
    });
    if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) idx = sections.length - 1;
    mark(idx);
  }

  var ticking = false;
  addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { spy(); ticking = false; });
  }, { passive: true });
  addEventListener('resize', function () { placeDot(); spy(); });
  spy();
})();