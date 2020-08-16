export default async function AuthHeader() {
    
    const accessToken = await sessionStorage.getItem('user');

    if(accessToken) {
        return {Authorization: 'Bearer ' + accessToken};
    }
    else {
        return {};
    }
}