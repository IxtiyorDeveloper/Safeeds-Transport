import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from "react";


export class GMap extends Component {

    render() {
        const style = {
            width: '100%',
            height: '70vh'
        }

        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={style}
                initialCenter={{
                    lat: 40.62284628985301,
                    lng: -73.96335934418308
                }}
            >

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
    apiKey: ("AIzaSyCB1vQhgArG3pHSL4T8_UB_E5Vghji8BBE")
})(GMap)
