import { De } from "./De";
import { MonstreFacile } from "./MonstreFacile";

export class Joueur {
  // Propriétés
  private pointsDeVie: number;
  private de: De;

  // Getter & Setter
  public get estVivant(): boolean {
    return this.pointsDeVie > 0;
  }

  // Constructeur
  constructor(points: number) {
    this.pointsDeVie = points;
    this.de = new De();
  }

  // Attaque du joueur
  public attaque(monstre: MonstreFacile): void {
    let deJoueur = this.lanceLeDe();
    let deMonstre = monstre.lanceLeDe();
    if (deJoueur >= deMonstre) {
      monstre.subitDegats();
    }
  }

  // Dégâts et mort du joueur
  public subitDegats(degats: number): void {
    if (!this.bouclierFonctionne()) this.pointsDeVie -= degats;
  }

  // Déclenchement du bouclier
  private bouclierFonctionne(): boolean {
    return this.lanceLeDe() <= 2;
  }

  // Jet de dé
  public lanceLeDe(): number {
    return this.de.lanceLeDe();
  }
}
