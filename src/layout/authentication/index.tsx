import Image from "next/image";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import LoadingScreen from "../../components/Loading/LoadingScreen";
import styles from "./styles.module.css";
import bgImage from "../../../public/images/bgs/login.png";
import Header from "../../components/Header";

interface Props {
  children: ReactElement | null;
}

const LayoutAuthentication: React.FC<Props> = ({ children }) => {
  const [isLoading] = useState<boolean>(false);
  const router = useRouter();

  return (
    <>
      {!isLoading ? (
        <div>
          <Header title={"Test Projects"} />
          <div className={styles["auth-layout"]}>
            <div className="w-full md:pr-[10%]">
              <div className={styles["auth-layout-logo"]}>
                <Image
                  className={styles["bgWrap"]}
                  alt="Background Image"
                  src={bgImage}
                  fill
                  priority
                />
                <div
                  className="flex flex-row space-x-8 cursor-pointer"
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  <Image
                    src={"/images/logo.png"}
                    alt="logo"
                    width={150}
                    height={150}
                  />
                  <div className="text-white text-4xl font-bold text-center flex flex-col justify-center">
                    <span>KANTAOUI LETAIEF</span>
                  </div>
                </div>
                <div className={styles["desktop-hint"]}>
                  <p className="text-4xl pb-5">Senior Frontend Developer</p>
                  <p className="text-2xl">
                    8 years of expertise in building responsive web applications
                    and creating dynamic user interfaces.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full w-full md:ml-[-10%] max-h-screen overflow-visible">
              {children}
            </div>
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default LayoutAuthentication;
