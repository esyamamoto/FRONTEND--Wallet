import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from '../types';
import { removeExpense } from '../redux/actions';
import '../Styles/Table.css';

function Table() {
  const inicialState = useSelector((state: GlobalState) => state.wallet);
  const dispatch = useDispatch();

  console.log(inicialState.expenses);

  function handleDel(id: number) {
    dispatch(removeExpense(id));
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {inicialState && inicialState.expenses.map((expense) => (
          <tr key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{Number(expense.value).toFixed(2)}</td>
            <td>{expense.exchangeRates[expense.currency].name}</td>
            <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
            <td>
              {(expense.value * expense.exchangeRates[expense.currency].ask)
                .toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              <button>Editar</button>
              <button
                data-testid="delete-btn"
                id={ expense.id.toString() }
                onClick={ () => handleDel(expense.id) }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
