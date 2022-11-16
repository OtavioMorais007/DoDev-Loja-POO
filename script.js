// PARTE 1
// 1. Criar uma classe Funcionário que possui as propriedades Nome e Salário;

// 2. Criar a classe Gerente que herda da classe Funcionário e possui a propriedade
// Departamento;

// 3. Criar a classe Vendedor que também herda de Funcionário e possui a propriedade
// PercentualComissao;

// 4. Na classe Gerente implementar um método ExibirInformacoes() que deve exibir no
// console todas as propriedades de um gerente: Nome, Salário e Departamento;

// 5. Na classe Vendedor implementar um método CalcularSalario() que deve retornar o
// valor do Salário acrescido do PercentualComissao;

// 6. Na classe Vendedor implementar o método ExibirInformacoes() que deve exibir no
// console as seguintes informações do Vendedor: Nome, Salario, Salario com
// comissão e o PercentualComissao.

// PARTE 2
// 1. Criar uma classe Produto com as propriedades Nome e Valor;

// 2. Criar a classe Venda com as propriedades Vendedor que deve ser um objeto da
// classe Vendedor criada anteriormente, ListaDeProdutos que deve ser um array e
// ValorTotal;

// 3. Na classe Venda implementar um método AdicionarProduto(), esse método deve
// criar um novo Produto e adicionar ele na propriedade ListaDeProdutos;

// 4. Na classe Venda implementar um método CalcularTotal() que deve somar os valores
// de todos os Produtos na ListaDeProdutos e salvar na propriedade ValorTotal o
// resultado dessa soma;

// 5. Na classe Venda implementar um método FinalizarVenda() que deve exibir no
// console o nome do Vendedor e o ValorTotal da venda.

class Funcionario {
    Nome
    Salario

    constructor(){
        this.Nome = prompt("Informe o nome do funcionario: ")
        this.Salario = parseInt(prompt("Informe o salário deste funcionário: "))
    }
}

class Gerente extends Funcionario {
    Departamento

    constructor(Nome, Salario){
        super(Nome, Salario)
        this.Departamento = prompt("Informe o departamento deste funcionário: ")
    }
    ExibirInformacoes(){
        alert("Nome: " + this.Nome + "\n"
            + "Salário: " + this.Salario + "\n"
            + "Departamento: " + this.Departamento + "\n")
    }
}

class Vendedor extends Funcionario {
    PercentualComissao

    constructor(Nome, Salario){
        super(Nome, Salario)
        this.PercentualComissao = parseFloat(prompt("Informe o percentual de comissão deste funcionário: "))
    }

    CalcularSalario(valorTotal){
        let SalarioComissao = this.Salario + (valorTotal * this.PercentualComissao)
        console.log("O salário deste funcionário com comissão é de R$" + SalarioComissao.toFixed(2))
    }

    ExibirInformacoes(){
        alert("Nome: " + this.Nome + "\n"
            + "Salário: " + this.Salario + "\n"
            + "Salário com comissão: " + this.Departamento + "\n"
            + "Percentual de comissão: " + this.PercentualComissao )
    }
}

class Produto{
    Nome
    Valor

    constructor(){
        this.Nome = prompt("Informe o nome do produto: ")
        this.Valor = parseInt(prompt("Informe o valor deste produto: "))
    }
}

class Venda{
    Vendedor
    ListaDeProdutos = []
    ValorTotal

    constructor(){
        this.Vendedor = prompt("Informe o nome do vendedor: ")
    }

    AdicionarProduto(){
        let produto = new Produto
        this.ListaDeProdutos.push(produto)
    }

    CalcularTotal(){
        this.ListaDeProdutos.forEach(x => {
            let valorTotal = 0
            valorTotal += x.Valor
        })
        console.log("Valor Total: " + valorTotal)
    }

    FinalizarVenda(){
        console.log("Vendedor:" + this.Vendedor)
        this.ListaDeProdutos.Valor.forEach(x => {
            let soma = 0
            soma += x
        })
        this.ValorTotal = soma
        console.log("Valor Total: " + this.ValorTotal)
    }
}

