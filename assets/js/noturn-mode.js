// Seleciona o botão de modo noturno
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Lista de elementos que mudam de background
const imagesToToggle = [
    {
        selector: ".page-heading.header-text",
        normal: "assets/images/banner-bg.jpg",
        dark: "assets/images/banner-bg-dark.jpg" //Imagem Adicionada
    },
    {
        selector: ".page-heading-bg",
        normal: "assets/images/page-heading-bg.jpg",
        dark: "assets/images/page-heading-bg-dark.jpg" //Imagem Adicionada
    },
    {
        selector: ".footer-bg",
        normal: "assets/images/footer-bg.jpg",
        dark: "assets/images/footer-bg-dark.jpg" //Imagem Adicionada
    },
    {
        selector: ".main-banner",
        normal: "assets/images/banner-bg.jpg",
        dark: "assets/images/banner-bg-dark.jpg" //Imagem Adicionada
    }
];

// Função para alternar modo noturno
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");

    // Atualiza imagens
    imagesToToggle.forEach(item => {
        const el = document.querySelector(item.selector);
        if(el) el.style.backgroundImage = `url('${isDark ? item.dark : item.normal}')`;
    });

    // Alterna símbolo do botão
    darkModeToggle.textContent = isDark ? "☀️ Claro" : "🌙 Noturno";

    // Salva preferência no localStorage
    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
}

// Evento do botão
darkModeToggle.addEventListener("click", toggleDarkMode);

// Aplica preferência do usuário ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        imagesToToggle.forEach(item => {
            const el = document.querySelector(item.selector);
            if(el) el.style.backgroundImage = `url('${item.dark}')`;
        });
        darkModeToggle.textContent = "☀️ Claro"; // Atualiza símbolo no carregamento
    }
});