//state no es el estado del app completo,
//sino que es el state del que se encarga este reducer
//en este caso, el libro seleccionado
export default function (state = null, action) { //no se puede retornar undefined en un reducer
    switch(action.type){                         //por lo que se inicializa en null si es undefined
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state
}