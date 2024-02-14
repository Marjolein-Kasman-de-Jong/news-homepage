import './Footer.css';
import topArticles from '../../helpers/findTopArticles';
import TopArticle from '../TopArticle/TopArticle';


function Footer() {
    return (
        <footer>
            {
                topArticles.map((topArticle) => {
                    return (
                        <article key={topArticle.title} className='top-article'>
                            <TopArticle image={topArticle.image} position={topArticle.position} heading={topArticle.title} paragraph={topArticle.content}/>
                        </article>
                    )
                })
            }
        </footer>
    );
}

export default Footer;