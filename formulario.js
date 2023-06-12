// const form = {
    // nomeEmpresa: () => document.getElementById('nome-empresa'),
    // cnpj: () => document.getElementById('cnpj'),
    // quantidadeFuncionario: () => document.getElementById('quantidade-funcionario'),
    // areaAtuacao: () => document.getElementById('area-atuacao'),

// }
function armazenarDados() {
    var form = document.getElementById("cadastro-empresa");
    var nomeEmpresa = form.elements["nome-empresa"].value;
    var cnpj = form.elements["cnpj"].value;
    var quantidadeFuncionario = form.elements["quantidade-funcionario"].value;
    var areaAtuacao = form.elements["area-atuacao"].value;
    var cep = form.elements["cep"].value;
    var uf = form.elements["uf"].value;
    var localidade = form.elements["localidade"].value;
    var bairro = form.elements["bairro"].value;
    var logradouro = form.elements["logradouro"].value;
    var numero = form.elements["numero"].value;
    var 

    // Armazene os dados em variáveis ou em uma estrutura de dados adequada
    // Por exemplo, você pode usar um objeto para armazenar os dados:
    var dados = {
      nome: nome,
      email: email
    };

    // Chamada a função para apresentação com os dados armazenados
    apresentarDados(dados);
  }

  function apresentarDados(dados) {
    // Aqui você pode utilizar os dados armazenados para a apresentação
    console.log(dados);
    console.log('CEP:', cep);
    console.log('Estado:', uf);
    console.log('Cidade:', localidade);
    console.log('Bairro:', bairro);
    console.log('Rua:', logradouro);
    console.log('Número:', numero);
    // Ou exibir os dados em um elemento HTML, atualizar um gráfico, etc.
  }






