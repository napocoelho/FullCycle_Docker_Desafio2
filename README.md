# FullCycle - Docker - Desafio 2

<h3>Nginx com Node.js (<i>solução do desafio</i>):</h3>

Utilizar o comando abaixo na pasta raiz do projeto clonado: <br />
* <b>docker-compose up --build</b> <br />
* acessar localhost:8080 para conferir a implementação <br />
* alterar o script dentro da pasta "node/volume", dar F5 na página e o Nodemon fará restart automaticamente no servidor NodeJS <br />



<h3>Descrição do Desafio:</h3>

Nesse desafio voc&ecirc; colocar&aacute; em pr&aacute;tica o que aprendemos em rela&ccedil;&atilde;o a utiliza&ccedil;&atilde;o do nginx como proxy reverso. A id&eacute;ia principal &eacute; que quando um usu&aacute;rio acesse o nginx, o mesmo far&aacute; uma chamada em nossa aplica&ccedil;&atilde;o node.js. Essa aplica&ccedil;&atilde;o por sua vez adicionar&aacute; um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplica&ccedil;&atilde;o node.js para o nginx dever&aacute; ser:

&lt;h1&gt;Full Cycle Rocks!&lt;/h1&gt;

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo dever&aacute; estar funcionando e dispon&iacute;vel na porta: 8080.

Suba tudo em um reposit&oacute;rio e fa&ccedil;a a entrega.

* A linguagem de programa&ccedil;&atilde;o para este desafio &eacute; Node/JavaScript.
