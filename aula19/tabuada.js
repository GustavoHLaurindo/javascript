var elemento_pai = document.getElementById("mySelect");
var input = document.getElementById("numero")
var numero = Number(input.value)
var botao = document.getElementById("botao")
botao.addEventListener("click", clicou)
function clicou(){
    var numero = Number(input.value)
    if(numero == 0){
        Swal.fire({
            title: 'Digite um valor maior que 0',
            icon: 'error'
        });
    }else if(numero.toString().length >= 4){
        Swal.fire({
            title: 'Digite números até 4 digitos ',
            icon: 'warning',
            button: 'Ok'
        });
    }
    else{
        elemento_pai.innerHTML = ""
        for(var contagem = 1; contagem <= 10; contagem++){
            var selecao = document.createElement('option');
            var texto = document.createTextNode(`${numero} x  ${contagem} = ${contagem * numero}`);
            selecao.appendChild(texto)
            elemento_pai.appendChild(selecao);
                
        }
    }
      
}
