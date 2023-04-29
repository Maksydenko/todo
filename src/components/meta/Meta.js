import Head from "next/head";

const Meta = ({ title }) => {
  const getTitle = (title) => `${title} | To do`;

  return (
    <Head>
      <title>{getTitle(title)}</title>
    </Head>
  );
};

export default Meta;
