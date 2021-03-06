import React,{Component} from 'react';
import '../css/card.css';


class Card extends Component{
    render() {
        return (
            <div className='col card-distanza'>
                <div className="card " style={{ width: '15rem', textAlign: 'center', backgroundColor: 'white' }}>
                    <img src={this.props.card.immagine} className="card-img-top" alt="..." />
                    <div className="card-body carta">
                        <h5 className="card-title">{this.props.card.nome}</h5>
                        <p className="card-text">{this.props.card.prezzo}€</p>
                        <button onClick={ ()=> this.props.onIncrement(this.props.card)} className="btn btn-primary">Aggiungi <span className='badge badge-light'>{this.props.card.quantità}</span></button>
                        <br/>
                        <button onClick={ ()=> this.props.onDecrement(this.props.card)} className="btn btn-danger">Togli</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Card;