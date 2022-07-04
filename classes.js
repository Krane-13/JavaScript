import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
const cliente2 = new Cliente();

const contaCorrenteCliente1 = new ContaCorrente();
contaCorrenteCliente1.agencia = 1001;
contaCorrenteCliente1.cliente = cliente1


contaCorrenteCliente1.depositar(300)
const valorSacado1 = contaCorrenteCliente1.sacar(100);

cliente1.nome = "Matheus";
cliente1.cpf = 11122233309;


cliente2.nome = "Larissa";
cliente2.cpf = 22211133309;

var valorSacado = contaCorrenteCliente1.sacar(50);
const valorSacadot = valorSacado + valorSacado1;
//console.log(cliente1, cliente2);
//console.log(valorSacadot);
//console.log(contaCorrenteCliente1);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

contaCorrenteCliente1.transferir(100, conta2);
console.log(conta2)