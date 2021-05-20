import { De } from "./De";
import { MonstreFacile } from "./MonstreFacile";
import { BossDeFin } from "./BossDeFin";

export class Joueur {
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

  // Attaque du joueur
  public attaque(monstre: MonstreFacile | BossDeFin): void {
    if (monstre instanceof MonstreFacile) {
      let deJoueur = De.lanceLeDe();
      let deMonstre = De.lanceLeDe();
      if (deJoueur >= deMonstre) {
        monstre.subitDegats();
      }
    } else if (monstre instanceof BossDeFin)
      monstre.subitDegats(De.lanceLeDe(25));
  }

  // Dégâts du joueur
  public subitDegats(degats: number): void {
    if (!this.bouclierFonctionne()) this.pointsDeVie -= degats;
  }

  // Déclenchement du bouclier
  private bouclierFonctionne(): boolean {
    return De.lanceLeDe() <= 2;
  }
}
