interface ImageType {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

interface SettingsType {
  location?: string;
  phones: string[];
  emails: string[];
  twitter?: string;
  linkedin?: string;
  tiktok?: string;
  snapchat?: string;
  instagram?: string;
  whatsapp?: string;
  facebook?: string;
  youtube?: string;
}

interface HeroType {
  button: {
    prefix: string;
    action: string;
    suffix: string;
    link: string;
  };
  heading: {
    firstWord: string;
    rotatingWords: string[];
    lastWord: string;
    highlightedWord: {
      text: string;
    };
  };
  description: string;
  ctaButton: {
    text: string;
    link: string;
  };
}

interface ServicesType {
  title: string;
  titleColor: string;
  serviceCategories: {
    categoryTitle: string;
    services: {
      title: string;
      description: string;
      icon: ImageType;
      items?: string[];
    }[];
  }[];
}

interface AboutUsType {
  title: string;
  heroImage: ImageType;
  heading: string;
  subheading: string;
  content: any[];
  leftTopStat: { value: string; label: string };
  leftBottomStat: { value: string; label: string };
  rightTopStat: { value: string; label: string };
  rightBottomStat: { value: string; label: string };
  ourVision: {
    title: string;
    description: string;
    image: ImageType;
  };
  ourMission: {
    title: string;
    description: string;
    image: ImageType;
  };
  certificateTitle: string;
  certificateDescription: string;
  certificateImages: {
    _key?: string;
    badge: ImageType;
    certificateImage?: ImageType;
  }[];
}

interface MilestonesType {
  title: string;
  milestones: {
    _key?: string;
    year: number;
    title: string;
  }[];
}

interface ValuesType {
  title: string;
  description: string;
  cards: {
    _key?: string;
    icon: ImageType;
    title: string;
    description: string;
  }[];
}

interface StatsType {
  title: string;
  description: string;
  items: {
    _key?: string;
    value: string;
    description: string;
  }[];
}

interface TestimonialsType {
  testimonials: {
    name: string;
    content: string;
  }[];
}

interface ClientsType {
  logos: ImageType[];
}

interface PartnersType {
  title: string;
  itPartners: ImageType[];
  industrialPartners: ImageType[];
}

interface IndustriesType {
  title: string;
  cards: {
    _key?: string;
    icon: ImageType;
    title: string;
    description: string;
  }[];
}

interface TeamType {
  title: string;
  description: string;
  teamMembers: {
    _key?: string;
    image?: ImageType;
    name: string;
    role: string;
  }[];
}

interface CareersType {
  title: string;
  description: string;
  jobCards: {
    _key?: string;
    title: string;
    description: string;
    image: ImageType;
    url: string;
  }[];
}

interface IndustriesType {
  title: string;
  description?: string;
  cards: {
    _key?: string;
    icon: ImageType;
    title: string;
    description: string;
  }[];
}

interface CategoryType {
  title: string;
  description?: any[];
}

interface AuthorType {
  name: string;
  image?: any;
  bio?: any[];
}

interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: any;
  publishedAt?: string;
  body: any[];
  author?: AuthorType;
  categories?: CategoryType[];
}
