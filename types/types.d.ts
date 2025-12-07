interface ImageType {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

interface SettingsType {
  phone: string;
  email: string;
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

interface PartnersType {
  title: string;
  logos: ImageType[];
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
}

interface ClientsType {
  logos: ImageType[];
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
