import React from 'react';


export const sidebarLinks = [
    {
        text: "Schéma cinématique",
        href: "#plateau-schema-cinematique",
    },
    {
        text: "Equation de mouvement",
        href: "#plateau-equation-mouvement",
    },
    {
        text: "Espace de travail",
        href: "#plateau-espace-travail",
    },
    {
        text: "SolidWorks",
        href: "#plateau-solidworks"
    }
];

export const content = [
    {
        id: "plateau-schema-cinematique",
        title: "Schéma cinématique",
        description: <SchemaPlateau />,
        image: "",
    },
    {
        id: "plateau-equation-mouvement",
        title: "Equation du mouvement",
        description: <EquationPlateau />,
        image: "",
    },
    {
        id: "plateau-espace-travail",
        title: "Espace de travail",
        description: <WorkspacePlateau />,
        image: "",
    },
    {
        id: "plateau-solidworks",
        title: "SolidWorks",
        description: <SimulationPlateau />,
        image: "",
    },
];


function SchemaPlateau(props) {

    return(
        <span>
            L’inclinaison du plateau est assurée par des liaisons hélicoïdales entrainées chacune d’elle par un moteur pas à pas. <br />
            Une rotule attachée au coulisseau est susceptible de translater verticalement grâce à celles-ci à la liaison hélicoïdale.
            Une tige au long de laquelle un pivot glissant est capable de translater et attaché à la rotule. <br /> <br/>
            L’objectif d’un tel dispositif est de compenser la distance engendrer par l’inclinaison du plateau 
        </span>
    );
}

function EquationPlateau(props) {

    return(
        <span>
            Cinq paramètres suffisent pour décrire la configuration du plateau : 
            deux angles pour l’inclinaison et un point (trois coordonnées) par lequel passe le plateau. <br />
            L’objectif est de trouver la commande à fournir aux trois moteurs pour parvenir à une configuration souhaitée. <br /><br />
            En écrivant l’équation du plan engendré par les trois rotules 
            et en y injectant à chaque fois les coordonnées d’une rotule on obtient ce qui suit :

        </span>
    );
}

function WorkspacePlateau(props) {

    return(
        <span>
            Par l’intermédiaire d’une simulation numérique, on détermine l’inclinaison qui peut être effectuer dans toutes les directions au niveau de chaque plan z fixé : <br />
	        Pour une inclinaison θ, on vérifie : <br />
            Qu’elle est effectuée dans tous les directions Φ
	        Que les longueurs calculées à fournir aux moteurs ne dépassent pas les longueurs des axes et les limites des glissières
        </span>
    );
}

function SimulationPlateau(props) {

    return(
        <span>
            La simulation suivante montre le design ainsi que le fonctionnent du plateau
        </span>
    );
}