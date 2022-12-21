function carregou(){
    var mensagem = document.getElementById("hora")
    var img = document.querySelector("img#imagem")
    var corpo = document.getElementsByTagName("body")[0]
    var agora = new Date()
    var hora = agora.getHours()
    var minuto = agora.getMinutes()
    mensagem.innerHTML = `<p>Agora são ${hora} horas<br> e ${minuto} minutos</p>`
    hora = 17
    if (hora >= 0 && hora < 12 ){

        img.setAttribute('src', 'imagens/manha.png');
        corpo.style.backgroundImage = "url('imagens/fundo-manha.jpg')"
        document.getElementsByTagName("p")[0].style.color = "#1f1f1f"
        //bom dia
    }else if (hora >= 12 && hora <= 18){
        img.setAttribute('src', 'imagens/tarde.png');
        corpo.style.backgroundImage = "url('imagens/fundo-tarde.jpg')"
        document.getElementsByTagName("p")[0].style.color = "#1f1f1f"
         //boa tarde
        
    }else{
        img.setAttribute('src', 'imagens/noite.png');
        corpo.style.backgroundImage = "url('imagens/fundo-noite.jpg')"
        document.getElementsByTagName("p")[0].style.color = "#1f1f1f"
        
        //boa noite
    }
    
}
