// import SiteClient from 'datocms-client';    SAPORRA N FUNCIONA
const SiteClient = require('datocms-client').SiteClient;

export default async function recebedorDeRequests(request, response) {
    if(request.method === 'POST') {
        const TOKEN = "7f183c9167ec37b0c1f9198083f950";
    
        const client = new SiteClient(TOKEN);
    
        // validar os dados antes de sair cadastrando! (criar algo como um DTO)
        const registroCriado = await client.items.create({
            itemType: "980829",
            ...request.body
        });
    
        console.log(registroCriado);

        response.json({
            dados: "Algum dado qualquer",
            registroCriado: registroCriado
        });

        return;
    }

    response.status(404).json({
        message: 'ainda não tem nada no GET, mas no POST tem'
    })
}