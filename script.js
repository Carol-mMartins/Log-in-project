const checkbox = document.getElementById('checkbox');
const body = document.body;

checkbox.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
});

const passwordFieldSignin = document.getElementById('passwordInputSignin');
const togglePasswordSignin = document.getElementById('togglePassword__signin');
const togglePasswordSigninOff = document.getElementById('togglePasswordOff__signin');

togglePasswordSignin.addEventListener('click', function() {
    if (passwordFieldSignin.type === 'password') {
        passwordFieldSignin.type = 'text';
        togglePasswordSignin.style.display = 'none';
        togglePasswordSigninOff.style.display = 'block';
    } else {
        passwordFieldSignin.type = 'password';
        togglePasswordSignin.style.display = 'block';
        togglePasswordSigninOff.style.display = 'none';
    }
});

togglePasswordSigninOff.addEventListener('click', function() {
    if (passwordFieldSignin.type === 'text') {
        passwordFieldSignin.type = 'password';
        togglePasswordSignin.style.display = 'block';
        togglePasswordSigninOff.style.display = 'none';
    } else {
        passwordFieldSignin.type = 'text';
        togglePasswordSignin.style.display = 'none';
        togglePasswordSigninOff.style.display = 'block';
    }
});

const passwordFieldSignup = document.getElementById('passwordInputSignup');
const togglePasswordSignup = document.getElementById('togglePassword__signup');
const togglePasswordSignupOff = document.getElementById('togglePasswordOff__signup');

togglePasswordSignup.addEventListener('click', function() {
    if (passwordFieldSignup.type === 'password') {
        passwordFieldSignup.type = 'text';
        togglePasswordSignup.style.display = 'none';
        togglePasswordSignupOff.style.display = 'block';
    } else {
        passwordFieldSignup.type = 'password';
        togglePasswordSignup.style.display = 'block';
        togglePasswordSigupnOff.style.display = 'none';
    }
});

togglePasswordSignupOff.addEventListener('click', function() {
    if (passwordFieldSignup.type === 'text') {
        passwordFieldSignup.type = 'password';
        togglePasswordSignup.style.display = 'block';
        togglePasswordSignupOff.style.display = 'none';
    } else {
        passwordFieldSignup.type = 'text';
        togglePasswordSignup.style.display = 'none';
        togglePasswordSignupOff.style.display = 'block';
    }
});

document.querySelector('.signUp__Btn-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.wrapper').classList.add('active');
});

document.querySelector('.signIn__Btn-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.wrapper').classList.remove('active');
});

function exibirMensagem(mensagem, tipo) {
    const mensagemElement = document.getElementById('message');
    mensagemElement.textContent = mensagem;

    if (tipo === "sucesso") {
        mensagemElement.classList.add('sucesso');
    } else if (tipo === "erro") {
        mensagemElement.classList.add('erro');
    }

    // Exibir a mensagem por alguns segundos e depois removê-la
    setTimeout(() => {
        mensagemElement.textContent = '';
        mensagemElement.classList.remove('sucesso', 'erro');
    }, 10000); // Remover após 10 segundos
}


document.getElementById('signInBtn').addEventListener('click', function(event){
    event.preventDefault();

    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInputSignin').value;

    // URL do endpoint de login no backend
    const loginEndpoint = "/api/login";

    const userData = {
        username: username,
        password: password
    };

    // Opções da requisição
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    };

    fetch(loginEndpoint, requestOptions)
        .then(response => {
            if (response.ok) {
                console.log("Usuário autenticado com sucesso!");
                window.location.href = "/perfil";

            } else {
                console.error("Erro de rede", error);
            }
        });
});

document.getElementById('signUpBtn').addEventListener('click', function(event) {
    event.preventDefault();

    const username = document.getElementById('usernameInput').value;
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInputSignup').value;
    const termsChecked = document.getElementById('termsCheckbox').checked;

    if (!termsChecked) {
        exibirMensagem("Você precisa concordar com os termos e condições.");
        return;
    }

    const userData = {
        username: username,
        email: email,
        password: password
    };

    fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (response.ok) {
            exibirMensagem("Usuário registrado com sucesso.", "sucesso");
            window.location.href = '/profile';
        } else {
            return response.json().then(data => {
                throw new Error (data.message);
            });
        }
    })
    .catch(error => {
        exibirMensagem('Algo deu errado ao registrar, por favor tente novamente' + error.message);
    });
});