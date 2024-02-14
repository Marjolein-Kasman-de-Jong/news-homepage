import articles from "../constants/articles";

const newArticles = articles.filter((article) => {
    return article.newArticle;
})

export default newArticles;