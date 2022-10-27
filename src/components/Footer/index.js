import React from 'react';
import stackOverflow from '../../assets/footer-pics/stack.png';
import gitHub from '../../assets/footer-pics/GitHub.png';
import linkedIn from '../../assets/footer-pics/linkedIn.png';

function Footer() {
    return (
        <footer>
            <a href="https://stackexchange.com/users/26744118/samantha-curatolo"
                target="_blank" rel="noreferrer"><img src={stackOverflow} alt="stackOverflow" className="icon" /></a>
            <a href="https://github.com/scuratolo26"
                target="_blank" rel="noreferrer"><img src={gitHub} alt="GitHub" className="icon" /></a>
            <a href="https://www.linkedin.com/in/samantha-curatolo-801985193/"
                target="_blank" rel="noreferrer"><img src={linkedIn} alt="LinkedIn" className="icon" /></a>
        </footer>
    );
}

export default Footer;