function togglePopup(nom) {
    let popup = document.getElementById("popup-" + nom);
    popup.classList.toggle("open");

    popup.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.classList.remove("open");
        }
    });
}

function defilement() {
    const navLiens = document.querySelectorAll('nav a');

    navLiens.forEach(lien=> {
        lien.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche le comportement par défaut du lien
            
            const cibleId = lien.getAttribute('data-target');
            const cibleElement = document.getElementById(cibleId);

            if (cibleElement) {
                cibleElement.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', defilement);