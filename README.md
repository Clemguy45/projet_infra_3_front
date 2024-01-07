# Projet Infra 3 Front-end

*Ce projet a été généré par [Angular CLI](https://github.com/angular/angular-cli) version 16.2.4.* 

*Ce README ne concerne que la partie **front-end**, il est donc demandé de consulter le README de la partie **back-end** pour que l'intégralité du projet soit fonctionnel*

Dans ce projet, nous regroupons l'ensemble des cartes existantes à l'aide de l'API `Yu-Gi-Oh! API by YGOPRODeck`


## Initilisation

Pour le bon fonctionnement des fonctionnalités du projet, éxécutez la commande suivante : 
```
npm install
```

## Serveur

Si vous utilisez le code source du projet, lancez la commande suivante pour démarrer le serveur :
```
ng serve
```
Dirigez-vous maintenant à l'adresse [http://localhost:4200/](`http://localhost:4200/`).


## Page d'accueil

Vous êtes désormais sur la page d'accueil qui regroupe l'ensemble des cartes générées par l'API.

Vous pouvez consulter les cartes en naviguant au travers des pages ***suivant*** ou ***précédent***.

*Les cartes sont triées de manière alphabétique*


## Barre de navigation

Dans la barre de navigation se trouve une barre de recherche permettant d'accéder aux informations d'une carte en fonction de son nom.

***Attention** l'API ne permet pas une recherche optimale, il faudra renseigner un nom **anglophone** complet et sans faute de carte. Pour s'exercer, `Dark Magician` est un nom de carte valide.*

La barre de recherche présente également les boutons suivants : 

* Connexion : <img src="src/assets/logo/login-logo.png" alt="logo" width="20" height="20">
* Register : <img src="src/assets/logo/sign-up-icone.png" alt="logo" width="20" height="20">


*Pour revenir à l'accueil, cliquez sur le logo* <img src="src/assets/logo/yu-gi-oh-logo.jpg" alt="logo" width="60" height="30"> *tout à gauche de la barre de navigation*

## Page Login 

Pour vous **connecter**, un compte administrateur est mis à votre disposition avec les identifiants suivants :
* username : **`admin`**
* mot de passe : **`admin`** 

Une fois connecté, vous serez redirigez vers la page concernant vos informations personnelles.

## Page Register

Pour vous **enregistrer**, il faudra renseigner des champs d'inscription. Une fois cela fait, vous pourez vous connectez avec les identifiants que vous venez de créer.

## Versionning 

Pour le versionning, nous avons utilisé **GitHub**. les branches sont visibles depuis le repository **GitHub**

## Auteurs
* GUYOT Clément
* POUDROUX Mickael
* TSONGOUANG Lauriche
* BLOT Benjamin