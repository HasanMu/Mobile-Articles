import React, {Component} from 'react';
import {Text, StyleSheet, View, Picker, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {getSources, changeSources} from '../../redux/actions/sourcesBBC';

class FilterSource extends Component {
  state = {};

  componentDidMount = () => {
    this.props.getSources();
  };

  render() {
    const {sourcesBBC} = this.props;
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 18, marginRight: 10, marginLeft: 10}}>
          Filter Source
        </Text>
        <Picker
          style={{height: 50, flex: 1}}
          selectedValue={sourcesBBC.source}
          onValueChange={source => this.props.changeSource(source)}>
          {sourcesBBC.data.map((src, i) => (
            <Picker.Item key={src.id} label={src.name} value={src.id} />
          ))}
        </Picker>
        {sourcesBBC.loading && (
          <ActivityIndicator color="blue" size="small" animating />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const mapStateToProps = state => ({
  sourcesBBC: state.sourcesBBC,
});

const mapDispatchToProps = dispatch => ({
  getSources: () => dispatch(getSources()),
  changeSource: source => dispatch(changeSources(source)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterSource);
