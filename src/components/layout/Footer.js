import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa6'
import styles from './Footer.module.css'

function Footer(){
    return <footer>
        <ul className={styles.social_list}>
            <li className={styles.item}><FaFacebook size={30} color="#3b5998" /></li>
            <li className={styles.item}><FaInstagram size={30} color="#3b5998" /></li>
            <li className={styles.item}><FaLinkedin size={30} color="#3b5998" /></li>            
        </ul>
        <hr />
        <p>Nosso Rodapé</p>
        
    </footer>
}

export default Footer