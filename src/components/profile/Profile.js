import PropTypes from 'prop-types';
import { Box } from "../Box";
import { Img, Name, Tag, Location, List, Label } from './Profile.styled';

export function Profile({ username, tag, location, avatar, stats  }) {
    return (
        <Box className="profile"
            width='300px'
            ml="auto"
            mr="auto"
            bg="white"
            textAlign="center"
        >
            <Box mb={4} p={4} className="description">
            <Img
                src={avatar}
                alt="User avatar"
                className="avatar"
            />
            <Name className="name">{username}</Name>
            <Tag className="tag">@{tag}</Tag>
            <Location className="location">{location}</Location>
        </Box>

            <Box className="stats"
                display="flex"
                justifyContent="space-around"
                border="normal"
                as='ul'
            >
            <List>
                <Label className="label">Followers: </Label>
                <Box className="quantity">{stats.followers}</Box>
            </List>
            <List>
                <Label className="label">Views: </Label>
                <Box className="quantity">{stats.views}</Box>
            </List>
            <List>
                <Label className="label">Likes: </Label>    
                <Box className="quantity">{stats.likes}</Box>
            </List>
        </Box>
    </Box>
    );
};   

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired, 
}