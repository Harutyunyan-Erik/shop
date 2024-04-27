export const withFetch = (url, option = {}) => {
    fetch(url, option)
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        return data;
    })
};
