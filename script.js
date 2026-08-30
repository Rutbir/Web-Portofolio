// light and dark mode toggle

const /* node element */ $themeBtn = document.querySelector('[data-theme-btn]');
const /* node element */ $HTML = document.documentElement;
let /* (boolean | string) */ isDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches;

if (sessionStorage.getItem('theme')) {
    $HTML.dataset.theme = sessionStorage.getItem('theme');
} else {
    $HTML.dataset.theme = isDarkMode ? 'dark' : 'light';
}

const changeTheme = () => {
    $HTML.dataset.theme = sessionStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    sessionStorage.setItem('theme', $HTML.dataset.theme);
}

$themeBtn.addEventListener('click', changeTheme);