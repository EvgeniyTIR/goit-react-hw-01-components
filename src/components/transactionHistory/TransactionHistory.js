import PropTypes from "prop-types";
import { Box } from "components/Box";
import { Tr } from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) => {
  return (
    <Box as="table"
      width='500px'
      ml="auto"
      mr="auto"
      mt={4}
      mb={4}
      bg="white"
      boxShadow = "normal"
      textAlign="center"
    >
      <Box as="thead"
        bg="primary"
        color="white"        
      >
     <tr>
      <Box as="th" pt={3} pb={3}>Type</Box>
      <Box as="th" pt={3} pb={3}>Amount</Box>
      <Box as="th" pt={3} pb={3}>Currency</Box>
    </tr>
      </Box>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
        <Tr key={id}>
          <Box as="th" pt={3} pb={2} fontSize="s" color="table" fontWeight="normal">{type}</Box>
          <Box as="th" pt={3} pb={2} fontSize="s" color="table" fontWeight="normal">{amount}</Box>
          <Box as="th" pt={3} pb={2} fontSize="s" color="table" fontWeight="normal">{currency}</Box>
        </Tr>
        ))}
      </tbody>
    </Box>
  )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}
