import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import FilterSource from './src/container/FilterSource';
import ListSource from './src/container/ListSource';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <FilterSource />
          <ListSource />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
