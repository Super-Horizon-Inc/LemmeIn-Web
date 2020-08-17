import HttpClient from "./http-client";

const dataProvider = {

    getList: (resource, params) => {

        return HttpClient(`${resource}`).then(({ json }) => ({
            data: json
        }));

    },

    update: (resource, params) => {

        return httpClient(`${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
             data: json 
        }));

    }

};

export default dataProvider;