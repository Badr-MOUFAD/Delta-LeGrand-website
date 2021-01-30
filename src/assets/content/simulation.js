import React from "react";

import imgPlaque from "assets/img/content-image/plateau-plaque.png";
import imgLiaisons from "assets/img/content-image/plateau-liaison.png";


export const sidebarLinks = [
    {
        text: "Liaisons",
        href: "#simulation-tige",
    },
    {
        text: "Plaque",
        href: "#simulatione-plaque",
    },
];

export const content = [
    {
        id: "simulation-tige",
        title: "Liaisons",
        description: <Liaisons />,
        image: imgLiaisons,
    },
    {
        id: "simulatione-plaque",
        title: "Plaque",
        description: <Plaque />,
        image: imgPlaque,
    },
];


function Liaisons(props) {

    return(
        <span>
            On simule le cas extrème où on applique une charge de 10kg sur l'extrémité de l'arrêtes du plateau tout en inclinant de 15 degrés<br />
            On note qu'on tient on compte le poid du plateau.
        </span>
    );
}


function Plaque(props) {

    return(
        <span>
            On se positionne encore une fois dans le cas extrème où le plateau est incliné de 15 degrés
            et où on applique une charge de 10kg au niveau de l'extrémité de la plaque en aluminium.
        </span>
    );
}