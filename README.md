# Mini-jeu-monstres

Mini jeu orienté objet développé en TypeScript.

## Skills

Créer des classes, manipuler l’héritage, créer des propriétés, encapsuler, substituer des méthodes, jouer avec le polymorphisme.

## Goal

Créer un mini jeu où un héros tue des monstres à l'aide de jets de dés.

## Classes

- Joueur, représentant notre héros.

- MonstreFacile.

- MonstreDifficile, qui va hériter des fonctionnalités d'un monstre facile et qui en ajoutera.

- De pour gérer le tirage aléatoire, comme un dé classique.

## Rules

Le principe est de voir combien le héros va pouvoir tuer de monstres faciles et de monstres difficiles avant de mourir, en ayant perdu tous ses points de vie (le héros démarre avec 150 points de vie). Chaque monstre facile tué rapporte 1 point, chaque monstre difficile tué en rapporte 2.

Un monstre aléatoire arrive, le héros attaque le monstre ; puis si le monstre a survécu il attaque à son tour le héros et ceci jusqu'à ce que mort s'en suive.

Une attaque du héros sur un monstre consiste en un jet de dé des deux protagonistes. Si le dé du héros est supérieur ou égal au dé du monstre, alors celui-ci est vaincu. Sinon, rien ne se passe et c'est au tour du monstre d'attaquer.

L'attaque du monstre facile sur le héros est similaire, mais à la différence que le jet du monstre doit être strictement supérieur au jet du héros.

A noter que lorsque le héros subit des dégâts, son bouclier se déclenche avec un nouveau jet de dé. Si ce dernier est inférieur ou égal à 2 (donc 2 chances sur 6), alors le héros ne perçoit pas de dégâts. Le cas contraire, ses points de vie sont diminués de 10 points de vie.

L'attaque du monstre difficile est la même que celle du monstre facile, sauf qu'il enchaine avec un sort magique. Un jet de dé est réalisé et si ce jet est différent de 6 alors le héros perçoit des dommages équivalent à la valeur du dé multiplié par 5.
