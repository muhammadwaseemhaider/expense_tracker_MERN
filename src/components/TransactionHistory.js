import React , {useContext} from 'react';
import {TransactionContext} from '../TransactionState';
import { Transaction } from './Transaction'

export const TransactionHistory = () => {

  const { transactions } = useContext(TransactionContext);

  return (
    <div>
      <h3>Transaction History </h3>
      <ul className="list">
        {transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction}/>)
        }
      </ul>
  </div>
  );
}
