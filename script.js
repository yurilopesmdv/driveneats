function selecionarComida(comidaSelecionada) {
    const comidaSelecionadaAnt = document.querySelector('.refeicao .selecionado');
    if ( comidaSelecionadaAnt !== null ) {
        comidaSelecionadaAnt.classList.remove('selecionado');
    }
    const comidaSelecionada1 = document.querySelector(comidaSelecionada);
    comidaSelecionada1.classList.add("selecionado");
}
function selecionarBebida(bebidaSelecionada) {
    const bebidaSelecionadaAnt = document.querySelector('.bebida .selecionado');
    if ( bebidaSelecionadaAnt !== null ) {
        bebidaSelecionadaAnt.classList.remove('selecionado');
    }
    const bebidaSelecionada1 = document.querySelector(bebidaSelecionada);
    bebidaSelecionada1.classList.add("selecionado");
}
function selecionarSobre(sobreSelecionada) {
    const sobreSelecionadaAnt = document.querySelector('.sobremesa .selecionado');
    if (sobreSelecionadaAnt !== null) {
        sobreSelecionadaAnt.classList.remove('selecionado');
    }
    const sobreSelecionada1 = document.querySelector(sobreSelecionada);
    sobreSelecionada1.classList.add("selecionado");
}
function liberaBotao() {
    let pedido = [];
    const refeicaoEscolhida = document.querySelector('.refeicao .selecionado .titulo-neg');
    pedido.push(refeicaoEscolhida);
    const bebidaEscolhida = document.querySelector('.bebida .selecionado .titulo-neg');
    pedido.push(bebidaEscolhida);
    const sobreEscolhida = document.querySelector('.sobremesa .selecionada .titulo-neg');
    pedido.push(sobreEscolhida);
    alert(pedido);

    if (pedido.lenght > 2) {
        alert("oi");
        const botao = document.querySelector('button');
        botao.classList.add("botao-verde");
    }
    

}
