import React from 'react';
import './style.scss';

interface HexagonProps {
    radius: number
    fill?: string
    stroke?: string
    strokeWidth: number
}

interface HexagonState {
    points: string
    width: number
    height: number
}

class Hexagon extends React.PureComponent<HexagonProps, HexagonState> {
    constructor(props: HexagonProps) {
        super(props);

        this.state = Hexagon.getDerivedStateFromProps(props);
    }

    static getDerivedStateFromProps(props: HexagonProps) {
        return {
            points: [
                [props.radius, 0],
                [props.radius * Math.cos(60 * Math.PI / 180), props.radius * Math.sin(60 * Math.PI / 180)],
                [props.radius * Math.cos(120 * Math.PI / 180), props.radius * Math.sin(120 * Math.PI / 180)],
                [-props.radius, 0],
                [props.radius * Math.cos(240 * Math.PI / 180), props.radius * Math.sin(240 * Math.PI / 180)],
                [props.radius * Math.cos(300 * Math.PI / 180), props.radius * Math.sin(300 * Math.PI / 180)],
            ].map(([x, y]) =>
                `${
                    x + props.radius + props.strokeWidth
                } ${
                    y + props.radius + props.strokeWidth / 2
                }`
            ).join(', '),
            width: props.radius * 2 + props.strokeWidth * 2,
            height: props.radius * 2 + props.strokeWidth,
        }
    }

    render() {
        return (
            <div className="Hexagon">
                <svg height={this.state.height} width={this.state.height}>
                    <polygon
                        points={this.state.points}
                        fill={this.props.fill}
                        stroke={this.props.stroke}
                        strokeWidth={this.props.strokeWidth.toString()}
                    />
                </svg>
            </div>
        );
    }
}

export default Hexagon;
