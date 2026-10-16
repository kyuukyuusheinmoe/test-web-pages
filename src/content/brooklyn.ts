// Text mirrored verbatim from https://kayablissnyc.com/location/brooklyn-ny/
// (captured 2026-10-15) for compliance-scan testing. Do not edit wording here
// unless the source page changes — scanners should see the original copy.

export const SOURCE_URL = "https://kayablissnyc.com/location/brooklyn-ny/";
const ORIGIN = "https://kayablissnyc.com";

export const site = {
  name: "Kaya Bliss Dispensary",
  title:
    "Cannabis Dispensary, Weed Dispensary, Dispensary Near Me & Recreational Dispensary | Brooklyn, NY | Kaya Bliss Dispensary",
  description:
    "Discover the best cannabis products in Bay Ridge, Brooklyn at Kaya Bliss Dispensary. Visit us for all your recreational and medical marijuana needs.",
};

export const topBar = {
  currentlyShopping: "Currently Shopping",
  selectLabel: "Select a Location",
  locations: ["Bay Ridge, NY", "Brighton Beach, NY", "Brooklyn Heights, NY", "Kensington, NY"],
  notice: "Delivery Available | Valet Parking Available",
  noticeHref: `${ORIGIN}/delivery/`,
};

type NavLink = { label: string; href: string };
type NavGroup = { label: string; children: NavLink[] };
export type NavItem = NavLink | NavGroup;

export const nav: NavItem[] = [
  { label: "Home", href: `${ORIGIN}/` },
  { label: "Shop", href: `${ORIGIN}/stores/kayabliss-bayridge` },
  { label: "Deals", href: `${ORIGIN}/stores/kayabliss-bayridge/specials` },
  { label: "Events", href: `${ORIGIN}/location/brooklyn-ny/events/` },
  { label: "Delivery", href: `${ORIGIN}/delivery/bay-ridge-weed-delivery/` },
  {
    label: "Products",
    children: [
      ["Products", ""],
      ["Accessories", "accessories/"],
      ["Concentrates", "concentrates/"],
      ["Edibles", "edibles/"],
      ["Flower", "flower/"],
      ["Pre-Rolls", "pre-rolls/"],
      ["Tinctures", "tinctures/"],
      ["Topicals", "topicals/"],
      ["Vapes and Cartridges", "vapes-and-cartridges/"],
    ].map(([label, slug]) => ({ label, href: `${ORIGIN}/location/brooklyn-ny/products/${slug}` })),
  },
  {
    label: "Service Areas",
    children: [
      ["Service Areas", ""],
      ["Bay Ridge, NY", "bay-ridge-ny/"],
      ["Bensonhurst, NY", "bensonhurst-ny/"],
      ["Borough Park, NY", "borough-park-ny/"],
      ["Dyker Heights, NY", "dyker-heights-ny/"],
      ["Flatbush, NY", "flatbush-ny/"],
      ["Gravesend, NY", "gravesend-ny/"],
      ["Sunset Park, NY", "sunset-park-ny/"],
    ].map(([label, slug]) => ({ label, href: `${ORIGIN}/location/brooklyn-ny/service-areas/${slug}` })),
  },
  {
    label: "Locations",
    children: [
      { label: "Bay Ridge", href: `${ORIGIN}/location/brooklyn-ny/` },
      { label: "Brooklyn Heights", href: `${ORIGIN}/location/brooklyn-heights/` },
      { label: "Brighton Beach", href: `${ORIGIN}/location/brighton-beach-ave/` },
      { label: "Kensington", href: `${ORIGIN}/location/kensington/` },
    ],
  },
  { label: "Contact", href: `${ORIGIN}/contact-us/` },
];

export const hero = {
  h1: "Recreational Dispensary, Weed Dispensary, Cannabis Dispensary & Dispensary Near Me in Brooklyn, NY",
  store: "Bay Ridge, Brooklyn",
  address: "8412 3rd Ave, Brooklyn, NY 11209",
  addressHref: "https://g.page/r/CbY3Hh2gTnitEAE/review",
  phone: "718-500-7400",
  phoneHref: "tel:+17185007400",
  valet: "Now Offering Valet Parking Friday and Saturday Nights",
  ctas: [
    { label: "Shop In-Store", href: `${ORIGIN}/stores/kayabliss-bayridge/` },
    { label: "Shop Delivery", href: `${ORIGIN}/stores/kayabliss-bayridge/` },
  ],
};

export const categories = {
  heading: "Shop By Category",
  subheading: "Browse our Selection",
  shopAll: { label: "Shop All", href: `${ORIGIN}/stores/kayabliss-bayridge` },
  cta: "Shop now",
  items: [
    ["Flower", "flower/"],
    ["Pre-Rolls", "pre-rolls/"],
    ["Edibles", "edibles/"],
    ["Vapes", "vapes-and-cartridges/"],
    ["Topicals", "topicals/"],
    ["Tinctures", "tinctures/"],
    ["Concentrates", "concentrates/"],
    ["Accessories", "accessories/"],
  ].map(([label, slug]) => ({ label, href: `${ORIGIN}/location/brooklyn-ny/products/${slug}` })),
};

export const collections = [
  {
    heading: "Shop New Arrivals",
    body: `Review the promoted edible products for added THC/CBD, applicable statutory exceptions, and interstate-commerce implications before enabling their promotional listings or ordering links.
. Be the first to try what’s new before it’s gone.`,
    cta: "Shop New Arrivals",
    href: `${ORIGIN}/stores/kayabliss-bayridge`,
  },
  {
    heading: "Shop Staff Picks",
    body: "Hand-selected by our knowledgeable team, these are the products our budtenders can’t stop recommending. Trusted picks for a reliably elevated experience.",
    cta: "Shop Staff Picks",
    href: `${ORIGIN}/stores/kayabliss-bayridge`,
  },
  {
    heading: "Shop Popular Flower",
    body: "Our most-loved flower strains, chosen by our Bay Ridge community. From fragrant, potent buds to easy-going everyday strains — these are the ones customers keep coming back for.",
    cta: "Shop Flower",
    href: `${ORIGIN}/stores/kayabliss-bayridge/?dtche%5Bcategory%5D=flower`,
  },
  {
    heading: "Shop Popular Pre-Rolls",
    body: "Ready to roll, no rolling required. Explore our best-selling pre-rolls — convenient, consistent, and perfect for whenever inspiration (or relaxation) strikes.",
    cta: "Shop Pre-Rolls",
    href: `${ORIGIN}/stores/kayabliss-bayridge/?dtche%5Bcategory%5D=pre-rolls`,
  },
];

export const reviews = {
  eyebrow: "What our customers are saying",
  heading: "Customer Reviews",
  leaveReview: "Leave a Review",
  items: [
    {
      title: "Most Amazing Team at Kaya Bliss Dispo",
      body: "They help you so much as you enter through the doors and greet you with the biggest smiles, they are truly amazing and give you an awesome experience. I truly love them so much!",
      author: "Omar S.",
    },
    {
      body: "My mom gets me my stuff here,They hit so much better than the stuff on street! Would recommend this dispensary only theirs,customer service is great. I recommend the Fernway disposable vapes and I had a few pre rolls from here they all hit nice",
      author: "Daniel M.",
    },
    {
      body: "Amir and Sophie and Aidan are the best and super nice and welcoming and knowledgeable which is the best part. If you’re in the area def stop by Kaya bliss !! The products are also always affordable and always getting new stuff. I’m very very very happy",
      author: "Caitlin O.",
    },
    {
      body: "Love Kaya! Staff is super knowledgeable, kind and always looking to help or just share new products that they’re enjoying. Can’t forget about the loyalty program they have either! Seriously the best I’ve encountered from any dispensary. Selection and price points are amazing as well. Great dispensary that’s worth becoming a regular at!",
      author: "Alexandra K.",
    },
    {
      body: "Lively shop, came when they were having their one year anniversary. Wanted to stay but had to catch a bus back to the island. Nice discounts, wide selection, quick and easy ordering and pick up if you need to be in and out even with all the people at the party. Definitely going to be my go to from now on.",
      author: "William C.",
    },
    {
      body: "This place is amazing! Everything is so clean and organized. From the second you walk in you feel welcomed and safe. Aidan and Zack helped me immediately making sure I knew what I was getting and got the best choice for me. Angie checked me out and was such a sweetheart. Prices are very reasonable. I will definitely be back.",
      author: "Lexi M.",
    },
    {
      body: "Such a cool spot with a lot of different options! Convenient location and the people are really helpful",
      author: "Sabrina L.",
    },
    {
      body: "Absolutely great customer service! Everything is so timely and the workers actually pay attention to you. Also they have a great Toys For Tots donation box going on for the holidays. Give a gift, get a free treat! Will definitely be back",
      author: "Tiffany B.",
    },
  ],
  chooseLocation: "Choose a Location",
  reviewLocations: [
    {
      name: "Bay Ridge, Brooklyn",
      leaveHref: "https://g.page/r/CbY3Hh2gTnitEAE/review",
      moreHref: "https://www.google.com/search?q=Kaya+Bliss+Dispensary#mpd=~15513405152131380167/customers/reviews",
    },
    {
      name: "Brooklyn Heights, Brooklyn",
      leaveHref: "https://g.page/r/CX93z67_EQZGEAE/review",
      moreHref: "https://www.google.com/search?q=Kaya+Bliss+Dispensary#mpd=~15773194249040902919/customers/reviews",
    },
  ],
};

const STANDARD_HOURS = ["Sun-Wed: 9:00am - 11:00pm", "Thu-Sat: 9:00am - 12:00am"];
const STANDARD_DELIVERY = ["Sun-Wed: 10:00am-10:00pm", "Thu-Sat: 10:00am-11:00pm"];

export const locations = {
  eyebrow: "Our Locations",
  heading: "Four Locations to Serve You Better",
  items: [
    {
      name: "Bay Ridge",
      street: "8412 3rd Ave",
      city: "Brooklyn, NY 11209",
      phone: "718-500-7400",
      phoneHref: "tel:+17185007400",
      storeHours: STANDARD_HOURS,
      deliveryHours: STANDARD_DELIVERY,
      cta: { label: "Shop now", href: `${ORIGIN}/stores/kayabliss-bayridge/` },
    },
    {
      name: "Brooklyn Heights",
      street: "64 Henry St.",
      city: "Brooklyn, NY 11201",
      phone: "718-500-8222",
      phoneHref: "tel:+17185008222",
      storeHours: STANDARD_HOURS,
      deliveryHours: STANDARD_DELIVERY,
      cta: { label: "Shop now", href: `${ORIGIN}/stores/kayabliss-brooklynheights/` },
    },
    {
      name: "Kensington",
      comingSoon: "Coming soon!",
      street: "205 Church Ave",
      city: "Brooklyn, NY 11218",
      storeHours: STANDARD_HOURS,
      deliveryHours: ["Coming Soon"],
      cta: { label: "Store info", href: `${ORIGIN}/location/kensington/` },
    },
    {
      name: "Brighton Beach",
      comingSoon: "Coming soon!",
      street: "301 Brighton Beach Ave",
      city: "Brooklyn, NY 11235",
      storeHours: STANDARD_HOURS,
      deliveryHours: ["Coming Soon"],
      cta: { label: "Store info", href: `${ORIGIN}/location/brighton-beach-ave/` },
    },
  ],
};

// Long-form copy. Inline links are expressed as [text](href) and rendered by <RichText>.
export const story = [
  {
    level: "h2",
    heading: "Discover the Finest Cannabis at Kaya Bliss Dispensary in Bay Ridge, Brooklyn, NY",
    paragraphs: [
      `Nestled in the heart of Bay Ridge, Brooklyn, NY, Kaya Bliss Dispensary is your premier destination for top-quality [cannabis products](${ORIGIN}/products/). Our dedicated team is passionate about providing a unique and elevated experience for our valued customers. We take pride in sourcing the finest cannabis strains and curating an extensive selection of products to cater to every preference and need.`,
      "At Kaya Bliss Dispensary, we understand that cannabis is more than just a plant; it’s a journey of discovery and wellness. Our knowledgeable staff is always ready to guide you through our diverse range of products, ensuring that you find the perfect match for your desired experience. Whether you’re a seasoned connoisseur or a curious newcomer, we’re here to help you navigate the world of cannabis with confidence and ease.",
    ],
  },
  {
    level: "h2",
    heading: "A Curated Selection of Premium Cannabis Products",
    paragraphs: [
      `Step into our inviting [Brooklyn dispensary](${ORIGIN}/), and you’ll be greeted by an array of carefully selected cannabis products. From fragrant flower strains to potent concentrates, soothing tinctures to delectable edibles, we have something for everyone. Our inventory is meticulously curated to ensure that you have access to the highest quality products available in the market.`,
      "We take great care in partnering with trusted cultivators and brands who share our commitment to excellence. Explore our curated selection of cannabis products. Whether you’re seeking relief from chronic pain, a way to unwind after a long day, or a creative spark to fuel your inspiration, Kaya Bliss Dispensary has the perfect cannabis product to suit your needs.",
    ],
  },
  {
    level: "h2",
    heading: "Elevate Your Cannabis Experience",
    paragraphs: [
      "At Kaya Bliss Dispensary, we believe that cannabis is an art form. We’re constantly exploring innovative ways to combine art and cannabis, bringing you a truly unique and luxurious experience. From our elegantly designed interior to our thoughtfully crafted product displays, every aspect of our dispensary is designed to elevate your cannabis journey.",
      "We host regular events and workshops where you can immerse yourself in the world of cannabis culture. From educational seminars on different cannabis strains to hands-on sessions on creating your own infused recipes, we strive to provide a holistic and engaging experience for our community.",
    ],
  },
  {
    level: "h2",
    heading: "Convenient Cannabis Delivery in Bay Ridge, Brooklyn",
    paragraphs: [
      `For those who prefer to shop from the comfort of home, Kaya Bliss Dispensary offers reliable and discreet [cannabis delivery](${ORIGIN}/delivery/bay-ridge-weed-delivery/) throughout Bay Ridge and the surrounding Brooklyn areas. Our delivery service is designed to bring your favorite products straight to your door with the same level of care and quality you expect in-store. Simply browse our menu online, place your order, and let our team handle the rest. Whether you’re restocking your go-to essentials or exploring something new, our fast and secure delivery ensures a seamless cannabis experience without ever leaving home.`,
    ],
  },
  {
    level: "h3",
    heading: "Exceptional Customer Service",
    paragraphs: [
      "Our friendly and knowledgeable staff is the backbone of Kaya Bliss Dispensary. We are passionate about cannabis and dedicated to providing exceptional customer service. Whether you have questions about a specific product, need guidance on dosing, or simply want to share your experiences, our team is always ready to listen and assist you.",
      "We believe in fostering a welcoming and inclusive environment where everyone feels comfortable and supported. Our budtenders are well-versed in the latest cannabis trends and research, and they are committed to helping you find the perfect products to suit your unique needs and preferences.",
    ],
  },
  {
    level: "h3",
    heading: "Join the Kaya Bliss Community",
    paragraphs: [
      "When you choose Kaya Bliss Dispensary, you become part of a vibrant and supportive community of cannabis enthusiasts. We value the relationships we build with our customers and strive to create a sense of belonging and camaraderie.",
      "At Kaya Bliss Dispensary, we’re more than just a cannabis retailer; we’re a community of passionate individuals united by our love for this remarkable plant. We invite you to visit our Bay Ridge, Brooklyn, NY dispensary and experience the Kaya Bliss difference for yourself. Discover the finest cannabis products, exceptional customer service, and a truly elevated cannabis experience.",
    ],
  },
] as const;

export const storeStrip = [
  { street: "8412 3rd Ave", city: "Brooklyn, NY", href: `${ORIGIN}/stores/kayabliss-bayridge` },
  { street: "64 Henry St.", city: "Brooklyn, NY", href: `${ORIGIN}/stores/kayabliss-brooklynheights` },
  { street: "205 Church Ave", city: "Brooklyn, NY", href: `${ORIGIN}/stores/kayabliss-churchave` },
  { street: "301 Brighton Beach Ave", city: "Brooklyn, NY", href: `${ORIGIN}/stores/kayabliss-brightonbeach` },
];

export const community = {
  seoH2: "Weed Near Me in Brooklyn, NY | Weed Dispensary",
  seoH3: "Weed Near Me ∴ Cannabis Dispensary Near Me ∴ Brooklyn, NY",
  instagram: { label: "Instagram", href: "https://www.instagram.com/kayablissnyc/" },
  follow: "Follow Kaya Bliss Dispensary Today",
  tagline: "Wellness, Creativity, and personal growth",
  heading: "Join the Kaya Bliss Community",
  paragraphs: [
    "At Kaya Bliss Dispensary, we’re more than just a dispensary; we’re a community of cannabis enthusiasts, united by our passion for the plant and its potential to enhance our lives. By choosing Kaya Bliss, you become part of a family that values wellness, creativity, and personal growth.",
    "Explore our online shop to discover the Kaya Bliss difference. Experience the perfect blend of premium cannabis products, exceptional service, and a truly elevated dispensary experience.",
  ],
  cta: { label: "Shop Now", href: `${ORIGIN}/store` },
};

export const notify = {
  heading: "Get Notified",
  body: "Enter your email address to receive the latest news, updates, and offers!",
  fields: { name: "Name (Required)", email: "Email Address (Required)", phone: "Phone" },
  submit: "Submit",
};

export const footer = {
  stores: [
    {
      region: "New York",
      name: "Bay Ridge, Brooklyn",
      address: "8412 3rd Ave Brooklyn, NY 11209",
      today: "Open Today: 9:00 AM - 12:00 AM",
      delivery: ["Delivery Hours Sun-Wed: 10:00am-10:00pm", "Thu-Sat: 10:00am-11:00pm"],
      license: "License: OCM-CAURD-24-000211",
      phone: "718-500-7400",
      phoneHref: "tel:+17185007400",
      orderHref: `${ORIGIN}/stores/kayabliss-bayridge/`,
    },
    {
      region: "New York",
      name: "Brighton Beach, Brooklyn",
      address: "301 Brighton Beach Ave Brooklyn, NY 11235",
      today: "Coming Soon",
      delivery: ["Delivery Hours Coming Soon"],
      license: "License: OCM-RETL-24-000019",
      orderHref: `${ORIGIN}/stores/kayabliss-brightonbeach/`,
    },
    {
      region: "New York",
      name: "Brooklyn Heights, Brooklyn",
      address: "64 Henry St. Brooklyn, NY 11201",
      today: "Open Today: 9:00 AM - 12:00 AM",
      delivery: ["Delivery Hours Sun-Wed: 10:00am-10:00pm", "Thu-Sat: 10:00am-11:00pm"],
      license: "License: OCM-RETL-24-000127",
      phone: "718-500-8222",
      phoneHref: "tel:+17185008222",
      orderHref: `${ORIGIN}/stores/kayabliss-brooklynheights/`,
    },
    {
      region: "New York",
      name: "Kensington, Brooklyn",
      address: "205 Church Ave Brooklyn, NY 11218",
      today: "Coming Soon",
      delivery: ["Delivery Hours Coming Soon"],
      orderHref: `${ORIGIN}/stores/kayabliss-churchave/`,
    },
  ],
  orderOnline: "Order Online",
  products: {
    heading: "Our Products",
    links: [
      ["Flower", "flower/"],
      ["Pre-rolls", "pre-rolls/"],
      ["Edibles", "edibles/"],
      ["Vapes", "vapes-cartridges/"],
      ["Topicals", "topicals/"],
      ["Tinctures", "tinctures/"],
      ["Concentrates", "concentrates/"],
      ["Accessories", "accessories/"],
    ].map(([label, slug]) => ({ label, href: `${ORIGIN}/products/${slug}` })),
  },
  info: {
    heading: "Info",
    links: [
      { label: "About Us", href: `${ORIGIN}/company/about-us/` },
      { label: "Careers", href: `${ORIGIN}/company/careers/` },
      { label: "Events", href: `${ORIGIN}/company/events/` },
      { label: "Press", href: `${ORIGIN}/company/press/` },
      { label: "Loyalty Program", href: `${ORIGIN}/company/loyalty-program/` },
      { label: "Specials", href: `${ORIGIN}/company/specials/` },
      { label: "Contact Us", href: `${ORIGIN}/contact-us/` },
    ],
  },
  licenses: "Cannabis License: OCM-CAURD-24-000211, OCM-RETL-24-000127, OCM-RETL-24-000019",
  disclaimer:
    "Disclaimer: This product is intended for use only by adults 21 and older. Keep out of reach of children and pets. Cannabis can impair concentration, coordination and judgment. Do not operate a vehicle or machinery under the influence of cannabis. Use of cannabis while pregnant or breastfeeding may be harmful. National Poison Control Center hotline: 1-800-222-1222. Concerned about your cannabis use? Text HOPENY, call 1-877-8-HOPENY, or visit [oasas.ny.gov/HOPELine](https://oasas.ny.gov/HOPELine).",
  copyright: "© 2026 Kaya Bliss Dispensary All rights reserved.",
  privacy: { label: "Privacy Policy", href: `${ORIGIN}/privacy-policy` },
  seo: ["Cannabis Dispensary Near Me", "Weed Near Me", "Brooklyn, NY"],
  servicesAreas: "Services & Areas Served",
};

export const ageGate = {
  heading: "Verify Your Age",
  question: "Are you over the age of 21?",
  denied: "We're sorry, but you do not meet the required age to enter this website.",
  yes: "Yes, I'm 21+",
  no: "No, I'm Under 21",
  choose: "Great! Please Choose Your Location:",
  stores: [
    { name: "Bay Ridge, Brooklyn", street: "8412 3rd Ave" },
    { name: "Brooklyn Heights, Brooklyn", street: "64 Henry St." },
  ],
  select: "Select",
};
