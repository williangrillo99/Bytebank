export class Funcionario{
    constructor(nome, salario, cpf){
        this._nome;
        this._salario;
        this._cpf;
        

        this._bonificacao = 1;
        this._senha;

    }
    autenticar(senha){
        return senha == this.senha
    }
    CadastrarSenha(senha){
        this._senha = senha;
    }
}