import { NextSeo } from "next-seo";

import { NEXT_SEO_DEFAULT } from "../../next-seo.config";

const Head = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <NextSeo {...NEXT_SEO_DEFAULT} title="Home" useAppDir={true} />
    </>
  );
};
export default Head;
