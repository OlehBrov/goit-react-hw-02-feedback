import { PieChart } from 'react-minimal-pie-chart';
import {StatsStyled} from './stats.styled';

export const Stats = ({ state }) => {
  return (
    <StatsStyled>
      <PieChart
        data={makeData(state)}
        label={({ dataEntry }) => {
          if (dataEntry.percentage !== 0)
            return (
              dataEntry.title +
              ' ' +
              (Math.round(dataEntry.percentage) > 0
                ? Math.round(dataEntry.percentage) + '%'
                : '')
            );
        }}
        labelStyle={index => ({
          fontSize: '5px',
          fontFamily: 'sans-serif',
        })}
      />
    </StatsStyled>
  );
};

function makeData(state) {
 
  return Object.entries(state).map(([title, value]) => ({
    title,
    value,
    color: addColor(title),
  }));
}
function addColor(title) {
  if (title === 'good') {
    return '#03fc0b';
  }
  if (title === 'neutral') {
    return '#fcca03';
  }
  return '#fc0303';
}
