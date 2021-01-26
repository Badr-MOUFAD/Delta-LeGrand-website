import React from 'react';
import MathJax from 'react-mathjax2';

import imgSchema from "assets/img/content-image/plateau-schema.svg";
import imgEquation from "assets/img/content-image/plateau-equation.svg";
import imgEspace from "assets/img/content-image/plateau-espace.png";


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
        image: imgSchema,
        width:400,
        heigh:400,
    },
    {
        id: "plateau-equation-mouvement",
        title: "Equation du mouvement",
        description: <EquationPlateau />,
        image: imgEquation,
        height: 500,
        width: 600,
    },
    {
        id: "plateau-espace-travail",
        title: "Espace de travail",
        description: <WorkspacePlateau />,
        image: imgEspace,
        height: 400,
        width: 400,
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

            <MathJax.Context input="tex">
                <MathJax.Node>{`L_i = z + \\frac{n_x.(x - x_{P_i}) + n_y.(y - y_{P_i})}{n_z}`}</MathJax.Node>
            </MathJax.Context>

            avec :

            <MathJax.Context input="tex">
                <MathJax.Node>{`Pi \\in \\{ A, B, C\\}`}</MathJax.Node>
            </MathJax.Context>

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