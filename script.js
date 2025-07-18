document.addEventListener('DOMContentLoaded', () => {

    //MENU HAMBÚRGUER ---
    const nav = document.getElementById('nav');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('.nav-link');

    // Abre/fecha o menu ao clicar no ícone
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });

    //EFEITO DE SOMBRA NO HEADER AO ROLAR A PÁGINA
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    //ANIMAÇÃO DE ELEMENTOS AO ROLAR (REVEAL EFFECT)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                // Opcional: remover a classe para animar novamente ao rolar para cima
                // entry.target.classList.remove('show'); 
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    //ROLAGEM SUAVE AO CLICAR NOS LINKS DE NAVEGAÇÃO 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Apenas para links internos da página
            if (this.getAttribute('href').startsWith('#') && this.getAttribute('href').length > 1) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

});