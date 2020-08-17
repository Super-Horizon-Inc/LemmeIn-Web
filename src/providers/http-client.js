import { fetchUtils } from 'react-admin';

export default function httpClient (endUrl, options = {}) {

    const url = 'http://localhost:8080/lemme/' + endUrl;
    const accessToken = sessionStorage.getItem('token');

    options.user = {
        authenticated: true,
        token: accessToken
    };

    return fetchUtils.fetchJson(url, options);

};