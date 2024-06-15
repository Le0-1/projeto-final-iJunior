import Sidebar from "../../components/Sidebar/Sidebar";
import styles from './Playlist.module.css'; 

export default function Playlist() {
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Liked Musics', path: '/liked-musics' }
    ];

    return (
        <div className={styles.playlistPage}>
            <Sidebar links={links}></Sidebar>
        </div>
    );
}
