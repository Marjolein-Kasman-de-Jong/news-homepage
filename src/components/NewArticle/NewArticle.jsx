import './NewArticle.css';
import NewArticleHeading from '../NewArticleHeading/NewArticleHeading';
import RegularParagraph from '../RegularParagraph/RegularParagraph';

function NewArticle({heading, paragraph}) {
    return (
        <div className="new-article">
            <NewArticleHeading textContent={heading}/>
            <RegularParagraph textContent={paragraph}/>
        </div>
    );
}

export default NewArticle;