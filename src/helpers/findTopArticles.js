import articles from "../constants/articles";

const topArticles = articles.filter((article) => {
    return article.topArticle;
})

export default topArticles;