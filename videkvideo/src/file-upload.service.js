import * as axios from 'axios';

const BASE_URL = 'https://localhost:44301'

function upload(formData) {
    const url = `${BASE_URL}/api/video/`;
    return axios.post(url, formData)
        .then(x => x.data)
        // add url field
        .then(x => x.map(img => Object.assign({},
            img, { url: `${BASE_URL}/images/${img.id}` })));
}
function wait(ms) {
    return (x) => {
        return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
}

export { wait, upload }