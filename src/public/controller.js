import QRcode from "../components/qr_code/controllers.js";
import LocationFeatures from "../components/geolocation/controllers.js";

const sizeDefault = '150x150'
document.getElementById('generateButton').addEventListener('click',()=>{    
    generateQRCode()
    setInterval(()=>{
        generateQRCode()
    },5000)  
})

async function generateQRCode(sizeDefault){
    const qr = new QRcode
    const QRC = await qr.createQrCode()
   

    document.getElementById('tokenInput').value = QRC.token
    const displayQr = document.getElementById('qrcode')
    displayQr.src = QRC.qrCode
}

async function getPositionUser() {
    const location = new LocationFeatures
    await location.getLocation()
}
getPositionUser()