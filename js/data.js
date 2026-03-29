const GROWIT = (window.GROWIT = {
  HERO: {
    lines: ['We help businesses', 'grow at every stage.'],
    typeSpeed: 45,
    pauseBetweenLines: 600,
  },

  NAV_SECTIONS: ['about', 'services', 'how', 'testimonials', 'contact'],

  SCROLL_TOP_THRESHOLD: 400,

  CAROUSEL: {
    count: 5,
    animMs: 650,
  },

  STATS: [
    { target: 140, suffix: '+', desc: 'Businesses scaled across industries' },
    {
      target: 40,
      prefix: '€',
      suffix: 'M+',
      desc: 'Combined client revenue unlocked',
    },
    { target: 8, suffix: ' yrs', desc: 'Deep consulting expertise' },
    { target: 95, suffix: '%', desc: 'Client satisfaction rate' },
  ],

  TESTIMONIALS: [
    {
      img: 'Assets/IndianMale.jpg',
      name: 'Arjun Mehta',
      role: 'Founder, NestWell Homes',
      quote:
        "GrowIT didn't just give us a strategy — they sat in the room with us as we built it. The revenue clarity we have now is something I didn't think was possible in year two.",
    },
    {
      img: 'Assets/AsianMale.jpg',
      name: 'Wei Chen',
      role: 'CEO, LogiStack',
      quote:
        'I came in with a mid-stage company stuck in a plateau. GrowIT helped us identify two untapped channels that now drive 40% of our total revenue. Genuinely transformative.',
    },
    {
      img: 'Assets/frenchWhite.jpg',
      name: 'Anaïs Bernard',
      role: 'Co-founder, Canopée Studio',
      quote:
        'Your mission is our mission — they actually mean it. The team felt as invested in our success as we did. We hit our 12-month target in seven months.',
    },
    {
      img: 'Assets/CaucasianMale.jpg',
      name: 'James Carter',
      role: 'Founder & CEO, PulseFlow',
      quote:
        'Working with GrowIT felt like having a world-class growth team on speed dial. They helped us go from $800K to $2.4M ARR in 14 months.',
    },
    {
      img: 'Assets/CaucasianFemale.jpg',
      name: 'Emma Clarke',
      role: 'Co-founder, Verde Collective',
      quote:
        'The operations systems they built for us removed so much chaos. We finally have predictable growth instead of constant firefighting.',
    },
  ],

  // ── TRANSLATIONS ──────────────────────────────────────────────────────────
  // Tone guide:
  //   en — clear, ambitious, founder-facing
  //   fr — refined, professional, warm
  //   de — direct, results-first, zero fluff
  //   es — energetic, warm, relationship-driven
  //   it — expressive, confident, passionate

  TRANSLATIONS: {
    en: {
      nav: {
        about: 'About',
        services: 'Services',
        how: 'How It Works',
        stories: 'Stories',
        cta: 'Start a Conversation →',
      },
      hero: {
        badge: '✦ We help businesses grow',
        lines: ['We help businesses', 'grow at every stage.'],
        sub: 'From entry-level startups to mid-stage companies, GrowIT turns your ambition into measurable momentum. Your mission is our mission — and growth is what we do.',
        cta1: 'Start a Conversation',
        cta2: 'Explore Services',
        dashboard: {
          title: 'Growth Dashboard',
          live: '↑ Live',
          metrics: [
            'Revenue growth avg.',
            'Client retention rate',
            'Clients served',
            'Avg. time to results',
          ],
          bars: ['Market Expansion', 'Revenue Growth'],
          activeLabel: 'Active growth partnerships right now',
        },
      },
      ticker: [
        'Your Mission Is Our Mission',
        'Entry Stage & Mid Stage Growth',
        'Start A Conversation',
        'Strategy That Scales',
        'Results You Can Measure',
        'Built For Ambitious Founders',
      ],
      about: {
        label: 'Our Mission',
        heading: 'We help entry-stage and mid-stage businesses grow.',
        sub: 'GrowIT bridges the gap between where you are and where you want to be. We partner with founders, operators and leadership teams to build the systems, strategy, and momentum that drive real growth.',
        stats: [
          'Businesses scaled across industries',
          'Combined client revenue unlocked',
          'Deep consulting expertise',
          'Client satisfaction rate',
        ],
        quote:
          '"Your mission is our mission — we don\'t succeed unless you do."',
        quoteAttr: '— GrowIT Philosophy',
        quoteCta: 'Start a Conversation →',
      },
      services: {
        label: 'What We Do',
        heading: 'Expertise built for every stage of your journey.',
        hint: '↻ Learn more',
        hintBack: '↻ Flip back',
        items: [
          {
            name: 'Growth Strategy',
            desc: 'We develop clear, actionable roadmaps aligned with your market, team, and ambitions — built to scale.',
            back: [
              'Custom 90-day and annual growth roadmaps',
              'Competitive landscape analysis',
              'OKR and milestone planning',
              'Best for: startups ready to move from idea to traction',
            ],
          },
          {
            name: 'Market Validation',
            desc: 'Before you invest, we validate. Data-driven analysis that de-risks your biggest moves and finds your real opportunity.',
            back: [
              'Customer discovery interviews',
              'TAM / SAM / SOM sizing',
              'Demand testing before you build',
              'Best for: founders unsure if their market is real',
            ],
          },
          {
            name: 'Operations & Systems',
            desc: 'We streamline the engine behind your growth — processes, tools, and team structures built for efficiency.',
            back: [
              'SOPs and process documentation',
              'Tool stack audit and optimisation',
              'Hiring frameworks and org design',
              'Best for: scaling teams feeling chaotic',
            ],
          },
          {
            name: 'Revenue Acceleration',
            desc: "From pipeline design to pricing architecture, we identify and unlock the revenue levers you're not pulling yet.",
            back: [
              'Pricing model redesign',
              'Sales funnel and pipeline audit',
              'Upsell and retention strategy',
              'Best for: businesses with traction but flat revenue',
            ],
          },
          {
            name: 'Partnerships & BD',
            desc: 'We help you build the alliances and distribution channels that compound your growth without proportional cost.',
            back: [
              'Partner identification and outreach',
              'Co-marketing and distribution deals',
              'Channel strategy and negotiation',
              'Best for: businesses wanting leverage without headcount',
            ],
          },
          {
            name: 'Launch & Scale',
            desc: 'New market, new product, new phase — we plan and execute go-to-market with precision and pace.',
            back: [
              'Go-to-market playbook design',
              'Launch sequencing and PR strategy',
              'Post-launch iteration and feedback loops',
              'Best for: businesses entering new markets or launching products',
            ],
          },
        ],
      },
      how: {
        label: 'How It Works',
        heading: 'From first conversation to measurable results.',
        steps: [
          {
            title: 'Start a Conversation',
            desc: 'No pitch decks, no pressure. We listen first — to understand your vision, challenges, and where you really want to go.',
          },
          {
            title: 'Deep Diagnosis',
            desc: 'We map your current state against your growth potential — market, ops, revenue, and team — to find the real levers.',
          },
          {
            title: 'Build the Roadmap',
            desc: 'We co-create a clear, prioritised plan that is realistic, ambitious, and ownership-driven from day one.',
          },
          {
            title: 'Execute & Grow',
            desc: 'We stay in the trenches with you — hands-on support, accountability, and iteration until results are real.',
          },
        ],
      },
      testimonials: {
        label: 'Client Stories',
        heading: 'Founders and operators who trusted us with their mission.',
      },
      cta: {
        badge: "✦ Let's build something together",
        heading: 'Ready to make your mission a reality?',
        sub: "Whether you're just getting started or ready to scale — the best time to talk is now. No commitment, just a conversation.",
        btn1: 'Start a Conversation',
        btn2: 'Explore Services',
      },
      contact: {
        label: 'Contact',
        heading: "Let's start a conversation.",
        sub: "Reach out and tell us where you are and where you want to be. We'll take it from there.",
        emailLabel: 'Email us',
        phoneLabel: 'Call us',
        locationLabel: 'Location',
        locationVal: 'Available globally · Remote & on-site',
        cardHeading: 'Book a free intro call',
        cardSub:
          'No sales pitch — just a genuine conversation about your business. Pick a time that works for you.',
        cardBtn: 'Choose a Time →',
      },
      footer: {
        tagline:
          'We help entry-stage and mid-stage businesses grow. Your mission is our mission.',
        servicesHeading: 'Services',
        companyHeading: 'Company',
        connectHeading: 'Connect',
        copyright: '© 2026 GrowIT Consulting. All rights reserved.',
        legal: 'Privacy Policy · Terms of Service',
        links: {
          services: [
            'Growth Strategy',
            'Market Validation',
            'Operations & Systems',
            'Revenue Acceleration',
          ],
          company: ['About GrowIT', 'How It Works', 'Client Stories'],
          connect: [
            'Start a Conversation',
            'LinkedIn',
            'Instagram',
            'Twitter / X',
          ],
        },
      },
    },

    fr: {
      nav: {
        about: 'À Propos',
        services: 'Services',
        how: 'Notre Méthode',
        stories: 'Témoignages',
        cta: 'Démarrer une Discussion →',
      },
      hero: {
        badge: '✦ Nous faisons grandir les entreprises',
        lines: ['Nous faisons grandir', 'les entreprises à chaque étape.'],
        sub: "Des startups émergentes aux entreprises en pleine croissance, GrowIT transforme vos ambitions en résultats concrets. Votre mission est notre mission — et la croissance, c'est notre métier.",
        cta1: 'Démarrer une Discussion',
        cta2: 'Découvrir nos Services',
        dashboard: {
          title: 'Tableau de Bord',
          live: '↑ En Direct',
          metrics: [
            'Croissance moyenne du CA',
            'Taux de fidélisation',
            'Clients accompagnés',
            'Délai moyen de résultats',
          ],
          bars: ['Expansion de Marché', "Croissance du Chiffre d'Affaires"],
          activeLabel: 'Partenariats de croissance actifs en ce moment',
        },
      },
      ticker: [
        'Votre Mission Est Notre Mission',
        'Startups & Entreprises en Croissance',
        'Démarrer une Discussion',
        "Une Stratégie qui Passe à l'Échelle",
        'Des Résultats Mesurables',
        'Pour les Fondateurs Ambitieux',
      ],
      about: {
        label: 'Notre Mission',
        heading: 'Nous accompagnons les startups et entreprises en croissance.',
        sub: "GrowIT comble l'écart entre où vous en êtes et où vous voulez aller. Nous travaillons main dans la main avec les fondateurs, dirigeants et équipes pour construire les systèmes, la stratégie et l'élan qui génèrent une vraie croissance.",
        stats: [
          'Entreprises propulsées tous secteurs',
          "Chiffre d'affaires client débloqué",
          "Années d'expertise en conseil",
          'Taux de satisfaction client',
        ],
        quote:
          '« Votre mission est notre mission — nous ne réussissons que si vous réussissez. »',
        quoteAttr: '— La Philosophie GrowIT',
        quoteCta: 'Démarrer une Discussion →',
      },
      services: {
        label: 'Ce Que Nous Faisons',
        heading: 'Une expertise taillée pour chaque étape de votre parcours.',
        hint: '↻ En savoir plus',
        hintBack: '↻ Retourner',
        items: [
          {
            name: 'Stratégie de Croissance',
            desc: 'Nous élaborons des feuilles de route claires et actionnables, alignées avec votre marché, votre équipe et vos ambitions.',
            back: [
              'Plans de croissance sur 90 jours et annuels',
              'Analyse du paysage concurrentiel',
              'Définition des OKR et jalons clés',
              "Idéal pour : les startups prêtes à passer de l'idée à la traction",
            ],
          },
          {
            name: 'Validation de Marché',
            desc: "Avant d'investir, nous validons. Une analyse rigoureuse pour réduire les risques et identifier votre vraie opportunité.",
            back: [
              'Entretiens de découverte client',
              'Calcul du TAM / SAM / SOM',
              'Tests de demande avant développement',
              'Idéal pour : les fondateurs qui doutent de la réalité de leur marché',
            ],
          },
          {
            name: 'Opérations & Systèmes',
            desc: "Nous optimisons le moteur de votre croissance — processus, outils et structures d'équipe pensés pour l'efficacité.",
            back: [
              'Documentation et procédures opérationnelles',
              "Audit et optimisation de la stack d'outils",
              'Cadres de recrutement et design organisationnel',
              'Idéal pour : les équipes en pleine croissance qui manquent de structure',
            ],
          },
          {
            name: 'Accélération des Revenus',
            desc: "De la conception du pipeline à l'architecture tarifaire, nous activons les leviers de revenus que vous n'utilisez pas encore.",
            back: [
              'Refonte du modèle de tarification',
              'Audit du funnel de vente et du pipeline',
              "Stratégie d'upsell et de fidélisation",
              "Idéal pour : les entreprises avec de la traction mais un chiffre d'affaires stagnant",
            ],
          },
          {
            name: 'Partenariats & Développement',
            desc: 'Nous vous aidons à nouer des alliances et des canaux de distribution qui démultiplient votre croissance sans coûts proportionnels.',
            back: [
              'Identification et approche des partenaires',
              'Accords de co-marketing et de distribution',
              'Stratégie de canaux et négociation',
              'Idéal pour : les entreprises qui veulent du levier sans recruter',
            ],
          },
          {
            name: "Lancement & Passage à l'Échelle",
            desc: 'Nouveau marché, nouveau produit, nouvelle phase — nous planifions et exécutons votre go-to-market avec précision et rapidité.',
            back: [
              'Conception du playbook go-to-market',
              'Séquençage du lancement et stratégie RP',
              'Itération post-lancement et boucles de feedback',
              'Idéal pour : les entreprises qui entrent sur de nouveaux marchés ou lancent des produits',
            ],
          },
        ],
      },
      how: {
        label: 'Notre Méthode',
        heading: 'De la première discussion aux résultats concrets.',
        steps: [
          {
            title: 'On Commence par Discuter',
            desc: "Pas de présentation commerciale, pas de pression. On écoute d'abord — pour comprendre votre vision, vos défis et là où vous voulez vraiment aller.",
          },
          {
            title: 'Diagnostic Approfondi',
            desc: 'Nous cartographions votre situation actuelle face à votre potentiel de croissance — marché, opérations, revenus, équipe — pour identifier les vrais leviers.',
          },
          {
            title: 'Construction de la Feuille de Route',
            desc: 'Nous co-créons un plan clair, priorisé, réaliste et ambitieux, avec une propriété claire dès le premier jour.',
          },
          {
            title: 'Exécution & Croissance',
            desc: "Nous restons dans les tranchées avec vous — soutien opérationnel, responsabilisation et itération jusqu'à ce que les résultats soient au rendez-vous.",
          },
        ],
      },
      testimonials: {
        label: 'Témoignages Clients',
        heading:
          'Des fondateurs et dirigeants qui nous ont confié leur mission.',
      },
      cta: {
        badge: '✦ Construisons quelque chose ensemble',
        heading: 'Prêt à faire de votre mission une réalité ?',
        sub: "Que vous démarriez tout juste ou que vous soyez prêt à passer à la vitesse supérieure — le meilleur moment pour en parler, c'est maintenant. Sans engagement, juste une conversation.",
        btn1: 'Démarrer une Discussion',
        btn2: 'Découvrir nos Services',
      },
      contact: {
        label: 'Contact',
        heading: 'Commençons à échanger.',
        sub: "Dites-nous où vous en êtes et où vous souhaitez aller. On s'occupe du reste.",
        emailLabel: 'Écrivez-nous',
        phoneLabel: 'Appelez-nous',
        locationLabel: 'Localisation',
        locationVal: 'Disponible partout · À distance & sur site',
        cardHeading: 'Réservez un appel découverte gratuit',
        cardSub:
          'Pas de pitch commercial — juste une vraie conversation sur votre activité. Choisissez le créneau qui vous convient.',
        cardBtn: 'Choisir un Créneau →',
      },
      footer: {
        tagline:
          'Nous accompagnons les startups et entreprises en croissance. Votre mission est notre mission.',
        servicesHeading: 'Services',
        companyHeading: 'Entreprise',
        connectHeading: 'Contact',
        copyright: '© 2026 GrowIT Consulting. Tous droits réservés.',
        legal: "Politique de Confidentialité · Conditions d'Utilisation",
        links: {
          services: [
            'Stratégie de Croissance',
            'Validation de Marché',
            'Opérations & Systèmes',
            'Accélération des Revenus',
          ],
          company: [
            'À Propos de GrowIT',
            'Notre Méthode',
            'Témoignages Clients',
          ],
          connect: [
            'Démarrer une Discussion',
            'LinkedIn',
            'Instagram',
            'Twitter / X',
          ],
        },
      },
      testimonialQuotes: [
        "GrowIT ne nous a pas juste fourni une stratégie — ils étaient là, à nos côtés, pendant toute la construction. Une clarté financière que je ne croyais pas possible en deuxième année.",
        "Je suis arrivé avec une entreprise enlisée. GrowIT a identifié deux canaux inexploités qui représentent aujourd'hui 40 % de nos revenus. Vraiment transformateur.",
        "Votre mission est notre mission — ils le pensent vraiment. L'équipe était aussi investie que nous. On a atteint l'objectif annuel en sept mois.",
        "Travailler avec GrowIT, c'est comme avoir une équipe de croissance de premier rang à portée de main. On est passé de 800K€ à 2,4M€ ARR en 14 mois.",
        "Les systèmes opérationnels qu'ils ont mis en place ont éliminé le chaos. On a enfin une croissance prévisible, sans gestion de crise permanente.",
      ],
    },

    de: {
      nav: {
        about: 'Über Uns',
        services: 'Leistungen',
        how: 'So Arbeiten Wir',
        stories: 'Erfahrungen',
        cta: 'Gespräch Starten →',
      },
      hero: {
        badge: '✦ Wir lassen Unternehmen wachsen',
        lines: ['Wir lassen Unternehmen', 'in jeder Phase wachsen.'],
        sub: 'Von frühen Startups bis zu wachsenden Mittelständlern — GrowIT macht aus Ambitionen messbare Ergebnisse. Ihr Ziel ist unser Auftrag. Wachstum ist unser Handwerk.',
        cta1: 'Gespräch Starten',
        cta2: 'Leistungen Ansehen',
        dashboard: {
          title: 'Wachstums-Dashboard',
          live: '↑ Live',
          metrics: [
            'Ø Umsatzwachstum',
            'Kundenbindungsrate',
            'Betreute Kunden',
            'Ø Zeit bis Ergebnis',
          ],
          bars: ['Marktexpansion', 'Umsatzwachstum'],
          activeLabel: 'Aktive Wachstumspartnerschaften gerade jetzt',
        },
      },
      ticker: [
        'Ihr Ziel Ist Unser Auftrag',
        'Früh- & Wachstumsphase',
        'Gespräch Starten',
        'Strategie die Skaliert',
        'Messbare Ergebnisse',
        'Für Ambitionierte Gründer',
      ],
      about: {
        label: 'Unsere Mission',
        heading: 'Wir bringen Startups und wachsende Unternehmen nach vorne.',
        sub: 'GrowIT schließt die Lücke zwischen Ihrem aktuellen Stand und Ihrem Ziel. Wir arbeiten direkt mit Gründern, Betreibern und Führungsteams — und bauen die Systeme, Strategie und den Schwung auf, der echtes Wachstum erzeugt.',
        stats: [
          'Skalierte Unternehmen branchenübergreifend',
          'Freigesetzter Kundenumsatz gesamt',
          'Jahre Beratungserfahrung',
          'Kundenzufriedenheitsrate',
        ],
        quote:
          '„Ihr Ziel ist unser Auftrag — wir scheitern nur gemeinsam oder gar nicht."',
        quoteAttr: '— GrowIT Leitbild',
        quoteCta: 'Gespräch Starten →',
      },
      services: {
        label: 'Was Wir Tun',
        heading: 'Klare Expertise für jede Unternehmensphase.',
        hint: '↻ Mehr erfahren',
        hintBack: '↻ Zurück',
        items: [
          {
            name: 'Wachstumsstrategie',
            desc: 'Wir entwickeln klare, umsetzbare Roadmaps — abgestimmt auf Ihren Markt, Ihr Team und Ihre Ziele. Ohne Umwege.',
            back: [
              'Individuelle 90-Tage- und Jahres-Roadmaps',
              'Wettbewerbsanalyse',
              'OKR- und Meilensteinplanung',
              'Ideal für: Startups bereit für den Schritt von der Idee zur Traktion',
            ],
          },
          {
            name: 'Marktvalidierung',
            desc: 'Erst validieren, dann investieren. Datenbasierte Analyse, die Risiken minimiert und echte Chancen aufdeckt.',
            back: [
              'Kundeninterviews und Bedarfsanalyse',
              'TAM / SAM / SOM Berechnung',
              'Nachfragetests vor der Entwicklung',
              'Ideal für: Gründer die ihren Markt noch nicht kennen',
            ],
          },
          {
            name: 'Betrieb & Systeme',
            desc: 'Wir optimieren das Fundament Ihres Wachstums — Prozesse, Tools und Teamstrukturen für maximale Effizienz.',
            back: [
              'SOPs und Prozessdokumentation',
              'Tool-Stack-Audit und Optimierung',
              'Einstellungsrahmen und Organisationsdesign',
              'Ideal für: wachsende Teams die Struktur brauchen',
            ],
          },
          {
            name: 'Umsatzbeschleunigung',
            desc: 'Von der Pipeline bis zur Preisarchitektur — wir finden und aktivieren die Umsatzhebel, die Sie noch nicht nutzen.',
            back: [
              'Überarbeitung des Preismodells',
              'Sales-Funnel- und Pipeline-Audit',
              'Upsell- und Kundenbindungsstrategie',
              'Ideal für: Unternehmen mit Traktion aber stagnierenden Umsätzen',
            ],
          },
          {
            name: 'Partnerschaften & BD',
            desc: 'Wir helfen Ihnen, die Allianzen und Vertriebskanäle aufzubauen, die Ihr Wachstum multiplizieren — ohne proportionale Kosten.',
            back: [
              'Partneridentifikation und Ansprache',
              'Co-Marketing- und Distributionsvereinbarungen',
              'Kanalstrategie und Verhandlung',
              'Ideal für: Unternehmen die Hebel ohne Personalaufbau suchen',
            ],
          },
          {
            name: 'Launch & Skalierung',
            desc: 'Neuer Markt, neues Produkt, neue Phase — wir planen und führen Ihren Go-to-Market präzise und schnell aus.',
            back: [
              'Go-to-Market-Playbook',
              'Launch-Sequenzierung und PR-Strategie',
              'Post-Launch-Iteration und Feedbackschleifen',
              'Ideal für: Unternehmen die neue Märkte erschließen oder Produkte launchen',
            ],
          },
        ],
      },
      how: {
        label: 'So Arbeiten Wir',
        heading: 'Vom ersten Gespräch zu messbaren Ergebnissen.',
        steps: [
          {
            title: 'Erst Zuhören',
            desc: 'Kein Verkaufsgespräch, kein Druck. Wir hören zuerst zu — um Ihre Vision, Herausforderungen und echten Ziele zu verstehen.',
          },
          {
            title: 'Tiefenanalyse',
            desc: 'Wir analysieren Ihre aktuelle Lage gegen Ihr Wachstumspotenzial — Markt, Betrieb, Umsatz, Team — und finden die entscheidenden Hebel.',
          },
          {
            title: 'Roadmap Entwickeln',
            desc: 'Wir erarbeiten gemeinsam einen klaren, priorisierten Plan — realistisch, ambitioniert, mit klarer Verantwortung von Tag eins.',
          },
          {
            title: 'Umsetzen & Wachsen',
            desc: 'Wir bleiben dabei — operative Unterstützung, klare Verantwortlichkeit und Anpassung bis die Ergebnisse stimmen.',
          },
        ],
      },
      testimonials: {
        label: 'Kundenmeinungen',
        heading:
          'Gründer und Unternehmer, die uns ihre Mission anvertraut haben.',
      },
      cta: {
        badge: '✦ Lassen Sie uns etwas aufbauen',
        heading: 'Bereit, Ihre Mission Wirklichkeit werden zu lassen?',
        sub: 'Ob Sie gerade erst starten oder bereit sind zu skalieren — der beste Zeitpunkt zum Reden ist jetzt. Keine Verpflichtung, nur ein Gespräch.',
        btn1: 'Gespräch Starten',
        btn2: 'Leistungen Ansehen',
      },
      contact: {
        label: 'Kontakt',
        heading: 'Starten wir ein Gespräch.',
        sub: 'Sagen Sie uns wo Sie stehen und wo Sie hinwollen. Den Rest übernehmen wir.',
        emailLabel: 'E-Mail',
        phoneLabel: 'Telefon',
        locationLabel: 'Standort',
        locationVal: 'Weltweit verfügbar · Remote & vor Ort',
        cardHeading: 'Kostenloses Erstgespräch buchen',
        cardSub:
          'Kein Verkaufsgespräch — nur ein ehrliches Gespräch über Ihr Unternehmen. Wählen Sie einen Termin der passt.',
        cardBtn: 'Termin Wählen →',
      },
      footer: {
        tagline:
          'Wir bringen Startups und wachsende Unternehmen nach vorne. Ihr Ziel ist unser Auftrag.',
        servicesHeading: 'Leistungen',
        companyHeading: 'Unternehmen',
        connectHeading: 'Kontakt',
        copyright: '© 2026 GrowIT Consulting. Alle Rechte vorbehalten.',
        legal: 'Datenschutz · Nutzungsbedingungen',
        links: {
          services: [
            'Wachstumsstrategie',
            'Marktvalidierung',
            'Betrieb & Systeme',
            'Umsatzbeschleunigung',
          ],
          company: ['Über GrowIT', 'So Arbeiten Wir', 'Kundenmeinungen'],
          connect: ['Gespräch Starten', 'LinkedIn', 'Instagram', 'Twitter / X'],
        },
      },
      testimonialQuotes: [
        "GrowIT hat uns keine Strategie hingeworfen — sie waren dabei, als wir sie gemeinsam erarbeiteten. Die Umsatzklarheit, die wir jetzt haben, hielt ich im zweiten Jahr für unmöglich.",
        "Ich kam mit einem Unternehmen im Stillstand. GrowIT hat zwei ungenutzte Kanäle identifiziert, die heute 40 % unseres Umsatzes ausmachen. Ein echter Wendepunkt.",
        "Ihre Mission ist unsere Mission — das meinen sie ernst. Das Team war genauso engagiert wie wir. Unser Jahresziel haben wir in sieben Monaten erreicht.",
        "Mit GrowIT zu arbeiten ist wie ein erstklassiges Wachstumsteam auf Abruf. Wir sind in 14 Monaten von 800K auf 2,4M€ ARR gewachsen.",
        "Die Prozesse, die sie aufgebaut haben, haben das Chaos beseitigt. Endlich planbares Wachstum statt ständiger Feuerlöscherei.",
      ],
    },

    es: {
      nav: {
        about: 'Nosotros',
        services: 'Servicios',
        how: 'Cómo Trabajamos',
        stories: 'Historias',
        cta: 'Hablemos →',
      },
      hero: {
        badge: '✦ Hacemos crecer empresas',
        lines: ['Hacemos crecer empresas', 'en cada etapa del camino.'],
        sub: 'Desde startups en sus primeros pasos hasta empresas en expansión, GrowIT convierte tus ambiciones en resultados reales. Tu misión es nuestra misión — y el crecimiento es lo nuestro.',
        cta1: 'Hablemos',
        cta2: 'Ver Servicios',
        dashboard: {
          title: 'Panel de Crecimiento',
          live: '↑ En Vivo',
          metrics: [
            'Crecimiento promedio de ingresos',
            'Tasa de retención de clientes',
            'Clientes atendidos',
            'Tiempo promedio a resultados',
          ],
          bars: ['Expansión de Mercado', 'Crecimiento de Ingresos'],
          activeLabel: 'Alianzas de crecimiento activas ahora mismo',
        },
      },
      ticker: [
        'Tu Misión Es Nuestra Misión',
        'Etapa Inicial & Crecimiento',
        'Hablemos',
        'Estrategia que Escala',
        'Resultados que se Miden',
        'Para Fundadores con Ambición',
      ],
      about: {
        label: 'Nuestra Misión',
        heading:
          'Ayudamos a empresas en etapa inicial y de crecimiento a despegar.',
        sub: 'GrowIT cierra la brecha entre donde estás y donde quieres llegar. Nos asociamos con fundadores, operadores y equipos directivos para construir los sistemas, la estrategia y el impulso que generan crecimiento real.',
        stats: [
          'Empresas escaladas en distintos sectores',
          'Ingresos combinados desbloqueados',
          'Años de experiencia en consultoría',
          'Tasa de satisfacción de clientes',
        ],
        quote:
          '"Tu misión es nuestra misión — nosotros solo ganamos si tú ganas."',
        quoteAttr: '— Filosofía GrowIT',
        quoteCta: 'Hablemos →',
      },
      services: {
        label: 'Lo Que Hacemos',
        heading: 'Experiencia diseñada para cada etapa de tu recorrido.',
        hint: '↻ Saber más',
        hintBack: '↻ Volver',
        items: [
          {
            name: 'Estrategia de Crecimiento',
            desc: 'Desarrollamos hojas de ruta claras y accionables, alineadas con tu mercado, equipo y ambiciones — diseñadas para escalar.',
            back: [
              'Planes de crecimiento de 90 días y anuales',
              'Análisis del panorama competitivo',
              'Planificación de OKRs e hitos',
              'Ideal para: startups listas para pasar de la idea a la tracción',
            ],
          },
          {
            name: 'Validación de Mercado',
            desc: 'Antes de invertir, validamos. Análisis basado en datos que reduce riesgos y encuentra tu oportunidad real.',
            back: [
              'Entrevistas de descubrimiento con clientes',
              'Cálculo de TAM / SAM / SOM',
              'Pruebas de demanda antes de construir',
              'Ideal para: fundadores que no saben si su mercado es real',
            ],
          },
          {
            name: 'Operaciones & Sistemas',
            desc: 'Optimizamos el motor de tu crecimiento — procesos, herramientas y estructuras de equipo pensadas para la eficiencia.',
            back: [
              'SOPs y documentación de procesos',
              'Auditoría y optimización de herramientas',
              'Marcos de contratación y diseño organizacional',
              'Ideal para: equipos en expansión que necesitan estructura',
            ],
          },
          {
            name: 'Aceleración de Ingresos',
            desc: 'Desde el diseño del pipeline hasta la arquitectura de precios, identificamos y activamos las palancas de ingresos que aún no estás usando.',
            back: [
              'Rediseño del modelo de precios',
              'Auditoría del embudo de ventas y pipeline',
              'Estrategia de upsell y retención',
              'Ideal para: empresas con tracción pero ingresos estancados',
            ],
          },
          {
            name: 'Alianzas y Desarrollo',
            desc: 'Te ayudamos a construir las alianzas y canales de distribución que multiplican tu crecimiento sin costos proporcionales.',
            back: [
              'Identificación y contacto con socios',
              'Acuerdos de co-marketing y distribución',
              'Estrategia de canales y negociación',
              'Ideal para: empresas que buscan apalancamiento sin contratar',
            ],
          },
          {
            name: 'Lanzamiento & Escala',
            desc: 'Nuevo mercado, nuevo producto, nueva etapa — planificamos y ejecutamos tu go-to-market con precisión y velocidad.',
            back: [
              'Diseño del playbook go-to-market',
              'Secuenciación del lanzamiento y estrategia de PR',
              'Iteración post-lanzamiento y ciclos de feedback',
              'Ideal para: empresas que entran en nuevos mercados o lanzan productos',
            ],
          },
        ],
      },
      how: {
        label: 'Cómo Trabajamos',
        heading: 'De la primera conversación a los resultados medibles.',
        steps: [
          {
            title: 'Primero Escuchamos',
            desc: 'Sin presentaciones comerciales, sin presión. Escuchamos primero — para entender tu visión, tus desafíos y hacia dónde realmente quieres ir.',
          },
          {
            title: 'Diagnóstico Profundo',
            desc: 'Mapeamos tu situación actual frente a tu potencial de crecimiento — mercado, operaciones, ingresos y equipo — para encontrar las palancas reales.',
          },
          {
            title: 'Construimos la Hoja de Ruta',
            desc: 'Co-creamos un plan claro, priorizado, realista y ambicioso, con responsabilidades definidas desde el primer día.',
          },
          {
            title: 'Ejecutamos & Crecemos',
            desc: 'Nos quedamos contigo en las trincheras — apoyo operativo, rendición de cuentas e iteración hasta que los resultados son reales.',
          },
        ],
      },
      testimonials: {
        label: 'Historias de Clientes',
        heading: 'Fundadores y operadores que confiaron en nosotros su misión.',
      },
      cta: {
        badge: '✦ Construyamos algo juntos',
        heading: '¿Listo para hacer realidad tu misión?',
        sub: 'Estés empezando o listo para escalar — el mejor momento para hablar es ahora. Sin compromisos, solo una conversación.',
        btn1: 'Hablemos',
        btn2: 'Ver Servicios',
      },
      contact: {
        label: 'Contacto',
        heading: 'Empecemos a hablar.',
        sub: 'Cuéntanos dónde estás y a dónde quieres llegar. Nosotros nos encargamos del resto.',
        emailLabel: 'Escríbenos',
        phoneLabel: 'Llámanos',
        locationLabel: 'Ubicación',
        locationVal: 'Disponibles globalmente · Remoto y presencial',
        cardHeading: 'Agenda una llamada de introducción gratuita',
        cardSub:
          'Sin pitch de ventas — solo una conversación genuina sobre tu negocio. Elige el horario que mejor te venga.',
        cardBtn: 'Elegir Horario →',
      },
      footer: {
        tagline:
          'Ayudamos a empresas en etapa inicial y de crecimiento a despegar. Tu misión es nuestra misión.',
        servicesHeading: 'Servicios',
        companyHeading: 'Empresa',
        connectHeading: 'Conectar',
        copyright: '© 2026 GrowIT Consulting. Todos los derechos reservados.',
        legal: 'Política de Privacidad · Términos de Servicio',
        links: {
          services: [
            'Estrategia de Crecimiento',
            'Validación de Mercado',
            'Operaciones & Sistemas',
            'Aceleración de Ingresos',
          ],
          company: ['Sobre GrowIT', 'Cómo Trabajamos', 'Historias de Clientes'],
          connect: ['Hablemos', 'LinkedIn', 'Instagram', 'Twitter / X'],
        },
      },
      testimonialQuotes: [
        "GrowIT no nos dio solo una estrategia — estuvieron con nosotros mientras la construíamos. La claridad financiera que tenemos ahora era impensable en el segundo año.",
        "Llegué con una empresa estancada. GrowIT identificó dos canales sin explotar que hoy generan el 40 % de nuestros ingresos. Absolutamente transformador.",
        "Tu misión es nuestra misión — y lo dicen en serio. El equipo estuvo tan comprometido como nosotros. Cumplimos el objetivo anual en siete meses.",
        "Trabajar con GrowIT es como tener un equipo de crecimiento de élite siempre disponible. Pasamos de 800K a 2,4M€ ARR en 14 meses.",
        "Los sistemas que implementaron eliminaron el caos por completo. Por fin tenemos un crecimiento predecible en lugar de apagar fuegos todo el día.",
      ],
    },

    it: {
      nav: {
        about: 'Chi Siamo',
        services: 'Servizi',
        how: 'Come Lavoriamo',
        stories: 'Storie',
        cta: 'Iniziamo a Parlare →',
      },
      hero: {
        badge: '✦ Facciamo crescere le imprese',
        lines: ['Facciamo crescere le imprese', 'ad ogni stadio del percorso.'],
        sub: 'Dalle startup alle aziende in espansione, GrowIT trasforma le tue ambizioni in risultati concreti e misurabili. La tua missione è la nostra missione — e la crescita è il nostro mestiere.',
        cta1: 'Iniziamo a Parlare',
        cta2: 'Scopri i Servizi',
        dashboard: {
          title: 'Dashboard di Crescita',
          live: '↑ Live',
          metrics: [
            'Crescita media del fatturato',
            'Tasso di fidelizzazione',
            'Clienti seguiti',
            'Tempo medio ai risultati',
          ],
          bars: ['Espansione di Mercato', 'Crescita del Fatturato'],
          activeLabel: 'Partnership di crescita attive in questo momento',
        },
      },
      ticker: [
        'La Tua Missione È La Nostra Missione',
        'Startup & Imprese in Crescita',
        'Iniziamo a Parlare',
        'Strategia che Scala',
        'Risultati che si Misurano',
        'Per Fondatori Ambiziosi',
      ],
      about: {
        label: 'La Nostra Missione',
        heading:
          'Supportiamo startup e imprese in crescita per andare lontano.',
        sub: 'GrowIT colma il divario tra dove sei oggi e dove vuoi arrivare. Collaboriamo con fondatori, operatori e team dirigenziali per costruire i sistemi, la strategia e lo slancio che generano vera crescita.',
        stats: [
          'Imprese scalate in vari settori',
          'Fatturato complessivo sbloccato per i clienti',
          'Anni di esperienza nella consulenza',
          'Tasso di soddisfazione dei clienti',
        ],
        quote:
          '"La tua missione è la nostra missione — noi vinciamo solo se vinci tu."',
        quoteAttr: '— La Filosofia GrowIT',
        quoteCta: 'Iniziamo a Parlare →',
      },
      services: {
        label: 'Cosa Facciamo',
        heading: 'Competenza su misura per ogni fase del tuo percorso.',
        hint: '↻ Scopri di più',
        hintBack: '↻ Torna',
        items: [
          {
            name: 'Strategia di Crescita',
            desc: 'Sviluppiamo roadmap chiare e concrete, allineate con il tuo mercato, il tuo team e le tue ambizioni — costruite per scalare.',
            back: [
              'Piani di crescita da 90 giorni e annuali',
              'Analisi del panorama competitivo',
              'Definizione di OKR e milestone',
              "Ideale per: startup pronte a passare dall'idea alla trazione",
            ],
          },
          {
            name: 'Validazione di Mercato',
            desc: 'Prima di investire, validiamo. Analisi basata sui dati per ridurre i rischi e trovare la tua vera opportunità.',
            back: [
              'Interviste di scoperta con i clienti',
              'Calcolo TAM / SAM / SOM',
              'Test della domanda prima di sviluppare',
              'Ideale per: fondatori che non sanno se il loro mercato esiste davvero',
            ],
          },
          {
            name: 'Operazioni & Sistemi',
            desc: "Ottimizziamo il motore della tua crescita — processi, strumenti e strutture del team pensati per l'efficienza.",
            back: [
              'SOP e documentazione dei processi',
              'Audit e ottimizzazione del tool stack',
              'Framework di assunzione e design organizzativo',
              'Ideale per: team in crescita che hanno bisogno di struttura',
            ],
          },
          {
            name: 'Accelerazione dei Ricavi',
            desc: "Dal design della pipeline all'architettura dei prezzi, identifichiamo e attiviamo le leve di ricavo che non stai ancora usando.",
            back: [
              'Riprogettazione del modello di pricing',
              'Audit del funnel di vendita e della pipeline',
              'Strategia di upsell e fidelizzazione',
              'Ideale per: aziende con trazione ma ricavi stagnanti',
            ],
          },
          {
            name: 'Partnership & Sviluppo',
            desc: 'Ti aiutiamo a costruire le alleanze e i canali di distribuzione che moltiplicano la tua crescita senza costi proporzionali.',
            back: [
              'Identificazione e contatto con partner',
              'Accordi di co-marketing e distribuzione',
              'Strategia dei canali e negoziazione',
              'Ideale per: aziende che vogliono leva senza assumere',
            ],
          },
          {
            name: 'Lancio & Scala',
            desc: 'Nuovo mercato, nuovo prodotto, nuova fase — pianifichiamo ed eseguiamo il tuo go-to-market con precisione e velocità.',
            back: [
              'Design del playbook go-to-market',
              'Sequenziamento del lancio e strategia PR',
              'Iterazione post-lancio e cicli di feedback',
              'Ideale per: aziende che entrano in nuovi mercati o lanciano prodotti',
            ],
          },
        ],
      },
      how: {
        label: 'Come Lavoriamo',
        heading: 'Dalla prima conversazione ai risultati misurabili.',
        steps: [
          {
            title: 'Prima Ascoltiamo',
            desc: 'Niente pitch commerciali, niente pressioni. Prima ascoltiamo — per capire la tua visione, le tue sfide e dove vuoi davvero arrivare.',
          },
          {
            title: 'Diagnosi Approfondita',
            desc: 'Mappiamo la tua situazione attuale rispetto al tuo potenziale di crescita — mercato, operazioni, ricavi e team — per trovare le leve reali.',
          },
          {
            title: 'Costruiamo la Roadmap',
            desc: 'Co-creiamo un piano chiaro, prioritizzato, realistico e ambizioso, con responsabilità definite fin dal primo giorno.',
          },
          {
            title: 'Eseguiamo & Cresciamo',
            desc: 'Restiamo con te sul campo — supporto operativo, responsabilizzazione e iterazione finché i risultati non arrivano davvero.',
          },
        ],
      },
      testimonials: {
        label: 'Storie dei Clienti',
        heading:
          'Fondatori e operatori che ci hanno affidato la loro missione.',
      },
      cta: {
        badge: '✦ Costruiamo qualcosa insieme',
        heading: 'Pronto a rendere reale la tua missione?',
        sub: 'Che tu stia appena iniziando o sia pronto a scalare — il momento migliore per parlarne è adesso. Nessun impegno, solo una conversazione.',
        btn1: 'Iniziamo a Parlare',
        btn2: 'Scopri i Servizi',
      },
      contact: {
        label: 'Contatti',
        heading: 'Iniziamo a parlare.',
        sub: 'Raccontaci dove sei e dove vuoi arrivare. Al resto pensiamo noi.',
        emailLabel: 'Scrivici',
        phoneLabel: 'Chiamaci',
        locationLabel: 'Sede',
        locationVal: 'Disponibili globalmente · Da remoto e in sede',
        cardHeading: 'Prenota una chiamata introduttiva gratuita',
        cardSub:
          "Niente vendita — solo una conversazione autentica sulla tua attività. Scegli l'orario che preferisci.",
        cardBtn: 'Scegli un Orario →',
      },
      footer: {
        tagline:
          'Supportiamo startup e imprese in crescita per andare lontano. La tua missione è la nostra missione.',
        servicesHeading: 'Servizi',
        companyHeading: 'Azienda',
        connectHeading: 'Connettiti',
        copyright: '© 2026 GrowIT Consulting. Tutti i diritti riservati.',
        legal: 'Privacy Policy · Termini di Servizio',
        links: {
          services: [
            'Strategia di Crescita',
            'Validazione di Mercato',
            'Operazioni & Sistemi',
            'Accelerazione dei Ricavi',
          ],
          company: ['Chi è GrowIT', 'Come Lavoriamo', 'Storie dei Clienti'],
          connect: [
            'Iniziamo a Parlare',
            'LinkedIn',
            'Instagram',
            'Twitter / X',
          ],
        },
      },
      testimonialQuotes: [
        "GrowIT non ci ha dato solo una strategia — erano in prima linea con noi mentre la costruivamo. La chiarezza sui ricavi che abbiamo oggi era impensabile al secondo anno.",
        "Ero arrivato con un'azienda ferma al palo. GrowIT ha individuato due canali inesplorati che oggi generano il 40 % del fatturato. Davvero trasformativo.",
        "La vostra missione è la nostra missione — e lo dicono sul serio. Il team era coinvolto quanto noi. Abbiamo raggiunto l'obiettivo annuale in sette mesi.",
        "Lavorare con GrowIT è come avere un team di crescita di prima classe sempre a disposizione. Siamo passati da 800K a 2,4M€ ARR in 14 mesi.",
        "I sistemi operativi che hanno costruito hanno eliminato il caos. Finalmente una crescita prevedibile, senza dover spegnere incendi ogni giorno.",
      ],
    },
  },
});
