# Quiz Interactif

## Description

Ce projet est un quiz interactif construit avec HTML, CSS, et JavaScript. Il utilise Docker pour l'empaquetage et le déploiement, avec une configuration CI/CD via GitHub Actions pour automatiser le processus de construction, de test et de déploiement.

## Prérequis

- [Node.js](https://nodejs.org) (pour exécuter les tests locaux)
- [Docker](https://www.docker.com) (pour construire et déployer l'application)
- Un compte [Docker Hub](https://hub.docker.com) pour stocker l'image Docker
- Un serveur SSH accessible pour déployer l'application (à remplacer par vos propres informations)

## Cloner le Projet

Pour cloner ce projet, exécutez la commande suivante :

```bash
git clone https://github.com/liam237/quiz-interactif
cd quiz-interactif
Installation
Installez les dépendances :

bash
Copier le code
npm install
Lancez les tests pour vérifier que tout fonctionne :

bash
Copier le code
npm test
Construire et Déployer avec Docker
Construire l'Image Docker
Pour construire l'image Docker localement, utilisez la commande suivante :

bash
Copier le code
docker build -t <votre-nom-d-utilisateur>/quiz-interactif:latest .
Pousser l'Image Docker
Pour pousser l'image Docker vers Docker Hub, utilisez la commande suivante après vous être connecté :

bash
Copier le code
docker login -u <votre-nom-d-utilisateur>
docker push <votre-nom-d-utilisateur>/quiz-interactif:latest
GitHub Actions Workflows
Workflow Docker Build and Push
Ce workflow s'exécute chaque fois qu'il y a un push vers la branche master. Il est responsable de la construction et du push de l'image Docker vers Docker Hub.

Description des Étapes :
Checkout Code : Récupère le code du dépôt.
Build Docker Image : Construit une image Docker avec le tag quiz-interactif.
Log in to Docker Hub : Se connecte à Docker Hub en utilisant les secrets pour le nom d'utilisateur et le mot de passe.
Push Docker Image : Pousse l'image Docker construite sur Docker Hub.
Workflow Deploy
Ce workflow s'exécute également chaque fois qu'il y a un push vers la branche master. Il est responsable du déploiement de l'application sur un serveur distant.

Description des Étapes :
Checkout Code : Récupère le code du dépôt.
Set up Docker Buildx : Configure Docker Buildx pour des builds plus complexes.
Log in to Docker Hub : Se connecte à Docker Hub en utilisant les secrets pour le nom d'utilisateur et le mot de passe.
Build Docker Image : Construit l'image Docker avec le tag latest.
Push Docker Image : Pousse l'image Docker vers Docker Hub.
Set up SSH : Configure la connexion SSH en utilisant une clé privée stockée dans les secrets.
Test SSH Connection : Teste la connexion SSH au serveur distant.
Deploy to Server : Déploie l'image Docker sur le serveur distant, en arrêtant et supprimant les anciens conteneurs si nécessaire, puis en lançant le nouveau conteneur.
Fichiers du Projet
index.html : Le fichier HTML principal du quiz interactif.
styles.css : Le fichier CSS pour le style du quiz.
script.js : Le fichier JavaScript pour la logique du quiz.
Dockerfile : Fichier de configuration Docker pour la construction de l'image.
.github/workflows/test.yml : Workflow GitHub Actions pour la construction et le push de l'image Docker.
.github/workflows/deploy.yml : Workflow GitHub Actions pour le déploiement sur un serveur distant.
Contribuer
Si vous souhaitez contribuer à ce projet, veuillez soumettre une demande de tirage (pull request) avec vos modifications et améliorations.

Contact
Pour toute question ou suggestion, vous pouvez me contacter à williamfonkui@gmail.com.

go
Copier le code

Vous pouvez copier ce contenu et l'enregistrer dans un fichier `README.md` sur votre système. Si vous avez besoin de l'ajouter directement à votre dépôt GitHub, vous pouvez créer un nouveau fichier nommé `README.md` et y coller le contenu ci-dessus.


##Auteur
FONKUI WILLIAM

