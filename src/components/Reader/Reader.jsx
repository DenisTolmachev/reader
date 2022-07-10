import { Controls } from 'components/Controls/Controls';
import { Progress } from 'components/Progress/Progress';
import { Publicatoin } from 'components/Publication/Publication';
import { Component } from 'react';
import styled from 'styled-components'

const ReaderContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-top: 50px;
  padding: 20px;
  box-shadow: 0px 5px 10px -4px #050505;
`;

export class Reader extends Component {
  state = { index: 0 };

  changeIndex = value => {
    this.setState({ index: this.state.index + value });
  };

  render() {
    const { index } = this.state;
    const { data } = this.props;
    const totalItems = data.length;
    const currentPublication = data[index];

    return (
      <ReaderContainer>
        <Controls
          current={index + 1}
          total={totalItems}
          onChange={this.changeIndex}
        />
        <Progress current={index} total={totalItems} />
        <Publicatoin data={currentPublication} />
        
      </ReaderContainer>
    );
  }
}
