function sortear(){
    //document pega o documento HTML, e a função getElementById para pegar o elemento do HTML. 
    // O value pegar o valor da tag se não tiver ele pegar a variável
    //parteint para estipular o recebimento de numero inteiro
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    // $variavel para pegar o valor informado na variável
    // alert para gerar um box que retorne as informações presentes nele
    //alert(`Quantidade: ${quantidade}`);
    //alert(`Do número: ${de}`);
    //alert(`Até o número: ${ate}`);

    if (de >= ate) {
    alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    return;
  }
    if (quantidade > (ate - de + 1)){
        alert('Campo "Quantidade" deve ser maior que intervalo dos campos "De e Até". Verifique!');
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
        return;
    }

    let sorteados = [];
    let numero;
    //loop for para percorrer os elementos do array
    for(let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de,ate);

        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio (de,ate);
        }

        sorteados.push(numero);
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max){

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}
function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}