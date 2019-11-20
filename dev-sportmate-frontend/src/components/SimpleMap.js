import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const mapKeys = { key: "AIzaSyB-eUCU5B7zkVG8gKzf4Z2YhR_dEWFr9Wg", language: 'en', }


class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: -6.197558,
            lng: 106.785523
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyB-eUCU5B7zkVG8gKzf4Z2YhR_dEWFr9Wg" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={-6.197559}
                        lng={106.785524}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;