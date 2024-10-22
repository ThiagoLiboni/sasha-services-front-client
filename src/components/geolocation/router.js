import express from 'express';

const router = express.Router();

// Rota para processar a localização enviada pelo frontend
router.post('/sendLocation', (req, res) => {
    try {
        const data = req.body
        res.status(200).send('Localização recebida com sucesso!');
    } catch (error) {
        console.log('Falha ao processar localização:', error);
        res.status(500).send('Erro ao processar localização.');
    }
});

export { router };
