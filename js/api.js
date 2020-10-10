var http = {
    baseUrl: "https://service-72fado3m-1251829736.gz.apigw.tencentcs.com/",
    getText(api) {
        let fullUrl = this.fullUrl(api);
        return new Promise(resolve => {
            fetch(fullUrl, {
                method: "GET",
                mode: 'cors',
            }).then((response) => {
                return response.text();
            }).then(text => {
                resolve(text);
            })
        });
    },
    postJson(api, data) {
        let fullUrl = this.fullUrl(api);
        return new Promise(resolve => {
            fetch(fullUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
                cache: 'no-cache',
                mode: 'cors',
            }).then((response) => {
                return response.json();
            }).then(text => {
                resolve(text);
            })
        });
    },
    fullUrl(api) {
        return this.baseUrl + api;
    }
}


var apiConstant = {
    ideacode: "release/start-test-1602311551",
    ssr: "curl.php",
}

var apiClient = {
    getIdeaCode() {
        return http.getText(apiConstant.ideacode);
    },
    getSSR(key) {
        return http.postJson(apiConstant.ssr, {key});
    },

}


