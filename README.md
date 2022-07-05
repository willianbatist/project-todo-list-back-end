### Observação

Este repositório contem o **Projeto Todo List Ebyrt** que reúne o aprendizado desenvolvido por _[Willian Alves Batista](https://www.linkedin.com/in/willian-alves-batista-60aa6a180/)_.

# Projeto Todo List Ebyrt


#### Habilidades que foram exigidas:

  - Desenvolvimento de API em Nods.js;
  - Desenvolvimento de aplicação FullStack;
  - Operações basicas no bando de dados: Create, Read, Update e Delete;

#### Tecnologias utilizadas:

  - Node.js;
  - Express;
  - Docker;
  - SQL;
  - MySql;
  - Eslint;
  - React.JS.

---

## Apresentação do Projeto

O Projeto ToDo List Ebytr é uma aplicação web que tem como objetivo facilitar a vida dos usuários. A ferramenta permite que sejam adicionadas tarefas diárias e compromissos, facilitando a gestão de tempo das pessoas. A lista de tarefas é ordenada por status classificados em “Pendente”, “Em andamento” e “Concluído”. A aplicação se trata de uma full stack onde o banco de dados usado é mysql, responsável por realizar as quatro operações básicas utilizadas em bases de dados relacionais, sendo elas a criação, a leitura, a utilização e a exclusão, esta última se comunica ao react e apresenta a interface ao usuário.


### Inicialização

No terminal
  - 1 der um git clone git@github.com:willianbatist/project-todo-list-ebytr.git

entre no diretorio
  - 2 cd project-todo-list-ebytr/

**Observação: para que o projeto funcione, é necessário se ter o Docker instalado.**

  - 3 ainda no terminal rode docker-compose up --build -d
que irá criar 3 ambientes, o mysql, o app_frontend e app_backend

  - 4 em seguida docker start app_backend app_frontend mysql_db

  - 5 docker exec app_backend npx sequelize db:create

  - 6 docker exec app_backend npx sequelize db:migrate

  - 7 docker exec app_backend npx sequelize db:seed:all

### Para acessar a aplicação
  
  link do fron_end pagina web funcionando:
    http://localhost:3000/
  
  link para a api do backend:
  http://localhost:8080/tasks
 
---

 ### Para realizar os testes:
 
 **Observação: Para realizar o teste no front-end é necessario que tenho uma tarefa adicionada na aplicação.**
 
 Front-end testes:
 É nescessario entrar no diretorio **todo-list-ui** feito isso só dá o comando npm test.
 
Back-end testes:
 É nescessario entrar no diretorio **todo-list-api** feito isso só dá o comando npm test.
 
 
---
