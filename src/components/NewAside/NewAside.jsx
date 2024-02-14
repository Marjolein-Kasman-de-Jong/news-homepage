import './NewAside.css';
import newArticles from '../../helpers/findNewArticles';
import SecondaryHeading from '../SecondaryHeading/SecondaryHeading';
import NewArticle from '../NewArticle/NewArticle';

function NewsAside() {
    return (
        <aside className='new-aside'>
            <SecondaryHeading textContent='New' />
            <div className="content-wrapper-3">
                {
                    newArticles.map((newArticle) => {
                        return <NewArticle key={newArticle.title} heading={newArticle.title} paragraph={newArticle.content}/>;
                    })
                }
            </div>
        </aside>
    );
}

export default NewsAside;