export type StandardIcon =
  | "cooling"
  | "heating"
  | "plumbing"
  | "air-quality"
  | "electrical"
  | "maintenance";

export type ThemeStyle = "clean" | "technical" | "industrial" | "warm";

export type ThemeColors = {
  brandPrimary: string;
  brandSecondary: string;
  brandAccent: string;
  page: string;
  surfaceDark: string;
  surfaceDarkAlt: string;
  surfaceElevated: string;
  surfaceSoft: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textOnBrand: string;
  borderSubtle: string;
  borderStrong: string;
  glowPrimary: string;
  glowSecondary: string;
  networkLine: string;
  success: string;
  service1: string;
  service2: string;
  service3: string;
  service4: string;
  service5: string;
};

export type CoverageLocation = {
  name: string;
  kind: "city" | "county" | "community";
  lat?: number;
  lng?: number;
  hub?: boolean;
  note?: string;
  href?: string;
};

export type ContactSubmissionMode = "demo" | "endpoint";

export type SiteConfig = {

  brand: {
    name: string;
    shortName: string;
    logo: string;
    logoLight: string;
    region: string;
  };

  theme: {
    style: ThemeStyle;
    colors: ThemeColors;
  };

  header: {
    navServices: string;
    navAreas: string;
    navContact: string;
    helpLabel: string;
    ctaLabel: string;
    mobileEyebrow: string;
    mobileCallLabel: string;
  };

  opening: {
    enabled: boolean;
    /** Total screen time including the final one-sheet lift reveal. */
    durationMs: number;
    eyebrow: string;
    line1: string;
    line2: string;
    detail: string;
    location: string;
    skipLabel: string;
  };

  hero: {
    /** The Climate Chamber is the new signature, with photo-based legacy layouts retained. */
    layout: "service-craft" | "climate-chamber" | "open-door" | "picture-window" | "keepsake";
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    locationLabel: string;
    locationValue: string;
    edgeLabel: string;
    bottomStatement: string;
    sillLabel: string;
    serviceLabels: [string, string, string];
    discoverLabel: string;
    motion: {
      /** Turn off when capturing zero-animation QA screenshots or when desired for a prospect. */
      enabled: boolean;
      /** Balanced is more cinematic; gentle has the same choreography at a slower pace. */
      pace: "balanced" | "gentle";
      /** Very slight hovering of the inset media after the one-time entrance. */
      ambient: boolean;
      /** Small image-depth shift on scroll, disabled automatically for reduced motion. */
    };
    system?: {
      eyebrow: string;
      modes: [
        { id: "cool"; label: string; detail: string },
        { id: "warm"; label: string; detail: string },
        { id: "pure"; label: string; detail: string },
      ];
    };
    media: {
      primarySrc: string;
      primaryAlt: string;
      primaryPosition: string;
      /** For picture-window/keepsake only. Open-door always displays the entire image without cropping. */
      fit: "contain" | "cover";
      /** Backdrop for the alternate fixed-window layouts only. */
      backdrop: "matte" | "blur";
      aspectRatio?: string;
    };
  };

  seo: {
    title: string;
    description: string;
  };

  contact: {
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    address: string;
    contactUrl: string;
    servicesUrl: string;
  };

  brandStandard: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    bodyTitle: string;
    body: string;
    callLabel: string;
    availabilityLabel: string;
    panelEyebrow: string;
    panelTitle: string;
    panelFooter: string;
    handoff: string;
    items: Array<{
      icon: StandardIcon;
      label: string;
      detail: string;
    }>;
  };

  services: {
    eyebrow: string;
    introLine1: string;
    introLine2: string;
    summaryEyebrow: string;
    summaryTitle: string;
    summaryBody: string;
    summaryCta: string;
    items: [
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
    ];
  };

  coverage: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    featuredLocation: string;
    locationDetail: string;
    ctaLabel: string;
    networkLabel: string;
    regionLabel: string;
    metrics: [
      { value: string; label: string },
      { value: string; label: string },
      { value: string; label: string },
    ];
    locations: CoverageLocation[];
  };

  contactSection: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    submissionMode: ContactSubmissionMode;
    formEndpoint: string;
    successMessage: string;
  };
};

export type ServiceConfig = {
  name: string;
  shortName: string;
  image: string;
  description?: string;
};

export const siteConfig: SiteConfig = {

  brand: {
    name: "All Pro Heating, Air & Electrical",
    shortName: "All Pro",
    logo: "/brand/all-pro-supplied-logo.png",
    logoLight: "/brand/all-pro-supplied-logo.png",
    region: "Tallassee · East Central Alabama",

  },

  theme: {
    style: "clean",
    colors: {"brandPrimary": "#315A91", "brandSecondary": "#82BE43", "brandAccent": "#A8C5E8", "page": "#101B29", "surfaceDark": "#0B1521", "surfaceDarkAlt": "#14263B", "surfaceElevated": "#1C3552", "surfaceSoft": "#F4F7FA", "textPrimary": "#F7FAFC", "textSecondary": "#D8E1E7", "textMuted": "#A1AFBD", "textOnBrand": "#FFFFFF", "borderSubtle": "#2B4059", "borderStrong": "#657B91", "glowPrimary": "#315A91", "glowSecondary": "#82BE43", "networkLine": "#82BE43", "success": "#82BE43", "service1": "#315A91", "service2": "#A8C5E8", "service3": "#82BE43", "service4": "#A8C5E8", "service5": "#315A91"},

  },

  header: {
    navServices: "Services",
    navAreas: "Service areas",
    navContact: "Contact",
    helpLabel: "Call 334-301-1961",
    ctaLabel: "Request service",
    mobileEyebrow: "TALLASSEE · EAST CENTRAL ALABAMA",
    mobileCallLabel: "Call now"
  },

  opening: {
    enabled: false,
    durationMs: 1400,
    eyebrow: "TALLASSEE · EAST CENTRAL ALABAMA",
    line1: "All Pro",
    line2: "Local comfort.",
    detail: "Heating, air conditioning, commercial HVAC, maintenance, and electrical services from a Tallassee team available around the clock.",
    location: "Local pros · open 24 hours",
    skipLabel: "Skip intro"
  },

  hero: {
    layout: "open-door",
    eyebrow: "TALLASSEE · EAST CENTRAL ALABAMA · LOCAL HVAC",
    headlineLine1: "More than air.",
    headlineLine2: "All Pro comfort.",
    description: "HVAC, electrical work, maintenance, system upgrades, and repairs for homes and businesses, with 24-hour availability.",
    primaryCta: "Request service",
    secondaryCta: "Call All Pro",
    locationLabel: "TALLASSEE · EAST CENTRAL ALABAMA",
    locationValue: "Tallassee · East Central Alabama",
    edgeLabel: "TALLASSEE · EAST CENTRAL ALABAMA",
    bottomStatement: "HEATING · COOLING · ELECTRICAL · MAINTENANCE",
    sillLabel: "Local pros · open 24 hours",
    serviceLabels: ["Cooling", "Heating", "Electrical"],
    discoverLabel: "Explore services",
    motion: {
      enabled: true,
      pace: "gentle",
      ambient: false
    },
    system: {
      eyebrow: "LOCAL COMFORT / IN MOTION",
      modes: [
        {
          id: "cool",
          label: "Cooling",
          detail: "A considered path from warm intake to balanced, conditioned air."
        },
        {
          id: "warm",
          label: "Heating",
          detail: "Steady circulation, carefully controlled for colder days."
        },
        {
          id: "pure",
          label: "Air quality",
          detail: "A focus on filtration and the air moving through every room."
        }
      ]
    },
    media: {"primarySrc": "/hero/all-pro-service-van.png", "primaryAlt": "All Pro Heating, Air & Electrical service van in the company’s blue and green branding", "primaryPosition": "right center", "fit": "contain", "backdrop": "matte", "aspectRatio": "925 / 1024"},

  },

  seo: {
    title: "All Pro Heating, Air & Electrical | HVAC Service in Tallassee",
    description: "Heating, air conditioning, commercial HVAC, maintenance, and electrical services from a Tallassee team available around the clock.",

  },

  contact: {
    phoneDisplay: "334-301-1961",
    phoneHref: "tel:+13343011961",
    email: "allproair.334@gmail.com",
    address: "Tallassee, AL 36078",
    contactUrl: "#contact",
    servicesUrl: "#services",

  },

  brandStandard: {
    eyebrow: "Local pros · open 24 hours",
    titleLine1: "Comfort, handled locally.",
    titleLine2: "Service built around your home.",
    bodyTitle: "Local pros · open 24 hours",
    body: "All Pro Heating, Air & Electrical LLC provides air conditioning, heating, commercial HVAC, electrical work, maintenance, and system upgrades. The company lists 24-hour availability and free estimates.",
    callLabel: "Call now",
    availabilityLabel: "Tallassee · East Central Alabama",
    panelEyebrow: "ALL PRO HEATING, AIR & ELECTRICAL",
    panelTitle: "All Pro Heating, Air & Electrical LLC provides air conditioning, heating, commercial HVAC, electrical work, maintenance, and system upgrades. The company lists 24-hour availability and free estimates.",
    panelFooter: "Tallassee · East Central Alabama",
    handoff: "Explore All Pro Heating, Air & Electrical services.",
    items: [{"icon": "cooling", "label": "Air conditioning", "detail": "Air conditioning repairs, installation, and system upgrades."}, {"icon": "heating", "label": "Heating", "detail": "Heating service for homes and businesses."}, {"icon": "maintenance", "label": "Electrical", "detail": "Electrical service alongside HVAC work."}],

  },

  services: {
    eyebrow: "ALL PRO HEATING, AIR & ELECTRICAL · SERVICES",
    introLine1: "Comfort,",
    introLine2: "done right.",
    summaryEyebrow: "TALLASSEE · EAST CENTRAL ALABAMA",
    summaryTitle: "All Pro Heating, Air & Electrical LLC provides air conditioning, heating, commercial HVAC, electrical work, maintenance, and system upgrades. The company lists 24-hour availability and free estimates.",
    summaryBody: "All Pro Heating, Air & Electrical LLC provides air conditioning, heating, commercial HVAC, electrical work, maintenance, and system upgrades. The company lists 24-hour availability and free estimates.",
    summaryCta: "Talk to the team",
    items: [{"name": "Air conditioning", "shortName": "Cooling", "image": "/services/01.svg", "description": "Air conditioning repairs, installation, and system upgrades."}, {"name": "Heating", "shortName": "Heating", "image": "/services/02.svg", "description": "Heating service for homes and businesses."}, {"name": "Electrical", "shortName": "Electrical", "image": "/services/03.svg", "description": "Electrical service alongside HVAC work."}, {"name": "Commercial HVAC", "shortName": "Commercial", "image": "/services/04.svg", "description": "Commercial heating and cooling service."}, {"name": "Maintenance & upgrades", "shortName": "Maintenance", "image": "/services/05.svg", "description": "HVAC maintenance and equipment upgrades."}],

  },

  coverage: {
    eyebrow: "LOCAL SERVICE AREA",
    titleLine1: "Comfort close",
    titleLine2: "to home.",
    description: "Tallassee · East Central Alabama",
    featuredLocation: "Tallassee, AL",
    locationDetail: "Serving Tallassee · East Central Alabama.",
    ctaLabel: "Contact the team",
    networkLabel: "LOCAL SERVICE NETWORK",
    regionLabel: "Tallassee · East Central Alabama",
    metrics: [{"value": "9 communities", "label": "Coverage shown"}, {"value": "Open 24 hours", "label": "Service commitment"}, {"value": "Local team", "label": "Tallassee · East Central Alabama"}],
    locations: [{"name": "Tallassee, AL", "kind": "city", "lat": 32.5351, "lng": -85.8933, "hub": true}, {"name": "Eclectic, AL", "kind": "city", "lat": 32.6354, "lng": -86.0344, "hub": false}, {"name": "Shorter, AL", "kind": "city", "lat": 32.4099, "lng": -85.93, "hub": false}, {"name": "Wetumpka, AL", "kind": "city", "lat": 32.5437, "lng": -86.2119, "hub": false}, {"name": "Notasulga, AL", "kind": "city", "lat": 32.5587, "lng": -85.6744, "hub": false}, {"name": "Kent, AL", "kind": "city", "lat": 32.641, "lng": -86.21, "hub": false}, {"name": "Tuskegee, AL", "kind": "city", "lat": 32.4302, "lng": -85.7077, "hub": false}, {"name": "Blue Ridge, AL", "kind": "city", "lat": 32.578, "lng": -85.745, "hub": false}, {"name": "Redland, AL", "kind": "city", "lat": 32.402, "lng": -86.01, "hub": false}],

  },

  contactSection: {
    eyebrow: "LET’S TALK COMFORT",
    titleLine1: "Tell us what",
    titleLine2: "you need.",
    body: "Contact All Pro Heating, Air & Electrical about heating, cooling, or service for your home or business.",
    primaryCta: "Request service",
    secondaryCta: "Call All Pro",
    submissionMode: "demo",
    formEndpoint: "",
    successMessage: "Thanks for reaching out. This concept form is a preview and is not connected yet; call 334-301-1961 to contact All Pro Heating, Air & Electrical.",

  }
};
