import React from 'react';

const imageUrl = 'https://api.tvmaze.com/search/shows?q='
export default class ImageService extends React.Component {

    getImage = (showName) => {
        fetch(imageUrl + showName).then(response => {
            console.log(response);
            return response.json();
        })
    }
}
