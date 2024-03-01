import { useParams, Link } from "react-router-dom";
import articles from "./article-content";

const ArticlePage = () => {
    const { articleId } = useParams();
    const article = articles.find(a => a.name === articleId);
    return (
        <>
            <h1>{article.title}</h1>
            {article.content.map((parag, i) => (
                <p key={i}>{parag}</p>
            ))}
            <Link to="/articles">
                <button>Come back</button>
            </Link>
        </>
    );
}

export default ArticlePage;