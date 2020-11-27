import { ServerResponse } from "http";

export default (): string => {
    return ''
};

export const redirectRoot = (res?: ServerResponse): void => {
    // return {
    //     redirect: {
    //         destination: '/',
    //         permanent: false,
    //     }
    // }
    const path = '/'
    if(res) {
        res.setHeader('location', path);
        res.statusCode = 302;
        res.end();
    } else {
        window.location.pathname = path
    }
}

export const redirectLogin = (res?: ServerResponse): void => {
    const path = '/login'
    if(res) {
        res.setHeader('location', path);
        res.statusCode = 302;
        res.end();
    } else {
        window.location.pathname = path;
    }
}
