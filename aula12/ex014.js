var agora = new Date()
var diaSemana = agora.getDay()
diaSemana = 0
switch(diaSemana){
    case 0:
        console.log("hoje é domingo")
        break
    case 1:
        console.log("Segunda-feira")
        break
    case 2: 
        console.log("hoje é Terça-feira") 
        break
    case 3 :
        console.log("hoje é quarta-feira")  
        break  
    case 4:
        console.log("hoje é quinta-feira")
        break
    case 5:
        console.log("hoje é sexta-feira")
        break
}   
