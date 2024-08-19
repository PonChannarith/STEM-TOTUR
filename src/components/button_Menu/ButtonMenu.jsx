import React from "react";
import { Button } from "flowbite-react";
const ButtonMenu = () => {
  return (
    <div className="ml-[40px]">
      <h3 className="text-black text-3xl font-suwannaphum  mt-5">
        ប្រភេទសៀវភៅ
      </h3>
      <div className=" flex flex-wrap gap-2  mt-5 font-suwannaphum border-black ">
        <Button color="gray" pill>
          វិទ្យាសាស្ត្រ
        </Button>
        <Button color="gray" pill>
          បច្ចេកវិទ្យា
        </Button>
        <Button color="gray" pill>
          វិស្វកម្ម
        </Button>
        <Button color="gray" pill>
          គណិតវិទ្យា
        </Button>
      </div>
    </div>
  );
};
export default ButtonMenu;
