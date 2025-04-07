import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <title>OusHtm Portfolio - Computer Engineering Student</title>
            <meta charSet="utf-8" />
            <meta name="title" content="OusHtm Portfolio - Computer Engineering Student" />
            <meta name="description"
                content="OusHtm's Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="author" content="OusHtm" />
            <meta name="keywords"
                content="OusHtm, OusHtm's portfolio, OusHtm linux, ubuntu portfolio, OusHtm protfolio, OusHtm computer, OusHtm, OusHtm ubuntu, OusHtm ubuntu portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
            <meta name="theme-color" content="#E95420" />

            /* Search Engine */
            <meta name="image" content="images/htm.jpg" />
            /* Schema.org for Google */
            <meta itemProp="name" content="OusHtm Portfolio - Computer Engineering Student" />
            <meta itemProp="description"
                content="OusHtm's Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta itemProp="image" content="images/htm.jpg" />
            /* Twitter */
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="OusHtm Portfolio - Computer Engineering Student" />
            <meta name="twitter:description"
                content="OusHtm's Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="twitter:site" content="OusHtm" />
            <meta name="twitter:creator" content="OusHtm" />
            <meta name="twitter:image:src" content="images/htm.jpg" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="OusHtm Portfolio - Computer Engineering Student" />
            <meta name="og:description"
                content="OusHtm's Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="og:image" content="images/htm.jpg" />
            <meta name="og:url" content="http://OusHtm.github.io/" />
            <meta name="og:site_name" content="OusHtm Personal Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/htm.jpg" />
            <link rel="apple-touch-icon" href="images/htm.jpg" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
