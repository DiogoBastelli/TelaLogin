const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#senha');
const inputConfirSenha = document.querySelector('#confirmarSenha');
const inputNascimento = document.querySelector('#dataNascimento');
const inputPais = document.querySelector('#pais');

const form = document.querySelector('#registra');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const senha = inputSenha.value;
    const confirmaSenha = inputConfirSenha.value;

    if (senha === confirmaSenha) {
        localStorage.setItem('email', inputEmail.value); 
        localStorage.setItem('senha', senha);

        Registrar(); 
    } else {
        alert('Senhas diferentes');
    }
});

function Registrar() {
    const nome = inputNome.value; 
    resultDiv.innerText += `Nome inserido: ${nome}`; 

    const Email = inputEmail.value; 
    resultDiv.innerText += `\nEmail inserido: ${Email}`; 

    const Senha = inputSenha.value; 
    resultDiv.innerText += `\nSenha inserida: ${Senha}`; 

    const Nascimento = inputNascimento.value; 
    resultDiv.innerText += `\nData de nascimento inserida: ${Nascimento}`; 

    const genero = document.querySelector('input[name="genero"]:checked'); 
    const generoValue = genero ? genero.value : 'Não especificado';
    resultDiv.innerText += `\nGênero selecionado: ${generoValue}`;

    const paisValue = inputPais.value;
    resultDiv.innerText += `\nPaís selecionado: ${paisValue}`;
}
