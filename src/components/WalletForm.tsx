import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState, Dispatch } from '../types';
import { dataFecth, infoFecth } from '../redux/actions';
import '../Styles/WalletForm.css';

const InicialStateWallet = {
  id: 0,
  value: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  description: '',
};

function WalletForm() {
  const [formWallet, setFormWallet] = useState(InicialStateWallet);
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      await dispatch(infoFecth());
    }
    getData();
  }, [dispatch]);

  const { currencies } = useSelector(((state: GlobalState) => state.wallet));

  function handleChange({ target }:
  React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormWallet({
      ...formWallet,
      [target.name]: target.value,
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(dataFecth(formWallet));
    setFormWallet(InicialStateWallet);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label>
        Valor:
        <input
          name="value"
          type="text"
          data-testid="value-input"
          value={ formWallet.value }
          onChange={ handleChange }
        />
      </label>

      <h3> Moeda: </h3>
      {/* Campo de Seleção de Moeda */}
      <select
        name="currency"
        value={ formWallet.currency }
        data-testid="currency-input"
        onChange={ handleChange }
      >
        {currencies.map((cur) => (
          <option key={ cur }>{cur}</option>
        ))}
      </select>

      <h3> Método de Pagamento: </h3>

      {/* Campo de Seleção de Método de Pagamento */}
      <select
        name="method"
        value={ formWallet.method }
        data-testid="method-input"
        onChange={ handleChange }
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>

      <h3> Tag: </h3>

      {/* Campo de Seleção de Tag */}
      <select
        name="tag"
        value={ formWallet.tag }
        data-testid="tag-input"
        onChange={ handleChange }
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
        <option value="Trabalho">Trabalho</option>
      </select>

      {/* Campo de Descrição */}
      <label>
        Descrição:
        <input
          name="description"
          type="text"
          value={ formWallet.description }
          data-testid="description-input"
          onChange={ handleChange }
        />
      </label>

      {/* Botão de Submissão */}
      <button>Adicionar despesa</button>
    </form>
  );
}

export default WalletForm;
