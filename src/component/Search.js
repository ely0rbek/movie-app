import React, { Component } from "react";
export default class Search extends React.Component {
    state = {
        search: '',
        type: 'all'
    }
    handleDown = (e) => {
        if (e.key === "Enter") {
            this.props.searchMovies(this.state.search,this.state.type)
        }
    }
    handleFilter = (e) => {
        this.setState(()=>({ type: e.target.dataset.type }),()=>{
            this.props.searchMovies(this.state.search,this.state.type)
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            id="email_inline"
                            type="search"
                            placeholder="Search"
                            className="validate"
                            value={this.state.search}
                            onChange={(e) => this.setState({ search: e.target.value })}
                            onKeyDown={this.handleDown}
                        />
                        <button className="btn search-btn" onClick={() => this.props.searchMovies(this.state.search,this.state.type)}>Search Movies</button>
                    </div>
                </div>
                <div>
                    <label>
                        <input className="with-gap"
                            name="type"
                            type="radio"
                            data-type="all"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'all'} />
                        <span>All</span>
                    </label>
                    <label>
                        <input className="with-gap"
                            name="type" type="radio"
                            data-type="movie"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'movie'}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input className="with-gap"
                            name="type"
                            type="radio"
                            data-type="series"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'series'}
                        />
                        <span>Serials only</span>
                    </label>
                </div>
            </div>
        )
    }
}