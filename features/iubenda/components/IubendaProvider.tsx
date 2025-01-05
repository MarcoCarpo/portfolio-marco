import Script from 'next/script';
import React, { PropsWithChildren } from 'react';

const IubendaProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Script id="csConfig" type="text/javascript">
        {`var _iub = _iub || [];_iub.csConfiguration = {"siteId":${process.env.NEXT_PUBLIC_SITE_ID},"cookiePolicyId":${process.env.NEXT_PUBLIC_PRIVACY_POLICY_ID},"lang":"it","storage":{"useSiteId":true}};`}
      </Script>

      <Script
        type="text/javascript"
        src={`https://cs.iubenda.com/autoblocking/${process.env.NEXT_PUBLIC_SITE_ID}.js`}
      ></Script>
      <Script type="text/javascript" src="//cdn.iubenda.com/cs/gpp/stub.js"></Script>
      <Script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" async></Script>
      <Script src="https://cdn.iubenda.com/iubenda.js" />
      {children}
    </>
  );
};

export default IubendaProvider;
