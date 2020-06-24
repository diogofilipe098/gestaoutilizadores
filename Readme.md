# Correr no docker:

Dentro da pasta do projeto : 
```shell
docker build . -t diogofilipe7/gestaoutilizadores:latest

docker run --name gestaoUtilizadores -p 3000:3000 -d diogofilipe7/gestaoutilizadores  **OU**

kubectl apply -f app_deployment.yaml

Este já não é necessário: kubectl expose deployment gestaoutilizadores --type="LoadBalancer"
```
