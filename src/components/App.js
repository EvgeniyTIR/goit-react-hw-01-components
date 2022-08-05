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
       <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}         
      />;
      
      <Statistics
        title="Upload stats"
        stats={data}
      />;
      <FriendList
        friends={friends}
      />;
      <TransactionHistory
        items={transactions}
      />;
    </div>  
    
    );  
};

export default App;