// ── Business Info ──────────────────────────────────────────────────────────
export const BUSINESS = {
  name: "KE Material Handling DFW",
  brandName: "KE Material Handling",
  tagline: "Solutions",
  phone: "(972) 277-7563",
  phoneHref: "tel:9722777563",
  email: "support@kaballahenterprise.com",
  address: "2301 N Collins ST, Arlington, TX 76011",
  serviceArea: "Dallas-Fort Worth Metroplex, TX",
  year: "2026",
} as const;

// ── Services ───────────────────────────────────────────────────────────────
export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const SERVICES: Service[] = [
  {
    slug: "preventive-maintenance",
    title: "Preventive Maintenance (PM)",
    shortTitle: "Preventive Maintenance",
    shortDescription:
      "Scheduled maintenance plans to extend forklift lifespan and prevent costly, unexpected breakdowns.",
    fullDescription:
      "Regular preventive maintenance is the single most effective way to extend the life of your forklift fleet and minimize costly emergency repairs. Our PM service includes thorough inspections, fluid checks, filter replacements, and component testing designed to catch small issues before they become major problems. We'll work with your schedule to keep maintenance from interrupting operations.",
    icon: "calendar",
    benefits: [
      "Extended equipment lifespan",
      "Reduced unexpected downtime",
      "Improved operational safety",
      "Lower long-term repair costs",
      "Documented maintenance records",
    ],
    process: [
      { step: 1, title: "Schedule Inspection", description: "Contact us to set up a convenient maintenance schedule for your equipment." },
      { step: 2, title: "Comprehensive Inspection", description: "Our technicians perform a thorough multi-point inspection of your forklift." },
      { step: 3, title: "Service & Repair", description: "We address any issues found and perform all scheduled maintenance tasks." },
      { step: 4, title: "Documentation", description: "Receive a detailed service report outlining work performed and any recommendations." },
    ],
    metaTitle: "Forklift Preventive Maintenance (PM) | KE Material Handling DFW",
    metaDescription:
      "Professional forklift preventive maintenance services across Dallas-Fort Worth. Scheduled PM plans to extend equipment life and prevent breakdowns. Call (972) 277-7563.",
  },
  {
    slug: "no-start-diagnostics-repair",
    title: "No-Start Diagnostics & Repair",
    shortTitle: "No-Start Diagnostics",
    shortDescription:
      "Rapid troubleshooting for engine, fuel, and electrical failures to get your equipment running again fast.",
    fullDescription:
      "A forklift that won't start can bring your entire operation to a halt. Our technicians are experienced in diagnosing and repairing all types of no-start conditions, from fuel system issues and electrical failures to ignition problems and mechanical faults. We arrive on-site with diagnostic tools and common replacement parts to minimize downtime.",
    icon: "wrench",
    benefits: [
      "Fast on-site diagnosis",
      "All makes and models serviced",
      "Fuel, electrical & mechanical diagnostics",
      "Minimize costly downtime",
      "Transparent repair pricing",
    ],
    process: [
      { step: 1, title: "Contact Us", description: "Call us with your equipment details and location for immediate dispatch." },
      { step: 2, title: "On-Site Diagnosis", description: "Our technician arrives and performs a systematic diagnostic evaluation." },
      { step: 3, title: "Repair Quote", description: "We explain what's needed and provide an upfront repair quote." },
      { step: 4, title: "Get Back to Work", description: "Approved repairs are completed on-site to get your forklift running again." },
    ],
    metaTitle: "Forklift No-Start Diagnostics & Repair | KE Material Handling DFW",
    metaDescription:
      "Expert forklift no-start diagnostics and repair in Dallas-Fort Worth. Fast on-site troubleshooting for engine, fuel, and electrical failures. Call (972) 277-7563.",
  },
  {
    slug: "hydraulic-leak-hose-repair",
    title: "Hydraulic Leak & Hose Repair",
    shortTitle: "Hydraulic Repair",
    shortDescription:
      "On-site replacement and repair of worn hydraulic hoses, cylinders, and seals to restore lift performance.",
    fullDescription:
      "Hydraulic leaks are among the most common forklift issues and can pose serious safety risks if left unaddressed. Our technicians diagnose and repair hydraulic system issues on-site, including hose replacement, cylinder repair, and seal replacement. We carry common hose sizes to fabricate replacements at your location.",
    icon: "droplet",
    benefits: [
      "Fast on-site hose fabrication",
      "All hydraulic system components",
      "Prevents equipment damage",
      "Restores full lift capacity",
      "Safety compliance support",
    ],
    process: [
      { step: 1, title: "Identify the Leak", description: "We locate the source of the hydraulic leak and assess system damage." },
      { step: 2, title: "Component Assessment", description: "Inspect hoses, fittings, cylinders, and seals for wear and damage." },
      { step: 3, title: "On-Site Repair", description: "Replace or repair damaged components using quality parts and materials." },
      { step: 4, title: "System Test", description: "Test the hydraulic system to verify proper operation and no further leaks." },
    ],
    metaTitle: "Forklift Hydraulic Leak & Hose Repair | KE Material Handling DFW",
    metaDescription:
      "Professional forklift hydraulic leak and hose repair across Dallas-Fort Worth. On-site service for cylinders, hoses, and seals. Call (972) 277-7563.",
  },
  {
    slug: "electrical-troubleshooting",
    title: "Electrical Troubleshooting",
    shortTitle: "Electrical Troubleshooting",
    shortDescription:
      "Diagnosing wiring faults, sensors, controllers, and display issues to restore electrical system integrity.",
    fullDescription:
      "Modern forklifts rely heavily on sophisticated electrical systems. Our technicians are skilled in diagnosing complex electrical issues including wiring faults, sensor failures, controller problems, and display malfunctions on both electric and IC forklifts. We use professional diagnostic tools to pinpoint faults quickly and accurately.",
    icon: "zap",
    benefits: [
      "Advanced diagnostic tools",
      "Electric & IC forklift expertise",
      "Wiring, sensors & controllers",
      "Display and gauge repair",
      "Prevents recurring failures",
    ],
    process: [
      { step: 1, title: "Symptom Review", description: "We review the reported electrical symptoms and any error codes present." },
      { step: 2, title: "Diagnostic Scan", description: "Use diagnostic tools to identify fault codes and pinpoint electrical issues." },
      { step: 3, title: "Component Testing", description: "Test wiring, sensors, controllers, and other electrical components." },
      { step: 4, title: "Repair & Verify", description: "Repair or replace faulty components and verify the system functions correctly." },
    ],
    metaTitle: "Forklift Electrical Troubleshooting & Repair | KE Material Handling DFW",
    metaDescription:
      "Expert forklift electrical troubleshooting in Dallas-Fort Worth. Wiring, sensors, controllers, and display repair. Call (972) 277-7563.",
  },
  {
    slug: "brake-system-repair",
    title: "Brake System Repair",
    shortTitle: "Brake System Repair",
    shortDescription:
      "Inspection and replacement of brake shoes, cylinders, lines, and master cylinders for safe operation.",
    fullDescription:
      "Properly functioning brakes are critical to forklift safety and OSHA compliance. Our technicians inspect and repair all components of your forklift's brake system, including brake shoes, wheel cylinders, brake lines, and master cylinders, ensuring your equipment meets safety standards and operates reliably.",
    icon: "shield",
    benefits: [
      "Comprehensive brake inspection",
      "All brake system components",
      "OSHA safety compliance",
      "Reduces accident risk",
      "Fast turnaround service",
    ],
    process: [
      { step: 1, title: "Brake Inspection", description: "Complete inspection of brake shoes, pads, lines, cylinders, and hardware." },
      { step: 2, title: "Diagnosis", description: "Identify worn or damaged components causing brake performance issues." },
      { step: 3, title: "Parts Replacement", description: "Replace worn brake components with quality replacement parts." },
      { step: 4, title: "Brake Test", description: "Test brake performance to ensure safe and reliable stopping power." },
    ],
    metaTitle: "Forklift Brake System Repair | KE Material Handling DFW",
    metaDescription:
      "Professional forklift brake system repair in Dallas-Fort Worth. Brake shoes, cylinders, and lines for safe operation. Call (972) 277-7563.",
  },
  {
    slug: "battery-charging-system-repair",
    title: "Battery & Charging System Repair",
    shortTitle: "Battery & Charging Repair",
    shortDescription:
      "Electric forklift battery maintenance, cable inspection, and charging system diagnostics and repair.",
    fullDescription:
      "For electric forklift fleets, battery and charging system health is paramount to operational efficiency. Our technicians provide battery testing, watering, cleaning, cable inspection, and charging system diagnosis to maximize battery life and keep your electric fleet running at full capacity.",
    icon: "battery",
    benefits: [
      "Battery testing & load testing",
      "Charging system diagnosis",
      "Cable & connector inspection",
      "Maximize battery lifespan",
      "Reduce unexpected charging failures",
    ],
    process: [
      { step: 1, title: "Battery Assessment", description: "Test battery capacity, voltage, and overall health condition." },
      { step: 2, title: "Charging System Check", description: "Inspect charger output, cables, connectors, and all connections." },
      { step: 3, title: "Cleaning & Maintenance", description: "Clean battery terminals, check electrolyte levels, and perform maintenance." },
      { step: 4, title: "Repair & Recommendations", description: "Repair identified issues and provide recommendations for ongoing battery care." },
    ],
    metaTitle: "Forklift Battery & Charging System Repair | KE Material Handling DFW",
    metaDescription:
      "Expert electric forklift battery and charging system repair in Dallas-Fort Worth. Battery testing, cable inspection, and charger diagnostics. Call (972) 277-7563.",
  },
  {
    slug: "starter-alternator-repair",
    title: "Starter & Alternator Repair",
    shortTitle: "Starter & Alternator",
    shortDescription:
      "Expert repair or replacement of starting and charging components to keep your IC forklift running reliably.",
    fullDescription:
      "Starter and alternator failures can leave your forklift dead in the aisle and your operation at a standstill. Our technicians diagnose and repair or replace faulty starters and alternators on internal combustion forklifts, ensuring reliable starting and proper charging system function.",
    icon: "bolt",
    benefits: [
      "Starter diagnosis & repair",
      "Alternator testing & replacement",
      "All IC forklift makes & models",
      "Quality replacement parts",
      "Fast service turnaround",
    ],
    process: [
      { step: 1, title: "Charging System Test", description: "Test alternator output and battery charge to identify the failing component." },
      { step: 2, title: "Starter Inspection", description: "Inspect starter motor, solenoid, and related wiring for faults." },
      { step: 3, title: "Component Replacement", description: "Replace faulty starter or alternator with quality replacement parts." },
      { step: 4, title: "System Verification", description: "Verify proper operation of starting and charging systems after repair." },
    ],
    metaTitle: "Forklift Starter & Alternator Repair | KE Material Handling DFW",
    metaDescription:
      "Professional forklift starter and alternator repair in Dallas-Fort Worth. Expert diagnosis and replacement for IC forklifts. Call (972) 277-7563.",
  },
  {
    slug: "cooling-system-overheating-repair",
    title: "Cooling System & Overheating Repair",
    shortTitle: "Cooling System Repair",
    shortDescription:
      "Radiator service, water pump replacement, thermostat repair, and hose replacement to prevent overheating.",
    fullDescription:
      "Overheating can cause serious and expensive engine damage to your forklift. Our technicians address all aspects of cooling system maintenance and repair, including radiator cleaning and flushing, water pump replacement, thermostat inspection and replacement, and hose service to keep your engine running at proper operating temperature.",
    icon: "thermometer",
    benefits: [
      "Prevents costly engine damage",
      "Radiator cleaning & flushing",
      "Water pump replacement",
      "Thermostat inspection & replacement",
      "Hose & belt service",
    ],
    process: [
      { step: 1, title: "Cooling System Inspection", description: "Inspect radiator, hoses, thermostat, water pump, and drive belts." },
      { step: 2, title: "Pressure Test", description: "Perform pressure test to identify any leaks in the cooling system." },
      { step: 3, title: "Flush & Fill", description: "Flush old coolant and refill with fresh properly mixed coolant." },
      { step: 4, title: "Component Replacement", description: "Replace worn or failed cooling system components as needed." },
    ],
    metaTitle: "Forklift Cooling System & Overheating Repair | KE Material Handling DFW",
    metaDescription:
      "Expert forklift cooling system and overheating repair in Dallas-Fort Worth. Radiator, water pump, and thermostat service. Call (972) 277-7563.",
  },
  {
    slug: "mast-chain-carriage-repair",
    title: "Mast, Chain & Carriage Repair",
    shortTitle: "Mast & Chain Repair",
    shortDescription:
      "Precision mast alignment, roller replacement, and chain inspection for safe and reliable lift operations.",
    fullDescription:
      "The mast, chains, and carriage assembly are critical to your forklift's lifting function and operator safety. Our technicians inspect, service, and repair all components of the lift system including mast channels, lift chains, rollers, and carriage assembly to ensure safe operation and proper load handling.",
    icon: "settings",
    benefits: [
      "Mast alignment & adjustment",
      "Chain inspection & lubrication",
      "Roller & bearing replacement",
      "Carriage repair & adjustment",
      "Safety compliance verification",
    ],
    process: [
      { step: 1, title: "Lift System Inspection", description: "Inspect mast channels, chains, rollers, and carriage components thoroughly." },
      { step: 2, title: "Chain Measurement", description: "Measure chain wear and elongation to determine replacement needs." },
      { step: 3, title: "Component Service", description: "Lubricate, adjust, or replace worn mast and carriage components." },
      { step: 4, title: "Function Test", description: "Test full lifting operation to verify safe and smooth performance." },
    ],
    metaTitle: "Forklift Mast, Chain & Carriage Repair | KE Material Handling DFW",
    metaDescription:
      "Professional forklift mast, chain, and carriage repair in Dallas-Fort Worth. Precision alignment and inspection for safe lift operations. Call (972) 277-7563.",
  },
  {
    slug: "transmission-engine-repair",
    title: "Transmission & Engine Repair",
    shortTitle: "Transmission & Engine",
    shortDescription:
      "Comprehensive mechanical overhaul and repair for internal combustion forklifts to restore full power and performance.",
    fullDescription:
      "When your forklift suffers major mechanical issues, our experienced technicians have the skills to tackle complex transmission and engine repairs. From transmission rebuilds to engine overhauls, we provide thorough diagnosis and quality repair work to get your equipment back to full performance.",
    icon: "gear",
    benefits: [
      "Engine overhaul & rebuild",
      "Transmission diagnosis & repair",
      "All IC forklift makes & models",
      "Comprehensive mechanical service",
      "Restores full performance",
    ],
    process: [
      { step: 1, title: "Mechanical Diagnosis", description: "Thorough evaluation of engine and transmission condition and performance." },
      { step: 2, title: "Teardown & Inspection", description: "Disassemble and inspect internal components for wear and damage." },
      { step: 3, title: "Parts & Rebuild", description: "Source quality parts and perform precision rebuild or repair." },
      { step: 4, title: "Testing & Delivery", description: "Test repaired components under load to verify full performance restoration." },
    ],
    metaTitle: "Forklift Transmission & Engine Repair | KE Material Handling DFW",
    metaDescription:
      "Expert forklift transmission and engine repair in Dallas-Fort Worth. Comprehensive mechanical overhaul for IC forklifts. Call (972) 277-7563.",
  },
];

// ── Cities ─────────────────────────────────────────────────────────────────
export interface City {
  slug: string;
  name: string;
  state: string;
  heading: string;
  description: string;
  longDescription: string;
  highlights: string[];
  metaTitle: string;
  metaDescription: string;
}

export const CITIES: City[] = [
  {
    slug: "arlington-tx",
    name: "Arlington",
    state: "TX",
    heading: "Forklift Repair & Maintenance in Arlington, TX",
    description:
      "KE Material Handling DFW is based in Arlington and provides fast, professional mobile forklift repair and maintenance throughout the city and surrounding areas.",
    longDescription:
      "As our home base, Arlington businesses benefit from our fastest response times for all forklift repair and maintenance needs. Whether you operate a warehouse, distribution center, or industrial facility near I-20, I-30, or Six Flags area, our mobile technicians come directly to you with diagnostic tools and common replacement parts.",
    highlights: [
      "Home base — fastest response times in the area",
      "Serving warehouses along I-20 & I-30 corridors",
      "All major Arlington industrial areas covered",
      "Same-day service often available",
    ],
    metaTitle: "Forklift Repair Arlington TX | KE Material Handling DFW",
    metaDescription:
      "Professional mobile forklift repair and maintenance in Arlington, TX. Fast on-site service for all forklift makes and models. Call (972) 277-7563.",
  },
  {
    slug: "grand-prairie-tx",
    name: "Grand Prairie",
    state: "TX",
    heading: "Forklift Repair & Maintenance in Grand Prairie, TX",
    description:
      "KE Material Handling DFW provides professional mobile forklift repair and preventive maintenance services throughout Grand Prairie and surrounding areas.",
    longDescription:
      "Grand Prairie's industrial corridor along Highway 161 and Great Southwest Parkway hosts numerous warehouses and distribution centers. Our mobile technicians regularly service businesses throughout Grand Prairie, providing fast and reliable forklift repair and maintenance on-site.",
    highlights: [
      "Serving Grand Prairie's industrial corridors",
      "Fast mobile response from nearby Arlington",
      "All forklift makes & models serviced",
      "Preventive maintenance plans available",
    ],
    metaTitle: "Forklift Repair Grand Prairie TX | KE Material Handling DFW",
    metaDescription:
      "Professional mobile forklift repair and maintenance in Grand Prairie, TX. On-site service for warehouses and distribution centers. Call (972) 277-7563.",
  },
  {
    slug: "fort-worth-tx",
    name: "Fort Worth",
    state: "TX",
    heading: "Forklift Repair & Maintenance in Fort Worth, TX",
    description:
      "KE Material Handling DFW serves businesses throughout Fort Worth with professional mobile forklift repair, preventive maintenance, and equipment diagnostics.",
    longDescription:
      "Fort Worth's thriving industrial and logistics sector demands dependable equipment maintenance. Our technicians serve businesses across Fort Worth, from the Alliance Corridor to the Near Southside industrial areas, providing expert mobile forklift repair when you need it most.",
    highlights: [
      "Serving the Fort Worth Alliance Corridor",
      "Coverage across all Fort Worth industrial zones",
      "Emergency and scheduled service available",
      "Fleet maintenance programs for multi-unit operations",
    ],
    metaTitle: "Forklift Repair Fort Worth TX | KE Material Handling DFW",
    metaDescription:
      "Professional mobile forklift repair and maintenance in Fort Worth, TX. Expert service for all forklift makes and models. Call (972) 277-7563.",
  },
  {
    slug: "dallas-tx",
    name: "Dallas",
    state: "TX",
    heading: "Forklift Repair & Maintenance in Dallas, TX",
    description:
      "KE Material Handling DFW provides expert mobile forklift repair and maintenance services to businesses throughout Dallas and the surrounding metro area.",
    longDescription:
      "Dallas is a major logistics and distribution hub, and keeping equipment running is critical for businesses operating here. Our mobile technicians service all Dallas zip codes, providing on-site forklift repair, preventive maintenance, and emergency breakdown services to keep your operations moving.",
    highlights: [
      "Serving all Dallas industrial and warehouse zones",
      "Mobile on-site service — no towing required",
      "Emergency response for urgent breakdowns",
      "All major forklift brands and models",
    ],
    metaTitle: "Forklift Repair Dallas TX | KE Material Handling DFW",
    metaDescription:
      "Professional mobile forklift repair and maintenance in Dallas, TX. On-site service for warehouses and distribution centers. Call (972) 277-7563.",
  },
  {
    slug: "irving-tx",
    name: "Irving",
    state: "TX",
    heading: "Forklift Repair & Maintenance in Irving, TX",
    description:
      "KE Material Handling DFW serves Irving businesses with fast mobile forklift repair, preventive maintenance, and comprehensive equipment diagnostics.",
    longDescription:
      "Irving's Las Colinas area and proximity to DFW Airport make it a hub for logistics and distribution operations. Our technicians provide on-site forklift service throughout Irving, helping businesses minimize downtime and maintain their material handling equipment at peak performance.",
    highlights: [
      "Serving Irving and Las Colinas businesses",
      "Near DFW Airport logistics support",
      "Fast mobile response times",
      "Scheduled and emergency maintenance",
    ],
    metaTitle: "Forklift Repair Irving TX | KE Material Handling DFW",
    metaDescription:
      "Professional mobile forklift repair and maintenance in Irving, TX. Expert on-site service for Las Colinas and surrounding areas. Call (972) 277-7563.",
  },
  {
    slug: "coppell-tx",
    name: "Coppell",
    state: "TX",
    heading: "Forklift Repair & Maintenance in Coppell, TX",
    description:
      "KE Material Handling DFW provides professional mobile forklift repair and maintenance services to businesses in Coppell and surrounding areas.",
    longDescription:
      "Coppell is home to numerous large distribution centers and warehouses, making reliable forklift maintenance essential. Our mobile technicians serve Coppell businesses with on-site repair, preventive maintenance, and emergency services to keep operations running smoothly.",
    highlights: [
      "Serving Coppell's major distribution centers",
      "Mobile on-site service — we come to you",
      "Fleet maintenance expertise for large operations",
      "Fast response to unexpected breakdowns",
    ],
    metaTitle: "Forklift Repair Coppell TX | KE Material Handling DFW",
    metaDescription:
      "Professional mobile forklift repair and maintenance in Coppell, TX. Expert service for distribution centers and warehouses. Call (972) 277-7563.",
  },
  {
    slug: "grapevine-tx",
    name: "Grapevine",
    state: "TX",
    heading: "Forklift Repair & Maintenance in Grapevine, TX",
    description:
      "KE Material Handling DFW serves Grapevine businesses with expert mobile forklift repair, preventive maintenance, and equipment diagnostics.",
    longDescription:
      "Grapevine's location near DFW Airport supports a significant number of logistics and warehousing operations. Our technicians provide mobile forklift repair and maintenance throughout Grapevine, ensuring your material handling equipment stays in peak operating condition.",
    highlights: [
      "Serving Grapevine airport-adjacent businesses",
      "Mobile on-site service throughout the city",
      "All forklift makes & models serviced",
      "Flexible preventive maintenance scheduling",
    ],
    metaTitle: "Forklift Repair Grapevine TX | KE Material Handling DFW",
    metaDescription:
      "Professional mobile forklift repair and maintenance in Grapevine, TX. Expert on-site service near DFW Airport. Call (972) 277-7563.",
  },
];

// Cities shown in the homepage service area grid
export const ALL_CITIES_DISPLAY = [
  ["Arlington", "Grand Prairie", "Euless", "Grapevine", "Richardson"],
  ["Dallas", "Irving", "Bedford", "Carrollton", "Garland"],
  ["Fort Worth", "Mansfield", "Hurst", "Plano", "Mesquite"],
];
