const ctx = document.getElementById('myChart').getContext('2d');

function getLegendPosition() {
  // 👇 si l'écran est petit, on met la légende en haut
  if (window.innerWidth < 900) {
    return 'top';
  } else {
    return 'right';
  }
}

const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Octobre 2024', 'Novembre 2024', 'Décembre 2024', 'Janvier 2025', 'Février 2025', 'Mars 2025', 'Avril 2025', 'Mai 2025', 'Juin 2025', 'Juillet 2025', 'Août 2025', 'Septembre 2025', 'Octobre 2025'],
    datasets: [
      { label: 'Labubu', data: [(1/53*100),(1/52*100),(1/53*100),(2/39*100),(3/40*100),(3/37*100),(3/37*100),(22/54*100),(40/72*100),(95/133*100),(85/123*100),(45/76*100),(33/63*100)], backgroundColor: '#B4C6FF' },
      { label: 'Sonny Angel', data: [(22/53*100),(22/52*100),(22/53*100),(13/39*100),(12/40*100),(9/37*100),(9/37*100),(8/54*100),(8/72*100),(8/133*100),(9/123*100),(6/76*100),(5/63*100)], backgroundColor: '#E99EA8' },
      { label: 'Figurine Pop', data: [(5/53*100),(8/52*100),(9/53*100),(4/39*100),(3/40*100),(3/37*100),(4/37*100),(3/54*100),(3/72*100),(3/133*100),(4/123*100),(4/76*100),(4/63*100)], backgroundColor: '#CBD7A8' },
      { label: 'Kiki', data: [(9/53*100),(8/52*100),(8/53*100),(7/39*100),(8/40*100),(7/37*100),(8/37*100),(8/54*100),(9/72*100),(13/133*100),(10/123*100),(8/76*100),(8/63*100)], backgroundColor: '#85756E' },
      { label: 'Molly', data: [(16/53*100),(13/52*100),(13/53*100),(13/39*100),(14/40*100),(15/37*100),(13/37*100),(13/54*100),(12/72*100),(14/133*100),(15/123*100),(13/76*100),(13/63*100)], backgroundColor: '#8E7DB2' }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Évolution de l’intérêt de recherche Google des jouets similaires à Labubu (2024-2025)'
      },
      legend: {
        position: getLegendPosition(), // 👈 position dépendante de la taille d’écran
        labels: {
          usePointStyle: true,
          pointStyle: 'rectRounded',
          boxWidth: 35,
          padding: 20,
          color: '#333',
          font: {
            size: 32,
            family: 'ShineMonday',
            weight: 'bold'
          }
        }
      }
    },
    layout: {
      padding: {
        right: 40
      }
    },
    scales: {
      x: { stacked: true,
         ticks: {
          font: {
            size: 20,
            family: 'ShineMonday'
          }}
       },
      y: { stacked: true,
         ticks: {
          font: {
            size: 20,
            family: 'ShineMonday'
          }}
      }
    }
  }
});

// 👇 On détecte le redimensionnement de la fenêtre
window.addEventListener('resize', function() {
  const newPosition = getLegendPosition();
  if (myChart.options.plugins.legend.position !== newPosition) {
    myChart.options.plugins.legend.position = newPosition;
    myChart.update(); // 👈 on met à jour le graphique
  }
});
