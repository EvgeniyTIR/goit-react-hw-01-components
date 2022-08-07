import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { IsOnline, IsOffline } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <Box
      width="320px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      ml="auto"
      mr="auto"
      bg="white"
      as="ul"
    >
      {friends.map(({ avatar, name, isOnline, id }) => {
        const Status = isOnline ? IsOnline : IsOffline;
        return (
          <Box
            key={id}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            height="60px"
            width="100%"
            boxShadow="normal"
            pt={3}
            pb={3}
          >
            <Status></Status>
            <Box as="img" mr={6} src={avatar} alt={name} width="48" />
            <Box as="p" mr={6} fontSize="mt" fontWeight="bold">
              {name}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
