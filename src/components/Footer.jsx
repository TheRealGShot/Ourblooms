import footer from '../assets/footer/footer.png'
import footer1 from '../assets/footer/footer1.png'
import footer2 from '../assets/footer/footer2.png'
function Footer(){
    return(
        <footer>
            <picture>
                <source media="(min-width:1200px)" srcSet={footer}/>
                <source media="(min-width:800px)" srcSet={footer1}/>
                <img src={footer2} alt="Footer Section Image"/>
            </picture>
        </footer>
    );
}
export default Footer;