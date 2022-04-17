import React, { useState } from 'react'
import "./inventory.css"

export const Inventory = () => {
    const x = Math.floor((Math.random() * 10) + 1)
    const y = Math.floor((Math.random() * 10) + 1)
    const z = Math.floor((Math.random() * 10) + 1)

    const [books, setBooks] = useState(x)
    const [pens, setPens] = useState(y)
    const [notebooks, setNotebooks] = useState(z)


    const BooksIncrement = () => {
        setBooks(books + 1)
    }
    const BooksDecrement = () => {
        if (books >= 1) {
            setBooks(books - 1)
        }
    }

    const PensIncrement = () => {
        setPens(pens + 1)
    }
    const PenssDecrement = () => {
        if (pens >= 1) {
            setPens(pens - 1)
        }
    }

    const NotebooksIncrement = () => {
        setNotebooks(notebooks + 1)
    }
    const NotebookssDecrement = () => {
        if (notebooks >= 1) {
            setNotebooks(notebooks - 1)
        }
    }

    return (
        <div>
            <div className='flexdiv'>

                <h3>Books</h3>
                <div className='sidediv'>
                <button onClick={BooksIncrement}>+</button>
                <p>{books}</p>
                <button onClick={BooksDecrement}>-</button>
                </div>

            </div>
            <hr />
            <div className='flexdiv'>
                <h3>Pens</h3>
                <div className='sidediv'>
                <button onClick={PensIncrement}>+</button>
                <p>{pens}</p>
                <button onClick={PenssDecrement}>-</button>
                </div>
            </div>

            <hr />
            <div className='flexdiv'>
                <h3>Books</h3>
               <div className='sidediv'>
               <button onClick={NotebooksIncrement}>+</button>
                <p>{notebooks}</p>
                <button onClick={NotebookssDecrement}>-</button>
               </div>
            </div>
            <hr />
            <h3>Total : {books + pens + notebooks}</h3>
        </div>
    )
}
