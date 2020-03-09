import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

const ListItem = ({article}) => (
  <TouchableOpacity onPress={() => null} style={{flexDirection: 'row'}}>
    <Image
      // eslint-disable-next-line react-native/no-inline-styles
      style={{flex: 1, width: 50, marginRight: 5}}
      source={{uri: article.urlToImage}}
    />
    <View style={{flex: 1}}>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          fontWeight: 'bold',
          fontSize: 15,
          marginBottom: 5,
          marginTop: 5,
        }}>
        {article.title}
      </Text>
      <Text>{article.publishedAt}</Text>
      <Text>{article.description}</Text>
    </View>
  </TouchableOpacity>
);

export default ListItem;
