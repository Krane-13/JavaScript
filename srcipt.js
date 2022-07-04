const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 19;
const acompanhado = false;
const passagem = false ;
const destino = "Salvador";

const podeComprar = idadeComprador >= 18 || acompanhado == true;

//if(idadeComprador >= 18 || acompanhado == true ){
//     console.log("Compra feita com sucesso");
 //   listaDeDestinos.splice(2, 1);
//} else{
 //   console.log("Comprador menor de idade");
//}

//console.log("Embarque: \n\n")
//if(idadeComprador >=18 || acompanhado == true && passagem == true){
   // console.log("Boa viagem");
///}else{
   // console.log("Você não pode embargar")
//}
//console.log(listaDeDestinos)

let contador = 0;
let destinoExiste = false
//while(contador < 3){
    //if(listaDeDestinos[contador] == destino){
        //console.log("Destino existe");
        //destinoExiste = true;
        //break;
    //}else{
        //console.log("Destino não exite")
    //}
    //contador += 1;   
//}

console.log("Destino existe: ", destinoExiste);
if(podeComprar && destinoExiste){
    console.log("Boa viagem");
}else{
    console.log("Ocorreu um ERRO");
}

for(let i = 0 ; i < 3 ; i++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
    }
}