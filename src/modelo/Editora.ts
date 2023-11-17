//Criando a classe Editora, com os campos codEditora, numérico e nome do tipo texto.

class Editora {
    codEditora: number;
    nome: string;
  
    constructor(codEditora: number, nome: string) {
      this.codEditora = codEditora;
      this.nome = nome;
    }
  }
  
  export default Editora;