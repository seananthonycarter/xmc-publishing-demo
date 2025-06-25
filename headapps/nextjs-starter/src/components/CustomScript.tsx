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
    <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push(window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GTM_ID}');
          `,
          }}
        />
      </Head>
    </>
  );
};

export default CustomScripts;