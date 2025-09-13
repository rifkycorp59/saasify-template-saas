// Interface for data navbar
export interface Navbar {
  logo: {
    name: string;
    url: string;
  };
  name_saas: string;
  link_sign_in: string;
  link_sign_up: string;
  menu: {
    name: string;
    link: string;
  }[];
}

// Interface for data footer
export interface FooterType {
  logo: {
    name: string;
    url: string;
  };
  name_saas: string;
  description_saas: string;
  products: {
    name: string;
    link: string;
  }[];
  company: {
    name: string;
    link: string;
  }[];
  media_social: {
    logo: {
      name: string;
      url: string;
    };
    link: string;
  }[];
  legal_link: {
    name: string;
    link: string;
  }[];
}

// Interface for data Hero
export interface Hero{
  title: string;
  description: string;
  link_get_started: string;
  link_demo: string;
  rate_number: string;
  user_number: string;
  image: {
    name: string;
    url: string;
  };
  advantages:{
    advantage: string;
  }[];
}

// Interface for data feature
export interface Feature {
  logo: {
    name: string;
    url: string;
  };
  title: string;
  description: string;
}

// Interface for data feature
export interface FAQ {
  question: string;
  answer: string;
}

// Interface for data testimonial
export interface Testimonial {
  rating: number;
  name: string;
  title: string;
  testimoni: string;
  image:{
    name: string;
    url: string;
  }
}
// Interface for data services
export interface Services {
  title: string;
  description: string;
  price: string;
  price_suffix: string;
  link_button: string;
  isPopular: boolean;
  isStartFree: boolean;
  benefits:{
    text: string;
  }[];
}

// Interface for data CTA
export interface CTAType {
  title: string;
  description: string;
  advantages:{
    highlight: string;
    advantage: string;
  }[];
}

// Interface for data hero section
export interface HeroSection {
  name: string;
  title: string;
  description: string;
  logo:{
    name: string;
    url: string;
  }
}

// Interface for global 
export interface Global {
  title: string;
  description: string;
  authors: string;
  metadataBase: string;
  keyword: string;
  link_contact_sale : string;
  link_sign_in : string;
  link_sign_up : string;
  link_free_trial : string
  openGraph: {
    title: string;
    description: string;
    image: {
      name: string;
      url: string;
    };
  };
  twitter: {
    title: string;
    description: string;
    creator: string;
    image: {
      name: string;
      url: string;
    };
  };
  robots: {
    index: boolean;
    follow: boolean;
  };
}

