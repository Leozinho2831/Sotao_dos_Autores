function light(){
    const body = document.querySelector('body');
    if (body.classList('light')){
        body.classList.remove('light');
    } else {
        body.classList.add('light')
    }
}

const checkBoxMode = document.getElementById('mode');
checkBoxMode.addEventListener('click', light);

const checkBoxMobile = document.getElementById('mobile-mode');
checkBoxMobile.addEventListener('click', light)