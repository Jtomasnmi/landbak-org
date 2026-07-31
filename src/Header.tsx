import {
  ChevronDownIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import { Button, Dropdown, DropdownItem } from "flowbite-react";

const Header = () => {
  return (
    <>
      <header className="sticky backdrop-blur-md flex justify-around shadow ring ring-green-200 p-5">
        <div className="flex items-center gap-2">
          <CubeTransparentIcon
            className="size-7 text-green-700"
            strokeWidth={2}
          />
          <p className="text-xl font-bold text-neutral-700">XYZ</p>
        </div>
        <div className="flex items-center gap-5">
          <p className="text-sm tracking-wide cursor-pointer text-green-800 font-bold hover:text-green-800">
            Home
          </p>
          <Dropdown
            label=""
            dismissOnClick={false}
            renderTrigger={() => (
              <div className="flex items-center gap-2 text-neutral-800 font-medium hover:text-green-800">
                <span className="text-sm tracking-wide cursor-pointer ">
                  Services{" "}
                </span>
                <ChevronDownIcon className="size-5" />
              </div>
            )}
          >
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
          </Dropdown>
          <p className="text-sm tracking-wide cursor-pointer text-neutral-800 font-medium hover:text-green-800">
            About Us
          </p>
          <Button color="green" className="rounded-none">Contact Us</Button>
        </div>
      </header>
    </>
  );
};

export default Header;
