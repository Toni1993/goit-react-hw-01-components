
import FriendList from './components/Friend-list/FriendList';
import friends from './data/friends.json';

import Profile from 'components/Social-profile/Profile';
import user from './data/user.json';

import StatisticList from './components/Statistics/StatisticList';
import statisticalData from './data/statistical-data.json';

import TransactionHistory from './components/Transaction-history/transactionHistory';
import transactions from './data/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <StatisticList title="Upload stats" stats={statisticalData} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
