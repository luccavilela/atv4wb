import React, { useState, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import { Cliente } from "./cliente";


interface ListaClienteProps {
  seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ListaCliente(props: ListaClienteProps) {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    fetch("http://localhost:32832/clientes")
      .then(response => response.json())
      .then(data => setClientes(data));
  }, []);

  const handleExcluirCliente = (cliente: Cliente) => {
    fetch(`http://localhost:32832/clientes/excluir`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cliente),
    })
      .then(response => {
        if (response.ok) {
          setClientes(clientes.filter(c => c.id !== cliente.id));
        }
      })
      .catch(error => console.error('Erro ao excluir cliente:', error));
  
  };
  
  

  return (
    <div className="collection">
      <h2> Lista de todos os clientes </h2>
      <button
        className="waves-effect waves-light btn cadastrar-botao botao-customizado"
        onClick={(e) => props.seletorView("Cadastrar Cliente", e)}>
        Cadastrar um cliente
      </button>

      {clientes.map(cliente => (
        <div key={cliente.id} className="collection-item">
          Nome: {cliente.nome} <br />
          Sobrenome: {cliente.sobreNome} <br />
          Produtos Consumidos: <br />
          Serviços Consumidos:
          <div className="botoes">
            <button className="waves-effect waves-light editar" onClick={(e) => props.seletorView("Editar Cliente", e)}>Editar</button>
            <button className="excluir" onClick={() => handleExcluirCliente(cliente)}>Excluir</button>
          </div>
        </div>
      ))}
    </div>
  );
}
