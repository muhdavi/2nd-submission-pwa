const Api = {
    getStandings() {
        return fetch('https://api.football-data.org/v2/competitions/2021/standings', {
            headers: {
                'X-Auth-Token': '9ba167608e214031af211ba574b14b90'
            }
        })
            .then(response => response.json())
            .catch(err => console.log(err))
    },

    getTeam(id) {
        return fetch(`https://api.football-data.org/v2/teams/${id}`, {
            headers: {
                'X-Auth-Token': '9ba167608e214031af211ba574b14b90'
            }
        })
            .then(response => response.json())
            .catch(err => console.log(err))
    }
}