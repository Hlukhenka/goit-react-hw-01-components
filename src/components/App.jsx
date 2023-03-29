import user from '../data/user.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Profile } from './user/Profile';
import { FriendsList } from './FriendsList/FriendsList';
import { Statistics } from './statistics/Statistics';
import { TransactionHistory } from './transactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile {...user} />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
