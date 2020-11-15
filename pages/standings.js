window.addEventListener('DOMContentLoaded', async () => {
    const data = await Api.getStandings()
    renderStandings(data)
})

function renderStandings(data) {
    console.log(data)
    const container = document.getElementById('standings')
    const list = data.standings[0].table.map(item => (
        `<li>
            <div class="collapsible-header">
                <i class="material-icons"><img src="${item.team.crestUrl}" width="30px" alt="Logo TIM" /></i>
                <a href="pages/detail.html?id=${item.team.id}">${item.team.name}</a>
                <span class="badge">${item.position}</span>
            </div>
        </li>`
    )).join('')

    container.innerHTML = list
}