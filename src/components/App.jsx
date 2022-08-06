// import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friendList/FriendList';
import { TransactionHistory } from './transactionHistory/TransactionHistory';
import transactions from './transactionHistory/transactions.json';
import user from './profile/user.json';
import data from './statistics/data.json';
import friends from './friendList/friends.json';

const App = () => {
  return (
    <div>
      <Box bg="background" display="flex" alignItems="center" mb={6} p={5}>
         <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}         
         />
      </Box>   
      <Box bg="background" display="flex" alignItems="center" mb={6} p={5}>
      <Statistics
        title="UPLOAD STATS"
        stats={data}
      />
      </Box>
      <Box bg="background" display="flex" alignItems="center" mb={6} p={5}>
      <FriendList
        friends={friends}
      />
      </Box>
      <Box bg="background" display="flex" alignItems="center" mb={6} p={5}>
      <TransactionHistory
        items={transactions}
      />
      </Box>
      <GlobalStyle />;
    </div>  
    
    );  
};

export default App;