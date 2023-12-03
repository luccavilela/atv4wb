import React from "react";
import 'materialize-css/dist/css/materialize.min.css'

interface FormularioCadastroProdutoProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function FormularioCadastroProduto(props: FormularioCadastroProdutoProps) {
        return (
            <div className="row">
                <h2> Cadastro de Produto </h2>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome_produto" type="text" className="validate" placeholder="Nome do produto" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="preco_produto" type="number" className="validate" placeholder="Preço do produto" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className="waves-effect waves-light btn cadastrar-botao botao-customizado" type="submit" name="action" onClick={(e) => props.seletorView("Produtos", e)}>Cadastrar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                    
                    
                </form>
            </div>
        )
    }






