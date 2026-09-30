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
    $HTML.dataset.theme =
        $HTML.dataset.theme === 'dark' ? 'light' : 'dark';

    sessionStorage.setItem('theme', $HTML.dataset.theme);
};

$themeBtn.addEventListener('click', changeTheme);

/// tab

const $tabBtn = document.querySelectorAll('[data-tab-btn]');
let lastActiveTab = document.querySelector('[data-tab-content].active');
let lastActiveTabBtn = document.querySelector('[data-tab-btn].active');

$tabBtn.forEach((btn) => {
    btn.addEventListener('click', function () {
        const tabName = this.dataset.tabBtn.toLowerCase();
        const $tabContent = document.querySelector(
            `[data-tab-content="${tabName}"]`
        );

        if (!$tabContent) return;

        lastActiveTabBtn?.classList.remove('active');
        lastActiveTab?.classList.remove('active');

        $tabContent.classList.add('active');
        this.classList.add('active');

        lastActiveTab = $tabContent;
        lastActiveTabBtn = this;
    });
});