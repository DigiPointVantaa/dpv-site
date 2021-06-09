import React from 'react';
import Hexagon from './Hexagon';
import './style.scss';

class Hexagons extends React.Component {
    render() {
        return (
            <div className="Hexagons">
                    <Hexagon
                        fill="yellow"
                        stroke="green"
                        strokeWidth={10}
                        radius={100}
                /><Hexagon
                    fill="blue"
                    stroke="green"
                    strokeWidth={1}
                    radius={10}
                />
            </div>
        );
    }
}

export default Hexagons;
