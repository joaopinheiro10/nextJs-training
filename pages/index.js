import Head from 'next/head'
import ArticleList from '../components/ArticleList'

export default function Home({articles}) 
{
    console.log(articles);
    return (
        <div>
            <Head>
                <title>WebDev Newz</title>
                <meta name='keywords' content='web development, programming' />
            </Head>
            
            <ArticleList articles={articles} />
        </div>
    )
}

// THIS IS THE FIRST REQUEST TO SHOW
// export const getStaticProps = async () =>
// {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//     const articles = await res.json();

//     return {
//         props: {
//             articles
//         }
//     }
// }

// AFTER CHANGING THE API FOLDER
// Explain that locally we can change this directly. If this was going to production, we needed to add a dynamic path to this fecth
export const getStaticProps = async () =>
{
    const res = await fetch(`http://localhost:3000/api/articles`);
    const articles = await res.json();

    return {
        props: {
            articles
        }
    }
}