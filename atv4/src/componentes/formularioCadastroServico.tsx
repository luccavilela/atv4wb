import React from "react";
import 'materialize-css/dist/css/materialize.min.css'

interface FormularioCadastroServicoProps {
    seletorView: (valor: string, e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function FormularioCadastroServico(props: FormularioCadastroServicoProps) {
        return (
            <div className="row">
                <h2> Cadastro de Serviço </h2>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome_servico" type="text" className="validate" placeholder="Nome do serviço" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="preco_servico" type="number" className="validate" placeholder="Preço do serviço" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className="waves-effect waves-light btn cadastrar-botao botao-customizado" type="submit" name="action" onClick={(e) => props.seletorView("Serviços", e)}>Cadastrar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                    
                    
                </form>
            </div>
        )
    }






