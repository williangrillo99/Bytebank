
//clase abstrada, nunca pode ser instanciada     
export class Conta{
    constructor(saldoInicial,cliente, agencia){
        if(this.constructor == Conta){
            throw new Erro("voce nao deveria abrir esse tipo de conta, pois é uma classe abstrada")
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        console.log(this.constructor)
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

    //metado abstrado
    sacar(valor){
        throw new Erro("O metodo Sacar da conta é abstrado")
    }
    _sacar(){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -=valorSacado;
            return valorSacado;
        }

        return 0;
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