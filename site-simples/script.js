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
