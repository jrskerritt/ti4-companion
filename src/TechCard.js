import React, { Component } from 'react';
import './TechCard.css';

class TechCard extends Component {
    render() {
        let rankDots = [];
        for (var i = 0; i < this.props.rank; i++) {
            rankDots.push(<div key={i} className="tech-card__rank-dot" />);
        }

        return (
            <div className={`tech-card ${this.props.color}`}>
                <div className="tech-card__name">
                    {this.props.name}
                </div>
                <div className="tech-card__description">
                    {this.props.description}
                </div>
                <div className="tech-card__rank">
                    {this.props.rank > 0 ? rankDots : 'Basic'}
                </div>
            </div>
        );
    }
}

export default TechCard;
