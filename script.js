// Função para converter números em palavras
function numeroParaPalavra(num) {
    const palavras = [
        "0", "10", "20", "30", "40", "50",
        "60", "70", "80", "90", "100", "110", "120",
        "130", "140", "150", "160", "170",
        "180", "190", "200"
    ];
    return palavras[num] || num.toString(); // Retorna o número como string se não estiver na lista
}

const ctx = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctx, {
    type: 'pie', // Tipo do gráfico
    data: {
        labels: ['Tradicional', 'Extraforte', 'Superior', 'Gourmet', 'Especial'], // Labels
        datasets: [{
            label: 'Distribuição de Jogos Mais Jogados',
            data: [350, 500, 400, 300, 200], // Dados
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)', // Fortnite
                'rgba(54, 162, 235, 0.2)', // Minecraft
                'rgba(75, 192, 192, 0.2)', // League of Legends
                'rgba(153, 102, 255, 0.2)', // PUBG
                'rgba(255, 159, 64, 0.2)' // Valorant
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)', // Fortnite
                'rgba(54, 162, 235, 1)', // Minecraft
                'rgba(75, 192, 192, 1)', // League of Legends
                'rgba(153, 102, 255, 1)', // PUBG
                'rgba(255, 159, 64, 1)' // Valorant
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true, // Tornar o gráfico responsivo
        plugins: {
            legend: {
                position: 'top', // Posição da legenda
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw; // Exibir rótulo e valor
                    }
                }
            }
        }
    }
});
