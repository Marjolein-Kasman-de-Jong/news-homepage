import './MainImage.css';

function MainImage({image}) {
    return (
        <picture>
            <source media="(min-width:1110px)" srcSet={image.desktop} />
            <img src={image.mobile} alt="Web 3" />
        </picture>
    );
}

export default MainImage;