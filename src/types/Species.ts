export interface SpeciesState {
    speciesFetchLoading: boolean;
    speciesFetchError: boolean;
    regions: Region[];
    species: Species[];
    criticallyEndangered: Species[];
}

export interface Region {
    name: string;
    identifier: string;
}

export interface Species {
    taxonid: number;
    kingdom_name: string;
    phylum_name: string;
    class_name: string;
    order_name: string;
    family_name: string;
    genus_name: string;
    scientific_name: string;
    infra_rank: any;
    infra_name: any;
    population: any;
    category: string;
    measures?: string | null;
}
