/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Link } from 'react-scroll';

const Links = () => {
    return (
        <Link to="footer" css={styles} smooth={true} duration={500}>Join Us</Link>
    )
}
//link that work with scroll
//<Link to="footer" css={styles} smooth={true} duration={500}>Join Us</Link>

const styles = css`
    padding: 18px 50px;
    background: rgb(255, 20, 20);
    border: none;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
    outline: none;
`

export default Links;