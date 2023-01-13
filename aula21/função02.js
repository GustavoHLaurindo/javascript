var corpo = document.body
var botao_comeca = document.getElementById("botao-comeca")
var botao_adicionar = document.getElementById("botao-adiciona")
var resultado = document.getElementById("res")
botao_comeca.addEventListener("click", clicou_comeca)
botao_adicionar.addEventListener("click", clicou_adicionar)
botao_adicionar.style.display = "none"

function criaTitulo(nome){
  var titulo =  document.createElement("h1")
  titulo.textContent = `${nome} foi convidado(a)` 
  return titulo
}
const lista = []
function clicou_comeca(){
    botao_adicionar.style.display = "block"
    for(var c = 1; c <= 2;c++){
           var nome = window.prompt("qual é o seu nome ?").toLowerCase()
           if(nome == null || nome.length < 2 || lista.includes(nome)){
            window.alert("verifique os dados")
            break
           }else{
            lista.push(nome)
           }
    }
    for(var c = 0;c < lista.length;c++){
        lista.sort()
        resultado.append(criaTitulo(lista[c]))
        console.log(lista[c])
        
    }
    botao_comeca.style.display = "none"
}
function clicou_adicionar(){
    var nome = window.prompt("qual nome adicionar ?").toLowerCase()
    
    if(nome == null || nome.length < 2){
        window.alert("verifique os dados")
        
    }else if(lista.includes(nome)){
        window.alert("o nome já existe")
    }
    else{
        lista.push(nome)
        var ultimo = lista[lista.length - 1]
        resultado.append(criaTitulo(ultimo))
    }
    
    
        
        
    
}


//for(var c = 1; c < 4;c++){
//    var nome = window.prompt("qual é o seu nome ?")
//    corpo.appendChild(criaTitulo(nome))
//