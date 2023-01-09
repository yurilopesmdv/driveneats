let tituloRefeicao;
let tituloBebida;
let tituloSobre;
let precoRefeicao;
let precoBebida;
let precoSobremesa;
let total;

function convertNum(precoString) {
    let preco = precoString.replace("R$","");
    preco = preco.replace(",",".");
    preco = Number(preco) * 100;
    return preco;
}
function selecionarComida(comidaSelecionada) {
    const comidaSelecionadaAnt = document.querySelector('.refeicao .selecionado');
    if ( comidaSelecionadaAnt !== null ) {
        comidaSelecionadaAnt.classList.remove('selecionado');
    }
    const comidaSelecionada1 = document.querySelector(comidaSelecionada);
    comidaSelecionada1.classList.add("selecionado");

    tituloRefeicao = comidaSelecionada1.querySelector('.titulo-neg').innerHTML;
    precoRefeicao = comidaSelecionada1.querySelector('.preco').innerHTML;
    precoRefeicao = convertNum(precoRefeicao);
    liberaBotao();
    
    
}
function selecionarBebida(bebidaSelecionada) {
    const bebidaSelecionadaAnt = document.querySelector('.bebida .selecionado');
    if ( bebidaSelecionadaAnt !== null ) {
        bebidaSelecionadaAnt.classList.remove('selecionado');
    }
    const bebidaSelecionada1 = document.querySelector(bebidaSelecionada);
    bebidaSelecionada1.classList.add("selecionado");

    tituloBebida = bebidaSelecionada1.querySelector('.titulo-neg').innerHTML;
    precoBebida = bebidaSelecionada1.querySelector('.preco').innerHTML;
    precoBebida = convertNum(precoBebida);
    liberaBotao();
    
    
}
function selecionarSobre(sobreSelecionada) {
    const sobreSelecionadaAnt = document.querySelector('.sobremesa .selecionado');
    if (sobreSelecionadaAnt !== null) {
        sobreSelecionadaAnt.classList.remove('selecionado');
    }
    const sobreSelecionada1 = document.querySelector(sobreSelecionada);
    sobreSelecionada1.classList.add("selecionado");

    tituloSobre = sobreSelecionada1.querySelector('.titulo-neg').innerHTML;
    precoSobremesa = sobreSelecionada1.querySelector('.preco').innerHTML;
    precoSobremesa = convertNum(precoSobremesa);
    liberaBotao();
}
function liberaBotao() {
    if (tituloRefeicao !== undefined && tituloBebida !== undefined && tituloSobre !== undefined) {
        const botaoPedido = document.querySelector('.fazer-pedido');

        botaoPedido.classList.add('botao-verde');
        botaoPedido.innerHTML = 'Fazer o pedido';

        botaoPedido.addEventListener('click', mostrarConfirmar);
    }
        
}

function mostrarConfirmar() {
    let modal = document.querySelector('.overlay');
    modal.querySelector('.prato .nome').innerHTML = tituloRefeicao;
    modal.querySelector('.prato .precos').innerHTML = (precoRefeicao / 100).toFixed(2);

    modal.querySelector('.bebida .nome').innerHTML = tituloBebida;
    modal.querySelector('.bebida .precos').innerHTML = (precoBebida / 100).toFixed(2);

    modal.querySelector('.sobre .nome').innerHTML = tituloSobre;
    modal.querySelector('.sobre .precos').innerHTML = (precoSobremesa / 100).toFixed(2);

    total = precoRefeicao + precoBebida + precoSobremesa;
    modal.querySelector('.total .preco-total').innerHTML = `R$ ${(total / 100).toFixed(2)}`;

    modal.classList.remove('esconder');
}
function cancelarPedido() {
    let modal = document.querySelector('.overlay');
    modal.classList.add('esconder');
}
function enviarPedido() {
    let mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${tituloRefeicao}
    - Bebida: ${tituloBebida}
    - Sobremesa: ${tituloSobre}
    Total: R$ ${(total / 100).toFixed(2)}`
    
    mensagem = encodeURIComponent(mensagem);

    const numero = '5566999999999'
    let link = `https://wa.me/${numero}?text=${mensagem}`
    window.open(link);
}