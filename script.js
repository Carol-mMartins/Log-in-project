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

const signUpBtnLink = document.querySelector('.signUp__Btn-link');
const signInBtnLink = document.querySelector('.signIn__Btn-link');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () =>{
    wrapper.classList.toggle('active')
});
signInBtnLink.addEventListener('click', () =>{
    wrapper.classList.toggle('active')
});

document.getElementById('signInBtn').addEventListener('click', function(event){
    event.preventDefault();

    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;

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
    const password = document.getElementById('passwordInput').value;
    const termsChecked = document.getElementById('termsCheckbox').checked;

    if (!termsChecked) {
        alert("Você precisa concordar com os termos e condições.");
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
            window.location.href = '/profile';
        } else {
            return response.json().then(data => {
                throw new Error (data.message);
            });
        }
    })
    .catch(error => {
        alert('Algo deu errado ao registrar, por favor tente novamente' + error.message);
    });
});