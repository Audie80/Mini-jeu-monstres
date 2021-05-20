import { De } from "./De";
import { Joueur } from "./Joueur";

export class MonstreFacile {
  // Propriétés
  private degats = 10;
  private _estVivant: boolean;

  // Getter & setter
  public get estVivant(): boolean {
    return this._estVivant;
  }
  public set estVivant(v: boolean) {
    this._estVivant = v;
  }

  // Constructeur
  constructor() {
    this.estVivant = true;
  }

  // Attaque du monstre
  public attaque(joueur: Joueur): void {
    let deMonstre = De.lanceLeDe();
    let deJoueur = De.lanceLeDe();
    if (deMonstre > deJoueur) joueur.subitDegats(this.degats);
  }

  // Mort du monstre
  public subitDegats(): void {
    this.estVivant = false;
  }
}
