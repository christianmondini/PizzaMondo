import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Card from '../components/card';
import margherita from '../images/margherita.jpg';
import diavola from '../images/diavola.jpg';
import vegetariana from '../images/vegetariana.jpg';




class App extends Component {
    
    state = {
        cards: [
            { id: 0, nome: "margherita", prezzo: 5.99, immagine: margherita, quantità: 0 },
            { id: 1, nome: "vegetariana", prezzo: 8.99, immagine: vegetariana, quantità: 0 },
            { id: 2, nome: "diavola", prezzo: 7.99, immagine: diavola, quantità: 0 },

        ]
    }

    handleIncrement = card => {
        const cards = [...this.state.cards];
        const id = cards.indexOf(card);
        cards[id] = { ...card };
        cards[id].quantità++;
        this.setState({ cards });
    }

    handleDecrement = card => {
        const cards = [...this.state.cards];
        const id = cards.indexOf(card);
        cards[id] = { ...card };
        cards[id].quantità--;
        this.setState({ cards });
    }

    render() {
        
        return (
            <>
                <Navbar />
                
                <div className='container' >
                    <h1> Cosa vuoi ordinare ?</h1>
                    <hr />
                    <div className='row' > {
                        this.state.cards.map(card => (<
                            Card key={card.id}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            card={card}
                        />))
                    } </div>
                </div>

            </>
        );
    }
    
}
export default App;