const createRequest = function(url, bory){
    return fetch(
        url,
        {
            method: "POST",
            body: JSON.stringify(body),
            headers: new Headers({
                "COntent-type": "applicarion/json"
            })
        }
    )
}
const getRequest = function(url,){
    return fetch(
        url,
        {
            method: "GET"
        }
    )
}
const deleteRequest = function(url,){
    return fetch(
        url,
        {
            method: "DELETE"
        }
    )
}

const api = {
    baseUrl: "http://localhost:3000",
    item: {
        endpoint: api.baseUrl + "/item",
        list: () => {},
        create: () => {},
    },
    category: {
        endpoint: api.baseUrl + "/category",
        list: () => {}
    }
};

api.baseUrl;