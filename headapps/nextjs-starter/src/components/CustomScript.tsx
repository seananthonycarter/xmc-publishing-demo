import Head from 'next/head';
import Script from 'next/script';

const CustomScripts = ({ locale }) => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
        strategy="afterInteractive"
      />
      <Head>
    

      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GTM_ID}');
          `,
        }}
      />

      </Head>
    </>
  );
};

export default CustomScripts;