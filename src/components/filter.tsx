import { useState } from "react";
import Button from "./button";
import { useQueryClient } from "react-query";
import { ILocation } from "../types/location";

const Filter = () => {
  const [period, setPeriod] = useState<string>(); // morning, afternoon, evening
  const [showCloseUnits, setShowCloseUnits] = useState(false);

  const client = useQueryClient();

  const handleSubmit = () => {
    const data = client.getQueryData<{ locations: ILocation[] }>("locations");

    if (!data?.locations) {
      return;
    }

    let newLocations: ILocation[] = [];

    if (showCloseUnits) {
      newLocations = data?.locations.filter((location) => location.opened);
    }

    client.setQueryData<{ locations: ILocation[] }>("locations", {
      locations: newLocations,
    });
  };

  return (
    <div className="px-5">
      <div className="rounded-lg border-solid border-brand-lightGrey border-2 p-5 border-opacity-35">
        <div className="flex items-center gap-2">
          <img width={24} src="/icon-hour.png" />
          <p className="text-brand-lightGrey">Horário</p>
        </div>

        <h2 className="text-2xl text-brand-lightGrey mt-5 pb-4 border-b border-solid border-brand-lightGrey border-opacity-35">
          Qual período quer treinar?
        </h2>

        <div className="flex flex-col gap-5 mt-5">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <input
                type="radio"
                id="morning"
                name="period"
                value="morning"
                className="w-4"
                checked={period === "morning"}
                onChange={(e) => setPeriod(e.currentTarget.value)}
              />
              <label htmlFor="morning" className="text-brand-lightGrey">
                Manhã
              </label>
            </div>

            <p>06:00 às 12:00</p>
          </div>
          <div className="flex justify-between border-y border-solid border-brand-lightGrey py-3 border-opacity-35">
            <div className="flex gap-2">
              <input
                type="radio"
                id="afternoon"
                name="period"
                value="afternoon"
                className="w-4"
                checked={period === "afternoon"}
                onChange={(e) => setPeriod(e.currentTarget.value)}
              />
              <label htmlFor="afternoon" className="text-brand-lightGrey">
                Tarde
              </label>
            </div>

            <p>12:01 às 18:00</p>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-2">
              <input
                type="radio"
                id="evening"
                name="period"
                value="evening"
                className="w-4"
                checked={period === "evening"}
                onChange={(e) => setPeriod(e.currentTarget.value)}
              />
              <label htmlFor="evening" className="text-brand-lightGrey">
                Noite
              </label>
            </div>

            <p>18:01 às 23:00</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 mt-5">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="showCloseUnits"
              id="showCloseUnits"
              className="w-4 h-4"
              checked={showCloseUnits}
              onChange={() => setShowCloseUnits((prev) => !prev)}
            />
            <label htmlFor="showCloseUnits" className="text-black">
              Exibir unidades fechadas
            </label>
          </div>

          <h3>
            Resultados encontrados:{" "}
            <span className="font-semibold text-xl"></span>
          </h3>
        </div>

        <div className="flex flex-col gap-3 mt-5">
          <Button variant="primary" onClick={handleSubmit}>
            Encontrar unidade
          </Button>
          <Button variant="outlined">Limpar</Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
