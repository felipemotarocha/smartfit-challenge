import { useQuery } from "react-query";
import { ILocation } from "../types/location";
import LocationItem from "./location-item";

const Locations = () => {
  const { data } = useQuery<{ locations: ILocation[] }>("locations", () =>
    fetch(
      "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"
    ).then((res) => res.json())
  );

  return (
    <div className="flex flex-col gap-4 px-5 mt-5">
      {data?.locations.map((i) => (
        <LocationItem key={i.id} location={i} />
      ))}
    </div>
  );
};

export default Locations;
