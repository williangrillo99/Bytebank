import {Cliente} from "./Cliente.js"
import {Diretor} from "./Funcionarios/Diretor.js"
import {Gerente} from "./Funcionarios/Gerente.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor = new Diretor("Rodrigo", 10000, 12049490);
diretor.CadastrarSenha("1233456")
const gerente = new Gerente("Ricardo", 5000, 123883);
gerente.CadastrarSenha("123")

const cliente = new Cliente("Lais", 12127121, "387638")

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "1233456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "387638");

console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);
console.log(clienteEstaLogado);