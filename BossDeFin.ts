import { De } from "./De";
import { Joueur } from "./Joueur";

export class BossDeFin {
  // Propriétés
  private _pointsDeVie: number;

  // Getter & Setter
  public get pointsDeVie(): number {
    return this._pointsDeVie;
  }
  public set pointsDeVie(v: number) {
    this._pointsDeVie = v;
  }
  public get estVivant(): boolean {
    return this.pointsDeVie > 0;
  }

  // Constructeur
  constructor(points: number) {
    this.pointsDeVie = points;
  }

  // Attaque du boss
  public attaque(joueur: Joueur): void {
    joueur.subitDegats(De.lanceLeDe(25));
  }

  // Dégâts du boss
  public subitDegats(degats: number): void {
    this.pointsDeVie -= degats;
  }
}
