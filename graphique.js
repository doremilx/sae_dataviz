/* Partie Graphique en barres */

function dessineAxes(id,largeur,hauteur,epaisseur){
 document.querySelector(id).innerHTML += `<path class="axevertical" style="fill:black" d="M 0 0 L 0 ${hauteur} L ${epaisseur} ${hauteur} L ${epaisseur} 0"  />
<path class="axehorizontal" style="fill:black;" d="M 0 ${hauteur} L ${largeur} ${hauteur} L ${largeur} ${hauteur-epaisseur} L 0 ${hauteur-epaisseur} " />`
}



function dessineBarre(id, numero, hauteur, largeur,ecart, couleur){
  const svg = document.querySelector(id)
  const hauteursvg = svg.clientHeight;
  svg.innerHTML += `<rect class="barre" style="fill:${couleur};" 
x="${numero*(20 + ecart)}" y="${100-hauteur}" width="${largeur}" height="${hauteur}" data-value="${hauteur}"/>`
console.log(hauteursvg)
console.log(svg)
}   

function dessineHistogramme(identifiantC, largeurH, hauteurH, tableau, largeurB, ecart, couleurB){
  document.querySelector('body').innerHTML += ` <svg class="histogramme" id="${identifiantC}" style="width: ${largeurH}px; height: ${hauteurH}px" viewBox="0 0 100 100"> 
 </svg>`
 dessineAxes(identifiantC,largeurH, hauteurH, 2)
 tableau.forEach(function(barreHauteur,numero){
  dessineBarre(identifiantC, numero, barreHauteur, largeurB,ecart, couleurB)
 })

/* document.querySelectorAll('.barre').forEach(function (element) {
            element.style.transform = "scaleY(0)"
            element.style.transformOrigin = "center bottom"
            let animation = element.animate({ transform: "scaleY(1)" }, 2000)
            animation.addEventListener('finish', function(){
                element.style.transform = "scaleY(1)"
            })
        }) */}




dessineHistogramme('#histogramme3',100,100,[10,40,20,100,50],17, 1, 'red');
/* Bon graphique pour les 5 objets tendances en France : labubu, molly, kiki, sonny angel, javascript */
dessineHistogramme('#histogramme_marque',100,100,[35,19,12,17,17 ],20, 1, 'blue');

dessineHistogramme('#histogramme_test',100,100,[35,19,12,17,17 ],20, 1, 'blue');


dessineAxes('#histogramme2',100,100,2)
dessineBarre('#histogramme2', 0, 50, 10, 'red' )

dessineBarre('#histogramme2', 1, 20, 10, 'yellow' )
dessineBarre('#histogramme2', 2, 90, 10, 'green' )

/* document.querySelector("svg.histogramme").innerHTML += `

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

<path class="axevertical" style="fill:black;" d="M 0 100 L 100 100 L 100 98 L 0 98 " />` */

document.querySelectorAll('.barre').forEach(function(lol){lol.addEventListener('mouseenter',function(){
document.querySelector('.infobulle').innerHTML = lol.getAttribute('data-value')

  })}); 

