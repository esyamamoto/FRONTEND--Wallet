import { useSelector } from 'react-redux';

function Header() {
  const globalUser = useSelector((state: {
    user: {
      email: string,
      password: string,
    }
  }) => state.user);

  return (
    <>
      <p data-testid="email-field">
        {`Email: ${globalUser.email}`}
      </p>
      <p data-testid="total-field">0</p>
      <p data-testid="header-currency-field">BRL</p>
    </>
  );
}

export default Header;
