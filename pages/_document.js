import Document, {Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {

   setFooterTags() {
      return {
         __html: `
         window.dataLayer = window.dataLayer || [];
         function gtag() {
           dataLayer.push(arguments);
         }
         gtag('js', new Date());

         gtag('config', 'UA-144893460-1');
      `
      };
   }

   render() {
      return (
        <Html>
         <Head />
          <body>
            <Main/>
            <NextScript/>
            <script dangerouslySetInnerHTML={this.setFooterTags()}/>
          </body>
        </Html>
      )
   }
}