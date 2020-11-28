import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import RightPageCard from './rightPageCard';
import axios from 'axios';
import SearchBox from './SearchBox';

class rightPage extends Component{

    state = {
        Cards: [],
        todos:[],
        searchField:50
    }

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/todos/`)
        .then(res => {
            console.log(res);
            this.setState({todos:res.data})
        });
    }

    

    handleChange = (e) =>{
        this.setState({searchField:e.target.value})
        console.log(e.target.value);
      }

    render(){
        


    return(
        <div>
            <SearchBox placeholder="Enter Product name ..." handleChange={this.handleChange}/>
            {this.state.todos.map(todos => todos.id<this.state.searchField ? <RightPageCard title={todos.title} body={todos.userId}/>:null)}


        </div>
    );
    }
}

export default rightPage;