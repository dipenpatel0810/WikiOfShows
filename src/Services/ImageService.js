import React from 'react';

const imageUrl = 'https://api.tvmaze.com/search/shows?q=';
var show = {};
export default class ImageService extends React.Component {

    getImage = (showName) => {
        fetch(imageUrl + showName).then(response => response.json()).then(
            data => {
                console.log(data);
                this.show = data;
                return data}
        )
    }

    printShow = () =>{
        return this.show;
    }
}
