export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  intro: string;
  process: string[];
  priceRange: string;
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: 'water-heater-repair',
    title: 'Water Heater Repair',
    shortDesc: 'Fast diagnosis and repair for all major water heater brands and types.',
    intro: 'When your water heater stops producing hot water or shows signs of trouble, prompt repair can restore comfort and prevent more expensive damage. Our technicians in Mooresville serve homes and small businesses with thorough diagnostics and lasting repairs.',
    process: [
      'Schedule a convenient appointment or request same-day service when available.',
      'Our technician inspects the unit, checks gas or electrical supply, and identifies the root cause.',
      'We explain the issue and recommended repair options before any work begins.',
      'Repairs are completed using quality parts, followed by a full system test.',
    ],
    priceRange: 'Typical repair costs vary by issue and parts required. Contact us for an on-site estimate.',
    faqs: [
      { q: 'How long does a typical water heater repair take?', a: 'Most common repairs are completed within one to two hours once the technician arrives and has the needed parts.' },
      { q: 'Do you repair both gas and electric units?', a: 'Yes. We service traditional tank-style gas and electric water heaters as well as many tankless models.' },
      { q: 'What if the unit is beyond repair?', a: 'If repair is not cost-effective, we can discuss replacement options and help you choose a suitable new unit.' },
    ],
  },
  {
    slug: 'water-heater-installation',
    title: 'Water Heater Installation',
    shortDesc: 'Professional installation of new tank and tankless water heaters.',
    intro: 'Proper installation is essential for safe, efficient, and long-lasting performance. Whether you are upgrading an aging unit or installing equipment in a new space, our Mooresville team handles the complete process from removal of the old unit to final testing.',
    process: [
      'Discuss your household hot-water needs and preferred fuel type or efficiency goals.',
      'Select a correctly sized unit and schedule the installation date.',
      'We remove the old water heater, prepare the location, and install the new unit to code.',
      'Final connections, pressure checks, and a full operational test complete the job.',
    ],
    priceRange: 'Installation pricing depends on unit type, size, and site conditions. Request a free estimate for accurate pricing.',
    faqs: [
      { q: 'How long does installation usually take?', a: 'A standard tank water heater replacement typically takes three to five hours. Tankless installations can take longer depending on venting and gas-line requirements.' },
      { q: 'Do you haul away the old unit?', a: 'Yes, removal and responsible disposal of the old water heater are included with most installations.' },
      { q: 'Can you install a different type than I currently have?', a: 'In many cases yes. Converting from electric to gas or adding a tankless unit may require additional work such as new gas lines or electrical upgrades.' },
    ],
  },
  {
    slug: 'tankless-water-heater-installation',
    title: 'Tankless Water Heater Installation',
    shortDesc: 'On-demand hot water with efficient tankless systems.',
    intro: 'Tankless water heaters heat water only when you need it, offering continuous hot water and potential energy savings. Installation requires careful attention to gas supply, venting, and water quality. Our team installs major tankless brands throughout the Mooresville area.',
    process: [
      'Evaluate your home’s gas or electrical capacity and water usage patterns.',
      'Recommend a properly sized tankless model and review venting requirements.',
      'Install the unit, upgrade gas lines or electrical service if needed, and set up proper venting.',
      'Flush the system, adjust settings, and walk you through operation and maintenance.',
    ],
    priceRange: 'Tankless installation costs are higher than traditional tank replacements due to additional requirements. Contact us for a detailed quote.',
    faqs: [
      { q: 'Is a tankless water heater right for my home?', a: 'Homes with higher simultaneous hot-water demand or limited space often benefit. We can help determine the right size and whether your existing utilities support it.' },
      { q: 'Do tankless units require special maintenance?', a: 'Yes. Periodic descaling is important, especially in areas with hard water, to maintain efficiency and longevity.' },
      { q: 'How long do tankless water heaters last?', a: 'With proper maintenance, many tankless units last 15–20 years or longer.' },
    ],
  },
  {
    slug: 'tankless-water-heater-repair',
    title: 'Tankless Water Heater Repair',
    shortDesc: 'Expert service for tankless units that error out or lose performance.',
    intro: 'Tankless water heaters can display error codes, deliver lukewarm water, or shut down unexpectedly. Our technicians diagnose common issues such as scale buildup, sensor faults, and ignition problems so your on-demand system works reliably again.',
    process: [
      'Note any error codes or symptoms before the technician arrives.',
      'Diagnostic inspection of heat exchanger, sensors, gas valve, and water flow.',
      'Clean or replace components as needed and verify proper combustion and temperature.',
      'Advise on maintenance intervals to reduce future issues.',
    ],
    priceRange: 'Repair costs depend on the specific fault and parts. Many common fixes fall into a moderate range; complex heat-exchanger work costs more.',
    faqs: [
      { q: 'Why is my tankless unit showing an error code?', a: 'Error codes often point to flow issues, overheating, ignition failure, or scale. The code helps narrow the diagnosis quickly.' },
      { q: 'Can hard water damage a tankless heater?', a: 'Yes. Mineral scale reduces efficiency and can cause overheating. Regular flushing helps protect the unit.' },
      { q: 'Do you service all tankless brands?', a: 'We work on most major brands. Call with the model number if you have questions about a specific unit.' },
    ],
  },
  {
    slug: 'water-heater-replacement',
    title: 'Water Heater Replacement',
    shortDesc: 'Replace aging or failing water heaters with efficient new models.',
    intro: 'Water heaters typically last 8–12 years for tank models. When repair costs climb or efficiency drops, replacement is often the smarter long-term choice. We help Mooresville homeowners select and install the right replacement.',
    process: [
      'Assess the current unit’s age, condition, and your household needs.',
      'Present suitable replacement options with clear pricing.',
      'Remove the old unit, install the new one, and complete all required connections.',
      'Test thoroughly and provide guidance on operation and warranty registration.',
    ],
    priceRange: 'Replacement pricing varies by capacity, fuel type, and efficiency rating. We provide upfront estimates before work begins.',
    faqs: [
      { q: 'When should I replace instead of repair?', a: 'If the unit is over 10 years old, leaking from the tank, or requiring frequent repairs, replacement is usually recommended.' },
      { q: 'How do I choose the right size?', a: 'Size depends on the number of bathrooms, peak usage, and whether the unit is tank or tankless. We size units based on your actual needs.' },
      { q: 'Are high-efficiency models worth it?', a: 'In many cases yes, especially if you plan to stay in the home long-term. We can outline potential energy savings.' },
    ],
  },
  {
    slug: 'emergency-water-heater-repair',
    title: 'Emergency Water Heater Repair',
    shortDesc: 'Priority response when you suddenly lose hot water.',
    intro: 'A sudden cold shower or no hot water at all disrupts daily life. Our emergency repair service prioritizes urgent calls so Mooresville residents can get hot water restored as quickly as possible.',
    process: [
      'Call and describe the symptoms so we can triage the issue.',
      'A technician is dispatched based on availability and urgency.',
      'On-site diagnosis identifies whether a quick fix or larger repair is needed.',
      'We complete the repair or arrange the next steps if parts are required.',
    ],
    priceRange: 'Emergency service may include an after-hours or priority fee in addition to standard repair charges. Ask when you call.',
    faqs: [
      { q: 'Do you offer same-day emergency service?', a: 'We strive to accommodate same-day requests whenever technicians and parts are available.' },
      { q: 'What should I do while waiting?', a: 'If you smell gas, leave the area and call the gas utility. For electrical issues, you may safely shut off power to the unit at the breaker.' },
      { q: 'Is emergency service available on weekends?', a: 'Limited weekend availability is offered. Call to check current options.' },
    ],
  },
  {
    slug: 'gas-water-heater-repair',
    title: 'Gas Water Heater Repair',
    shortDesc: 'Safe, code-compliant repairs for natural gas and propane units.',
    intro: 'Gas water heaters require careful handling of fuel lines, venting, and combustion. Our technicians diagnose pilot issues, thermocouple failures, gas valve problems, and draft concerns to keep your system operating safely.',
    process: [
      'Safety check of gas supply, shutoff, and ventilation.',
      'Inspect pilot assembly, thermocouple, burner, and flue.',
      'Repair or replace faulty components and verify clean combustion.',
      'Confirm proper temperature and pressure relief valve function.',
    ],
    priceRange: 'Gas-related repairs vary by component. Simple pilot or thermocouple work is typically less expensive than gas-valve replacement.',
    faqs: [
      { q: 'My pilot light will not stay lit. What is wrong?', a: 'A failing thermocouple is a common cause. Dirty pilot orifices or drafts can also prevent the pilot from staying lit.' },
      { q: 'Is a yellow flame a problem?', a: 'Yes. A healthy burner flame should be mostly blue. Yellow flames can indicate incomplete combustion and should be inspected promptly.' },
      { q: 'Do you work on propane water heaters?', a: 'Yes. We service both natural gas and propane tank-style water heaters.' },
    ],
  },
  {
    slug: 'electric-water-heater-repair',
    title: 'Electric Water Heater Repair',
    shortDesc: 'Heating element, thermostat, and electrical troubleshooting.',
    intro: 'Electric water heaters rely on heating elements and thermostats that can fail over time. We diagnose no-hot-water situations, lukewarm output, and tripped breakers so your electric unit is back online quickly.',
    process: [
      'Verify power supply and check for tripped breakers or blown fuses.',
      'Test upper and lower heating elements and thermostats.',
      'Replace failed components and reset the system.',
      'Confirm full recovery of hot water temperature.',
    ],
    priceRange: 'Element or thermostat replacement is among the more common and moderately priced electric repairs.',
    faqs: [
      { q: 'Why do I only have lukewarm water?', a: 'Often one of the two heating elements has failed. The remaining element can still produce some heat but not full temperature.' },
      { q: 'Can I replace a heating element myself?', a: 'While possible for experienced DIYers, improper installation can damage the tank or create safety hazards. Professional service is recommended.' },
      { q: 'How often do elements fail?', a: 'Lifespan varies with water quality and usage. Sediment buildup can shorten element life.' },
    ],
  },
  {
    slug: 'water-heater-maintenance',
    title: 'Water Heater Maintenance',
    shortDesc: 'Preventive service that extends equipment life and efficiency.',
    intro: 'Regular maintenance helps water heaters run more efficiently and last longer. Flushing sediment, checking anode rods, and inspecting safety components are simple steps that protect your investment.',
    process: [
      'Flush the tank to remove accumulated sediment.',
      'Inspect and test the temperature and pressure relief valve.',
      'Check the anode rod condition and recommend replacement if needed.',
      'Verify thermostat settings, connections, and overall system health.',
    ],
    priceRange: 'Routine maintenance visits are affordably priced. Ask about annual service options.',
    faqs: [
      { q: 'How often should a water heater be flushed?', a: 'Once a year is a good target for most homes. Hard-water areas may benefit from more frequent flushing.' },
      { q: 'What does the anode rod do?', a: 'It attracts corrosive elements in the water, protecting the tank lining. When it is depleted, the tank itself begins to corrode.' },
      { q: 'Does maintenance really extend the life of the unit?', a: 'Yes. Sediment buildup and a spent anode rod are two of the most common reasons tanks fail prematurely.' },
    ],
  },
  {
    slug: 'water-heater-flushing',
    title: 'Water Heater Flushing',
    shortDesc: 'Remove sediment that reduces efficiency and capacity.',
    intro: 'Sediment settles at the bottom of tank-style water heaters and acts as insulation, forcing the unit to work harder. Periodic flushing restores capacity and can reduce energy use and noise.',
    process: [
      'Shut off power or gas and water supply to the unit.',
      'Connect a hose to the drain valve and empty the tank.',
      'Flush with clean water until the discharge runs clear.',
      'Refill the tank, restore power or gas, and check for proper operation.',
    ],
    priceRange: 'Flushing is a straightforward service with modest pricing. It is often combined with a full maintenance visit.',
    faqs: [
      { q: 'How do I know if my tank needs flushing?', a: 'Rumbling or popping noises during heating, reduced hot-water volume, or cloudy water can all indicate sediment buildup.' },
      { q: 'Can flushing damage an older unit?', a: 'On very old tanks with heavy corrosion, draining can sometimes loosen sediment that was sealing small leaks. We assess condition before proceeding.' },
      { q: 'Is flushing the same as descaling a tankless unit?', a: 'No. Tankless units require a different chemical descaling process. Flushing refers to traditional tank models.' },
    ],
  },
  {
    slug: 'anode-rod-replacement',
    title: 'Anode Rod Replacement',
    shortDesc: 'Protect your tank from corrosion with a fresh anode rod.',
    intro: 'The anode rod is a sacrificial component that protects the steel tank from rust. When it is fully consumed, the tank becomes vulnerable. Replacing the rod is one of the most effective ways to extend water heater life.',
    process: [
      'Locate and access the anode rod (usually under a hex plug on top of the tank).',
      'Remove the spent rod and inspect its condition.',
      'Install a new rod of the correct type and length.',
      'Check for leaks and confirm the system is ready for normal use.',
    ],
    priceRange: 'Anode rod replacement is a relatively low-cost service that can add years to an aging tank.',
    faqs: [
      { q: 'How often should the anode rod be checked?', a: 'Every two to three years is a reasonable interval, or sooner in homes with soft water or water softeners.' },
      { q: 'Are there different types of anode rods?', a: 'Yes. Magnesium, aluminum, and zinc-aluminum rods are common. The best choice depends on your water chemistry.' },
      { q: 'Can a water softener affect the anode rod?', a: 'Softened water can accelerate anode consumption. More frequent inspection is advised in homes with softeners.' },
    ],
  },
  {
    slug: 'water-heater-leak-repair',
    title: 'Water Heater Leak Repair',
    shortDesc: 'Locate and address leaks before they cause water damage.',
    intro: 'Leaks can originate from fittings, valves, the temperature-and-pressure relief line, or the tank itself. Quick response limits damage to floors and surrounding materials.',
    process: [
      'Identify the source of the leak through careful inspection.',
      'Tighten or replace fittings, valves, or the T&P discharge line as appropriate.',
      'If the tank is leaking, discuss replacement options.',
      'Clean up residual water and advise on any needed drying or repairs.',
    ],
    priceRange: 'Minor fitting or valve leaks are usually inexpensive to fix. Tank leaks typically require full replacement.',
    faqs: [
      { q: 'Is a small drip something I can ignore?', a: 'No. Even slow leaks can lead to significant water damage and mold over time. Early attention is best.' },
      { q: 'Why is water coming from the T&P valve?', a: 'The temperature-and-pressure relief valve may open if pressure or temperature exceeds safe limits. This needs professional evaluation.' },
      { q: 'Can a leaking tank be patched?', a: 'Tank leaks are not reliably repairable. Replacement is the safe and lasting solution.' },
    ],
  },
  {
    slug: 'hot-water-heater-not-working',
    title: 'Hot Water Heater Not Working',
    shortDesc: 'Troubleshooting when you have no hot water at all.',
    intro: 'A complete loss of hot water can stem from power or gas supply issues, tripped breakers, pilot outages, failed elements, or thermostat problems. We systematically diagnose the cause so the right fix is applied the first time.',
    process: [
      'Confirm fuel or power supply is present and breakers are on.',
      'Check pilot status on gas units or element continuity on electric units.',
      'Test thermostats, gas valves, and control boards as applicable.',
      'Complete the necessary repair and verify hot-water recovery.',
    ],
    priceRange: 'Diagnostic visits lead to transparent repair quotes. Simple resets or element swaps are on the lower end of the cost spectrum.',
    faqs: [
      { q: 'What can I check before calling?', a: 'Confirm the breaker has not tripped, the gas supply valve is open, and the pilot is lit if you have a gas unit with a standing pilot.' },
      { q: 'Could a tripped high-limit switch be the cause?', a: 'Yes. Electric units have a high-temperature cutoff that must be reset after overheating. Recurring trips indicate an underlying problem.' },
      { q: 'How quickly can service be scheduled?', a: 'We aim to offer prompt appointments, including priority options when no hot water is available.' },
    ],
  },
  {
    slug: 'pilot-light-repair',
    title: 'Pilot Light Repair',
    shortDesc: 'Restore a reliable pilot flame on gas water heaters.',
    intro: 'A pilot light that will not stay lit is one of the most frequent gas water heater complaints. Thermocouple failure, dirty orifices, or draft issues are common culprits. We restore a steady pilot so hot water returns.',
    process: [
      'Inspect the pilot assembly and thermocouple condition.',
      'Clean the pilot orifice if debris is present.',
      'Replace the thermocouple or pilot assembly when worn.',
      'Relight, adjust, and confirm the pilot remains stable under normal conditions.',
    ],
    priceRange: 'Pilot and thermocouple service is among the more affordable gas repairs.',
    faqs: [
      { q: 'Why does the pilot keep going out?', a: 'A weak or failing thermocouple is the most common reason. Strong drafts or a dirty pilot can also extinguish the flame.' },
      { q: 'Is it safe to keep relighting the pilot myself?', a: 'Occasional relighting is normal. Repeated failures mean a part needs attention and should be inspected soon.' },
      { q: 'Do newer gas water heaters still have standing pilots?', a: 'Many newer models use electronic ignition instead of a continuously burning pilot. We service both styles.' },
    ],
  },
  {
    slug: 'thermostat-replacement',
    title: 'Thermostat Replacement',
    shortDesc: 'Accurate temperature control for electric water heaters.',
    intro: 'Electric water heaters use one or two thermostats to regulate heating elements. A failed thermostat can leave you with no hot water, scalding water, or inconsistent temperatures. Replacement restores reliable control.',
    process: [
      'Confirm the symptom and isolate which thermostat is faulty.',
      'Shut off power and verify the circuit is de-energized.',
      'Replace the thermostat and ensure proper wiring and settings.',
      'Restore power and verify temperature recovery and cutoff behavior.',
    ],
    priceRange: 'Thermostat replacement is a mid-range repair that often resolves temperature problems completely.',
    faqs: [
      { q: 'Can a bad thermostat cause the breaker to trip?', a: 'Indirectly yes. A stuck thermostat can cause an element to overheat and trip the high-limit switch or breaker.' },
      { q: 'Should both thermostats be replaced at once?', a: 'Not always necessary, but if one has failed and the unit is older, replacing both can be a reasonable preventive step.' },
      { q: 'What temperature should I set?', a: '120°F is a common recommended setting that balances comfort, energy use, and scald protection.' },
    ],
  },
  {
    slug: 'heating-element-replacement',
    title: 'Heating Element Replacement',
    shortDesc: 'Restore full heating capacity to electric water heaters.',
    intro: 'Heating elements eventually burn out or become coated with scale. Replacing a failed element returns full hot-water production and can improve recovery time.',
    process: [
      'Test both elements to identify which has failed.',
      'Drain the tank enough to safely remove the element.',
      'Install a new element of the correct wattage and seal it properly.',
      'Refill, restore power, and confirm normal heating performance.',
    ],
    priceRange: 'Element replacement is a common and reasonably priced electric water heater repair.',
    faqs: [
      { q: 'How can I tell if an element has failed?', a: 'A multimeter continuity test is the reliable method. Symptoms include no hot water or only lukewarm water.' },
      { q: 'Do I need to replace both elements?', a: 'Only the failed element must be replaced, though inspecting both is good practice.' },
      { q: 'Can scale cause element failure?', a: 'Yes. Heavy scale acts as insulation and can cause the element to overheat and burn out prematurely.' },
    ],
  },
  {
    slug: 'water-heater-expansion-tank-installation',
    title: 'Expansion Tank Installation',
    shortDesc: 'Protect plumbing from thermal expansion pressure.',
    intro: 'Closed plumbing systems need a place for heated water to expand. An expansion tank absorbs that pressure and protects the water heater and fixtures. Many local codes require one with new installations.',
    process: [
      'Confirm whether your system is closed and requires an expansion tank.',
      'Select the correct tank size based on water heater capacity.',
      'Install the tank on the cold-water supply line with proper orientation.',
      'Pressurize the tank air charge to match system pressure and test.',
    ],
    priceRange: 'Expansion tank installation is a modest add-on cost, especially when performed during a water heater replacement.',
    faqs: [
      { q: 'How do I know if I need an expansion tank?', a: 'If you have a check valve, pressure-reducing valve, or backflow preventer on the main supply, your system is likely closed and needs an expansion tank.' },
      { q: 'What happens without one?', a: 'Pressure can rise enough to drip from the T&P valve or stress fittings and appliances.' },
      { q: 'How often should the expansion tank be checked?', a: 'The air charge should be verified periodically, roughly once a year, to ensure it is still effective.' },
    ],
  },
  {
    slug: 'commercial-water-heater-service',
    title: 'Commercial Water Heater Service',
    shortDesc: 'Reliable service for light commercial and multi-family units.',
    intro: 'Restaurants, offices, apartments, and small commercial properties depend on consistent hot water. We provide repair, maintenance, and replacement services tailored to higher-demand commercial equipment.',
    process: [
      'Assess usage patterns and current equipment condition.',
      'Diagnose performance issues or plan preventive maintenance.',
      'Perform repairs or coordinate replacement with minimal disruption.',
      'Document work and recommend a service schedule suited to the facility.',
    ],
    priceRange: 'Commercial service is quoted based on equipment type, accessibility, and urgency. Contact us for a site-specific estimate.',
    faqs: [
      { q: 'Do you service larger commercial boilers?', a: 'We focus primarily on storage and tankless water heaters used in light commercial settings. Very large boiler systems may require specialized contractors.' },
      { q: 'Can maintenance be scheduled outside business hours?', a: 'We work with business owners to minimize impact on operations whenever possible.' },
      { q: 'Do you offer service agreements?', a: 'Discuss your needs with us. Recurring maintenance can often be arranged for multi-unit or commercial properties.' },
    ],
  },
  {
    slug: 'hybrid-heat-pump-water-heater-installation',
    title: 'Hybrid Heat Pump Water Heater Installation',
    shortDesc: 'High-efficiency heat pump water heaters for energy savings.',
    intro: 'Hybrid heat pump water heaters use electricity to move heat rather than generate it directly, offering significant efficiency gains in the right conditions. Installation requires adequate space, airflow, and condensate drainage.',
    process: [
      'Evaluate the installation location for temperature, clearance, and drainage.',
      'Select a hybrid model sized for your household demand.',
      'Install the unit, complete electrical and plumbing connections, and set up condensate handling.',
      'Configure operating modes and explain how to get the best efficiency.',
    ],
    priceRange: 'Hybrid units cost more upfront than standard electric models but can reduce operating costs substantially. Ask for a full installed price.',
    faqs: [
      { q: 'Where can a hybrid water heater be installed?', a: 'They need a space that stays within a suitable temperature range and has enough air volume. Garages and utility rooms are common locations.' },
      { q: 'Are there rebates available?', a: 'Utility and manufacturer rebates sometimes apply to heat pump water heaters. We can point you toward current programs when available.' },
      { q: 'Do they work in cold climates?', a: 'Most hybrids switch to standard electric resistance mode when ambient temperatures drop too low, ensuring you still have hot water.' },
    ],
  },
  {
    slug: 'water-heater-sediment-removal',
    title: 'Water Heater Sediment Removal',
    shortDesc: 'Deep cleaning to restore efficiency and quiet operation.',
    intro: 'Heavy sediment accumulation reduces capacity, increases energy use, and creates noisy operation. Professional sediment removal goes beyond a simple flush when buildup is severe.',
    process: [
      'Assess the severity of sediment through inspection and homeowner description of symptoms.',
      'Perform a thorough flush, sometimes using specialized techniques for stubborn deposits.',
      'Inspect the drain valve and anode rod while the system is open.',
      'Refill, restore operation, and note any remaining concerns.',
    ],
    priceRange: 'Pricing depends on the degree of buildup and time required. Severe cases take longer than a standard flush.',
    faqs: [
      { q: 'Will sediment removal fix noisy operation?', a: 'In many cases yes. The popping or rumbling sound is caused by water trapped under sediment layers boiling.' },
      { q: 'Can sediment damage the tank?', a: 'Over time, sediment can contribute to overheating at the bottom of the tank and accelerate wear.' },
      { q: 'How can I reduce future sediment?', a: 'Annual flushing and, in hard-water areas, consideration of water treatment options help keep sediment under control.' },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
