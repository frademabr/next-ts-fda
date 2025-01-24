export const paths = {
  /**
   * Serviços
   */

  subservicos: {
    consultoriaTributaria: "/subservicos/consultoria-tributaria",
    blindagemPatrimonial: "/subservicos/blindagem-patrimonial",
  },

  servicos: {
    root: "/servicos/lista",
  },

  /**
   * Filiais
   */
  filiais: {
    root: "/filiais",
    services: "/filiais/services",
    caseStudies: "/filiais/unidades",
    caseStudy: (id: string) => `/filiais/case-studies/${id}`,
    posts: "/filiais/posts",
    post: "/filiais/posts/details",
    about: "/filiais/about",
    contact: "/filiais/contact",
  },
  /**
   * Travel
   */
  travel: {
    root: "/travel",
    tours: "/travel/tours",
    tour: "/travel/tours/details",
    checkout: "/travel/checkout",
    orderCompleted: "/travel/order-completed",
    posts: "/travel/posts",
    post: "/travel/posts/details",
    about: "/travel/about",
    contact: "/travel/contact",
  },
  /**
   * Career
   */
  career: {
    root: "/career",
    jobs: "/career/jobs",
    job: "/career/jobs/details",
    posts: "/career/posts",
    post: "/career/posts/details",
    about: "/career/about",
    contact: "/career/contact",
  },
  /**
   * E-learning
   */
  elearning: {
    root: "/elearning",
    courses: "/elearning/courses",
    course: "/elearning/courses/details",
    posts: "/elearning/posts",
    post: "/elearning/posts/details",
    about: "/elearning/about",
    contact: "/elearning/contact",
  },
  /**
   * E-commerce
   */
  eCommerce: {
    root: "/e-commerce",
    products: "/e-commerce/products",
    product: "/e-commerce/products/details",
    cart: "/e-commerce/cart",
    checkout: "/e-commerce/checkout",
    orderCompleted: "/e-commerce/order-completed",
    wishlist: "/e-commerce/wishlist",
    compare: "/e-commerce/compare",
  },
  /**
   * Account
   */
  account: {
    root: "/account",
    personal: "/account/personal",
    wishlist: "/account/wishlist",
    vouchers: "/account/vouchers",
    orders: "/account/orders",
    payment: "/account/payment",
  },
  /**
   * Auth
   */
  split: {
    signIn: "/split/sign-in",
    signUp: "/split/sign-up",
  },
  centered: {
    signIn: "/centered/sign-in",
    signUp: "/centered/sign-up",
  },
  illustration: {
    signIn: "/illustration/sign-in",
    signUp: "/illustration/sign-up",
  },
  verify: "/verify",
  resetPassword: "/reset-password",
  updatePassword: "/update-password",
  /**
   * Common
   */
  maintenance: "/maintenance",
  comingsoon: "/coming-soon",
  pricingCards: "/pricing-cards",
  pricingColumns: "/pricing-columns",
  payment: "/payment",
  support: "/support",
  page404: "/error/404",
  page500: "/error/500",
  /**
   * Others
   */
  teste: "/teste",
  components: "/components",
  pages: "/pages",
  docs: "#",
  license: "#",
  minimalStore: "#",
  zoneStore: "#",
  figmaUrl: "#",
};
