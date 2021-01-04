const input = document.querySelector('#theme-switch-toggle')

input.addEventListener('change', chengeTheme)
const body = document.querySelector('body');
checkLocalTheme()
function chengeTheme() {
    if (input.checked) {
        body.classList.remove('light-theme')
        body.classList.add('dark-theme')
        localItemDarkTheme()
    }
    else {
        body.classList.remove('dark-theme')
        body.classList.add('light-theme')
        localItemLightTheme()   
    }
}

function localItemDarkTheme() {
    localStorage.setItem('theme', 'dark');
}

function localItemLightTheme() {
    localStorage.setItem('theme', 'ligth');
}

function checkLocalTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme')
        document.querySelector('.theme-switch__toggle').checked = true;
    }
}