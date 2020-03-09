import React, {Component} from 'react';
import {Text, StyleSheet, FlatList, View} from 'react-native';
import ListItem from '../components/ListItem';
import {connect} from 'react-redux';

class ListSource extends Component {
  state = {};

  componentDidMount = () => {
    this.props;
  };
  _renderITem = ({item, index}) => <ListItem article={item} />;

  render() {
    const {articlesBBC} = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={articlesBBC.data}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => (
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                height: 0.7,
                backgroundColor: 'rgba(0,0,0,0.5)',
                marginBottom: 5,
              }}
            />
          )}
          renderItem={this._renderITem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => ({
  articlesBBC: state.articlesBBC,
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, null)(ListSource);
