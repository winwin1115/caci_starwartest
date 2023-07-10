import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import ButtonMenu from "../../components/Button/Button.menu";
import styles from "./styles.module.css";
import DownArrow from "../../assets/SVGs/downArrow.svg";
import UpArrow from "../../assets/SVGs/upArrow.svg";

interface IHeaderProps {
  title?: string;
}
const Header: React.FC<IHeaderProps> = ({ title }) => {
  const router = useRouter();

  return (
    <div className="shadow-lg">
      <div className="container flex items-center h-[72px] justify-between px-6 ">
        <div
          className="flex items-center sm:ml-[71px]"
          onClick={() => {
            router.push("/wallet");
          }}
        >
          <Image
            src={"/images/JUL.svg"}
            className="mr-2.5 sm:mr-2.5"
            alt="jul-icon"
            width={25}
            height={25}
          />
          <span className="text-xl  font-bold sm:text-3xl">JUL WALLET</span>
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
                  label="In Wallet"
                  className={
                    router.route === "/wallet"
                      ? styles["menu-button-normal"]
                      : styles["menu-button-select"]
                  }
                  onClick={() => {
                    router.push("/wallet");
                  }}
                />
                <ButtonMenu
                  label="In Contents"
                  className={
                    router.route === "/contents"
                      ? styles["menu-button-normal"]
                      : styles["menu-button-select"]
                  }
                  onClick={() => {
                    router.push("/contents");
                  }}
                />
                <ButtonMenu
                  label="NFT"
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
                    label="SBT"
                    className={
                      router.route === "/nft/sbt"
                        ? styles["menu-button-normal2"]
                        : styles["menu-button-select2"]
                    }
                    onClick={() => {
                      router.push("/nft/sbt");
                    }}
                  />

                  <ButtonMenu
                    label="NFT(in Wallet)"
                    className={
                      router.route === "/nft/wallet"
                        ? styles["menu-button-normal2"]
                        : styles["menu-button-select2"]
                    }
                    onClick={() => {
                      router.push("/nft/wallet");
                    }}
                  />

                  <ButtonMenu
                    label="NFT(in Contents)"
                    className={
                      router.route === "/nft/content"
                        ? styles["menu-button-normal2"]
                        : styles["menu-button-select2"]
                    }
                    onClick={() => {
                      router.push("/nft/content");
                    }}
                  />
                </div>
              </div>
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
