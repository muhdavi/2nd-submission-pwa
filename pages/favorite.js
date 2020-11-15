window.addEventListener('DOMContentLoaded', async () => {
    const data = await Db.getAllTeams()
    renderFavorites(data)
})

function renderFavorites(data) {
    console.log(data)
    const contsiner = document.getElementById('favorites')
    const list = data.map(team => (
        `<div class="card">
            <img src="${team.crestUrl}"/>
            <h2><a href="detail.html?id=${team.id}">${team.name} (${team.shortName})</a></h2>
        </div>`
    )).join('')

    contsiner.innerHTML = list
}