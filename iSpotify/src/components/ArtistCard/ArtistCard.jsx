import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

import { getArtist } from '../../spotify';
import styles from './ArtistCard.module.css';

export default function ArtistCard( {artistId} )
{
    const [artist, setArtist] = useState(null);

    useEffect(() => {
        async function fetchArtist() {
            const artistData = await getArtist(artistId);
            setArtist(artistData);
        }

        fetchArtist();
    }, [artistId]);

    if (!artist) return <div>Loading...</div>

    return (
        <div className={styles.artistCard}>
            <img className={styles.artistImage} src={artist.images[0]?.url} alt={artist.name}/>
            <p className={styles.artistName} >{artist.name}</p>
            <p className={styles.placeholder}>Artista</p>
        </div>
    );
}

ArtistCard.propTypes = {
    artistId: PropTypes.string.isRequired
}