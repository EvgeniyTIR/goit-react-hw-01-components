import PropTypes from 'prop-types';
import { Box } from '../Box';
import { randomColor } from 'components/randomColor';

export function Statistics({ title, stats }) {
  return (
    <Box
      className="statistics"
      width="400px"
      ml="auto"
      mr="auto"
      bg="white"
      textAlign="center"
      boxShadow="normal"
      as="section"
    >
      {title && (
        <Box
          className="title"
          fontFamily="heading"
          fontSize="mt"
          color="grey"
          p={5}
          as="h2"
        >
          {title}
        </Box>
      )}

      <Box className="stat-list" display="flex" as="ul">
        {stats.map(item => (
          <Box
            className="item"
            key={item.id}
            width="80px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            AlignItems="center"
            color="white"
            boxShadow="text"
            pt={3}
            pb={3}
            bg={randomColor()}
            as="li"
          >
            <Box className="label" fontSize="m" mb={3} as="span">
              {item.label}
            </Box>
            <Box
              className="percentage"
              fontSize="mt"
              fontWeight="bold"
              as="span"
            >
              {item.percentage}%
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
