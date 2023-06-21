import { FC } from "react";
import Head from "next/head";

interface MetaProps {
  title: string;
}

const Meta: FC<MetaProps> = ({ title }) => {
  const modifiedTitle = `${title} — To do`;

  return (
    <Head>
      <title>{modifiedTitle}</title>
    </Head>
  );
};

export default Meta;
