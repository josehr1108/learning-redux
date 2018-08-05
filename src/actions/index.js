export function selectBook(book){
    //esta función es un ActionCreator, por lo tanto retorna un Action(que siempre llevará la propiedad type)
    return{
        type: 'BOOK_SELECTED',
        payload: book
    }
}