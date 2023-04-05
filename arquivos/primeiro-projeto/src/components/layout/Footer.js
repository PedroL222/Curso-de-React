import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer(){
    return 
    <div>
        <h1>Footer</h1>
        <ul>
            <li><FaFacebook /></li>
            <li><FaInstagram /></li>
            <li><FaLinkedin /></li>
        </ul>
    </div>
}

export default Footer