/* Esse arquivo tem a lógica de autenticar o token na API do spotify e possui
a função getArtist que pega um artista da API do Spotify*/
import axios from 'axios';

// Função para obter o token de acesso
async function getAccessToken() {
    try {
        const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(`${import.meta.env.VITE_SPOTIFY_CLIENT_ID}:${import.meta.env.VITE_SPOTIFY_CLIENT_SECRET}`)
            }
        });
        return response.data.access_token;
    } catch (error) {
        console.error('Erro ao obter o token de acesso:', error);
        throw error;
    }
}

// Função para obter um artista aleatório
/**
 * 
 * @param {String} artistId 
 * @returns an artist
 */
export async function getArtist(artistId) {
    try {
        const accessToken = await getAccessToken();

        const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        return response.data;

    } catch (error) {
        console.error('Erro ao obter o artista', error);
        throw error;
    }
}


/**
 * @param {String} artistId
 * @return tracks of the artist
 */
export async function getArtistTracks(artistId)
{
    try {
        const acessToken = await getAccessToken();
        const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/top-tracks`, 
        {
            params: {market: 'BR'},    
            headers: {
                'Authorization': `Bearer ${acessToken}`
            }
        });
        return response.data;

    } catch (error) {
        console.error('Erro ao obter as tracks do artista', error);
        throw error;
    }
}
