import Document, { NextScript, Html, Head, Main } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Worldtrip</title>
                    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"  />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}