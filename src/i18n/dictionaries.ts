type NavItem = {
  href: string;
  label: string;
};

type Stat = {
  value: string;
  label: string;
};

type ValueItem = {
  title: string;
  description: string;
  icon: string;
};

type Project = {
  id: number;
  title: string;
  category: string;
  client: string;
  description: string;
  image: string;
  tags: string[];
  results: string;
};

type Category = {
  value: string;
  label: string;
};

type ContactCard = {
  title: string;
  value: string;
  href: string;
  icon: "mail" | "phone" | "mapPin";
};

export type FormDictionary = {
  nameLabel: string;
  namePlaceholder: string;
  companyLabel: string;
  companyPlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  helperText: string;
  submitting: string;
  submit: string;
  server: {
    honeypotAccepted: string;
    nameError: string;
    companyError: string;
    emailError: string;
    messageError: string;
    fieldsError: string;
    envMissing: string;
    sendFailed: string;
    sendSuccess: string;
  };
};

export type SiteDictionary = {
  metadata: {
    title: string;
    description: string;
  };
  navbar: {
    items: NavItem[];
    cta: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    title: string;
    tagline: string;
    description: string;
    cta: string;
  };
  apropos: {
    label: string;
    title: string;
    description: string;
    ctaProjects: string;
    ctaContact: string;
    imageAlt: string;
    sinceLabel: string;
    stats: Stat[];
    values: ValueItem[];
  };
  projets: {
    label: string;
    title: string;
    description: string;
    categories: Category[];
    items: Project[];
    resultLabel: string;
    viewProject: string;
    empty: string;
    collabLabel: string;
    collabTitle: string;
    collabDescription: string;
    collabCta: string;
  };
  contact: {
    label: string;
    title: string;
    description: string;
    cards: ContactCard[];
    form: FormDictionary;
  };
  footer: {
    brand: string;
    title: string;
    description: string;
    links: NavItem[];
    email: string;
    rights: string;
  };
};

const commonProjectImages = {
  supermarket:
    "https://images.unsplash.com/photo-1567449303078-57ad995bd17e?w=800&h=600&fit=crop",
  lms: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
  delivery:
    "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=800&h=600&fit=crop",
  crm: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
  craft:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
  telehealth:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
};

export const siteDictionary: SiteDictionary = {
  metadata: {
    title: "Snapsetech | Solutions digitales sur mesure",
    description:
      "Snapsetech concoit des sites, plateformes et outils metier simples, solides et penses pour accelerer votre digitalisation.",
  },
  navbar: {
    items: [
      { href: "#accueil", label: "Accueil" },
      { href: "#apropos", label: "A propos" },
      { href: "#projets-showcase", label: "Les projets" },
      { href: "#contact", label: "Contact" },
    ],
    cta: "Commencer",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
  hero: {
    title: "SnapseTech",
    tagline: "Votre passage au numerique, en toute simplicite.",
    description:
      "Avec SnapseTech, dites adieu a la complexite technique. On vous accompagne avec des outils sur mesure pour digitaliser votre activite simplement.",
    cta: "Commencer maintenant",
  },
  apropos: {
    label: "A propos",
    title:
      "Digitaliser votre activite avec plus de clarte, de vitesse et de serenite.",
    description:
      "Chez Snapsetech, nous concevons des experiences web, des outils metier et des parcours digitaux simples a prendre en main. Notre objectif est de transformer les besoins complexes en solutions fiables, elegantes et faciles a utiliser.",
    ctaProjects: "Decouvrir nos projets",
    ctaContact: "Parler de votre projet",
    imageAlt: "Equipe Snapsetech",
    sinceLabel: "Depuis",
    stats: [
      { value: "+50", label: "Entreprises digitalisees" },
      { value: "+12", label: "Pays couverts" },
      { value: "100%", label: "Satisfaction client" },
      { value: "24/7", label: "Support disponible" },
    ],
    values: [
      {
        title: "Innovation",
        description: "Des solutions adaptees aux realites du terrain.",
        icon: "01",
      },
      {
        title: "Simplicite",
        description: "Une technologie claire, utile et accessible.",
        icon: "02",
      },
      {
        title: "Impact",
        description: "Des outils penses pour faire grandir votre activite.",
        icon: "03",
      },
    ],
  },
  projets: {
    label: "Projets",
    title: "Des projets concrets, penses pour avoir un impact durable.",
    description:
      "Nous accompagnons des entreprises africaines avec des experiences digitales elegantes, efficaces et utiles sur le terrain.",
    categories: [
      { value: "all", label: "Tous les projets" },
      { value: "e-commerce", label: "E-commerce" },
      { value: "mobile", label: "Mobile" },
      { value: "web", label: "Web" },
      { value: "crm", label: "CRM" },
      { value: "edtech", label: "EdTech" },
      { value: "healthtech", label: "HealthTech" },
    ],
    items: [
      {
        id: 1,
        title: "Digitalisation d'une chaine de supermarches",
        category: "e-commerce",
        client: "MarchePlus Senegal",
        description:
          "Mise en place d'une solution de gestion des stocks et de e-commerce pour 15 magasins a travers Dakar.",
        image: commonProjectImages.supermarket,
        tags: ["E-commerce", "Gestion de stocks", "Mobile Money"],
        results: "+40% de ventes en ligne",
      },
      {
        id: 2,
        title: "Plateforme de formation en ligne",
        category: "edtech",
        client: "EduTech Cote d'Ivoire",
        description:
          "Creation d'une plateforme LMS pour former les jeunes aux metiers du numerique.",
        image: commonProjectImages.lms,
        tags: ["LMS", "Video", "Certification"],
        results: "+5000 etudiants formes",
      },
      {
        id: 3,
        title: "Application de livraison locale",
        category: "mobile",
        client: "QuickDeliver Cameroun",
        description:
          "Application mobile de livraison de repas et courses en moins de 30 minutes.",
        image: commonProjectImages.delivery,
        tags: ["Mobile", "Geolocalisation", "Paiement integre"],
        results: "+2000 livraisons par mois",
      },
      {
        id: 4,
        title: "CRM pour agence immobiliere",
        category: "crm",
        client: "ImmoPlus Mali",
        description:
          "Solution complete de gestion des biens, clients et transactions immobilieres.",
        image: commonProjectImages.crm,
        tags: ["CRM", "Gestion de biens", "Reporting"],
        results: "15h gagnees par semaine",
      },
      {
        id: 5,
        title: "Site vitrine pour artisanat local",
        category: "web",
        client: "Artisans d'Afrique",
        description:
          "Site e-commerce pour promouvoir et vendre l'artisanat local a l'international.",
        image: commonProjectImages.craft,
        tags: ["E-commerce", "Paiement securise", "Expedition"],
        results: "+300% de ventes export",
      },
      {
        id: 6,
        title: "Solution de telemedecine",
        category: "healthtech",
        client: "MediAfrica",
        description:
          "Plateforme de consultation a distance pour desenclaver les zones rurales.",
        image: commonProjectImages.telehealth,
        tags: ["Telemedecine", "Visioconference", "Dossier medical"],
        results: "+10000 consultations a distance",
      },
    ],
    resultLabel: "Resultat",
    viewProject: "Voir le projet",
    empty: "Aucun projet dans cette categorie pour le moment.",
    collabLabel: "Collaboration",
    collabTitle: "Vous avez un projet a lancer ou a moderniser ?",
    collabDescription:
      "Nous concevons des plateformes, outils metier et experiences web qui restent simples a utiliser et solides a faire evoluer.",
    collabCta: "Discutons de votre projet",
  },
  contact: {
    label: "Contact",
    title: "Parlons de votre prochain projet digital.",
    description:
      "Que vous lanciez une plateforme, un site vitrine, un outil metier ou une refonte, nous pouvons vous aider a cadrer, concevoir et livrer quelque chose de solide.",
    cards: [
      {
        title: "Email",
        value: "contact@snapsetech.com",
        href: "mailto:contact@snapsetech.com",
        icon: "mail",
      },
      {
        title: "Telephone",
        value: "+221 77 000 00 00",
        href: "tel:+221770000000",
        icon: "phone",
      },
      {
        title: "Zone d'intervention",
        value: "Dakar, Abidjan, Douala et a distance",
        href: "#contact",
        icon: "mapPin",
      },
    ],
    form: {
      nameLabel: "Nom",
      namePlaceholder: "Votre nom",
      companyLabel: "Entreprise",
      companyPlaceholder: "Nom de votre entreprise",
      emailLabel: "Email",
      emailPlaceholder: "vous@entreprise.com",
      messageLabel: "Votre besoin",
      messagePlaceholder:
        "Expliquez-nous votre projet, vos objectifs ou les problemes a resoudre.",
      helperText:
        "Reponse sous 24h ouvrables. Nous pouvons demarrer par un cadrage rapide et sans engagement.",
      submitting: "Envoi en cours...",
      submit: "Envoyer une demande",
      server: {
        honeypotAccepted: "Merci, votre demande a bien ete recue.",
        nameError: "Indiquez votre nom complet.",
        companyError: "Indiquez le nom de votre entreprise.",
        emailError: "Renseignez une adresse email valide.",
        messageError: "Decrivez votre besoin en au moins 20 caracteres.",
        fieldsError: "Merci de corriger les champs signales.",
        envMissing:
          "Le formulaire n'est pas encore configure pour l'envoi. Ajoutez RESEND_API_KEY, CONTACT_TO_EMAIL et CONTACT_FROM_EMAIL dans l'environnement de deploiement.",
        sendFailed:
          "L'envoi a echoue pour le moment. Verifiez la configuration email puis reessayez.",
        sendSuccess:
          "Merci, votre message a bien ete envoye. Nous revenons vers vous rapidement.",
      },
    },
  },
  footer: {
    brand: "Snapsetech",
    title: "Des experiences digitales simples, solides et utiles.",
    description:
      "Nous accompagnons les entreprises qui veulent avancer plus vite avec des outils bien penses et faciles a faire evoluer.",
    links: [
      { label: "Accueil", href: "#accueil" },
      { label: "A propos", href: "#apropos" },
      { label: "Projets", href: "#projets-showcase" },
      { label: "Contact", href: "#contact" },
    ],
    email: "contact@snapsetech.com",
    rights: "(c) 2026 Snapsetech. Tous droits reserves.",
  },
};
