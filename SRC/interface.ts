class Conta {
    numeroDaConta: number;
    saldo: number = 0;

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta;
    }
}

class ContaSalario extends Conta {

    depositar(valor: number): void {
        this.saldo += valor;
    }
}

//INTERFACES
//definindo uma interface para o método transferir
//A infrerface define o que a classe deve ter de propriedades, mas não implementa
interface ITransacional {
    transferir(valor: number, contaDestino: Conta): boolean;
    taxaTransferencia: number;
}
interface IContaJuridica{
    cnpj: number;
}

//implementando a interface na classe ContaCorrente
//pode herdar de apenas uma classe, mas pode implementar várias interfaces
class ContaCorrente extends Conta implements ITransacional, IContaJuridica {
    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += valor;
        return true;
    };
    taxaTransferencia: number = 0.1; // taxa de 0.1% para transferência
    cnpj = 12345678901234; // CNPJ fictício
}