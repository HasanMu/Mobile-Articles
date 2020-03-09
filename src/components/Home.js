import React, {Component} from 'react';
import {Text, Button} from 'react-native';
import {connect} from 'react-redux';

class Home extends Component {
  render() {
    return (
      <>
        <Button title="ADD" onPress={this.props.add} />
        <Text>{this.props.angka}</Text>
        <Button title="DELETE" onPress={this.props.delete} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    angka: state.count,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: () => dispatch({type: 'ADD'}),
    delete: () => dispatch({type: 'DELETE'}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
