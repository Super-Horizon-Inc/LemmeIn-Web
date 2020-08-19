import { fetchUtils } from 'react-admin';

export default function HttpClient (endUrl, options = {}) {

    const url = 'http://localhost:8080/lemme/' + endUrl;
    const accessToken = sessionStorage.getItem('token');

    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    options.headers.set('Authorization', `Bearer ${accessToken}`);

    return fetchUtils.fetchJson(url, options);

};