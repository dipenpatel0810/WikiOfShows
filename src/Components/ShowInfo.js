import React from 'react';
import ShowService from "../Services/ShowService";
import {Link} from 'react-router-dom'

export default class ShowInfo extends React.Component {
    constructor(props) {
        super(props);
        this.showService = new ShowService();
        this.state = ({
            id: props.match.params.id,
        })
        this.getShow(this.state.id)
    }

    getShow = (showID) =>
        this.showService.fetchShowInfo(showID)
            .then(response => {
                      this.setState({
                                        show: response
                                    })
                      this.getMoreDetails(response.name);
                  }
            );

    getMoreDetails = (showName) =>
        this.showService.fetchMoreDetails(showName)
            .then(response => {
                console.log(response)
                this.setState({
                                  showExtras: response
                              })
                console.log(this.state.showExtras)
            });

    render() {

        return (
            this.state.showExtras !== undefined &&
            <div className={"container-fluid"}>
                <div>
                    <div className={"jumbotron bg-dark row"}>
                        <div className={"col-10"}>
                            <h1 id={"Heading"}>{this.state.showExtras.Title}</h1>
                        </div>
                        <div className={"col-2"}>
                            <Link to={"/"}>
                                <i className="backIcon fa fa-undo fa-2x"></i>
                            </Link>
                        </div>
                    </div>
                    <img src={this.state.showExtras.Poster}/>
                    <div className={"my-5"}
                        dangerouslySetInnerHTML={{__html: this.state.show.summary}}/>
                    <br/>
                    Released
                    : {this.state.showExtras.Released}
                    <br/>
                    Language
                    : {this.state.show.language}
                    <br/>
                    IMDB
                    : {this.state.showExtras.imdbRating}
                    <br/>
                    Actors
                    : {this.state.showExtras.Actors}
                    <br/>
                    Awards
                    : {this.state.showExtras.Awards}
                    <br/>
                    Genre
                    : {this.state.showExtras.Genre}
                </div>
            </div>
        );
    }

}
