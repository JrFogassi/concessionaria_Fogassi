const formContato = document.getElementById('form-contact');

const campoCep = document.getElementById('cep');

const enderecoResultado = document.getElementById('adress-result');

const mensagemAgradecimento = document.getElementById('message-thanks');

formContato.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nome = document.getElementById('nome').value;

    mensagemAgradecimento.textContent = `Obrigado, ${nome}, recebemos a sua mensagem e retornaremos em breve.`;

    formContato.reset();
    enderecoResultado.textContent = '';
});

campoCep.addEventListener('blur', async () => {
    const cep = campoCep.value.replace(/\D/g, '');

    if (cep.length !== 8) {
        return;
    }

    enderecoResultado.classList.remove('erro');
    enderecoResultado.textContent = "Buscando endereço...";

    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = await resposta.json();

        if (dados.erro) {
            enderecoResultado.classList.add('erro');
            enderecoResultado.textContent = 'CEP não encontrado.';
            return;
        }

        enderecoResultado.textContent = `${dados.logradouro}, ${dados.bairro} - ${dados.localidade}/${dados.uf}`;
    } catch (erro) {
        enderecoResultado.classList.add('erro');
        enderecoResultado.textContent = 'Erro ao buscar o CEP, tente novamente.';
    }
});