const LogEmail = document.querySelector('#LoginEmail');
const LogSenha = document.querySelector('#LoginSenha');
const loginButton = document.querySelector('#loginButton');



loginButton.addEventListener('click', Logar);

function Logar() {

    const storedEmail = localStorage.getItem('email');
    const storedSenha = localStorage.getItem('senha');

    const emailInput = LogEmail.value;
    const senhaInput = LogSenha.value;

    

    if (emailInput === storedEmail && senhaInput === storedSenha) {
        alert("Sucesso: email e senha corretos");
        alert(storedEmail)
        alert(storedSenha)
    } else {
        alert('Email ou senha incorretos!!!');
        alert(storedEmail)
        alert(storedSenha)
    }
}
