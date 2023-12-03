import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import "../styles.css"
import ListaCliente from "./listaCliente"
import Home from "./home"
import EditarCliente from "./editarCliente"
import TopMaiorConsumoClientes from "./topMaisConsumoClientes";
import TopMenorConsumoClientes from "./topMenorConsumoClientes";
import TopMaiorGastoClientes from "./topMaiorGastoClientes";
import ListaMasculinos from "./listaMasculinos";
import ListaFemininas from "./listaFemininas";
import ListaProdutos from "./listaProdutos";
import EditarProduto from "./editarProduto";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import TopProdutosMaisConsumidos from "./topProdutosMaisConsumidos";
import TopProdutosHomens from "./topProdutosHomens";
import TopProdutosMulheres from "./topProdutosMulheres";
import ListaServicos from "./listaServicos";
import FormularioCadastroServico from "./formularioCadastroServico"
import EditarServico from "./editarServico";
import TopServicosMaisConsumidos from "./topServicosMaisConsumidos";
import TopServicosHomens from "./topServicosHomens";
import TopServicosMulheres from "./topServicosMulheres";

export default function Roteador() {
    const [tela, setTela] = useState('Home')

    const seletorView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {

        switch (tela) {
            case 'Home':
              return(
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços']} />
                  <Home seletorView={seletorView} tema="purple lighten-4" />
                </>
              )
            case 'Clientes':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços']} />
                  <ListaCliente seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Cadastrar Cliente':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços']} />
                  <FormularioCadastroCliente seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Editar Cliente':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços']} />
                  <EditarCliente seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Listar 10 clientes que mais consumiram':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços']} />
                  <TopMaiorConsumoClientes seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Listar 10 clientes que menos consumiram':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços']} />
                  <TopMenorConsumoClientes seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Listar 5 clientes que mais gastaram':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços']} />
                  <TopMaiorGastoClientes seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Listar clientes masculinos':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços']} />
                  <ListaMasculinos seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Listar clientes femininas':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços']} />
                  <ListaFemininas seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Produtos':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços']} />
                  <ListaProdutos seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Cadastrar Produto':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços']} />
                  <FormularioCadastroProduto seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Editar Produto':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços']} />
                  <EditarProduto seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Listar produtos mais consumidos':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços']} />
                  <TopProdutosMaisConsumidos seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Listar produtos mais consumidos por homens':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços']} />
                  <TopProdutosHomens seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Listar produtos mais consumidos por mulheres':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços']} />
                  <TopProdutosMulheres seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Serviços':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços']} />
                  <ListaServicos seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Cadastrar Serviço':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços']} />
                  <FormularioCadastroServico seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Editar Serviço':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços']} />
                  <EditarServico seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Listar serviços mais consumidos':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços']} />
                  <TopServicosMaisConsumidos seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Listar serviços mais consumidos por homens':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços']} />
                  <TopServicosHomens seletorView={seletorView} tema="purple lighten-4" />
                </>
              );
            case 'Listar serviços mais consumidos por mulheres':
              return (
                <>
                  <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços']} />
                  <TopServicosMulheres seletorView={seletorView} tema="purple lighten-4" />
                </>
              );

 

              
        }
    }

    return (
        construirView()
    )
}