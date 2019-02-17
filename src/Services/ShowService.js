import React from 'react';

const imageUrl = 'https://api.tvmaze.com/search/shows?q=';
const fetchShowInforURL = 'http://api.tvmaze.com/shows/';
const fetchMoreDetailsOfShow = 'http://www.omdbapi.com/?t=Game Of Thrones&apikey=12625cbd'

var show = {};
export default class ShowService extends React.Component {

    getImage = (showName) => {
        fetch(imageUrl + showName).then(response => response.json()).then(
            data => {
                this.show = data;
                return data}
        )
    }

    printShow = () =>{
        return this.show;
    }

    fetchShowInfo = (showID) =>
        fetch(fetchShowInforURL + showID).then(response => {
            return response.json();
        }
                                                   )

    fetchMoreDetails = (showName) =>
        fetch('http://www.omdbapi.com/?t='+showName + '&apikey=12625cbd').then(response =>{
            console.log(response)
            return response.json()
        })



}
