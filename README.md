
# digitalhouse-devops-app
NodeApp que faz upload em um bucket s3 para as alunas da Academia Neon DevOps

# Excecução (localhost)
* `$ docker-compose up -d`
* acessar http://localhost:3000

# Execução para o jenkins
* **Instruções:** 
* **Compilar:**  
	* `docker build -t digitalhouse/pi:1.0.0 .`
* **Executar:** 
	* `docker run -it -p <port-externa>:<porta-docker> --name <nome-app> digitalhouse/pi:<tag>`

###

* **Exemplo para execução no ambiente final:**
* **PROD:**  
	* `docker run -d -p 80:3000 -e NODE_ENV=production -e AWS_ACCESS_KEY="" -e AWS_SECRET_ACCESS_KEY="" -e BUCKET_NAME="" --name app_prod digitalhouse/pi:1.0.0`
* **HOMOLOG:** 
	* `docker run -d -p 3000:3000 -e NODE_ENV=homolog -e AWS_ACCESS_KEY="" -e AWS_SECRET_ACCESS_KEY="" -e BUCKET_NAME=""  --name app_homolog digitalhouse/pi:1.0.0`


# TODO
- Rota de listagem
- Testes
