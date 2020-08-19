import HttpClient from "./http-client";
import authProvider from "./auth-provider";

const dataProvider = {

    getList: (resource, params) => {

        return HttpClient(`${resource}?username=${authProvider.getUsername()}`, params).then(({ headers, json }) => ({
            data: json,
            total: json.length,
        }));

    },

    update: (resource, params) => {

        return HttpClient(`${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
             data: json 
        }));

    }

};

export default dataProvider;