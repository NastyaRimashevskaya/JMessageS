let switcherTheme = document.querySelector('#theme-switcher');

function switchBackground(){
    document.body.classList.toggle('dark');
}

switcherTheme.addEventListener('click', switchBackground);

