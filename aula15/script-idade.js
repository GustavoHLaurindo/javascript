var agora = new Date()
var ano_atual = agora.getFullYear()
var botao = document.getElementById("botao")
var nascimento = document.getElementById("nascimento")//input do ano de nascimento
var resultado = document.getElementsByClassName("res")[0]//onde fica o resultado
var radiom = document.getElementById("masculino")
var radiof = document.getElementById("feminino")
botao.addEventListener("click", clicou)//escuta o evento de click no botão
function clicou(){//assim que clicar no botão faça essa função
    var ano = Number(nascimento.value)//pega o valor digitado no input
    
    if (ano.toString().length < 4 || ano > ano_atual ){//se o valor digitado no input for menor que 4
        window.alert("verifique os dados :)")
    }else{
        var idade = ano_atual - ano
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (radiof.checked == true){
            genero = "mulher"
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            }else if(idade < 58){
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
                //adulto
            }
            else{
                //idoso
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }

        }else if (radiom.checked == true){
            genero = "homem"
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            }else if(idade < 58){
                //adulto
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
        }
        
        resultado.innerHTML = `<p>Quem nasceu em ${ano} e é ${genero} tem ${idade} anos</p>`
        resultado.appendChild(img)
        img.style.width = "250px"
    }
}