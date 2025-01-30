//Os paricipantes estão no arquivo "Nomes dos participantes"
const botao = document.querySelector('#btn');
botao.addEventListener('click', async function verEndereco () {
    const cep = document.querySelector('#cep');
    var total = document.querySelectorAll('p');
    document.getElementById('Endereco').style.display = 'block';

    total.forEach( p => {
        p.textContent = "";
        p.style.display = 'block';
    });
    
    try {
        if (cep.value == ("")) {
            throw{erro_cep:"O campo CEP é obrigatório!"};
        }  

        const numeros = /^[0-9]+$/; 
        const validCep = /^[0-9]{8}$/;

        if (!numeros.test(cep.value) || !validCep.test(cep.value)){
            throw {erro_cep:"O CEP digitado é invalido!"};
        }

        const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
        const responseCep = await response.json();
        total[0].innerText = 'Estado: ' + responseCep.uf; 
        total[1].innerText = 'Cidade: ' + responseCep.localidade; 
        total[2].innerText = 'Bairro: ' + responseCep.bairro; 
        total[3].innerText = 'Rua: ' + responseCep.logradouro;
        
        if (responseCep.erro) {
            throw {erro_cep:"Endereço não encontrado."};
        }

    } catch (erro) {
        total[0].textContent = "";
        total[1].textContent = "";
        total[2].textContent = "";
        total[3].textContent = "";

        if (erro.erro_cep) {
            total[0].style.display = 'none';
            total[1].textContent = erro.erro_cep;
            total[2].style.display = 'none';
            total[3].style.display = 'none';
        }
        setTimeout(() => {
            total.forEach(p => {
                p.style.display = 'none';
            });    
        }, 7000);
    }
});