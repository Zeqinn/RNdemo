import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';

import PropTypes from 'prop-types'
import styles from './styles';

export default function NavbarButton(props) {
  const {
    style,
    tintColor,
    title,
    handler,
    disabled,
    accessible,
    accessibilityLabel
  } = props;

  return (
    <TouchableOpacity
      style={styles.navBarButton}
      onPress={handler}
      disabled={disabled}
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
    >
      {/* <View style={style, {flexDirection: 'row', alignItems: 'center'}}>
        <Image 
          source={require('../../image/back.png')}
          style={{width: 10, height: 18, marginLeft: 12, marginRight: 8}}
        />
        <Text style={[styles.navBarButtonText, { color: '#6A6C67' }]}>返回</Text>
      </View> */}
      <View style={style}>
        <Text style={[styles.navBarButtonText, { color: tintColor }]}>{title}</Text>
      </View>

    </TouchableOpacity>
  );
}

NavbarButton.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  tintColor: PropTypes.string,
  title: PropTypes.string,
  handler: PropTypes.func,
  disabled: PropTypes.bool,
  accessible: PropTypes.bool,
  accessibilityLabel: PropTypes.string,
};

NavbarButton.defaultProps = {
  style: {},
  title: '',
  tintColor: '#0076FF',
  disabled: false,
  handler: () => ({}),
};
