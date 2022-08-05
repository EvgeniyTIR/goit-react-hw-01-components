import PropTypes from 'prop-types';

export function FriendList({friends}) { 
   return (
        <ul className="">
            {friends.map(({ avatar, name, isOnline, id }) => 
            (
                <li className="" key={id}>
                    <span className=""></span>
                    <img className="" src={avatar} alt={name} width="48" />
                    <p className=""></p>
                </li>
            ))}
        </ul>
    )
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
}