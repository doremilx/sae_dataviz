/* Partie Graphique en barres */

function dessineAxes(id, largeur, hauteur, epaisseur) {
  document.querySelector(id).innerHTML += `<path class="axevertical" style="fill:black" d="M 0 0 L 0 ${hauteur} L ${epaisseur} ${hauteur} L ${epaisseur} 0"  />
<path class="axehorizontal" style="fill:black;" d="M 0 ${hauteur} L ${largeur} ${hauteur} L ${largeur} ${hauteur - epaisseur} L 0 ${hauteur - epaisseur} " />`
}

function dessineBarre(id, numero, hauteur, largeur, ecart, couleur) {
  const svg = document.querySelector(id)
  const hauteursvg = svg.clientHeight;
  svg.innerHTML += `<rect class="barre" style="fill:${couleur};" x="${numero * (20 + ecart)}" y="${100 - hauteur}" width="${largeur}" height="${hauteur}" data-value="${hauteur}"/>`
  console.log(hauteursvg)
  console.log(svg)
}

function dessineHistogramme(identifiantC, largeurH, hauteurH, tableau, largeurB, ecart, couleurB) {
  document.querySelector('body').innerHTML += ` <svg class="histogramme" id="${identifiantC}" style="width: ${largeurH}px; height: ${hauteurH}px" viewBox="0 0 100 100"> 
 </svg>`
  dessineAxes(identifiantC, largeurH, hauteurH, 2)
  tableau.forEach(function (barreHauteur, numero) {
    dessineBarre(identifiantC, numero, barreHauteur, largeurB, ecart, couleurB)
  })

/* document.querySelectorAll('.barre').forEach(function (element) {
            element.style.transform = "scaleY(0)"
            element.style.transformOrigin = "center bottom"
            let animation = element.animate({ transform: "scaleY(1)" }, 2000)
            animation.addEventListener('finish', function(){
                element.style.transform = "scaleY(1)"
            })
        }) */}

dessineHistogramme('#histogramme3', 100, 100, [10, 40, 20, 100, 50], 17, 1, 'red');
/* Bon graphique pour les 5 objets tendances en France : labubu, molly, kiki, sonny angel, javascript */
dessineHistogramme('#histogramme_marque', 100, 100, [35, 19, 12, 17, 17], 20, 1, 'blue');

dessineHistogramme('#histogramme_test', 100, 100, [35, 19, 12, 17, 17], 20, 1, 'blue');


dessineAxes('#histogramme2', 100, 100, 2)
dessineBarre('#histogramme2', 0, 50, 10, 'red')

dessineBarre('#histogramme2', 1, 20, 10, 'yellow')
dessineBarre('#histogramme2', 2, 90, 10, 'green')

document.querySelector("svg.histogramme").innerHTML += `

<rect class="barre" style="fill:#0073ff;" 
x="0" y="0" width="18" height="100" data-value="100"/>
<rect class="barre" style="fill: #0073ff" 
x="20" y="50" width="18" height="50" data-value="50"/> 
<rect class="barre" style="fill: #0073ff" 
x="40" y="10" width="18" height="90" data-value="90"/> 
<rect class="barre" style="fill: #0073ff" 
x="60" y="90" width="18" height="10" data-value="10"/>
<rect class="barre" style="fill: #0073ff" 
x="80" y="50" width="18" height="50" data-value="50"/> 
<path class="axehorizontal" style="fill:black" d="M 0 0 L 0 100 L 2 100 L 2 0"  />

<path class="axevertical" style="fill:black;" d="M 0 100 L 100 100 L 100 98 L 0 98 " />`



document.querySelector("#histogramme_test").innerHTML += `

<rect class="barre" style="fill:#ff0000ff;" 
x="0" y="0" width="20" height="65" data-value="65"/>
<rect class="barre" style="fill: #ff0000ff" 
x="21" y="31" width="20" height="50" data-value="50"/> 
<rect class="barre" style="fill: #ff0000ff" 
x="42" y="10" width="20" height="90" data-value="90"/> 
<rect class="barre" style="fill: #ff0000ff" 
x="63" y="90" width="20" height="10" data-value="10"/>
<rect class="barre" style="fill: #ff0000ff" 
x="84" y="50" width="20" height="50" data-value="50"/> 
<path class="axehorizontal" style="fill:black" d="M 0 0 L 0 100 L 2 100 L 2 0"  />

<path class="axevertical" style="fill:black;" d="M 0 100 L 100 100 L 100 98 L 0 98 " />`

document.querySelectorAll('.barre').forEach(function (lol) {
  lol.addEventListener('mouseenter', function () {
    document.querySelector('.infobulle').innerHTML = lol.getAttribute('data-value')

  })
});

/* CODE POUR CHARTJS */

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Octobre 2024', 'Novembre 2024', 'Décembre 2024', 'Janvier 2025', 'Février 2025', 'Mars 2025', 'Avril 2025', 'Mai 2025', 'Juin 2025', 'Juillet 2025', 'Août 2025', 'Septembre 2025', 'Octobre 2025'],
    datasets: [
      {
        label: 'Labubu',
        data: [1, 1, 1,2,3,3,3,22,40,95,85,45,33],
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      },
      {
        label: 'Sonny Angel',
        data: [22, 22, 22,13,12,9,9,8,8,8,9,6,5],
        backgroundColor: 'rgba(54, 162, 235, 0.5)'
      },
       {
        label: 'Figurine Pop',
        data: [5, 8, 9,4,3,3,4,3,3,3,4,4,4],
        backgroundColor: 'yellow'
      },
       {
        label: 'Kiki',
        data: [9, 8, 8,7,8,7,8,8,9,13,10,8,8],
        backgroundColor: 'green'
      }, {
        label: 'Molly',
        data: [16, 13, 13,13,14,15,13,13,12,14,15,13,13],
        backgroundColor: 'orange'
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Evolution de l\'inrérêt de recherches Google des jouets similaires à Labubu (2024-2025)'
      }
    },
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true
      }
    }
  }
});