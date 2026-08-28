import { Project } from "../../data/projects";

export interface ProjectDetailCopy {
  category: string;
  client: string;
  duration: string;
  intro: string;
  important: string;
  approach: string;
  vision: string;
  challenges: string;
  resolving: string;
  userCentric: string;
  needs: string;
}

export function getProjectCopy(project: Project): ProjectDetailCopy {
  if (project.slug === "trivora-jewels" || project.slug === "trivora") {
    return {
      category: "Fine Jewellery & Luxury E-Commerce",
      client: "Trivora Jewels",
      duration: "4 weeks",
      intro: "Trivora Jewels is a luxury fine jewellery brand celebrating timeless artistry, bespoke diamond creations, and exquisite gold craftsmanship. Built on Shopify with custom high-converting UX, the digital flagship delivers an opulent yet frictionless shopping journey.",
      important: "In luxury jewellery e-commerce, high-resolution visual storytelling, trust-building details, and effortless navigation are paramount. Trivora Jewels blends refined typography and elegant product showcases to inspire confidence and desire.",
      approach: "We designed a bespoke shopping experience centered around collection discovery, high-definition piece showcases, transparent certification details, and a streamlined mobile checkout flow that maximizes conversion.",
      vision: "To create an immersive digital boutique that mirrors the elegance of a high-end jewellery salon - marrying warm gold tones, clean editorial layouts, and silky smooth transitions.",
      challenges: "Balancing rich, high-resolution imagery and intricate jewellery details with lightning-fast load times and seamless Shopify app integrations for regional currencies and payments.",
      resolving: "Implemented custom theme optimizations, responsive image loading, interactive product zooms, and an intuitive filtering system allowing customers to effortlessly browse rings, necklaces, earrings, and bespoke collections.",
      userCentric: "Every interaction is calibrated for luxury buyers - from detailed craftsmanship highlights and metal purity indicators to one-click concierge assistance and smooth checkout.",
      needs: "The customized Shopify architecture provides Trivora Jewels with complete catalog scalability, inventory syncing, and high-speed performance across all mobile and desktop devices.",
    };
  }

  if (project.slug === "honk") {
    return {
      category: "Mobility & Smart Ride-Sharing",
      client: "HONK",
      duration: "4 weeks",
      intro: "HONK is an on-demand mobility platform engineered for real-time ride-sharing and route intelligence.",
      important: "Modern transit applications require crystal-clear mapping, effortless ride scheduling, and real-time telemetry that drivers and commuters can trust instantly.",
      approach: "We architected an ultra-responsive UI/UX interface focusing on instant route booking, dynamic fare calculation, and intuitive driver-passenger communications.",
      vision: "To provide a modern, friction-free urban commuting experience with clean vector map visualizations and high-speed location tracking.",
      challenges: "Delivering instantaneous geo-tracking and multi-stop route calculations on mobile devices with zero lag.",
      resolving: "Optimized interface rendering with lightweight vector assets, intuitive step-by-step dispatch flows, and proactive ride status alerts.",
      userCentric: "Clean iconography, high-contrast ride options, and one-tap destination presets remove friction for everyday commuters.",
      needs: "A resilient frontend architecture ready to scale across international transit hubs with diverse regional requirements.",
    };
  }

  if (project.slug === "herstories") {
    return {
      category: "Women's Wellness & Nutritional Science",
      client: "Her Stories",
      duration: "4 weeks",
      intro: "Her Stories is an intentional women's wellness brand offering science-backed, all-in-one nutritional supplements designed to help women live in alignment with who they want to be through quiet and consistent daily rituals.",
      important: "In wellness and nutritional supplements, consumer trust, scientific transparency, and ingredient integrity are paramount. Her Stories blends clinical efficacy with soothing minimalism to foster sustainable daily wellness habits.",
      approach: "We designed a conversion-driven digital flagship highlighting clinical benefits, active ingredient breakdowns, flexible recurring subscriptions, and genuine customer progress stories.",
      vision: "To create an empowering digital sanctuary that simplifies women's daily health regimens through calming aesthetics, clean typography, and a seamless shopping journey.",
      challenges: "Translating comprehensive nutritional formulas and health benefits into easily digestible visual guides while maintaining lightning-fast mobile performance and friction-free subscription checkouts.",
      resolving: "Implemented interactive ingredient spotlights, routine builders, customer progress testimonials, and an intuitive 1-click subscription checkout powered by custom Shopify integrations.",
      userCentric: "Every interaction is calibrated for the customer's wellness journey - featuring clear dosage guidance, holistic routine recommendations, and transparent ingredient sourcing.",
      needs: "A robust, high-speed Shopify architecture built for scalable recurring subscription management, customer accounts, and rapid product catalog expansions.",
    };
  }

  if (project.slug === "gods") {
    return {
      category: "Spiritual Décor & Luxury Divine Collectibles",
      client: "Gods by D'mart",
      duration: "5 weeks",
      intro: "Gods by D'mart is a luxury brand offering handcrafted divine idols, premium spiritual home décor, and exquisite brass, marble, and sterling silver masterpieces crafted with exceptional artisan mastery.",
      important: "Divine collectibles demand reverence, immaculate visual fidelity, and unwavering confidence in material authenticity and craftsmanship. Gods by D'mart captures the essence of sacred heritage in a refined modern digital experience.",
      approach: "We architected an opulent digital gallery emphasizing ultra-high-definition artifact showcases, artisan provenance storytelling, material purity certifications, and bespoke luxury gifting experiences.",
      vision: "To craft a sublime online destination celebrating sacred art and heirloom craftsmanship through warm golden accents, rich ambient textures, and effortless navigation.",
      challenges: "Capturing the intricate sculptural textures and metallic finishes of brass, silver, and marble idols while guaranteeing instant mobile loading and secure high-value transactions.",
      resolving: "Engineered high-performance image zoom inspection, authenticity certificate badges, curated festive/housewarming gifting funnels, and personalized concierge checkout.",
      userCentric: "Designed thoughtfully for collectors and sacred gift-givers - offering occasion-based curation, detailed dimension charts, and secure insured transit options.",
      needs: "A scalable, high-converting Shopify store designed to support high-ticket catalog items, bespoke gifting inquiries, and international shipping requirements.",
    };
  }

  if (project.slug === "vensa") {
    return {
      category: "Dermatological Skincare & Daily Essentials",
      client: "Vensa Skin Care",
      duration: "4 weeks",
      intro: "Vensa Skin Care is a modern dermatological brand formulating high-efficacy daily cleansers, sun protection, and barrier-repair essentials engineered for healthy, hydrated, and glowing skin.",
      important: "In clean skincare, clarity of benefits, skin-type targeting, and dermatologist-tested credentials build essential buyer confidence. Vensa blends clean aesthetics with informative product breakdowns.",
      approach: "We created a streamlined skincare discovery experience featuring routine builders, ingredient highlights, skin concern filters, and a high-converting mobile checkout flow.",
      vision: "To deliver a fresh, rejuvenating digital storefront that inspires confidence and makes everyday skincare routines simple, effective, and delightful.",
      challenges: "Presenting active skincare formulations and clinical benefits clearly across mobile screens without cluttering the shopping experience.",
      resolving: "Built intuitive ingredient matrices, before-and-after customer galleries, bundle-and-save product recommendations, and fast Shopify payments.",
      userCentric: "Designed around skin-type personalization - helping visitors instantly identify their ideal hydration and sun protection routine.",
      needs: "A nimble and scalable Shopify storefront optimized for repeat purchases, customer subscriptions, and rapid seasonal launches.",
    };
  }

  if (project.slug === "limitless") {
    return {
      category: "Apparel Manufacturing & Corporate Workwear",
      client: "Limitless Clothing",
      duration: "5 weeks",
      intro: "Limitless Clothing is an end-to-end textile manufacturer and apparel brand delivering customized uniforms, corporate merchandise, and lifestyle apparel with superior fabric quality and precision craftsmanship.",
      important: "B2B and B2C apparel manufacturing platforms must showcase fabric endurance, production capabilities, and sample ordering processes with absolute clarity.",
      approach: "We designed a multi-vertical catalog structure catering to corporate, education, healthcare, and lifestyle apparel buyers with dedicated inquiry funnels and direct sample ordering.",
      vision: "To present an enterprise-grade digital portal demonstrating end-to-end manufacturing power, modern design standards, and sustainable textile practices.",
      challenges: "Seamlessly organizing diverse product verticals (healthcare scrubs, corporate uniforms, lifestyle hoodies) while supporting both bulk wholesale quotes and retail purchases.",
      resolving: "Engineered customized vertical landing pages, bulk RFQ (Request for Quote) calculators, spec-sheet downloads, and responsive product carousels.",
      userCentric: "Tailored journeys for corporate procurement managers and retail customers alike, with clear sizing charts, fabric GSM specifications, and rapid contact touchpoints.",
      needs: "A flexible and robust commerce infrastructure built to scale large B2B wholesale orders alongside direct-to-consumer product drops.",
    };
  }

  if (project.slug === "laysyy") {
    return {
      category: "Urban Streetwear & Oversized Fashion",
      client: "Laysyy",
      duration: "4 weeks",
      intro: "Laysyy is a homegrown Indian streetwear brand redefining everyday youth fashion with premium heavy-cotton oversized tees, cozy hoodies, and timeless minimal silhouettes.",
      important: "Modern streetwear culture thrives on bold visuals, drop countdowns, effortless mobile shopping, and relatable urban lifestyle aesthetics.",
      approach: "We created a high-energy e-commerce experience focusing on editorial lifestyle lookbooks, limited drop mechanics, instant color/swatch selections, and seamless social commerce integrations.",
      vision: "To build a vibrant digital home for contemporary streetwear enthusiasts, merging dark and moody aesthetics with lightning-fast cart-to-checkout velocity.",
      challenges: "Balancing high-resolution editorial lookbook media and video assets with instant mobile page load times and real-time inventory countdowns.",
      resolving: "Implemented custom theme optimizations, quick-view drawer modals, sticky add-to-cart bars, and rapid 1-tap UPI payment flows.",
      userCentric: "Prioritized the mobile generation with thumb-friendly navigation, fit-guide overlays, customer UGC lookbooks, and instant order tracking.",
      needs: "A scalable Shopify store capable of managing massive flash-sale traffic spikes and synchronized social media product drops.",
    };
  }

  if (project.slug === "rp-royal" || project.slug === "rproyal") {
    return {
      category: "Sustainable Food Packaging & Commercial Supplies",
      client: "RP Royal",
      duration: "5 weeks",
      intro: "RP Royal is a premier packaging solutions provider delivering high-durability, food-safe containers, meal trays, and freezer/microwave-safe packaging engineered for food brands, caterers, and enterprise hospitality.",
      important: "In commercial packaging, structural integrity, food safety certifications, heat/cold tolerance, and ease of bulk ordering are vital to earn client trust and repeat industrial contracts.",
      approach: "We architected an organized B2B & B2C digital catalog on WordPress featuring categorized container sizing matrices, leak-proof material specifications, instant quotation requests, and wholesale inquiry funnels.",
      vision: "To create a clean, modern commercial web portal that showcases RP Royal's manufacturing capabilities, wide product versatility, and eco-friendly standards with clarity.",
      challenges: "Presenting extensive technical container dimensions, compartment layouts, and temperature tolerances without overwhelming commercial procurement managers.",
      resolving: "Developed intuitive filter tabs by capacity (ml), compartment count, and material grade, alongside downloadable product specification sheets and direct WhatsApp/quote requests.",
      userCentric: "Organized around the food service workflow - allowing restaurant chains, cloud kitchens, and takeaway outlets to quickly find the exact packaging dimensions they require.",
      needs: "A scalable, responsive WordPress architecture capable of supporting rapid new mold additions, bulk customer inquiries, and localized logistics coordination.",
    };
  }

  if (project.slug === "purifi") {
    return {
      category: "Eco-Friendly Living & Natural Air Purification",
      client: "Purifi",
      duration: "4 weeks",
      intro: "Purifi is an eco-conscious wellness brand offering 100% natural, non-electric air purifiers powered by activated coconut shell carbon to quietly absorb odors, humidity, and airborne toxins in homes, cars, and offices.",
      important: "For zero-electricity, sustainable wellness solutions, educating customers on the science of adsorption and demonstrating long-term environmental value builds essential buying conviction.",
      approach: "We designed a conversion-focused WordPress storefront that pairs educational visual diagrams, bundle builder options, and transparent surface area science.",
      vision: "To craft an organic, minimalist digital storefront emphasizing pure living, sustainable coconut shell charcoal origins, and effortless room-by-room air freshening.",
      challenges: "Differentiating passive carbon filtration from conventional motorized electric air purifiers while highlighting superior sustainability and zero ongoing energy costs.",
      resolving: "Created side-by-side comparison charts, visual coverage area guides (from wardrobes to full rooms), and compelling multi-pack family bundle offerings with 1-click checkout.",
      userCentric: "Designed for health-conscious families with clear room-type selector guides, maintenance-free instructions, and recurring replacement reminders.",
      needs: "A fast, modular WordPress architecture optimized for mobile checkouts, bundle discounts, and scalable product catalog expansions.",
    };
  }

  if (project.slug === "oudqua") {
    return {
      category: "Luxury Niche Perfumery & Arabian Oud",
      client: "Oudqua",
      duration: "4 weeks",
      intro: "Oudqua is a luxury niche perfume house specializing in authentic Arabian Oud, rare attars, artisanal incense, and opulent fine fragrances crafted for discerning fragrance connoisseurs.",
      important: "In luxury perfumery, evocative storytelling, olfactory pyramid transparency (top, heart, and base notes), and rich visual aesthetics are essential to convey luxury without physical sampling.",
      approach: "We developed an immersive Shopify flagship highlighting dramatic bottle art, sensory note breakdowns, longevity ratings, and seamless international checkout.",
      vision: "To evoke the timeless mystique of Arabian olfactory traditions through rich dark tones, gold accents, and fluid product exploration.",
      challenges: "Translating complex aromatic profiles - aged oud, amber, rose, and rare woods - into a sensory digital shopping journey with fast mobile loading.",
      resolving: "Integrated fragrance pyramid visualizers, sample set discovery kits, customer scent reviews, and express multi-currency Shopify payment options.",
      userCentric: "Designed around the fragrance discovery ritual, allowing customers to easily explore scents by intensity, key notes, and occasion suitability.",
      needs: "A resilient Shopify e-commerce platform built for high-ticket artisanal perfumery, international shipping fulfillment, and limited-edition scent drops.",
    };
  }

  if (project.slug === "mj-and-co" || project.slug === "mjco") {
    return {
      category: "Handcrafted Scented Candles & Home Aromas",
      client: "MJ & Co",
      duration: "4 weeks",
      intro: "MJ & Co is an artisanal home fragrance brand crafting hand-poured 100% natural soy wax scented candles, luxury aroma diffusers, and curated gift hampers for conscious living.",
      important: "In home fragrance and candle commerce, clean-burning ingredients, soothing aesthetic presentation, and gift-ready packaging storytelling are key drivers of customer loyalty.",
      approach: "We designed an elegant, warm Shopify store featuring mood-based fragrance categorizations, burn-time longevity highlights, custom gift box configurations, and smooth mobile ordering.",
      vision: "To create a serene, candle-lit digital atmosphere that reflects artisan craftsmanship, natural botanical fragrances, and mindful relaxation.",
      challenges: "Showcasing nuanced aromas and flame-throw details digitally while ensuring lightning-fast mobile browsing during peak festive gifting seasons.",
      resolving: "Built fragrance family filters (floral, woody, gourmand, fresh), festive gifting bundles, customer burn-test testimonials, and 1-tap checkout.",
      userCentric: "Empowered shoppers to choose candles by room mood and gifting occasions, complete with custom greeting notes and luxury packaging previews.",
      needs: "A scalable Shopify storefront engineered to handle surge traffic during festival seasons with synchronized inventory tracking and fast local fulfillment.",
    };
  }

  if (project.slug === "rosete") {
    return {
      category: "Luxury Hospitality Gifting & Gourmet Boutique",
      client: "Roseate - Upstage Collect",
      duration: "5 weeks",
      intro: "Upstage Collect by Roseate is the luxury retail and gifting flagship of Roseate Hotels & Resorts, offering handcrafted artisanal mithai, bespoke chocolates, luxury home decor, fine jewellery, and celebratory gifting hampers.",
      important: "In luxury hospitality e-commerce, expressing 5-star brand heritage, sensory culinary elegance, and refined gifting presentation builds supreme prestige and high-value conversion.",
      approach: "We architected an opulent digital storefront on Shopify featuring editorial product showcases, customized festive hamper builders, temperature-controlled delivery details, and effortless gifting checkouts.",
      vision: "To mirror the refined luxury and five-star hospitality of Roseate Hotels in a digital boutique format with delicate rose-gold hues, sophisticated typography, and smooth purchasing flows.",
      challenges: "Organizing an eclectic catalog spanning perishable luxury confectionery, fine fragrances, designer lifestyle books, and heavy home decor while ensuring frictionless cross-category shopping.",
      resolving: "Engineered curated occasion navigation (festive, corporate, personal gifting), real-time delivery slot schedulers for fresh mithai, and personalized gift message integration at checkout.",
      userCentric: "Designed for discerning luxury gift-givers - offering recipient customization, luxury box previews, and direct corporate concierge assistance.",
      needs: "A scalable Shopify infrastructure engineered to manage festive traffic spikes with integrated cold-chain logistics and multi-item gift shipping.",
    };
  }

  if (project.slug === "xcel") {
    return {
      category: "Commercial Machinery & Industrial Laundry Engineering",
      client: "XCEL Laundry Systems",
      duration: "5 weeks",
      intro: "XCEL Laundry Systems is India's premier manufacturer and turnkey provider of industrial laundry machinery, powering leading hotels, hospitals, garment export houses, and commercial laundromats with precision-engineered washing, drying, and steam finishing systems.",
      important: "Industrial machinery websites require detailed technical specifications, capacity ranges (kg/lbs), energy-efficiency metrics, and clear consultation funnels to establish manufacturing authority.",
      approach: "We designed a robust, modern industrial web portal with categorized equipment catalogues (washing, drying, flat-work ironing, dry-cleaning), interactive equipment showcases, and automated quote generation.",
      vision: "To reflect 32+ years of manufacturing excellence and over 30,000 installations through a clean, authoritative, and high-performance digital presence.",
      challenges: "Simplifying comprehensive technical specifications, power requirements, and industrial schematics into an intuitive, responsive interface for plant managers and business owners.",
      resolving: "Implemented structured spec tables, downloadable equipment brochures, filterable capacity matrices, and instant RFQ (Request for Quote) routing.",
      userCentric: "Organized by industry vertical (hospitality, healthcare, apparel processing) so procurement managers can immediately locate complete turnkey laundry setups.",
      needs: "A high-speed custom frontend built with Next.js that loads instantaneous equipment data, supports pan-India service inquiries, and drives high-intent B2B leads.",
    };
  }

  if (project.slug === "settleloans") {
    return {
      category: "Fintech & Legal Debt Settlement Advisory",
      client: "SettleLoans",
      duration: "4 weeks",
      intro: "SettleLoans is India's leading debt relief and legal advisory platform, helping individuals and businesses lawfully settle unmanageable personal loans, credit card debts, and commercial borrowings while ending harassment from recovery agents.",
      important: "In financial debt relief, building empathy, absolute legal clarity, strict confidentiality, and transparent settlement proof is paramount to easing consumer anxiety.",
      approach: "We engineered an interactive, trust-first web application featuring interactive settlement calculators, verified client settlement letters, step-by-step legal workflows, and rapid confidential consultation booking.",
      vision: "To deliver a calming, authoritative digital experience that empowers distressed borrowers with legally sound, structured paths to debt freedom.",
      challenges: "Communicating complex RBI guidelines, legal notice responses, and NPA restructuring terms simply without overwhelming users in financial distress.",
      resolving: "Designed an interactive 'Fix It' toggle journey, verified settlement proof sliders, legal rights FAQs, and an encrypted 1-minute loan evaluation funnel.",
      userCentric: "Built with extreme focus on accessibility and psychological reassurance - clean typography, non-intimidating forms, and one-tap WhatsApp / legal counsel access.",
      needs: "A high-converting, lightning-fast custom web application with automated CRM lead routing, secure customer data encryption, and instant case management.",
    };
  }

  if (project.slug === "rockers-jr" || project.slug === "rockers") {
    return {
      category: "Textile Manufacturing & Premium Kids Apparel",
      client: "Rockers Jr",
      duration: "4 weeks",
      intro: "Rockers Jr is an established textile master and kids' fashion manufacturer specializing in stylish, ultra-comfortable, and durable boys' wear crafted with 20+ years of textile excellence.",
      important: "Kids' apparel platforms must communicate fabric softness, breathable durability, seam quality, and flexible movement for playful children while conveying manufacturing trustworthiness to retail partners.",
      approach: "We crafted an energetic yet refined brand experience showcasing boy's fashion lookbooks, fabric composition highlights, wholesale bulk supply services, and direct customer touchpoints.",
      vision: "To build a vibrant digital home celebrating playful childhood with high-contrast typography, warm earth tones, and responsive textile storytelling.",
      challenges: "Demonstrating superior textile weave quality and stitch durability across mobile screens while catering to both B2C parents and B2B wholesale buyers.",
      resolving: "Engineered high-definition zoom lookbooks, fabric certification badges, size recommendation guides, and direct wholesale inquiry portals.",
      userCentric: "Designed with thumb-friendly navigation, relatable playdate lifestyle visuals, and instant access to textile mastery credentials.",
      needs: "A high-performance custom frontend architecture designed to support rapid collection drops, seasonal catalogs, and international textile client inquiries.",
    };
  }

  if (project.slug === "pp-green-city" || project.slug === "ppgreen") {
    return {
      category: "Luxury Real Estate & Township Infrastructure",
      client: "PP Green City",
      duration: "5 weeks",
      intro: "PP Green City 2 is a premier integrated township and commercial infrastructure development in Sonipat, offering master-planned residential living, lush green landscapes, and modern commercial complexes like PP City Centre and West End Convention Mall.",
      important: "Luxury real estate platforms require cinematic visual immersion, interactive master plans, location connectivity highlights, and seamless site visit scheduling to turn curiosity into high-value bookings.",
      approach: "We engineered a cinematic real estate portal featuring drone video reels, interactive portfolio carousels, floor plan downloads, and instant appointment booking.",
      vision: "To capture the harmony of eco-conscious architecture and urban sophistication through rich emerald green accents, warm gold typography, and full-screen video media.",
      challenges: "Streaming ultra-high-definition drone walkthroughs, customer video reels, and complex architectural blueprints with zero buffering on mobile networks.",
      resolving: "Optimized modern video streaming codecs (WebM/MP4), lazy-loaded architectural galleries, location distance matrices, and 1-click consultation triggers.",
      userCentric: "Calibrated for prospective homeowners and commercial investors with dedicated residential vs commercial toggles, amenity tours, and instant sales representative connect.",
      needs: "A high-speed Next.js architecture built for rapid multimedia rendering, verified lead capture, and scalable project portfolio expansions.",
    };
  }

  if (project.slug === "cacti" || project.slug === "the-cacti-store") {
    return {
      category: "Anti-Tarnish Jewelry & Fashion Accessories",
      client: "The Cacti Store",
      duration: "4 weeks",
      intro: "The Cacti Store is a trendy lifestyle brand specializing in premium waterproof, anti-tarnish jewelry, chic Apple Watch bands, aesthetic phone accessories, and curated gift hampers for modern style lovers.",
      important: "In accessible luxury jewelry and accessories, showcasing daily durability (waterproof & sweatproof), close-up styling stacks, and gift-ready bundles is crucial to drive Gen-Z and millennial engagement.",
      approach: "We designed a vibrant, high-energy Shopify store featuring stack builders, anti-tarnish guarantee spotlights, dynamic accessory carousels, and rapid 1-click mobile checkout.",
      vision: "To create a playful, aesthetic digital boutique combining fresh pastels, editorial accessory flat-lays, and social-first shoppable media.",
      challenges: "Displaying extensive multi-color accessory variants and bundle-and-save deals while ensuring instantaneous product page loading on mobile devices.",
      resolving: "Built instant swatch selection drawers, shoppable UGC Instagram feeds, mix-and-match stack discounts, and streamlined UPI checkout integrations.",
      userCentric: "Empowered shoppers to build personalized accessory stacks with clear material purity guides and gift packaging options.",
      needs: "A scalable Shopify infrastructure engineered to manage high-volume social traffic surges, viral product drops, and seamless pan-India logistics.",
    };
  }

  if (project.slug === "pehnavri") {
    return {
      category: "Women's Ethnic Wear & Maternity-Friendly Fashion",
      client: "Pehnavri",
      duration: "4 weeks",
      intro: "Pehnavri is a beloved Indian ethnic wear brand celebrated for handcrafted breathable cotton kurtis, regal Anarkali sets, and thoughtful maternity-friendly outfits with concealed nursing zips.",
      important: "In women's ethnic and maternity apparel, highlighting pure breathable cotton fabrics, flattering tailored silhouettes, and functional feeding-friendly details creates strong consumer loyalty.",
      approach: "We developed a warm, culturally resonant Shopify e-commerce flagship with easy fabric filtering, concealed-zip feature spotlights, custom sizing guides, and official security trust badges.",
      vision: "To build a graceful digital home celebrating Indian heritage craftsmanship while offering contemporary comfort for modern women and mothers.",
      challenges: "Effectively demonstrating unique functional features like hidden nursing zippers without disrupting the elegance of traditional ethnic wear visuals.",
      resolving: "Created interactive functional callout hotspots, detailed video try-on reels, size-recommendation tools, and express checkout flows.",
      userCentric: "Designed around the diverse lifestyles of women - from festive celebrations to daily comfort and postpartum ease with straightforward return and exchange policies.",
      needs: "A nimble Shopify store built to scale new weekly ethnic drops, manage customer repeat subscriptions, and coordinate direct WhatsApp shopping inquiries.",
    };
  }

  if (project.slug === "rad" || project.slug === "rad-india") {
    return {
      category: "Contemporary Designer Womenswear & Luxury Co-Ords",
      client: "RAD India",
      duration: "4 weeks",
      intro: "RAD India is a luxury contemporary womenswear label known for architectural silhouettes, fine pintuck tailoring, sculpted bishop-sleeve blouses, and high-waisted statement trousers crafted for effortless elegance.",
      important: "In high-end designer womenswear, conveying textural depth, garment movement, precise tailoring measurements, and limited-run exclusivity drives aspirational luxury appeal.",
      approach: "We designed a high-fashion editorial Shopify storefront with monochromatic minimalism, dynamic lookbook carousels, detailed garment drape highlights, and seamless international checkout.",
      vision: "To reflect modern understated sophistication through crisp typography, expansive negative space, and evocative editorial imagery that lets the clothing speak.",
      challenges: "Translating tactile garment qualities such as subtle pintucks and fluid drapery into high-definition digital experiences while maintaining instantaneous mobile performance.",
      resolving: "Implemented editorial collection galleries, responsive size & fit breakdown modals, pre-order reservation triggers, and multi-currency payment gateways.",
      userCentric: "Built with intuitive collection browsing by occasion, styling pairing recommendations, and direct concierge styling support.",
      needs: "A sleek, resilient Shopify architecture engineered for rapid seasonal collection launches and seamless global fulfillment.",
    };
  }

  // Stable duration assignment based on title character length
  const durations = ["3 weeks", "4 weeks", "5 weeks", "6 weeks"];
  const durationIndex = project.title.length % durations.length;
  const duration = durations[durationIndex];

  const category = project.tags[0] || "Web Design";
  const client = project.title;

  const intro = `${project.title} is a premier ${category.toLowerCase()} experience built to deliver a digital presence as refined as their services. It pairs a sleek, editorial aesthetic with high-performance engineering to provide a comprehensive, intuitive interface and fully scalable architecture right out of the box.`;

  const important = `Modern digital platforms don't just display information - they build credibility. ${project.title} is structured around that reality, guiding each visitor from curiosity to action using proof-led storytelling and a frictionless navigation path.`;

  const approach = `Rather than chasing transient trends, the layout follows natural user conversion behavior: a clear introduction, real success metrics, transparent process descriptions, and direct ways to engage. Every section is designed to keep users engaged and build momentum toward a transaction.`;

  const vision = `The goal was a customized digital home that reads like a premium brand, not a generic template. Typography-led layouts, generous grid alignment, and a minimalist color palette keep the client's identity front and center, while modern rendering ensures lightning-fast performance.`;

  const challenges = `Usually, digital experiences fall into one of two traps: templates that feel identical, or highly experimental sites that bury user actions and load slowly. ${project.title} had to look visually distinctive while remaining accessible and optimized for conversion.`;

  const resolving = `We resolved this challenge with a streamlined narrative structure - showcasing value, detailing the plan, proving the outcomes, and prompting action. Integrations are fully modular, so features can be scaled and modified easily as the client grows.`;

  const userCentric = `Every design decision started from the visitor's perspective - someone looking for professional solutions and immediate answers. Strategic breathing room, clear hierarchy, and smooth micro-interactions assure quality, while a singular primary action path removes all friction.`;

  const needs = `By implementing a lightweight headless system, we created a platform that is extremely fast on mobile and desktop alike. The user has direct access to key information, making self-service intuitive and ensuring they can connect with ${project.title} effortlessly.`;

  return {
    category,
    client,
    duration,
    intro,
    important,
    approach,
    vision,
    challenges,
    resolving,
    userCentric,
    needs,
  };
}
