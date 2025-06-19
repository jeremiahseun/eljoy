import Head from 'next/head';
import Particles from './Particles';
import { getYearsOfExperience } from '../data/portfolioData';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Jeremiah Erinola | Senior Fullstack Mobile Engineer</title>
                <meta name="description" content={`Portfolio of Jeremiah Erinola, a Senior Fullstack Mobile Engineer with ${getYearsOfExperience()} years of experience in Flutter & Node.js.`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-animation" />
            <Particles />
            <main>{children}</main>
        </>
    );
};

export default Layout;
