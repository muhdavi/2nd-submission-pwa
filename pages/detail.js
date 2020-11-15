window.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search)
    const teamId = urlParams.get("id")

    const data = await Api.getTeam(teamId)
    renderDetail(data)
    saveTeam(data)
})

function renderDetail(data) {
    console.log(data)
    const container = document.getElementById('detail')
    const detail =
        `<div class="card">
            <img src="${data.crestUrl}"/>
            <h2>${data.name} (${data.shortName})</h2>
            <table class="striped centered">
                <tbody>
                    <tr>
                        <td>Alamat</td>
                        <td>${data.address}</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>${data.phone}</td>
                    </tr>
                    
                    <tr>
                        <td>Phone</td>
                        <td>${data.phone}</td>
                    </tr>
                    <tr>
                        <td>Website</td>
                        <td>${data.website}</td>
                    </tr>
                    <tr>
                        <td>Tahun Berdiri</td>
                        <td>${data.founded}</td>
                    </tr>
                    <tr>
                        <td>Warna Klub</td>
                        <td>${data.clubColors}</td>
                    </tr>
                    <tr>
                        <td>Stadion</td>
                        <td>${data.phone}</td>
                    </tr>
                </tbody>
            </table>
        </div>`

    container.innerHTML = detail
}

function saveTeam(data) {
    const button = document.getElementById('save')

    button.addEventListener('click', () => {
        Db.addTeam(data)
        console.log('Ditambahkan ke favorite!')
    })
}