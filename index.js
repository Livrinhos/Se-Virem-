functiom filtroEntrada(nome, animal, vip){
if (nome === ""){
  return "Erro 400, O nome não pode estar vazio!!";
}
if (idade > 20 || idade < 0) {
  return "Erro 400, Idade Inválida!!";
}
if (animal === "Gato" && vip === false){
  return "Erro 400, Seu Animal, não é um Gato!!";
}

console.log(filtoEntrada("",10,"Burro",true));
console.log(filtoEntrada("Toto",42,"Cachorro",false));
console.log(filtoEntrada("Cat",17,"Gato",true));
  console.log(filtoEntrada("Cat",17,"Gato",false));
