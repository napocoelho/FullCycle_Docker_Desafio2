FROM node:18

WORKDIR /usr/src/app

# copiando apenas os arquivos necessários
COPY *.js* .
COPY start.sh .

# instalando o wait-for-it, instalando módulos do Node e liberando permissões de arquivos:
RUN apt-get update && \
    apt-get install -y wget netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \    
    npm install mysql && \
    npm install && \
    chmod +x /usr/bin/wait-for && \
    chmod +x start.sh

#USER node
#WORKDIR /home/node/app

EXPOSE 3000
#CMD ["npm", "start"]
#CMD ["node","index.js"]


# testes isolados
#docker build -t napocoelho/node-js .
#docker run --rm --name node-js -p 3000:3000 napocoelho/node-js 
#docker run -d --rm --name node-js --network rede-principal -p 3000:3000 napocoelho/node-js 