import { Address } from "cluster";

export interface Customer {
    tradeName: string;
    fiscalName: string;
    phone: number;
    nif: string;
    address: Address;
}