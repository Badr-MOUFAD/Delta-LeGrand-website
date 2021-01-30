import React from "react";
import Latex from 'react-latex';

import imgSchema from "assets/img/content-image/nacelle-schema.svg";
import imgEquation from "assets/img/content-image/nacelle-equation.svg";
import imgEspace from "assets/img/content-image/nacelle-espace.png";

import gifNacelle from "assets/gif/nacelle.gif";


export const sidebarLinks = [
    {
        text: "Schéma cinématique",
        href: "#nacelle-schema-cinematique",
    },
    {
        text: "Equation de mouvement",
        href: "#nacelle-equation-mouvement",
    },
    {
        text: "Espace de travail",
        href: "#nacelle-espace-travail",
    },
    {
        text: "SolidWorks",
        href: "#nacelle-solidworks"
    }
];

export const content = [
    {
        id: "nacelle-schema-cinematique",
        title: "Schéma cinématique",
        description: <SchemaNacelle />,
        image: imgSchema,
        height: 400,
        width: 400,
    },
    {
        id: "nacelle-equation-mouvement",
        title: "Equation du mouvement",
        description: <EquationNacelle />,
        image: imgEquation,
        height: 500,
        width: 600,
    },
    {
        id: "nacelle-espace-travail",
        title: "Espace de travail",
        description: Workspace(),
        image: imgEspace,
        heigh: 400,
        width: 400,
    },
    {
        id: "nacelle-solidworks",
        title: "SolidWorks",
        description: "La simulation suivante exhibe le fonctionnent de la nacelle",
        image: gifNacelle,
    },
];


function SchemaNacelle(props) {

    return(
        <span>
            Le mouvement de la nacelle est principalement dû à une liaisons hélicoïdales entrainées, chacune d’elles par un moteur pas à pas. <br />
            Notons que dans ce schéma on se focalise sur uniquement un seul côté. La liaison hélicoïdale permet la translation verticale d’un coulisseau. <br />
            Deux rotules émanent du coulisseau qui elles-mêmes sont reliées à deux autres rotules fixées au niveau de la nacelle. <br /> <br />
            L’objectif cette dernière disposition est de contraindre la nacelle à garder une position horizontale
        </span>
    );
}

function EquationNacelle(props) {

    return(
        <span>
            L’objectif est de trouver la commande (sous forme d’une distance) à fournir aux moteurs pas à pas pour parvenir à une position souhaitée. <br /> 
            La particularité de notre cas est que chaque axe est décrit par ces propres paramètres auxquelles sont ajoutés l’inclinaison de l’axe. <br /> 
            Le choix d’un tel niveau de détail dans la modélisation est motivé par le fait de prendre en compte les défauts géométriques de conception. <br /> <br />
            Par une fermeture géométrique, on établit que la longueur chercher vérifie l’équation du second ordre suivante : 

            <div
                className="d-flex justify-content-center my-2"
                style={{fontSize: "15px", overflowX: "auto", overflowY: "hidden"}}
                >
                <Latex>
                    {"$$ (n_x^2 + n_y^2 + n_z^2).L_i^2 + (n_x.E_{xi} + n_y.E_{yi} + n_z.E_{zi}).L_i + E_{xi}^2 + E_{yi}^2 + E_{zi}^2 - l_i^2 = 0 $$"}
                </Latex>
            </div>

            avec :

            <div
                className="d-flex justify-content-center my-2 my-2"
                style={{fontSize: "15px", overflowX: "auto", overflowY: "hidden"}}
                >
                <Latex>
                    {"$$ n_x, n_y, n_z $$"}
                </Latex>
            </div>

            coordonnées de la normal exprimées en coordonnées sphérique et :

            <div
                className="d-flex justify-content-center my-2 my-2"
                style={{fontSize: "15px", overflowX: "auto", overflowY: "hidden"}}
                >
                <Latex>
                    {"$$ E_{xi} \\in \\{x + S_\\pi(R_1-r_1), \\space x + S_\\pi(-R_2+r_2),\\space x \\} $$"}
                </Latex>
            </div>
            <div
                className="d-flex justify-content-center my-2 my-2"
                style={{fontSize: "15px", overflowX: "auto", overflowY: "hidden"}}
                >
                <Latex>
                    {"$$ E_{yi} \\in \\{y + C_\\pi(R_i-r_i), \\space x + C_\\pi(-R_i+r_i),\\space x + (-R_i+r_i) \\} $$"}
                </Latex>
            </div>
            <div
                className="d-flex justify-content-center my-2 my-2"
                style={{fontSize: "15px", overflowX: "auto", overflowY: "hidden"}}
                >
                <Latex>
                    {"$$ E_{zi} \\in \\{ z \\} $$"}
                </Latex>
            </div>

        </span>
    );
}


function Workspace(props) {

    return(
        <span>
            On détermine par le biais d’une simulation numérique l’ensemble des points atteignables par la nacelle. Pour un point donné, on vérifie : <br/> <br/>
            Qu’il est <strong>théoriquement atteignable</strong>, c’est-à-dire que les équations de commande en sont bien déterminées <br/>
            Qu’il est <strong>pratiquement atteignable</strong>, c’est-à-dire que les longueurs calculées ne dépassent pas la longueur des axes et que les frontières de la nacelle ne dépassent pas les bordures du robot.
        </span>
    );
}

