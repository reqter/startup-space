import useGlobalState from "hooks/useGlobal/useGlobalState";
import Map from "../Map";
import Form from "../Form";
import { MapFormContainer } from "./styles";
const MapForm = () => {
  const {} = useGlobalState();
  return (
    <MapFormContainer>
      <Map />
      <Form />
    </MapFormContainer>
  );
};
export default MapForm;
