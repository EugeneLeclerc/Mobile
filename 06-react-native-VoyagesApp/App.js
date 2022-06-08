import {useState} from 'react';

import {MenuPrincipal} from "./src/MenuPrincipal";


export default function App() {

    const [voyages] = useState([]);

    return (
        <MenuPrincipal screenProps={{}}/>
    );
}
