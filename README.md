<h1 align="center">
    <img alt="Rocketseat GoStack" src="https://camo.githubusercontent.com/d25397e9df01fe7882dcc1cbc96bdf052ffd7d0c/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732e706e67" width="200px" />
</h1>

## Rocketseat

# :rocket: Desafio 1: Conceitos do NodeJS
> Se divirta criando os seus projetos.

## Versão

<a href="https://nodejs.org/pt/"> NodeJS 12.14.1 </a>

## Instalação

````sh
yarn install
````

## Iniciar uma API

````sh
yarn dev
````

## Usando a API

Adicionando um novo projeto com método POST, chame um URL http://localhost:3202/projects/ Código que o seu projeto será criado /tasks?title= iformar os tasks 'tarefas' que quiser, seguir o exemplo abaixo:

````sh
http://localhost:3202/projects/1/tasks?title=Primeiro Cadastro,Segundo tasks
````

Corpo da requisição:

JSON

````sh
{
  "title": "Criar Novo Projeto"
}
````

Ele retorna todos os projetos cadastrados e o que acabou de ser cadastrado:

JSON

````sh
{
  "1":{
    "id": "1",
    "title": "Criar Novo Projeto",
    "tarefas": [
      [
        "Primeiro Cadastro",
        "Segundo tarefas"
      ]
    ]
  }
}
````

Buscando todos os projetos registrados, método GET, chame um URL http://localhost:3202/projects/

Ele retorna todos os projetos cadastrados:

JSON

````sh
{
  "1": {
    "id": "1",
    "title": "Criar Novo Projeto",
    "tarefas": [
      [
        "Primeiro Cadastro",
        "Segundo tarefas"
      ]
    ]
  }
  "2": {
    "id": "2",
    "title": "Projeto GoStack",
    "tarefas": [
      [
        "Segundo Cadastro"
      ]
    ]
  }
}
````

Buscando um projeto registrado de acordo com o código informado, método GET, chame um URL http://localhost:3202/projects/ Código do projeto


````sh
http://localhost:3202/projects/1
````

Ele retorna todo o projetos cadastrado:

JSON
````sh
{
  "1": {
    "id": "1",
    "title": "Criar Novo Projeto",
    "tarefas": [
      [
        "Primeiro Cadastro",
        "Segundo tarefas"
      ]
    ]
  }
}
````

Alterando um projeto cadastrado de acordo com o código informado, método PUT, chame um URL http://localhost:3202/projects/ Código do projeto


````sh
http://localhost:3202/projects/1
````

Corpo da requisição:

JSON
````sh
{
	"title": "Alterar Projeto"
}
````

Ele retorna todos os projetos registrados, incluindo o que foi alterado:

JSON

````sh
{
  "1": {
    "id": "1",
    "title": "Alterar Projeto",
    "tarefas": [
      [
        "Primeiro Cadastro",
        "Segundo tarefas"
      ]
    ]
  }
  "2": {
    "id": "2",
    "title": "Projeto GoStack",
    "tarefas": [
      [
        "Segundo Cadastro"
      ]
    ]
  }
}
````

Excluindo um projeto registrado de acordo com o código informado, método DELETE, chame um URL http://localhost:3202/projects/ Código do projeto


````sh
http://localhost:3202/projects/1
````

Ele retornou o código de sucesso:

````sh
200
````
Feito com ♥ by Kayza :wave:
