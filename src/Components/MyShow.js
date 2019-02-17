import React from 'react';
import ImageService from "../Services/ImageService";

export default class MyShow extends React.Component {
    constructor(props) {
        super(props);
        this.imageService = new ImageService();
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
        console.log(data)
    };

    render() {
        return (
            <div>
                <div className={"container-fluid"}>
                    <div className={"jumbotron"}>
                        <h1>Wiki of Shows</h1>
                    </div>
                    <div className={"container-fluid row"}>
                        <input className={"form-control col-10"} placeholder={"Search"}
                               onChange={this.getShowName}/>
                        <button className={"btn btn-primary col-2"}
                                onClick={this.showMyImage}
                                type={"button"}>Go!
                        </button>
                    </div>
                    {
                        this.state.data != undefined &&
                        this.state.data.map((array) =>
                        <div>
                            {
                                array.show!= undefined &&
                                array.show.name != undefined &&
                                array.show.image != undefined &&
                                <div>
                                    <div className={"container-fluid my-5"}>
                                        <h1>{array.show.name}</h1>
                                        <div>
                                            <div className={"my-5"}>
                                                <img src={array.show.image.medium}/>
                                            </div>
                                            <div>
                                                <div dangerouslySetInnerHTML={{ __html: array.show.summary }} />
                                                <br/>
                                                Premiered : {array.show.premiered}
                                                <br/>
                                                Language : {array.show.language}
                                                <br/>
                                                Rating : {array.show.rating.average}
                                                <br/>
                                                {
                                                    array.show.genres.map((genre) =>
                                                                              <div>
                                                                                  <ul className={"nav nav-pills"}></ul>
                                                                                  <li className={"nav-item"}>
                                                                                      {genre}
                                                                                  </li>
                                                                              </div>
                                                    )
                                                }
                                            </div>
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
