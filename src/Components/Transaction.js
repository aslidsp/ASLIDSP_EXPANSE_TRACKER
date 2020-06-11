import React, {useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const Transaction = ({ transaction }) => {

    const {deleteTransaction} = useContext(GlobalContext);
    
    const sign = transaction.amount < 0 ? '-' : '+';
    const liclass = transaction.amount < 0 ? 'minus' : 'plus';

    return (
        <li className={liclass}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
        <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}
