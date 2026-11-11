export interface Area {
  slug: string;
  name: string;
  description: string;
}

export const areas: Area[] = [
  {
    slug: 'mooresville',
    name: 'Mooresville',
    description: 'Our home base. We provide full water heater repair, installation, and maintenance services throughout Mooresville, NC, including neighborhoods near Lake Norman and the downtown area.',
  },
  {
    slug: 'lake-norman',
    name: 'Lake Norman',
    description: 'Serving lakeside communities around Lake Norman with prompt water heater service for homes and vacation properties.',
  },
  {
    slug: 'davidson',
    name: 'Davidson',
    description: 'Reliable water heater repair and installation for Davidson residents, from historic neighborhoods to newer developments.',
  },
  {
    slug: 'cornelius',
    name: 'Cornelius',
    description: 'Full-service water heater support for Cornelius homes, including tank and tankless systems along the lake and inland.',
  },
  {
    slug: 'huntersville',
    name: 'Huntersville',
    description: 'Water heater specialists serving Huntersville with same-day options when available and thorough installations.',
  },
  {
    slug: 'troutman',
    name: 'Troutman',
    description: 'Local water heater repair and replacement for Troutman and surrounding rural and residential areas.',
  },
  {
    slug: 'statesville',
    name: 'Statesville',
    description: 'Extending service into Statesville for residents who need dependable water heater technicians close to home.',
  },
  {
    slug: 'denver-nc',
    name: 'Denver, NC',
    description: 'Water heater service for Denver, NC, covering lakeside and inland properties with professional care.',
  },
  {
    slug: 'mount-mourne',
    name: 'Mount Mourne',
    description: 'Serving Mount Mourne homes with expert water heater diagnostics, repairs, and new installations.',
  },
  {
    slug: 'sherrills-ford',
    name: 'Sherrills Ford',
    description: 'Water heater repair and installation for the Sherrills Ford community near Lake Norman.',
  },
];

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
