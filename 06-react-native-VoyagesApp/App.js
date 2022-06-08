import { useState } from "react";
import { MyTabs } from "./src/MenuPrincipal";

export default function App() {
  const [voyages, setVoyages] = useState([]);

  const ajouterVoyage = (voyage) => {
    setVoyages((currentVoyages) => currentVoyages.concat(voyage));
  };

  const ajouterLieu = (voyage, lieu) => {
    const index = voyages.findIndex((v) => v.id === voyage.id);
    voyages[index].lieux.push(lieu);
  };

  return (
    <MyTabs
      screenProps={{}}
      voyages={voyages}
      onAjouterVoyage={ajouterVoyage}
      onAjouterLieu={ajouterLieu}
    />
  );
}
