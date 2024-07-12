// src/Tabela.js
import React, { useEffect, useState } from 'react';

const Tabela = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/listar")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setProdutos(retorno_convertido));
  }, []);

  const remover = (codigo) => {
    fetch('http://localhost:8080/remover/' + codigo, {
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        alert(retorno_convertido.mensagem);

        const vetorTemporario = produtos.filter(produto => produto.codigo !== codigo);
        setProdutos(vetorTemporario);
      });
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Código</th>
            <th>Nome</th>
            <th>Marca</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          {
            produtos.map((obj, indice) => (
              <tr key={indice}>
                <td>{indice + 1}</td>
                <td>{obj.codigo}</td>
                <td>{obj.nome}</td>
                <td>{obj.marca}</td>
                <td><button onClick={() => remover(obj.codigo)} className="btn btn-danger">Remover</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Tabela;
