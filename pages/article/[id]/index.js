// import {useRouter} from 'next/router';
import Link from 'next/link';

const Article = (props) =>
{
    // To get article id we could use this:
    // const router = useRouter();
    // const { id } = router.query;

    return (
        // 1º <h1>This in article {props.article.id}</h1>
        <>
            <h1>{props.article.title}</h1>
            <p>{props.article.body}</p>
            <br />
            <Link href="/">Go Back</Link>
        </>
    )
}

// 1st With get server side props, every time we're going to a page it is when we're fetching data.
// export const getServerSideProps = async (context) =>
// {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

//     const article = await res.json();

//     return {
//         props: {
//             article
//         }
//     }
// }

// 2nd You can use a combination from getStaticProps and getStaticPaths to dynamically generate the path for the data (only change this one and show error message)
// export const getStaticProps = async (context) =>
// {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

//     const article = await res.json();

//     return {
//         props: {
//             article
//         }
//     }
// }

// export const getStaticPaths = async () =>
// {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//     const articles = await res.json();

//     const ids = articles.map(article => article.id);
//     const paths = ids.map(id => ({params: {id: id.toString()}}));

//     return {
//         paths,
//         fallback: false
//     }
// }

// fallback false means that if we go to a page that doesn't exist it will show a 404 page

export const getStaticProps = async (context) =>
{
    const res = await fetch(`http://localhost:3000/api/articles/${context.params.id}`);

    const article = await res.json();

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () =>
{
    const res = await fetch(`http://localhost:3000/api/articles`);

    const articles = await res.json();

    const ids = articles.map(article => article.id);
    const paths = ids.map(id => ({params: {id: id.toString()}}));

    return {
        paths,
        fallback: false
    }
}

export default Article;