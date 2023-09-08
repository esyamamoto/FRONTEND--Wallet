/* import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Testes da página de Login', () => {
  it('Testando inputs: email, botao e senha', () => {
    renderWithRouterAndRedux(<App />);

    const infoemail = screen.getByRole('textbox');
    expect(infoemail).toBeInTheDocument();

    const infopassword = screen.getByLabelText(/senha:/i);
    expect(infopassword).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /entrar/i });
    expect(button).toBeInTheDocument();
  });

  it('Testando validação dos campos email, password ', async () => {
    renderWithRouterAndRedux(<App />);
    const infoemail = screen.getByRole('textbox');
    await userEvent.type(infoemail, 'aeorberouhgb@gmail.com');

    const infoPassword = screen.getByLabelText(/senha:/i);
    await userEvent.type(infoPassword, '123456');
  });

  it('Verifica se ?????', async () => {
    renderWithRouterAndRedux(<App />);
  });
});
*/
