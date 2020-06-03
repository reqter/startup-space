import React from "react";
import { IoIosPin, IoIosPrint, IoIosHeart, IoMdEye } from "react-icons/io";
import { Layout } from "./styles";

const LayoutBox = (props) => {
  return (
    <Layout {...props}>
      <h1 className="font-semibold text-2xl mb-6">Property Description</h1>
      <p className="mb-2">
        Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla. Nulla
        eget iaculis lectus. Mauris ac maximus neque. Nam in mauris quis libero
        sodales eleifend. Morbi varius, nulla sit amet rutrum elementum, est
        elit finibus tellus, ut tristique elit risus at metus. Sed fermentum,
        lorem vitae efficitur imperdiet, neque velit tristique turpis, et
        iaculis mi tortor finibus turpis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
        pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur
        nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi
        tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed
        aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum
        facilisis massa, a consequat purus viverra a. Aliquam pellentesque nibh
        et nibh feugiat gravida. Maecenas ultricies, diam vitae semper placerat,
        velit risus accumsan nisl, eget tempor lacus est vel nunc. Proin
        accumsan elit sed neque euismod fringilla. Curabitur lobortis nunc
        velit, et fermentum urna dapibus non. Vivamus magna lorem, elementum id
        gravida ac, laoreet tristique augue. Maecenas dictum lacus eu nunc
        porttitor, ut hendrerit arcu efficitur.
      </p>
    </Layout>
  );
};
export default LayoutBox;
