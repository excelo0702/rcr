import React, {Component} from 'react';
import './SearchBox.css'
import firebase from 'firebase';

class SearchBox extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <form onSubmit={this.props.onSubmitHandler} >
                <input type="text" placeholder="Search Components" onChange={this.props.onChangeHandler} className="body"/>
                <button type="submit" value="Submit" className="searchBtn"><i class="fa fa-search"></i></button>
            </form>
        )
    }

}

export default SearchBox;