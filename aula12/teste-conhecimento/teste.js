var resultado = document.getElementsByClassName('res')[0]
var corpo = document.getElementsByTagName("body")[0]
var img = document.createElement('img')
img.setAttribute('src', 'imagens/foto-jovem-m.png')
resultado.appendChild(img)
corpo.style.backgroundColor = "purple"
corpo.style.textAlign = "center"
corpo.style.color = "white"
corpo.style.fontFamily = "arial"
img.style.transform = "rotate(12deg)"