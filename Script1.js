var listadepecas = ["Amortecedor", "Motor", "Filtro de ar","Amortecedor", "Motor", "Filtro de ar","Amortecedor", "Motor",
 "Filtro de ar","Amortecedor", "Motor", "Filtro de ar"]
let peso = 99


if (peso<100){
    console.log("A peca deve pesar no mínimo 100g")
} else {
    console.log("A peca possui peso adequado")
}

if (listadepecas.length < 10){
    console.log("Ainda tem espaco")
} else {
    console.log("Não tem mais espaco")
}

let NomePeca = "Disco de Freio"

if(NomePeca.length > 3){
    console.log("Nome da peça está adequado para o cadastro!")
}else if (NomePeca.length == 0){
    console.log("O Nome da peça não pode ser vazio")
}else {
    console.log("O Nome da peça precisa ter mais de 3 caracteres, digite um nome adequado")
}