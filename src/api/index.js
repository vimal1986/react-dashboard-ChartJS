import axios from 'axios';

export const Get = (url) => {
    return axios.get(baseURL + url, getHeader()).then((resp) => {
        return resp;
    }).catch((error) => {
        handleError(error);
    })
};