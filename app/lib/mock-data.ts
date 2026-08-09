export interface PostData {
  author: string;
  title: string;
  time: string;
  content: string;
  image: string;
  likes: string;
  comments: string;
  shares: string;
  avatarColor: string;
  category?: string;
}

export interface InvitationData {
  name: string;
  title: string;
  initials: string;
  color: string;
}

export interface PersonSuggestionData {
  name: string;
  title: string;
  initials: string;
  color: string;
  coverClass: string;
}

export interface JobOfferData {
  title: string;
  company: string;
  location: string;
  type: string;
  posted: string;
  initials: string;
  color: string;
}

export const profileSummary = {
  name: "Alicia Laurent",
  title: "Développeur Full Stack",
  location: "Paris, Île-de-France",
  connections: "487 relations",
  views: "1 248 vues de profil",
  posts: "42 posts cette année",
};

export const posts: PostData[] = [
  {
    author: "Mina K.",
    title: "Product Designer chez Northstar",
    time: "3 h",
    content:
      "Les équipes qui investissent dans des produits plus humains, plus simples et plus inclusifs créent des expériences professionnelles plus durables.",
    image: "https://picsum.photos/seed/post1/500/300",
    likes: "1,2 k",
    comments: "89",
    shares: "14",
    avatarColor: "from-blue-600 to-cyan-500",
  },
  {
    author: "Julien R.",
    title: "Head of Talent chez ScaleUp",
    time: "7 h",
    content:
      "Nous avons trouvé trois talents exceptionnels grâce à un réseau professionnel de qualité, et le résultat est déjà visible sur l'entreprise.",
    image: "https://picsum.photos/seed/post2/500/300",
    likes: "842",
    comments: "54",
    shares: "9",
    avatarColor: "from-purple-600 to-fuchsia-500",
  },
  {
    author: "Sophie G.",
    title: "Engineering Manager chez Axiom",
    time: "1 j",
    content:
      "L'IA ne remplace pas les équipes ; elle amplifie la qualité du travail si la collaboration et l'orientation humaine restent au centre.",
    image: "https://picsum.photos/seed/post3/500/300",
    likes: "631",
    comments: "23",
    shares: "6",
    avatarColor: "from-emerald-600 to-teal-500",
  },
];

export const newsItems = [
  "L'IA générative révolutionne le secteur de la santé",
  "Les compétences les plus demandées en 2025",
  "Pourquoi les réseaux professionnels deviennent plus puissants",
  "Les entreprises réinventent la gestion des talents",
  "Comment créer des équipes plus résilientes",
];

export const suggestedPages = [
  { name: "TechCrunch", followers: "2,5 M followers", initials: "TC", color: "bg-emerald-500" },
  { name: "React Community", followers: "780 k followers", initials: "RC", color: "bg-blue-600" },
];

export const invitations: InvitationData[] = [
  { name: "Léa Martin", title: "UX Research Lead", initials: "LM", color: "bg-indigo-500" },
  { name: "Omar Benali", title: "VP Product", initials: "OB", color: "bg-pink-500" },
  { name: "Camille D.", title: "Talent Acquisition Manager", initials: "CD", color: "bg-teal-500" },
];

export const suggestedConnections: PersonSuggestionData[] = [
  {
    name: "Mina Khelifi",
    title: "Principal Product Designer",
    initials: "MK",
    color: "bg-rose-500",
    coverClass: "from-rose-200 to-rose-400",
  },
  {
    name: "David Chen",
    title: "Senior Frontend Engineer",
    initials: "DC",
    color: "bg-amber-500",
    coverClass: "from-amber-200 to-amber-400",
  },
  {
    name: "Nadia Ikram",
    title: "Operations Lead",
    initials: "NI",
    color: "bg-sky-500",
    coverClass: "from-sky-200 to-sky-400",
  },
  {
    name: "Antoine Petit",
    title: "Data Analyst",
    initials: "AP",
    color: "bg-violet-500",
    coverClass: "from-violet-200 to-violet-400",
  },
];

export const jobOffers: JobOfferData[] = [
  {
    title: "Senior Product Designer",
    company: "Northstar",
    location: "Paris, Île-de-France",
    type: "Temps plein",
    posted: "Il y a 2 jours",
    initials: "NS",
    color: "bg-slate-800",
  },
  {
    title: "Lead Frontend Engineer",
    company: "Axiom Labs",
    location: "Lyon, FR",
    type: "Hybride",
    posted: "Il y a 4 jours",
    initials: "AL",
    color: "bg-blue-700",
  },
  {
    title: "Community Manager",
    company: "WorkLink",
    location: "Remote",
    type: "Temps plein",
    posted: "Il y a 1 semaine",
    initials: "WL",
    color: "bg-emerald-600",
  },
  {
    title: "Product Manager",
    company: "Orion Studio",
    location: "Marseille, FR",
    type: "CDI",
    posted: "Il y a 3 jours",
    initials: "OS",
    color: "bg-amber-600",
  },
  {
    title: "UX Writer",
    company: "LaunchPad",
    location: "Paris, FR",
    type: "Temps plein",
    posted: "Il y a 5 jours",
    initials: "LP",
    color: "bg-purple-600",
  },
];
