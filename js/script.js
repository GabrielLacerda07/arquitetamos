//Selecionando os botões de filtro
let btnFilter = document.querySelectorAll('.btn-jobs')
//Selecionando cada div que contém as imagens
let arq1 = document.querySelector('#arq-1')
let arq2 = document.querySelector('#arq-2')
let eng1 = document.querySelector('#eng-1')
let eng2 = document.querySelector('#eng-2')
let dev1 = document.querySelector('#dev-1')
let dev2 = document.querySelector('#dev-2')
//Adicionando um evento de click no botão "Todos" 
btnFilter[0].addEventListener("click", () => {
    //Se o botão "Todos" não tiver a class 'active'
    if(btnFilter[0].classList.contains("active") == false){
        //Adicionando a classe 'active' no botão "Todos"
        btnFilter[0].classList.add('active')
        //Removendo a classe 'active' nos outros botões
        btnFilter[1].classList.remove('active')
        btnFilter[2].classList.remove('active')
        btnFilter[3].classList.remove('active')
    }
    //Se o botão "Todos" tiver a class 'active'
    if(btnFilter[0].classList.contains("active") == true){
        //Caso houver, remover a classe 'esconder'
        arq1.classList.remove('esconde')
        arq2.classList.remove('esconde')
        eng1.classList.remove('esconde')
        eng2.classList.remove('esconde')
        dev1.classList.remove('esconde')
        dev2.classList.remove('esconde')
    }
})
//Adicionando um evento de click no botão "Arquitetura" 
btnFilter[1].addEventListener("click", () => {
    //Se o botão "Arquitetura" não tiver a class 'active'
    if(btnFilter[1].classList.contains("active") == false){
        //Adicionando a classe 'active' no botão "Arquitetura"
        btnFilter[1].classList.add('active')
        
        btnFilter[0].classList.remove('active')
        btnFilter[2].classList.remove('active')
        btnFilter[3].classList.remove('active')
    }
    //Se o botão "Arquitetura" tiver a class 'active'
    if(btnFilter[1].classList.contains("active") == true){
        //Caso houver, remover a classe 'esconder'
        arq1.classList.remove('esconde')
        arq2.classList.remove('esconde')
        //Caso não houver, adicionar a classe 'esconder'
        eng1.classList.add('esconde')
        eng2.classList.add('esconde')
        dev1.classList.add('esconde')
        dev2.classList.add('esconde')
    }
    
})
//Adicionando um evento de click no botão "Engenharia" 
btnFilter[2].addEventListener("click", () => {
    //Se o botão "Engenharia" não tiver a class 'active'
    if(btnFilter[2].classList.contains("active") == false){
        //Adicionando a classe 'active' no botão "Engenharia"
        btnFilter[2].classList.add('active')
        //Removendo a classe 'active' nos outros botões
        btnFilter[0].classList.remove('active')
        btnFilter[1].classList.remove('active')
        btnFilter[3].classList.remove('active')
    }
    //Se o botão "Engenharia" tiver a class 'active'
    if(btnFilter[2].classList.contains("active") == true){
        //Caso houver, remover a classe 'esconder'
        eng1.classList.remove('esconde')
        eng2.classList.remove('esconde')
        //Caso não houver, adicionar a classe 'esconder'
        arq1.classList.add('esconde')
        arq2.classList.add('esconde')
        dev1.classList.add('esconde')
        dev2.classList.add('esconde')
    }
})
//Adicionando um evento de click no botão "Desenvolvedor" 
btnFilter[3].addEventListener("click", () => {
    //Se o botão "Desenvolvedor" não tiver a class 'active'
    if(btnFilter[3].classList.contains("active") == false){
        //Adicionando a classe 'active' no botão "Desenvolvedor"
        btnFilter[3].classList.add('active')
        //Removendo a classe 'active' no botão "Desenvolvedor"
        btnFilter[0].classList.remove('active')
        btnFilter[1].classList.remove('active')
        btnFilter[2].classList.remove('active')
    }
    //Se o botão "Desenvolvedor" tiver a class 'active'
    if(btnFilter[3].classList.contains("active") == true){
        //Caso houver, remover a classe 'esconder'
        dev1.classList.remove('esconde')
        dev2.classList.remove('esconde')
        //Caso não houver, adicionar a classe 'esconder'
        arq1.classList.add('esconde')
        arq2.classList.add('esconde')
        eng1.classList.add('esconde')
        eng2.classList.add('esconde')
        
    }
    
})