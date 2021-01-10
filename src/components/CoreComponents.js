import React from 'react';


export function GradientSectionWithCircles(props) {

    return(
        <div className="position-relative">
                <section className="section section-hero section-shaped">
                    <div className="shape shape-style-1 shape-default">
                        <span className="span-150" />
                        <span className="span-50" />
                        <span className="span-50" />
                        <span className="span-75" />
                        <span className="span-100" />
                        <span className="span-75" />
                        <span className="span-50" />
                        <span className="span-100" />
                        <span className="span-50" />
                        <span className="span-100" />
                    </div>

                    {props.children}

                    <SvgSeperator />
                </section>
            </div>
    );
}


export function SvgSeperator(props) {

    return(
        <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
                <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                    />
            </svg>
        </div>
    );
}
