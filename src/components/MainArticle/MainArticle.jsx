import './MainArticle.css';
import mainArticle from '../../helpers/findMainArticle';
import MainImage from '../MainImage/MainImage';
import MainHeading from '../MainHeading/MainHeading';
import RegularParagraph from '../RegularParagraph/RegularParagraph';
import Button from '../Button/Button';

function MainArticle() {
    return (
        <article className='main-article'>
            <MainImage image={mainArticle.image} />
            <div className='content-wrapper-1'>
                <MainHeading textContent={mainArticle.title} />
                <div className='content-wrapper-2'>
                    <RegularParagraph textContent={mainArticle.content} />
                    <Button textContent='read more' />
                </div>
            </div>
        </article>
    );
}

export default MainArticle;