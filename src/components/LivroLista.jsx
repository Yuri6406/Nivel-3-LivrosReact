import React, { useState, useEffect } from 'react';
import ControleLivros from '../controle/ControleLivros';
import ControleEditora from '../controle/ControleEditora'; // Importe o controlador editoras

const controladorLivros = new ControleLivros();
const controladorEditora = new ControleEditora(); // Crie uma instância do controlador editoras

function LinhaLivro({ livro, excluir }) {
  const nomeEditora = controladorEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td className='titulo-botao'>{livro.título}<br />
        <button className='excluir' onClick={() => excluir(livro.codigo)}>Excluir</button>
      </td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        {livro.autores.map((autor, index) => (
          <li key={index}>{autor}</li>
        ))}
      </td>
    </tr>
  );
}

export default function LivroLista() {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  const excluir = (codigoLivro) => {
    controladorLivros.excluir(codigoLivro);
    setCarregado(false);
  };

  useEffect(() => {
    if (!carregado) {
      const livrosObtidos = controladorLivros.obterLivros();
      setLivros(livrosObtidos);
      setCarregado(true);
    }
  }, [carregado]);

  return (
    <main>
      <h1>Catalogo de Livros</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
}