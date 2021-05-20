// Pour compiler les fichiers typescript en javascript : tsc --module commonjs
// Pour éxecuter le fichier javascript : node Program.js

import { Joueur } from "./Joueur";
import { MonstreFacile } from "./MonstreFacile";
import { MonstreDifficile } from "./MonstreDifficile";
import { De } from "./De";
import { BossDeFin } from "./BossDeFin";

class Program {
  static main(): void {
    this.jeu1();
    this.jeu2();
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
    if (De.lanceLeDe() >= 3) return new MonstreFacile();
    else return new MonstreDifficile();
  }

  private static jeu2(): void {
    const Aude = new Joueur(150);
    const Boss = new BossDeFin(250);

    while (Boss.estVivant && Aude.estVivant) {
      console.log(
        `Points de vie du joueur : ` +
          Aude.pointsDeVie +
          ", Points de vie du boss : " +
          Boss.pointsDeVie
      );
      Aude.attaque(Boss);
      if (Boss.estVivant) Boss.attaque(Aude);
    }

    if (Aude.estVivant) console.log("Bravo, vous avez battu le boss !");
    else console.log("Snif, vous êtes mort...");
  }
}

Program.main();
