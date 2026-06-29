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

function validarFormulario(event) {
    event.preventDefault();
    
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var endereco = document.getElementById('endereco').value;
    var pagamento = document.getElementById('pagamento').value;
    
    if (!nome || !email || !endereco || !pagamento) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false;
    }
    
    var dados = {
        nome: nome,
        email: email,
        endereco: endereco,
        pagamento: pagamento,
        numero: document.getElementById('numero') ? document.getElementById('numero').value : '',
        validade: document.getElementById('validade') ? document.getElementById('validade').value : '',
        cvv: document.getElementById('cvv') ? document.getElementById('cvv').value : '',
        data: new Date().toLocaleString()
    };
    
    var pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    pedidos.push(dados);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    
    window.location.href = 'final.html';
}