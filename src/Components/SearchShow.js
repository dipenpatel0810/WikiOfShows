import React from 'react';
import ShowService from "../Services/ShowService";
import "../Style/WikiOfShows.css"
import {Link} from 'react-router-dom'

export default class SearchShow extends React.Component {
    constructor(props) {
        super(props);
        this.imageService = new ShowService();
        this.state = ({})

    }

    getShowName = (event) => {
        this.setState({
                          imageSource: event.target.value
                      });
        this.imageService.getImage(event.target.value);
    };
    showMyImage = () => {
        let data = this.imageService.printShow();
        this.setState({
                          data: data
                      })
    };

    render() {
        return (
            <div>
                <div className={"container-fluid"}>
                    <div className={"jumbotron bg-dark"}>
                        <h1 id={"Heading"}>Wiki of Shows</h1>
                    </div>
                    <div className={"container-fluid row"}>
                        <input className={"form-control col-11"} placeholder={"Search"}
                               onChange={this.getShowName}/>
                        <button className={"btn btn-primary mx-1"}
                                onClick={this.showMyImage}
                                type={"button"}>Go!
                        </button>
                    </div>
                    {
                        this.state.data !== undefined &&
                        this.state.data.map((array, key) =>
                                                <div>
                                                    {
                                                        (array.show !== undefined || array.show
                                                         !== null)
                                                        &&
                                                        (array.show.name !== undefined
                                                         || array.show.name !== null)
                                                        &&
                                                        (array.show.image !== undefined
                                                         || array.show.name !== null)
                                                        &&
                                                        (array.show.image !== null
                                                         || array.show.name !== null)
                                                        &&
                                                        (array.show.image.medium !== undefined
                                                         || array.show.image.medium !== null)
                                                        &&
                                                        <div>
                                                            <div className={"container-fluid my-5"}>
                                                                <Link
                                                                    to={`/show/${array.show.id}`}>
                                                                    <h1 id={"showName"}>{array.show.name}</h1>
                                                                </Link>
                                                                <div>
                                                                    <div className={"my-5"}>
                                                                        <Link
                                                                            to={`/show/${array.show.id}`}>
                                                                            <img
                                                                                src={array.show.image.medium}/>
                                                                        </Link>
                                                                    </div>
                                                                    {/*<ShowInfo show={array.show}/>*/}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                        )
                    }
                </div>
            </div>
        );
    }

}
