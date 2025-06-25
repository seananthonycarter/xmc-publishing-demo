 // hooks/useDataLayer.js
  import { useEffect } from 'react';

  const useDataLayer = (sitecorePageProps) => {
    useEffect(() => {
      // Initialize the data layer with global data
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'PageView',
        page: {
          title: "Page title",  /*pageProps?.layoutData?.sitecore?.route.displayName,*/
          url: window.location.href,
          id: sitecorePageProps.layoutData?.sitecore?.route.itemId,
          locale: sitecorePageProps.locale,
        },
      });
    }, [sitecorePageProps.layoutData?.sitecore?.route.itemId, sitecorePageProps.locale]);
  };
  

  export default useDataLayer;

 //   const trackButtonClick = (buttonName) => {
 //   window.dataLayer.push({
 //     event: 'button_click',
 //     button: {
 //       name: buttonName,
 //     },
 //   });
 // };

