import GeoLocation from './main.js';

class LocationFeatures{
    constructor() {
        this.geoLocation = new GeoLocation(); 
    }

    async getLocation() {
        try {
            const { latitude, longitude, accuracy } = await this.geoLocation.getCurrentLocation();
            console.log('Latitude:', latitude, 'Longitude:', longitude, 'Accuracy:', accuracy);
            return { latitude, longitude, accuracy };
        } catch (error) {
            console.error('Erro ao processar a localização:', error);
            throw error; 
        }
    }
}

export default LocationFeatures;
