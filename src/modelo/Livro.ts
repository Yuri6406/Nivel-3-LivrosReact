//Criando a classe Livro, composta dos campos: codigo e codEditora, numéricos, título e resumo, ambos do tipo texto, e autores, como um vetor de texto

class Livro {
    constructor(
      public codigo: number,
      public codEditora: number,
      public título: string,
      public resumo: string,
      public autores: string[]
    ) {}
  }
  
  export default Livro;