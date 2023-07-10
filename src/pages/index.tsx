import Link from "next/link";
import { ReactElement } from "react";

import ButtonBase from "../components/Button/Button";
import LayoutAuthentication from "../layout/authentication";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col justify-center px-12 md:px-24 h-full">
      <h2 className="text-3xl font-bold pb-12 text-black-color-100">
        Test Projects
      </h2>
      <div className="flex flex-col space-y-8 w-full text-base">
        <Link href="/starships">
          <ButtonBase label="Open Test Projects" primary />
        </Link>
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthentication>{page}</LayoutAuthentication>;
};

export default Home;
