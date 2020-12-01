import React, {Component} from 'react';
import './SearchBox.css'

class SearchBox extends Component{


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