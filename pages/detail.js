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

async function saveTeam(data) {
    const button = document.getElementById('save')
    if (await Db.getTeam(data.id)) {
        button.innerHTML = 'delete'
    }

    button.addEventListener('click', async () => {
        let exist = await Db.getTeam(data.id)

        if (exist) {
            Db.deleteTeam(data.id)
            button.innerHTML = 'bookmark'
            console.log('Team berhasil dihapus!')
        } else {
            Db.addTeam(data)
            button.innerHTML = 'delete'
            console.log('Team berhasil ditambahkan!')
        }
    })
}