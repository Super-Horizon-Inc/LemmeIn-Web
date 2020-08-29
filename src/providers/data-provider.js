import HttpClient from "./http-client";
import authProvider from "./auth-provider";

const dataProvider = {

    getList: (resource, params) => {

        return HttpClient(`${resource}?username=${authProvider.getUsername()}`, params).then(({ headers, json }) => ({
            data: json,
            total: json.length,
        }));

    },

    setting: (resource, params) => {

        return HttpClient(`${resource}`, {
            //return HttpClient(`${resource}`, {
            method: 'PUT',
            body: JSON.stringify(params),
        }).then(({ json }) => ({
             data: json 
        }));

    }

};

export default dataProvider;