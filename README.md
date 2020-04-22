# digitalhouse-devops-app
NodeApp que faz upload em um bucket s3 para as alunas da Academia Neon DevOps

# Excecução (localhost)
* $ docker-compose up -d
* acessar http://localhost:3000

# Execução para o jenkins
* *Instruções:* docker run -it -p <port-externa>:<porta-docker> --name <nome-app> digitalhouse/pi:<tag>
* docker build -t digitalhouse/pi:1.0.0 .
* *PROD:* docker run -it -p 80:3000 --name app_prod digitalhouse/pi:1.0.0
* *HOMOLOG:* docker run -it -p 3000:3000 --name app_homolog digitalhouse/pi:1.0.0


# TODO
- Rota de listagem
- Testes
