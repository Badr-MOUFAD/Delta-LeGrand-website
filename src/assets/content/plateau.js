import React from 'react';
import Latex from 'react-latex';

import imgSchema from "assets/img/content-image/plateau-schema.svg";
import imgEquation from "assets/img/content-image/plateau-equation.svg";
import imgEspace from "assets/img/content-image/plateau-espace.png";

import gifPlateau from "assets/gif/plateau.gif";



export const sidebarLinks = [
    {
        text: "Schéma cinématique",
        href: "#plateau-schema-cinematique",
    },
    {
        text: "Equations de mouvement",
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
        title: "Equations du mouvement",
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
        image: gifPlateau,
    },
];


function SchemaPlateau(props) {

    return(
        <span>
            L’inclinaison du plateau est assurée par des liaisons hélicoïdales entrainées chacune d’elles par un moteur pas à pas, 
            au long desquelles translatent verticalement les coulisseaux et les rotules qui y sont fixées.
            Une tige est attachée à chaque rotule, au long de celle-ci un pivot glissant peut translater. <br />

            L’objectif d’un tel dispositif est de compenser la distance engendrée par l’inclinaison du plateau.
        </span>
    );
}

function EquationPlateau(props) {

    return(
        <span>
            Cinq paramètres suffisent pour décrire la configuration du plateau : 
            deux angles pour l’inclinaison et un point (trois coordonnées) par lequel passe le plateau. <br />
            L’objectif est de trouver la commande à fournir aux 3 moteurs pour parvenir à la configuration souhaitée. <br /><br />
            En écrivant l’équation du plan engendré par les trois rotules 
            et en y injectant à chaque fois les coordonnées d’une rotule on obtient ce qui suit :

            <div
                className="d-flex justify-content-center my-2"
                style={{fontSize: "15px", overflowX: "auto", overflowY: "hidden"}}
                >
                <Latex>
                    {"$$ L_i = z +  \\frac{n_x.(x - x_{P_i}) + n_y.(y - y_{P_i})}{n_z} $$"}
                </Latex>
            </div>

            avec :

            <div
                className="d-flex justify-content-center my-2"
                style={{fontSize: "15px", overflowX: "auto", overflowY: "hidden"}}
                >
                <Latex>
                    {"$$ Pi \\in \\{ A, B, C\\} $$"}
                </Latex>
            </div>

        </span>
    );
}

function WorkspacePlateau(props) {

    return(
        <span>
            Via une simulation numérique, on détermine l’inclinaison que peut effectuer le plateau dans toutes les directions au niveau de chaque plan z fixé : <br />
	        Pour une inclinaison θ, on vérifie : <br />
            Qu’elle est effectuée dans toutes les directions Φ <br />
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