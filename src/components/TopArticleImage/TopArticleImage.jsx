import './TopArticleImage.css';

function TopArticleImage({image}) {
    return (
        <img className='top-article-image' src={image} alt="test" />
    );
}

export default TopArticleImage;