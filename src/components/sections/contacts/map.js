import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from "react";


export class GMap extends Component {

    render() {
        const style = {
            width: '100%',
            height: '70vh'
        }
        return (
            <Map google={this.props.google} zoom={14} style={style}>

                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>

                    </div>
                </InfoWindow>
            </Map>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyC5vQtmGVhFWpFQk90n72latEEax4dxF7E")
})(GMap)
