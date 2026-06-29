function mostrarPagamento() {
    var select = document.getElementById('pagamento');
    var dadosCartao = document.getElementById('dados-cartao');
    var dadosPix = document.getElementById('dados-pix');
    
    if (select.value === 'cartao_credito' || select.value === 'cartao_debito') {
        dadosCartao.style.display = 'block';
        dadosPix.style.display = 'none';
    } else if (select.value === 'pix') {
        dadosCartao.style.display = 'none';
        dadosPix.style.display = 'block';
    } else {
        dadosCartao.style.display = 'none';
        dadosPix.style.display = 'none';
    }
}