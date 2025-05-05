class ContaBancaria {
  protected saldo: number = 0; //saldo privado, não pode ser acessado fora da classe
  numeroConta: number;

  constructor(numeroConta: number) {
    this.numeroConta = numeroConta;
  }

  //Métodos
  getSaldo(){
    return this.saldo;
  }

  depositar(valor: number) {
    this.saldo += valor;
  }

  //Modificador Estático
  static retornaNumeroDoBanco(){
    return 101;
  }
}

// Herança - classe filha
class ContaBancariaPessoaFisica extends ContaBancaria {
  private cpf: string;

  constructor(numeroConta: number, cpf: string) {
    super(numeroConta); // Chama o construtor da classe pai
    this.cpf = cpf;
  }

  getCpf() {
    return this.cpf;
  }
  depositar(valor: number): void {
    this.saldo += valor - 0.1; // taxa de 0.1% para pessoa física
  }

}

const contaDoPedro = new ContaBancariaPessoaFisica(123456, "123.456.789-00");
ContaBancaria.retornaNumeroDoBanco(); // 101



