import React from 'react';
import ImageService from "../Services/ImageService";

export default class Myshow extends React.Component {
    constructor(props) {
        super(props);
        this.imageService = new ImageService();
        this.state = ({
            imageSource: ''
        })

    }

    getShowName = (event) => {
        this.setState({
                          imageSource: event.target.value
                      })
    };
    showMyImage = () => {
        this.imageService.getImage(this.state.imageSource)
    };

    render() {
        return (
            <div>
                <div className={"container-fluid"}>
                    <div className={"jumbotron"}>
                        <h1>My App!</h1>
                    </div>
                    <div className={"container-fluid row"}>
                        <input className={"form-control col-10"} placeholder={"Search"}
                               onChange={this.getShowName}/>
                        <button className={"btn btn-primary col-2"}
                                onClick={this.showMyImage}>Go!
                        </button>
                    </div>
                    <div className={"my-5"}>
                        <img src={this.state.imageSource}/>
                    </div>
                </div>
            </div>
        );
    }

}
