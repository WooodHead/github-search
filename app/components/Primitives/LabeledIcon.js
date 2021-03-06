import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default class LabeledIcon extends React.Component {
  getIcon = (iconType, iconName, iconSize, iconColor) => {
    const props = {
      name: iconName,
      size: iconSize,
      color: iconColor,
    };

    switch (iconType) {
      case 'material':
        return <MaterialIcon {...props} />;
      case 'entypo':
        return <EntypoIcon {...props} />;
      case 'evil':
        return <EvilIcon {...props} />;
      case 'font-awesome':
        return <FontAwesomeIcon {...props} />;
      default:
        return <MaterialIcon {...props} />;
    }
  };

  render() {
    const { iconType, iconName, iconSize, iconColor, item } = this.props;

    return (
      <View style={styles.itemContainer}>
        {this.getIcon(iconType, iconName, iconSize, iconColor)}
        <Text style={styles.text}>{item}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  text: {
    fontSize: 15,
    color: '#222',
    marginLeft: 10,
  },
});
