import React, { Component } from 'react';
import TechCard from './TechCard';
import * as techCards from './cardData/techCards';
import './Tech.css';

class Tech extends Component {
    render() {
        return (
            <div className="tech">
                <h2>Technology Cards</h2>
                <div className="tech__basic">
                    <h3>Basic Tech</h3>
                    <div className="tech__list">
                        {Object.keys(techCards.greenCards).map(rank =>
                            <TechCard
                                key={techCards.greenCards[rank].name}
                                color="green"
                                rank={rank}
                                name={techCards.greenCards[rank].name}
                                description={techCards.greenCards[rank].value}
                            />
                        )}
                        {Object.keys(techCards.redCards).map(rank =>
                            <TechCard
                                key={techCards.redCards[rank].name}
                                color="red"
                                rank={rank}
                                name={techCards.redCards[rank].name}
                                description={techCards.redCards[rank].value}
                            />
                        )}
                        {Object.keys(techCards.yellowCards).map(rank =>
                            <TechCard
                                key={techCards.yellowCards[rank].name}
                                color="yellow"
                                rank={rank}
                                name={techCards.yellowCards[rank].name}
                                description={techCards.yellowCards[rank].value}
                            />
                        )}
                        {Object.keys(techCards.blueCards).map(rank =>
                            <TechCard
                                key={techCards.blueCards[rank].name}
                                color="blue"
                                rank={rank}
                                name={techCards.blueCards[rank].name}
                                description={techCards.blueCards[rank].value}
                            />
                        )}
                    </div>
                </div>
                <div className="tech__racial">
                    <h3>Racial Tech</h3>
                </div>
            </div>
        );
    }
}

export default Tech;
