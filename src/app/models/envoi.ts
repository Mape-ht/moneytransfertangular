import { Recepteur } from './recepteur';
import { Emetteur } from './emetteur';
export class Envoi {
    public id!: number;
    public date!: string;
    public montant!: number;
    public emetteur!: Emetteur;
    public recepteur!: Recepteur;
 // emetteur: any;
 // recepteur: Recepteur;

}