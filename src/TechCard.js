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
                    {this.props.prereqs ?
                        this._getPrereqDots(this.props.prereqs) :
                        this.props.rank > 0 ? rankDots : 'Basic'
                    }
                </div>
            </div>
        );
    }

    _getPrereqDots(prereqString) {
        let dots = [];
        for (var i = 0; i < prereqString.length; i++) {
            switch (prereqString[i]) {
                case 'R':
                    dots.push(<div key={i} className="tech-card__rank-dot tech-card__rank-dot--R" />);
                    break;
                case 'G':
                    dots.push(<div key={i} className="tech-card__rank-dot tech-card__rank-dot--G" />);
                    break;
                case 'Y':
                    dots.push(<div key={i} className="tech-card__rank-dot tech-card__rank-dot--Y" />);
                    break;
                case 'B':
                    dots.push(<div key={i} className="tech-card__rank-dot tech-card__rank-dot--B" />);
                    break;
                default:
                    break;
            }
        }

        return dots;
    }
}

export default TechCard;
