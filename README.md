# Projet Infra 3 Front-end V.1.0.0

*Ce projet a été généré par [Angular CLI](https://github.com/angular/angular-cli) version 16.2.4.*

*Ce README ne concerne que la partie **front-end**. Il est donc demandé de consulter le README de la partie **back-end** pour que l'intégralité du projet soit fonctionnelle.*

Dans ce projet, nous regroupons l'ensemble des cartes existantes à l'aide de l'API `Yu-Gi-Oh! API by YGOPRODeck`


## Initialisation

Pour le bon fonctionnement des fonctionnalités du projet, exécutez la commande suivante :
```
npm install
```

## Serveur

Si vous utilisez le code source du projet, lancez la commande suivante pour démarrer le serveur :

```
ng serve
```

Dirigez-vous maintenant à l'adresse [http://localhost:4200/](http://localhost:4200/).


## Page d'accueil

Vous êtes désormais sur la page d'accueil qui regroupe l'ensemble des cartes générées par l'API.

Vous pouvez consulter les cartes en naviguant au travers des pages ***suivantes*** ou ***précédentes***.

*Les cartes sont triées de manière alphabétique*


## Barre de navigation

Dans la barre de navigation se trouve une barre de recherche permettant d'accéder aux informations d'une carte en fonction de son nom.


***Attention**, l'API ne permet pas une recherche optimale, il faudra renseigner un nom **anglophone** complet et sans faute d'orthographe. Pour s'exercer, `Dark Magician` est un nom de carte valide.*

La barre de recherche présente également les boutons suivants :

* Connexion : <img src="src/assets/logo/login-logo.png" alt="logo" width="20" height="20">
* Register : <img src="src/assets/logo/sign-up-icone.png" alt="logo" width="20" height="20">


*Pour revenir à l'accueil, cliquez sur le logo* <img src="src/assets/logo/yu-gi-oh-logo.jpg" alt="logo" width="60" height="30"> *tout à gauche de la barre de navigation*

*Toutes les fonctionnalités de la navbar ne sont pas opérationnelles dans la v1.0.0 de l'application. Seulement celles mentionnées plus haut dans cette section sont accessibles*

## Page Login 

Pour vous **connecter**, un compte administrateur est mis à votre disposition avec les identifiants suivants :
* username : **`admin`**
* mot de passe : **`admin`**

Une fois connecté, vous serez redirigé vers la page concernant vos informations personnelles.

## Page Register

Pour vous **enregistrer**, il faudra renseigner des champs d'inscription. Une fois cela fait, vous pourrez vous connecter avec les identifiants que vous venez de créer.

## Versioning 

Pour le versioning, nous avons utilisé **GitHub**. Les branches sont visibles depuis le repository **GitHub** [en cliquant ici](https://github.com/Clemguy45/projet_infra_3_front).

## Azure 

L'application est hébergée sur Azure et maintenue à jour grâce à la pipeline hébergée avec GitHub Actions.

Vous pouvez retrouver l'entièreté du site [en cliquant ici](https://orange-tree-09a453110.4.azurestaticapps.net/)
 

## Diagrammes

Le diagramme est disponible dans le **back-end** à la racine de ce projet.

## Auteurs
* GUYOT Clément
* POUDROUX Mickael
* TSONGOUANG SONGFACK Lauriche
* BLOT Benjamin
