import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import DownArrow from "../../assets/SVGs/downArray.svg";
import { AppDispatch, AppSelector } from "../../hooks";
import { carState, updateCarState } from "../../reducers/account.reducer";

interface Item {
  name: string;
  img: string;
}

export interface ISelectBoxProps {
  label: string | React.ReactNode;
  onClick?: () => void;
  className?: string;
  tokenTypes: Item[];
  flag?: string;
}

const SelectBox: React.FC<ISelectBoxProps> = ({
  onClick,
  className,
  tokenTypes,
  flag,
}) => {
  const selectedTokenOrder = (tokenName: string) => {
    const index = tokenTypes.findIndex(
      (item: any) => item.name.toLowerCase() === tokenName.toLowerCase()
    );
    if (index < 0) return 0;
    return index;
  };

  const { carType, carColor } = AppSelector(carState);
  const [selected, setSelected] = useState(
    tokenTypes[selectedTokenOrder(flag ? carType : carColor)]
  );
  const dispatch = AppDispatch();

  const updateState = (val: { name: string; img: string }) => {
    dispatch(
      updateCarState({
        [flag ? "carType" : "carColor"]: val.name,
      })
    );
    setSelected(val);
  };

  return (
    <div className={className}>
      <label className="block tracking-wide text-grey-darker text-base font-bold mb-3.5">
        MAKE
      </label>
      <div className="relative ">
        <Listbox value={selected} onChange={(val) => updateState(val)}>
          <div className="relative mt-1 ">
            <Listbox.Button className=" cursor-pointer w-full border rounded-lg bg-white px-[22px] py-3 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm h-12">
              <div className="flex items-center  justify-between pointer-events-none inset-y-0 left-0  ">
                <div className="flex">
                  <Image
                    src={selected.img}
                    alt="coin base"
                    className="w-6 mr-[6px]"
                  />

                  {selected.name}
                </div>
                <Image src={DownArrow} alt="arrow" width={20} />
              </div>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {tokenTypes.map((token, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active
                          ? "bg-slate-100 rounded text-amber-900"
                          : "text-gray-900"
                      }`
                    }
                    value={token}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <Image
                              src={token.img}
                              alt="jul"
                              className="mx-1 mt-3 mb-3"
                            />
                          </span>
                          {token.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            {/* <SelectDown className="h-5 w-5" aria-hidden="true" /> */}
                            {/* <Image src={JUL} alt="coin base" className="mx-2 mt-3 mb-3" /> */}
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
};

export default SelectBox;
