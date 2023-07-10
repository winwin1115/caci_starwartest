import Image from "next/image";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import { Menu } from "@headlessui/react";

import DownArrow from "../../assets/SVGs/downArrow.svg";
import UpArrow from "../../assets/SVGs/upArrow.svg";
import ButtonMenu from "../../components/Button/Button.menu";
import styles from "./styles.module.css";
import Header from "../../components/Header";

interface Props {
  children: ReactElement;
}

const initialHiddenState = [
  {
    state: "hidden",
    value: true,
  },
  {
    state: "",
    value: false,
  },
];

const LayoutMain: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const [hiddenState, setHiddenState] = useState(initialHiddenState);

  const setHidden = () => {
    setHiddenState(hiddenState.reverse().slice());
  };

  return (
    <>
      <Header title={"Test Projects"} />
      <div className="w-full h-screen">
        <div className=" h-full w-full">
          <div className="shadow-lg">
            <div className="container flex items-center h-[72px] justify-between px-6 ">
              <div
                className="flex items-center sm:ml-[71px]"
                onClick={() => {
                  router.push("/");
                }}
              >
                <Image
                  src={"/images/JUL.svg"}
                  className="mr-2.5 sm:mr-2.5"
                  alt="jul-icon"
                  width={25}
                  height={25}
                />
                <span className="text-xl  font-bold sm:text-3xl">
                  Test Projects
                </span>
              </div>
              <div className="cursor-pointer sm:hidden">
                <Menu>
                  <Menu.Button>
                    <Image
                      src={"/images/headerMenu.svg"}
                      alt="header-menu"
                      width={24}
                      height={24}
                    />
                  </Menu.Button>
                  <Menu.Items>
                    <div className="absolute border w-[180px] bg-white right-0 mr-[24px]">
                      <ButtonMenu
                        label="Test 1"
                        className={
                          router.route === "/starships"
                            ? styles["menu-button-normal"]
                            : styles["menu-button-select"]
                        }
                        onClick={() => {
                          router.push("/starships");
                        }}
                      />
                      <ButtonMenu
                        label="Test2"
                        className={
                          router.route === "/contents"
                            ? styles["menu-button-normal"]
                            : styles["menu-button-select"]
                        }
                        onClick={() => {
                          router.push("/starships");
                        }}
                      />
                      <ButtonMenu
                        label="Test3"
                        className={
                          router.route === "/nft"
                            ? styles["menu-button-normal"]
                            : styles["menu-button-select"]
                        }
                        rightElementIcon={
                          hiddenState[0].state == "hidden" ? (
                            <Image src={DownArrow} alt="coin base" />
                          ) : (
                            <Image src={UpArrow} alt="coin base" />
                          )
                        }
                        onClick={() => {
                          setHidden();
                        }}
                      />
                      <div className={hiddenState[0].state}>
                        <ButtonMenu
                          label="Task1"
                          className={
                            router.route === "/nft/sbt"
                              ? styles["menu-button-normal2"]
                              : styles["menu-button-select2"]
                          }
                          onClick={() => {
                            router.push("/starships");
                          }}
                        />

                        <ButtonMenu
                          label="Task2"
                          className={
                            router.route === "/nft/wallet"
                              ? styles["menu-button-normal2"]
                              : styles["menu-button-select2"]
                          }
                          onClick={() => {
                            router.push("/starships");
                          }}
                        />

                        <ButtonMenu
                          label="Task3"
                          className={
                            router.route === "/nft/content"
                              ? styles["menu-button-normal2"]
                              : styles["menu-button-select2"]
                          }
                          onClick={() => {
                            router.push("/starships");
                          }}
                        />
                      </div>
                    </div>
                  </Menu.Items>
                </Menu>
              </div>
            </div>
          </div>

          <div className="container">
            <div className=" flex sm:mt-20 sm:ml-[71px]">
              <div className="hidden sm:block sm:w-[260px] sm:min-w-[260px] sm:text-lg font-DM-San">
                <ButtonMenu
                  label="Test 1"
                  className={
                    router.route === "/starships"
                      ? styles["menu-button-normal"]
                      : styles["menu-button-select"]
                  }
                  onClick={() => {
                    router.push("/starships");
                  }}
                />
                <ButtonMenu
                  label="Test 2"
                  className={
                    router.route === "/contents"
                      ? styles["menu-button-normal"]
                      : styles["menu-button-select"]
                  }
                  onClick={() => {
                    router.push("/starships");
                  }}
                />
                <ButtonMenu
                  label="Test 3"
                  className={
                    router.route === "/nft"
                      ? styles["menu-button-normal"]
                      : styles["menu-button-select"]
                  }
                  rightElementIcon={
                    hiddenState[0].state == "hidden" ? (
                      <Image src={DownArrow} alt="coin base" />
                    ) : (
                      <Image src={UpArrow} alt="coin base" />
                    )
                  }
                  onClick={() => {
                    setHidden();
                  }}
                />

                <div className={hiddenState[0].state}>
                  <ButtonMenu
                    label="Task1"
                    className={
                      router.route === "/nft/sbt"
                        ? styles["menu-button-normal2"]
                        : styles["menu-button-select2"]
                    }
                    onClick={() => {
                      router.push("/starships");
                    }}
                  />

                  <ButtonMenu
                    label="Task2"
                    className={
                      router.route === "/nft/wallet"
                        ? styles["menu-button-normal2"]
                        : styles["menu-button-select2"]
                    }
                    onClick={() => {
                      router.push("/starships");
                    }}
                  />

                  <ButtonMenu
                    label="Task3"
                    className={
                      router.route === "/nft/content"
                        ? styles["menu-button-normal2"]
                        : styles["menu-button-select2"]
                    }
                    onClick={() => {
                      router.push("/starships");
                    }}
                  />
                </div>
              </div>
              <div className="w-full w-min-[380px] px-6 py-10 h-full sm:w-[634px] sm:ml-6 sm:p-0">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutMain;
