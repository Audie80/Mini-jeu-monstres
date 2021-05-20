import { De } from "./De";
import { Joueur } from "./Joueur";
import { MonstreFacile } from "./MonstreFacile";

export class MonstreDifficile extends MonstreFacile {
  // Propriétés
  private degatsSort = 5;

  // Override de l'attaque du monstre
  public attaque(joueur: Joueur): void {
    super.attaque(joueur);
    joueur.subitDegats(this.sortMagique());
  }

  // Deuxième attaque du monstre
  private sortMagique(): number {
    let deMonstre = De.lanceLeDe();
    if (deMonstre === 6) return 0;
    else return this.degatsSort * deMonstre;
  }
}
