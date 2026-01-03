// Script simples só para pequenos efeitos

document.addEventListener("DOMContentLoaded", () => {
    const cta = document.querySelector(".cta-button");
    if (cta) {
        cta.addEventListener("click", () => {
            const about = document.querySelector(".about");
            if (about) {
                about.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});
