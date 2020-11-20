const id_liga = 2021;
const base_url = 'https://api.football-data.org/v2';
const endpoint_standings = `${base_url}/competitions/${id_liga}/standings`;
const endpoint_team = `${base_url}/teams/`;

function status(response) {
    if (response.status !== 200) {
        console.log("[API.js][status] Error : " + response.status);
        return Promise.reject(new Error(response.statusText));
    } else {
        return Promise.resolve(response);
    }
}

function json(response) {
    return response.json();
}

const Api = {
    getStandings() {
        return new Promise(function(resolve, reject) {
            if ("caches" in window) {
                caches.match(endpoint_standings).then(function(response) {
                    if (response) {
                        response.json().then(function(data) {
                            resolve(data);
                        });
                    }
                });
            }

            fetch(endpoint_standings, {
                headers: {
                    'X-Auth-Token': '9ba167608e214031af211ba574b14b90'
                }
            })
                .then(status)
                .then(json)
                .then(function(data) {
                    resolve(data);
                });
        });
    },

    getTeam(id) {
        return new Promise(function (resolve, reject) {
            if ("caches" in window) {
                caches.match(endpoint_team + id).then(function (response) {
                    if (response) {
                        response.json().then(function (data) {
                            resolve(data);
                        });
                    }
                });
            }

            fetch(endpoint_team + id, {
                headers: {
                    'X-Auth-Token': '9ba167608e214031af211ba574b14b90'
                }
            })
                .then(status)
                .then(json)
                .then(function (data) {
                    resolve(data);
                })
        });
    }
}
