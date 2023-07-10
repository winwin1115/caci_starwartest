import Head from "next/head";

interface IHeaderProps {
  title?: string;
}
const Header: React.FC<IHeaderProps> = ({ title }) => {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta name="description" content="Test Projects" />
      <meta name="keywords" content="Test Projects, React, scalability" />
      <meta name="author" content="Kantaoui" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Header;
