import Link from 'next/link';
import articleStyle from '../styles/Article.module.css';

const ArticleItem = (props) =>
{
    return (
        <Link href="/article/[id]" as={`/article/${props.article.id}`}>
            <a className={articleStyle.card}>
                <h3>{props.article.title}</h3>
                <p>{props.article.body}</p>
            </a>
        </Link>
    )
}

export default ArticleItem;