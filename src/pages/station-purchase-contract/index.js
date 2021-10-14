import React, { Component } from 'react';
import { 
  View, 
  Text, 
  FlatList,
  TouchableOpacity,
  RefreshControl,
  StyleSheet
} from 'react-native';
import SearchBar from '../../components/searchBar';
import rest from '../../util/rest';

export default class purchaseContract extends Component {
  constructor(props){
    super(props);
    this.state = {
      contractList: [],
      test: false,
      inputValue: ''
    }
  }
  componentDidMount(){
    this.getContractList();
  }
  getContractList(){
    const param = {
      purchaseContractCode: this.state.inputValue
    }
    rest.purchaseContractList(param).then(res => {
      this.setState({
        contractList: res.data,
      })
    })
  }
  getInputValue(val) {
    this.setState({
      inputValue: val
    })
    this.getContractList();
  }
  renderItem({item}){
    return (
      <View style={{
        margin: 16,
        backgroundColor: '#fff',
        borderRadius: 4
      }}>
        <View style={[styles.rowItem, {height: 38}]}>
          <Text style={styles.text1}>合同编号</Text>
          <Text>{item.purchaseContractCode || ''}</Text>
        </View>
        <View style={[styles.divider, {marginHorizontal: 0}]}></View>
        <View style={styles.rowItem}>
          <Text style={styles.text1}>原材大类</Text>
          <Text>{item.materialClass || ''}</Text>
        </View>
        <View style={styles.rowItem}>
          <Text style={styles.text2}>{item.materialName || ''}</Text>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.rowItem}>
          <Text style={styles.text1}>材料标识</Text>
          <Text>{item.materialSign || ''}</Text>
        </View>
        <View style={styles.rowItem}>
          <Text style={styles.text1}>采购人</Text>
          <Text>{item.purchaserUser || ''}</Text>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.rowItem}>
          <Text style={styles.text1}>供应商</Text>
          <Text>{item.supplierName || ''}</Text>
        </View>
        <View style={styles.rowItem}>
          <Text style={styles.text1}>运输单位</Text>
          <Text>{item.transportUnitName || ''}</Text>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.rowItem}>
          <Text style={styles.text1}>采购单价</Text>
          <Text>{item.unitPrice && item.unitPrice + '元' || ''}</Text>
        </View>
        <View style={styles.rowItem}>
          <Text style={styles.text1}>采购数量</Text>
          <Text>{item.quantity && item.quantity + 'kg' || ''}</Text>
        </View>
        <View style={styles.rowItem}>
          <Text style={styles.text1}>采购金额</Text>
          <Text>{item.amount && item.amount + '元' || ''}</Text>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.btnRow}>
          <TouchableOpacity 
            style={styles.btn}
            onPress={() => {
              this.props.navigation.navigate('purchaseContractSet');
            }}
          >
            <Text style={{textAlign: 'center', lineHeight: 30}}>设定单价</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
  render() {
    let {contractList} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: '#f0f0f0'}}>
        <SearchBar input={this.getInputValue.bind(this)} />
        <FlatList
          data={contractList}
          initialNumToRender='10'
          renderItem={this.renderItem.bind(this)}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rowItem: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    height: 30
  },
  text1: {
    color: '#969799',
    marginRight: 16,
    width: 60
  },
  text2: {
    fontWeight: '500',
    fontSize: 15
  },
  divider: {
    height: 2,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 16
  },
  btnRow: {
    paddingHorizontal: 16,
    height: 48,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  btn: {
    width: 86,
    height: 32,
    borderWidth: 1,
    borderColor: '#DCDEE0',
    borderRadius: 4
  }
})
