import axios from 'axios';
import qs from 'qs';

module.exports = {
    login(username, pass) {
        return new Promise((fulfill, reject) => {
            if (localStorage.token) {
                this.onChange(true)
                return fulfill();
            } else {
                axios
                    .post('http://localhost:3010/users/login', qs.stringify({
                        username: username,
                        password: pass
                    }))
                    .then((response) => {
                        localStorage.token = response.data.token;
                        fulfill();
                        this.onChange(true);
                    })
                    .catch((error) => {
                        this.onChange(false);
                    });
            }
        });
    },

    getToken() {
        return localStorage.token
    },

    logout() {
        delete localStorage.token
        this.onChange(false)
    },

    loggedIn() {
        return !!localStorage.token
    },

    onChange() {}
}
