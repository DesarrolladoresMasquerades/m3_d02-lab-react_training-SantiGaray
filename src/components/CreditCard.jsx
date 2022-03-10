import visa from '../assets/images/visa.png'
import master from '../assets/images/master-card.svg'
import './CreditCard.css'

export default function CreditCard(props){
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;

    let backgroundImg = master
    if (type === "Visa") backgroundImg = visa

    const lastFourNumbers = number.slice(number.length - 4, number.length)

    return (
        <div className="CreditCard" style={{backgroundColor: bgColor, color:color}}>
            <div className="type">
                <img src={backgroundImg} alt = {type}/>
            </div>
            <div className="number">
            •••• •••• •••• {lastFourNumbers}
            </div>
            <div className="expires-bank">
                <span>Expires {expirationMonth}/{expirationYear} </span>
                <span className="bank">{bank} </span>
            </div>
            <div className="owner">
                {owner}
            </div>
        </div>

    )
}