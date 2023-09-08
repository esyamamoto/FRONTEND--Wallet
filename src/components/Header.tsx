import { useSelector } from 'react-redux';
import { GlobalState } from '../types';

function Header() {
  const { user, wallet } = useSelector((state: GlobalState) => state);

  const totalSpend: number = wallet.expenses.reduce((acc, cur) => (
    Number(cur.exchangeRates[cur.currency].ask * cur.value) + acc
  ), 0);

  return (
    <>
      <p data-testid="email-field">
        {`Email: ${user.email}`}
      </p>
      <p data-testid="total-field">{totalSpend.toFixed(2)}</p>
      <p data-testid="header-currency-field">BRL</p>
    </>
  );
}

export default Header;
