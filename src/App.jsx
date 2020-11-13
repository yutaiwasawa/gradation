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
  }

  initGradationProperty = () => {
    const linearDatas = this.state.dataset.gradation.linear;
    let propertyDatas = [];
    linearDatas.map(value => propertyDatas.push(value.property));

    this.setState({
      gradationsProperty: propertyDatas
    })
  }

  componentDidMount() {
    this.initGradationProperty();
  }

  render() {
    return(
      <>
        <GradationsList gradationsProperty={this.state.gradationsProperty}/>
      </>
    )
  }
}
