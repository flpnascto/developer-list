<!--
*** Template adapted from: https://github.com/othneildrew/Best-README-Template
***
-->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/flpnascto/developer-list">
    <img src="logo.png" alt="Logo" width="80" height="80">
  </a>

  <h2 align="center"><strong>Developer List</strong></h2>

  <p align="center">
    API para realizar a gestão de cadastros de pessoas desenvolvedoras.
    <br />
    <!-- <a href="">Demonstração</a> -->
    ·
    <a href="https://github.com/flpnascto/developer-list/issues">Reportar Bug</a>
    ·
    <a href="https://github.com/flpnascto/developer-list/issues">Solicitar Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Tabela de Conteúdos</h2></summary>
  <ol>
    <li>
      <a href="#notebook_with_decorative_cover-sobre-o-projeto">Sobre o Projeto</a>
      <ul>
        <li><a href="#sparkles-funcionalidades">Funcionalidades</a></li>
        <li><a href="#computer-tecnologias-aplicadas">Tecnologias Aplicadas</a></li>
        <li><a href="#book-bibliotecas">Bibliotecas</a></li>
        <li><a href="#art-layout">Layout Base</a></li>
      </ul>
    </li>
    <li>
      <a href="#arrow_forward-executando-a-aplicação">Executando a aplicação</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#handshake-contribuição">Contribuição</a></li>
    <li><a href="#memo-licença">Licença</a></li>
    <li><a href="#email-contato">Contato</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## :notebook_with_decorative_cover: Sobre o Projeto
Developer List é uma API Rest com o objetivo de gerenciar o cadastro de pessoas desenvolvedoras. O cadastro possui informações como o `Nome`, `Telefone`, `Celular` e `Endereço` e linguagens de programação em que é `Especialista`. Os detalhes das informações de endereço são obtidas através da [API dos Correios](https://viacep.com.br/), que realiza a busca pelo numero do CEP.

### :sparkles: Funcionalidades
- [x] Cadastro de desenvolvedores
- [ ] Atualizar desenvolvedor
- [ ] Deletar desenvolvedor
- [x] Listar todas especialidades cadastradas
- [x] Cadastrar informações de endereços
- [x] Listar desenvolvedores filtrados por especialidade

### :computer: Tecnologias Aplicadas
* JavaScript
* Node.JS
* MySQL
* Sequelize ORM
* Jest
* Swagger

### :book: Bibliotecas

* Express
* Axios
* Joi
* Dotenv

<!-- GETTING STARTED -->
## :arrow_forward: Executando a aplicação

Para executar a aplicação localmente siga as instruções abaixo.

<!--
Obs.: a aplicação se encontra em deploy no site [](). _Lembrando que devido a configuração **Hibernate** do Heroku, o primeiro acesso poderá levar um longo tempo_.
-->
### Pré-requisitos

Primeiramente é necessário que possua instalado as seguintes ferramentas: gerenciador de pacotes NPM e o Git.
Além disto é bom ter um editor para trabalhar com o código como VSCode.

### Instalação

1. Faça uma cópia do repositório (HTTPS ou SSH)
   ```sh
   git clone https://github.com/flpnascto/developer-list.git
   ```

   ```sh
   git@github.com:flpnascto/developer-list.git
   ```

2. Acesse a pasta do repositório local e instale os pacotes necessários

   ```sh
   npm install
   ```
3. Criar o arquivo `.env` na raiz do projeto e adicionar as variáveis de ambiente

     ```
     MYSQL_USER=
     MYSQL_PASSWORD=
     HOSTNAME=
     PORT=
     ```

4. Na pasta do repositório local execute o comando para iniciar a aplicação

   ```sh
   npm start
   ```

<!-- USAGE EXAMPLES -->
<!-- ROADMAP -->
<!-- CONTRIBUTING -->
## :handshake: Contribuição

As contribuições são o que tornam a comunidade open source um lugar incrível para aprender, inspirar e criar. Juntos vamos mais longe :rocket:.
Sinta-se a vontade para sugerir melhorias e compartilhar o conhecimento.

1. Fork o projeto
2. Crie sua _Feature Branch_ (`git checkout -b feature/AmazingFeature`)
3. _Commit_ suas alterações (`git commit -m 'Add some AmazingFeature'`)
4. _Push_ para o repositório remoto (`git push origin feature/AmazingFeature`)
5. Abra um _Pull Request_

<!-- LICENSE -->
## :memo: Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

<!-- CONTACT -->
## :email: Contato

[![Linkedin Badge](https://img.shields.io/badge/-Felipe_Nascimento-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/fnascto/)](https://www.linkedin.com/in/fnascto/) [![Gmail Badge](https://img.shields.io/badge/-flpnascto@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:flpnascto@gmail.com)](mailto:flpnascto@gmail.com)
[![GitHub Badge](https://img.shields.io/badge/-Profile-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/flpnascto)](https://github.com/flpnascto)

Project Link: [https://github.com/flpnascto/developer-list](https://github.com/flpnascto/developer-list)