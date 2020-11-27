import { IncomingMessage } from "http";
import Cookies from "universal-cookie";

export default class Cookie {
    static cookies = new Cookies();

    public static async getToken(req?: IncomingMessage): Promise<string> {
        try {
            const cookies = req ? new Cookies(req.headers.cookie) : new Cookies();
            return cookies.get('token');
        } catch(error) {
            return ''
        }
        
    }

    public static setToken({req, token}: {req?: IncomingMessage; token: string}): void {
        const cookies = req ? new Cookies(req.headers.cookie) : new Cookies();
		cookies.set('token', token);
    }
    
    public static removeToken({req}: {req?: IncomingMessage;}): void {
        const cookies = req ? new Cookies(req.headers.cookie) : new Cookies();
		cookies.remove('token');
    }
    
    public static getRefreshToken(req?: IncomingMessage): string {
        const cookies = req ? new Cookies(req.headers.cookie) : new Cookies();
        return cookies.get('refreshToken');
    }
    
    public static setRefreshToken({req, token}: {req?: IncomingMessage; token: string;}): void {
        const cookies = req ? new Cookies(req.headers.cookie) : new Cookies();
        cookies.set('refreshToken', token);
    }
}