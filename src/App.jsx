import React from 'react';
import {GradationsList} from './components';
import defaultDataset from './dataset';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gradationsProperty: [],
      dataset: defaultDataset
    }
    this.selectCopy = this.selectCopy.bind(this);
  }

  initGradationProperty = () => {
    const linearDatas = this.state.dataset.gradation.linear;
    let propertyDatas = [];
    linearDatas.map(value => propertyDatas.push(value.property));

    this.setState({
      gradationsProperty: propertyDatas
    })
  }

  selectCopy = (index) => {
    const copyIndex = index;
    // console.log(copyIndex);
    // コピー対象をJavaScript上で変数として定義する
    const copyId = `copy-target-${copyIndex}`;
    const gradationId = `gradation-color-${copyIndex}`;
    const copyTarget = document.getElementById(copyId);

    // コピー対象のテキストを選択する
    copyTarget.select();

    // 選択しているテキストをクリップボードにコピーする
    const res = document.execCommand("Copy");

    if(res) {
      console.log('成功')
      // const copyText = document.getElementById(gradationId).querySelector('.copy-text');
      // console.log(copyText.innerHTML('変更'))
      setTimeout(() => {
        // copyText.innerHTML('CSS COPY');
      }, 500)
    }else {
      alert("コピーに失敗しました。もう一度お試しください。");
    }
  }

  componentDidMount() {
    this.initGradationProperty();
  }

  render() {
    return(
      <>
        <GradationsList gradationsProperty={this.state.gradationsProperty} selectCopy={this.selectCopy} />
      </>
    )
  }
}
