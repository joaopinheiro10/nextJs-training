import Head from "next/head";
import Image from 'next/image';

export default function About()
{
    return (
        <div>
            <Head>
                <title>About</title>
            </Head>
            <h1>About</h1>
            <Image 
                src="/nextJs.png"
                alt="NextJs image"
                width={400}
                height={300}
            />
        </div>
    )
}