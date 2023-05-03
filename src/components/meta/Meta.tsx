import Head from "next/head";

import { FC } from "react";

interface IMetaProps {
  title: string;
}

const Meta: FC<IMetaProps> = ({ title }) => {
  interface IGetTitle {
    (title: string): string;
  }

  const getTitle: IGetTitle = (title) => `${title} | To do`;

  return (
    <Head>
      <title>{getTitle(title)}</title>
    </Head>
  );
};

export default Meta;
