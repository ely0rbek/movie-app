import React,{Component} from "react";
import Loader from "../component/Loader";
import Movies from "../component/Movies";
import Search from "../component/Search";
export default class Main extends React.Component{
    state={
        movies:[],
        loading:true
    }
    componentDidMount(){
        fetch('http://www.omdbapi.com/?apikey=59f8a83e&s=iron')
        .then(res=> res.json())
        .then(data=> this.setState({movies:data.Search,loading:false}))
    }
    searchMovies=(kino,type='all')=>{
        this.setState({loading:true})
        fetch(`http://www.omdbapi.com/?apikey=59f8a83e&s=${kino}${type!== 'all' ? `&type=${type}`: ''}`)
        .then(res=> res.json())
        .then(data=> this.setState({movies:data.Search,loading:false}))
    }
    render(){
        return(
            <div className="container content bigMain">
                <Search searchMovies={this.searchMovies}/>
                { this.state.loading ? <Loader /> :  (<Movies movies={this.state.movies}/>)}
                
            </div>
        )
    }
}