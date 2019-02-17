import React from 'react';
import ImageService from "../Services/ImageService";

export default class Myshow extends React.Component {
    constructor(props) {
        super(props);
        this.imageService = new ImageService();
        this.state = ({

        })

    }

    getShowName = (event) => {
        this.setState({
                          imageSource: event.target.value
                      });
        this.imageService.getImage(event.target.value);
    };
    showMyImage = () => {
        let show = this.imageService.printShow();
        this.setState({
                          show: show
                      })
    };

    render() {
        return (
            <div>
                <div className={"container-fluid"}>
                    <div className={"jumbotron"}>
                        <h1>Showtime!</h1>
                    </div>
                    <div className={"container-fluid row"}>
                        <input className={"form-control col-10"} placeholder={"Search"}
                               onChange={this.getShowName}/>
                        <button className={"btn btn-primary col-2"}
                                onClick={this.showMyImage}
                                type={"button"}>Go!
                        </button>
                    </div>
                    {this.state.show != undefined &&
                     <div className={"container-fluid my-5"}>
                         <h1>{this.state.show.name}</h1>
                         <div className={"row"}>
                             <div className={"col-6 my-5"}>
                                 <img src={this.state.show.image.medium}/>
                             </div>
                             <div className={"col-6"}>
                                 {this.state.show.summary}
                                 <br/>
                                 Rating : {this.state.show.rating.average}
                             </div>
                         </div>
                     </div>}
                </div>
            </div>
        );
    }

}
