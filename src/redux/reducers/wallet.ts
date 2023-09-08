import { AnyAction } from 'redux';
import { REMOVE_EXPENSE, SAVE_EXPENSE, USER_WALLET } from '../actions';
import { FormWallet } from '../../types';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INICIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const userReducer = (state = INICIAL_STATE, action: AnyAction) => {
  // Utiliza uma estrutura de switch para verificar o tipo da ação, pode ter mais que uma action (ai cria mais cases)
  switch (action.type) {
    case USER_WALLET: {
      return {
        ...state, // (...) manter/guardar o estado
        currencies: action.currencies,
      };
    }
    case SAVE_EXPENSE: {
      return {
        ...state,
        expenses: [
          ...state.expenses, // (...) manter/guardar a lista de despseas
          {
            // cria um novo objeto de despesa que será adicionado à lista
            ...action.payload.expenses, // Copia todas as propriedades da despesas
            id: state.expenses.length, // um novo ID pra despesa
            exchangeRates: action.payload.data, // dados das taxas na nova despesa*****tinha esquecido
          },
        ],
      };
    }

    case REMOVE_EXPENSE: {
      return {
        ...state,
        expenses: state.expenses
          .filter((id: FormWallet) => id.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default userReducer;
