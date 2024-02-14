import articles from "../constants/articles";

const mainArticle = articles.find((article) => {
    return article.mainArticle;
})

export default mainArticle;