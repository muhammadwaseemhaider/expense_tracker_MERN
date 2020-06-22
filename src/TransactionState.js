import React, { createContext, useReducer } from 'react'
import TransactionReducer from './TransactionReducer'

// Create the initial state

/* const initialState = {
    transactions: [
        {id:1, description: "Income 1", transactionAmount: 1000},
        {id:2, description: "Expense 1", transactionAmount: -100},
        {id:3, description: "Income 2", transactionAmount: 2000},
        {id:4, description: "Expense 2", transactionAmount: -500}
    ]
}
*/

const initialState = {
    transactions: []
}

// Create the transaction context

export const TransactionContext = createContext(initialState)

// Create a provider for the Transaction Context

export const TransactionProvider = ({children}) => {

    const [state, dispatch] = useReducer(TransactionReducer, initialState);

    // Actions for transactions

    function delTransaction(id) {
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })
    }

    return (
        <TransactionContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }>
            {children}
        </TransactionContext.Provider>
    )
}