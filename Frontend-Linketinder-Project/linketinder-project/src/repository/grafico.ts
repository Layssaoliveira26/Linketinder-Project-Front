import Chart from "chart.js/auto";

function gerarGrafico() {

    const areaGrafico = document.getElementById("graficoCompetencias") as HTMLCanvasElement;

    new Chart(areaGrafico, {

        type: "bar",

        data: {

            labels: ["Python", "Java", "Javascript"],

            datasets: [
                {
                    label: "Candidatos por competência",

                    data: [2, 2, 1],
                }
            ]
        }

    });

}

window.onload = () => {
    gerarGrafico();
};