import {
  IoMdBook,
  IoIosCafe,
  IoIosMail,
  IoLogoGameControllerB,
  IoIosCar,
  IoIosRecording,
  IoMdPrint,
  IoIosAlbums,
  IoIosInfinite,
  IoMdCar,
  IoIosBus,
  IoIosSubway,
  IoIosTrain,
  IoMdTv,
  IoIosWifi,
  IoMdWallet,
  IoMdSquareOutline,
} from "react-icons/io";
const icons = {
  postalcode: <IoIosMail />,
  gamingroom: <IoLogoGameControllerB />,
  parking: <IoIosCar />,
  outdoor: <IoIosRecording />,
  printer: <IoMdPrint />,
  closet: <IoIosAlbums />,
  restplace: <IoMdBook />,
  mentor: <IoIosInfinite />,
  taxistation: <IoMdCar />,
  busstation: <IoIosBus />,
  subway: <IoIosSubway />,
  transportation: <IoIosTrain />,
  microwave: <IoMdTv />,
  fridge: <IoMdWallet />,
  wifi: <IoIosWifi />,
  coffee: <IoIosCafe />,
};
const Icon = ({ name = "" }) => {
  return icons[name.toLowerCase()] ? (
    icons[name.toLowerCase()]
  ) : (
    <IoMdSquareOutline />
  );
};

export default Icon;
