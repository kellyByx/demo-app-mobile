export interface GenderResult {
    name: string;
    count: number;
    probability: number;
    gender:string;
    country_id?:string; // ici il n'est pas obligatoire car on ne va pas d'office le recevoir
}