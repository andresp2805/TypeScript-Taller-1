import { series } from './data.js';
let tbodySeries = document.getElementById("tbodySeries");
let totalSeasons = 0;
series.forEach((serie, index) => {
    agregarSerie(index, serie);
    totalSeasons += serie.seasons;
});
agregarPromedio(totalSeasons, series.length);
function agregarSerie(i, serie) {
    let row = document.createElement("tr");
    row.innerHTML = `
        <th scope="row">${i + 1}</th>
        <td><a href="${serie.link}" target="_blank">${serie.name}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
    `;
    tbodySeries.appendChild(row);
}
function agregarPromedio(total, numSeries) {
    let average = total / numSeries;
    let promedioContainer = document.getElementById("seasonsAverage");
    promedioContainer.innerHTML = `Seasons average: ${average.toFixed(2)}`;
}
