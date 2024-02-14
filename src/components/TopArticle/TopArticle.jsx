import './TopArticle.css';
import SecondaryHeading from '../SecondaryHeading/SecondaryHeading';
import RegularParagraph from '../RegularParagraph/RegularParagraph';
import TopArticleHeading from '../TopArticleHeading/TopArticleHeading';
import TopArticleImage from '../TopArticleImage/TopArticleImage';

function TopArticle({ image, position, heading, paragraph }) {
    return (
        <article className='top-article'>
            <TopArticleImage image={image} />
            <div className="content-wrapper-4">
                <SecondaryHeading textContent={position} />
                <TopArticleHeading textContent={heading} />
                <RegularParagraph textContent={paragraph} />
            </div>
        </article>
    );
}

export default TopArticle;