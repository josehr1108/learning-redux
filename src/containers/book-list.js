import React, {Component} from 'react';
import {connect } from 'react-redux';
import {selectBook} from "../actions/index";
import {bindActionCreators} from 'redux';

class BookList extends Component{
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li onClick={() => this.props.selectBook(book)}
                    key={book.title}
                    className="list-group-item">
                    {book.title}
                </li>
            )
        });
    }

    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

//Lo que se retorne en esta función acabara como propiedades
//en este container
function mapDispatchToProps(dispatch){
    //Cuando se llame al actionCreator 'selectBook' el resultado
    //se pasa a todos los reducers
    return bindActionCreators({selectBook: selectBook},dispatch);
}

function mapStateToProps(state) {
    //Lo que se retorne acá acabara siendo el this.props dentro del Component 'BookList'
    return{
        books: state.books
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);