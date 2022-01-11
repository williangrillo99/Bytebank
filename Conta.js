export class Conta{
    constructor(saldoInicial,cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }
     
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente - novoValor;
        }
    }
   
    get cliente(){
        return this._cliente;
    }   
    
    get saldo(){
        return this._saldo;
    }
    sacar(valor){
        let taxa = 1
        if(this._tipo == "corrente"){
            taxa = 1.1;
        }
        if(this._tipo == "salario"){
            taxa = 1.01;
        }
        if(this._tipo == "empresa"){
            taxa = 1.15;
        }
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -=valorSacado;
            return valorSacado;
        }
    }
      
    depositar(valor){
        if(valor < 0){
            return;
        }
        this._saldo += valor;
    }
    transferir(valor, conta){
        if(this.tipo == "salario"){
            return;
        }
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}