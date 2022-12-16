var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
console.log(`agora são exatamente ${hora} horas e ${minutos} minutos`)
if (hora <= 5 ){
    console.log("madrugada vai durmi fih")
}
else if (hora < 12){
    console.log("muito bom dia")
}else if (hora < 19){
    console.log("muito boa tarde")
}else{
    console.log("boa noite")
}