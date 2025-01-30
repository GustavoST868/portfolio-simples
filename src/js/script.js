// Array de projetos
const projetos = [

    {
        name: "Link Page",
        technologies: ["HTML", "CSS", "JavaScript"],
        description: "O objetivo deste projeto foi criar uma página simples para reunir todos os links relacionado a mim. Construí a estrutura do projeto com o Vite e fiz a janela o mais simples possível. Na interface, estão disponíveis os links para o GitHub, Linkedin, Instagram, currículo e página de projetos.",
        repository: "https://github.com/GustavoST868/links_page",
        deploy: ""
    },


    {
        name: "Sistemas de Lista de Tarefas",
        technologies: ["Java"],
        description: "Criar um algoritmo que tenhas as funcionalidades de criar, deletar, pesquisar, editar tarefas e mostrar tarefas no prompt. Outros recursos implementados foram a listagem de usuário criados, retornar a lista de prioridade de tarefas, conteúdos, usuários, criptografia e descriptografia por algoritmo simples, e uma classe para verificar o tipo dos dados que chegavam, com intuito de alterar o modo como o algoritmo lida com a entrada dado o tipo da informação.",
        repository: "https://github.com/GustavoST868/java/tree/main/sistema_de_listas_de_tarefas",
        deploy: ""
    },


    {
        name: "API de Usuários",
        technologies: ["Java", "SpringBoot"],
        description: "Algoritmo que contém as classes Store, User e UserController. A classe Store implementa métodos para armazenar e carregar os usuários e senhas. A classe User possui métodos para getters e setters simples, juntamente com métodos para criação, deleção, atualização, verificação de existência e disponibilização dos dados. Além de métodos para contagem dos usuários armazenados.",
        repository: "https://github.com/GustavoST868/java/tree/main/api-usuarios",
        deploy: ""
    },


    {
        name: "Formulário de Registro Web",
        technologies: ["HTML", "CSS", "JavaScript", "Python"],
        description: "Projeto para receber dados de um usuário e salvá-lo em uma espécie de banco de dados. Utilizei Flask Python para subir a aplicação para o local host e armazenei os dados em um banco SQLite. Como os dados remetiam a um período de validade, com seu vencimento, os dados referentes aquele registro eram apagados automaticamente. Implementei uma página para mostrar os dados em forma de tabela e rotas para gerenciar as informações.",
        repository: "https://github.com/GustavoST868/python/tree/main/formulario_de_registro_web_python",
        deploy: ""
    },


    {
        name: "Formulário de Registro de Dados",
        technologies: ["HTML", "CSS", "JavaScript", "PostgreSQL","C#","ASP .NET"],
        description: "Criei um formulário simples que consome uma API, ambos ASP .NET. A API gerencia a troca de informações e operações entre o banco de dados PostgreSQL e a aplicação Web. Implementei métodos e rotas relacionados as operações básicas(CRUD).",
        repository: "https://github.com/GustavoST868/formulario-web-asp-net",
        deploy: ""
    },
   
];


function exibirProjetos() {
    const container = document.getElementById("project-insert"); 

  
    projetos.forEach(projeto => {
        const divProjeto = document.createElement("div");
        divProjeto.classList.add("project");

        
        const nome = document.createElement("p");
        nome.classList.add("project-name"); 
        nome.innerHTML = "<strong style='color:rgb(107, 104, 104);font-size:110%;'>"+projeto.name+"</strong>";

      
        const tecnologias = document.createElement("p");
        tecnologias.classList.add("project-technologies"); 
        tecnologias.innerHTML = "<strong>Tecnologias:</strong>" +"<br>"+projeto.technologies.join(", ");

        
        const descricao = document.createElement("p");
        descricao.classList.add("project-description"); 
        descricao.innerHTML = "<strong>Descrição:</strong>" +"<br>"+ projeto.description;

        
        const repositorio = document.createElement("a");
        repositorio.classList.add("project-repository"); 
        repositorio.href = projeto.repository;
        repositorio.innerHTML = '<p style = "margin-top: -15px;color: rgb(73, 73, 250);" >GitHub</p>';
        repositorio.target = "_blank"; 

        
        const deploy = projeto.deploy ? document.createElement("a") : null;
        if (deploy) {
            deploy.classList.add("project-deploy");
            deploy.href = projeto.deploy;
            deploy.innerHTML = '<p style = "margin-top: -15px;color: rgb(73, 73, 250);">Deploy</p>';
            deploy.target = "_blank"; 
        }

        
        divProjeto.appendChild(nome);
        divProjeto.appendChild(tecnologias);
        divProjeto.appendChild(descricao);
        divProjeto.appendChild(repositorio);
        if (deploy) divProjeto.appendChild(deploy);

        container.appendChild(divProjeto);
    });
}

window.onload = exibirProjetos;
