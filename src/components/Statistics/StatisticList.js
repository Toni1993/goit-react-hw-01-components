import React from 'react';
import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';
import { Box } from '../box';
import { Title } from './StatisticItem.styled';

const StatisticList = ({ title, stats }) => (
  <Box
    as="section"
    display="blok"
    height="auto"
    pt="25px"
    mx="auto"
    boxSshadow="0 0 5px rgb(0 0 0 / 10%)"
  >
    {title && <Title>{title}</Title>}
    <Box as="ul" display="Flex" flexWrap="wrap">
      {stats.map(stat => (
        <StatisticItem
          key={stat.id.toString()}
          id={stat.id}
          label={stat.label}
          percentage={stat.percentage}
        />
      ))}
    </Box>
  </Box>
);

StatisticList.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default StatisticList;
