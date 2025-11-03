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

/* Labubu Yeux qui bougent */

document.addEventListener("mousemove", (e) => {
  const yeux = document.querySelectorAll(".pupille");
  yeux.forEach(pupille => {
    const rect = pupille.parentElement.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    const angle = Math.atan2(y, x);
    const distance = Math.min(10, Math.hypot(x, y) / 20); // limite le déplacement

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    pupille.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});