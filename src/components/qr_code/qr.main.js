import generateToken from "./token.main.js";

class generateQRC extends generateToken {
    constructor() {
        super();
    }

    async createQrCode(size) {
        try {
            const token = await this.getToken()
            const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${token}`

            return {qrCode, token}
        } catch (err) {
            console.error('Erro ao gerar QR Code:', err);
        }
    }
}
export default generateQRC