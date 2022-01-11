import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js"
import {Conta} from "./Conta.js"

const cliente1 = new Cliente("Ricardo", 30238028038);

const contaCorrenteRicador = new ContaCorrente(cliente1, 1001);
contaCorrenteRicador.depositar(500)


const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
console.log(contaPoupanca);
console.log(contaCorrenteRicador); 