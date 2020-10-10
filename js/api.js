var http = {
    baseUrl: "http://ftp6414072.host120.sanfengyun.cn/",
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
    ideacode: "curl.php",
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


