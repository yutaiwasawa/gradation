import React from 'react';
import reset from 'react-style-reset/string';
import { createGlobalStyle } from 'styled-components';
import { generateMedia } from 'styled-media-query';
import {GradationsList} from './components';
import defaultDataset from './dataset.json';

const customMedia = generateMedia({
  sm: '481px',
  md: '769px'
})

const m = customMedia.greaterThan('md');

const GlobalStyles = createGlobalStyle`
  ${reset};
  html {
    font-size: 62.5%;

    ${m`
      font-size: 100%;
    `}
  }

  body {
    font-size: 10px;

    ${m`
      font-size: 16px;
    `}
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }


`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gradationsProperty: [],
      dataset: defaultDataset
    }
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  initGradationProperty = () => {
    const linearDatas = this.state.dataset.gradation.linear;
    let propertyDatas = [];
    linearDatas.map(value => propertyDatas.push(value.property));

    this.setState({
      gradationsProperty: propertyDatas
    })
  }

  copyToClipboard = (index) => {
    const copyIndex = index;
    // コピー対象をJavaScript上で変数として定義する
    const copyId = `copy-target-${copyIndex}`;
    const copyBtnId = `copy-btn-${copyIndex}`;
    // const gradationId = `gradation-color-${copyIndex}`;
    const copyTarget = document.getElementById(copyId);

    // コピー対象のテキストを選択する
    copyTarget.select();

    // 選択しているテキストをクリップボードにコピーする
    const res = document.execCommand("Copy");

    if(res) {
      const copyText = document.getElementById(copyBtnId).children[1];
      copyText.innerHTML = 'COPIED';
      // const copyText = document.getElementById(gradationId).querySelector('.copy-text');
      setTimeout(() => {
        copyText.innerHTML = 'CSS COPY';
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
        <GlobalStyles />
        <GradationsList gradationsProperty={this.state.gradationsProperty} copyToClipboard={this.copyToClipboard} />
      </>
    )
  }
}
