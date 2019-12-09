import React, { Component } from 'react';
import axios from 'axios';

class ImageApi extends Component {
    constructor() {
        super();
        this.state = {
            pics: []
        }
    }
    componentDidMount() {
        axios({
            url: 'https://picsum.photos/v2/list',
            method: 'GET',
            responseType: 'json',
            params: {
                limit: 10,
            }
        }).then((res) => {
            console.log(res.data);
            const data = res.data
            const downloadUrl = data.map((item) => {
                return item.download_url;
            });

            this.setState({
                pics: downloadUrl
            });
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.pics.map( (item) => {
                        return <img src={item} />
                    })
                }
            </div>
        )
    }
}

export default ImageApi;