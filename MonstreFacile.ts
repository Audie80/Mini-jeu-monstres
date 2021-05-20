import { De } from "./De";
import { Joueur } from "./Joueur";

export class MonstreFacile {
  // Propriétés
  private degats = 10;
  private _estVivant: boolean;
  protected de: De; // de est "protected" car exposé à la classe fille MonstreDifficile

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
    this.de = new De();
  }

  // Attaque du monstre
  public attaque(joueur: Joueur): void {
    let deMonstre = this.lanceLeDe();
    let deJoueur = joueur.lanceLeDe();
    if (deMonstre > deJoueur) joueur.subitDegats(this.degats);
  }

  // Mort du monstre
  public subitDegats(): void {
    this.estVivant = false;
  }

  // Jet de dé
  public lanceLeDe(): number {
    return this.de.lanceLeDe();
  }
}
