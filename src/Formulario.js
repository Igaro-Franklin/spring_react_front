// src/Formulario.js
import React, { useState } from 'react';

const Formulario = () => {
  const produto = {
    codigo: 0,
    nome: '',
    marca: ''
  };

  const [objProduto, setObjProduto] = useState(produto);

  const aoDigitar = (e) => {
    setObjProduto({ ...objProduto, [e.target.name]: e.target.value });
  };

  const cadastrar = () => {
    fetch('http://localhost:8080/cadastrar', {
      method: 'post',
      body: JSON.stringify(objProduto),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {
          alert("Produto cadastrado com sucesso!");
          limparFormulario();
        }
      });
  };

  const limparFormulario = () => {
    setObjProduto(produto);
  };

  return (
    <div>
      <form>
        <input type="text" value={objProduto.nome} onChange={aoDigitar} name="nome" placeholder="Nome" className="form-control" />
        <input type="text" value={objProduto.marca} onChange={aoDigitar} name="marca" placeholder="Marca" className="form-control" />
        <input type="button" value="Cadastrar" onClick={cadastrar} className="btn btn-primary" />
      </form>
    </div>
  );
};

export default Formulario;
