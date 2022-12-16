var idade = 70
console.log(`você tem ${idade} anos`)
if (idade < 16 ){
    console.log("não pode votar")
}else if (idade < 18 || idade >= 65){
    console.log("voto opcional")
}else{
    console.log("você deve votar")
}

