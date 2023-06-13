import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

class App extends Component {
  render() { 
    return ( 
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          zoomControlEnabled={true}
          initialRegion={{
            latitude: 0.92804769639356,
            longitude: 104.44775090441074,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}>
        </MapView>
      </View>
    );
  }
}

export default App;