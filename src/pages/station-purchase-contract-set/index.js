import React, { Component } from 'react'
import { 
  Text, 
  View,
  StyleSheet
} from 'react-native'
import { DatePicker } from "@ant-design/react-native";

export default class purchaseContractSet extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f0f0f0'}}>
        <View style={styles.content}>
          <View style={styles.rowItem}>
            <Text>材料名称</Text>
            <Text>水泥</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 4
  },
  rowItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 44,
    marginHorizontal: 12,
    borderBottomColor: '#f0f0f0'
  }
})
