import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="stylesheet" href="/styles/mobile.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <div className="mobile-home-button"></div>
                </body>
            </Html>
        )
    }
}

export default MyDocument