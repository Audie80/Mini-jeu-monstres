// Pour compiler les fichiers typescript en javascript : tsc --module commonjs
// Pour éxecuter le fichier javascript : node Program.js

import { Joueur } from "./Joueur";
import { MonstreFacile } from "./MonstreFacile";
import { MonstreDifficile } from "./MonstreDifficile";
import { De } from "./De";

class Program {
  static main(): void {
    this.jeu1();
  }

  private static jeu1(): void {
    const Aude = new Joueur(150);
    let cptFacile: number = 0;
    let cptDifficile: number = 0;

    while (Aude.estVivant) {
      let monstre = this.FabriqueDeMonstre();

      while (monstre.estVivant && Aude.estVivant) {
        Aude.attaque(monstre);
        if (monstre.estVivant) {
          monstre.attaque(Aude);
        }
      }

      if (Aude.estVivant) {
        if (monstre instanceof MonstreDifficile) cptDifficile++;
        else cptFacile++;
      } else {
        console.log("Snif, vous êtes mort...");
        break;
      }
    }

    console.log(
      `Bravo !!! Vous avez tué ${cptFacile} monstres faciles et ${cptDifficile} monstres difficiles. Vous avez ${
        cptFacile + cptDifficile * 2
      } points.`
    );
  }

  private static FabriqueDeMonstre(): MonstreFacile {
    const de = new De();
    if (de.lanceLeDe() >= 3) return new MonstreFacile();
    else return new MonstreDifficile();
  }
}

Program.main();
