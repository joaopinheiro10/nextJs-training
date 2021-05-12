import ArticleItem from './ArticleItem';
import articleStyles from '../styles/Article.module.css';

export default function ArticleList(props)
{
    return (
        <div className={articleStyles.grid}>
            {props.articles.map(article => (
                // <h3>{article.title}</h3>
                <ArticleItem article={article} />
            ))}
        </div>
    )
}

