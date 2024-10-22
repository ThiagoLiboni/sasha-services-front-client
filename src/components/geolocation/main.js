class GeoLocation {
    async getCurrentLocation() {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        const accuracy = position.coords.accuracy;

                        
                        fetch('/sendLocation', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ latitude, longitude, accuracy })
                        })
                        .then(response => {
                            if (response.ok) {
                                console.log('Localização enviada com sucesso!');
                            } else {
                                console.error('Erro ao enviar localização.');
                            }
                        })
                        .catch(error => console.error('Erro:', error));

                        resolve({ latitude, longitude, accuracy });
                    },
                    (error) => {
                        console.error('Erro ao obter localização:', error);
                        reject(error);
                    },
                    {enableHighAccuracy: true}
                );
            } else {
                console.log('Geolocalização não é suportada neste navegador.');
                reject(new Error('Geolocalização não suportada'));
            }
        });
    }
}

export default GeoLocation