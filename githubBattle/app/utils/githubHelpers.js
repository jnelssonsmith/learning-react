import axios from 'axios'

/* The following is only necessary if we get ratelimited and end up
getting an API key, for now its just good to know though */

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;
//simply add param to the end of your request url to use API key

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username);
}


/* So a little bit scary here but not too much I hope
- axios.get returns a promise,
- players.map calls the getUserInfo function for each player in players
- seeing as axios.get is a promise that means map returns an array of promises
- axios.all takes an array of promises, and then when each of those promises has
resolved, the .then function is run
*/

var helpers = {
    getPlayersInfo(players) {
        return axios.all(players.map(function(username) {
            return getUserInfo(username);
        })).then(function(info) {
            return info.map(function(user) {
                /* The info returned is the data + headers and all sorts of web
                 stuff so we just want to return the data */
                return user.data;
            })
        }).catch(function(err) {
            console.warn('Error in getPlayersInfo', err)
        })
    }
}

export default helpers
