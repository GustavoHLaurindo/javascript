var inicio = document.getElementById("inicio")
var fim = document.getElementById("fim")
var passo = document.getElementById("passo")
var resultado = document.getElementsByClassName("res")[0]
var botao = document.getElementById("botao")
botao.addEventListener("click", clicou)
function clicou(){
    var fim_valor = Number(fim.value)
    var inicio_valor = Number(inicio.value)
    var passo_valor = Number(passo.value)
    if( inicio_valor == 0 || fim_valor == 0){
        swal({
            title: 'Error!',
            text: 'Verifique os dados digitados',
            icon: 'error',
            button: "tudo bem :)"
          })
    }else if(passo_valor == 0){
        resultado.innerHTML = ""
        swal({
            title: 'Pequeno problema',
            text: 'impossivel passo 0, consideramos 1',
            icon: 'warning',
            button: "tudo bem :)"
          })
        passo_valor = 1
        for(var c = inicio_valor;c <= fim_valor; c+=passo_valor){
            resultado.innerHTML += `<span>${c}</span>`
            resultado.innerHTML += `&#x1F449;`
        } 
        resultado.innerHTML += `&#x1F3F3;` 
    }
    else{
      resultado.innerHTML = ""
      for(var c = inicio_valor;c <= fim_valor; c+=passo_valor){
        resultado.innerHTML += `<span>${c}</span>`
        resultado.innerHTML += `&#x1F449;`
     
    }
    resultado.innerHTML += `&#x1F3F3;`
 }
  }
