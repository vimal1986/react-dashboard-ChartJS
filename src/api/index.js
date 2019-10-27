import axios from 'axios';

export const baseURL = process.env.REACT_APP_API_URL;

export const Get = (url,data) => {
    return axios.get(baseURL + url,{
        params: {
        data:data
    }}).then((resp) => {
        return resp;
    }).catch((error) => {
        handleError(error);
    })
};