import { User, Dispatch } from '../../types';

// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';
export const USER_WALLET = 'USER_WALLET';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';

export const userEmail = (userInfos: object) => ({
  // A action é um objeto que envia uma ação ao reducer, o qual realizará uma alteração no estado global, ele representa uma intenção de mudança no estado.
  // Elas devem ter uma propriedade type(OBRIGATORIAMENTE) que descreve o tipo da ação (geralmente uma string), e pode ter outros valores.
  type: 'USER_EMAIL',
  payload: userInfos, // payload é o nome dado à chave que será enviada ao reducer.
}
);

// Função para salvar as moedas na carteira do usuário
export function saveWallet(currencies: string[]) {
  return {
    type: USER_WALLET,
    currencies,
  };
}

// Função para salvar informações de login do usuário
export function saveUser(login: User) {
  return {
    type: USER_EMAIL,
    payload: login,
  };
}

// Função para excluir despesas com base no ID
export function removeExpense(id: number) {
  return {
    type: REMOVE_EXPENSE,
    payload: id,
  };
}

// Função para salvar despesas e dados associados
export function saveExpense(data: object, expenses: object) {
  return {
    type: SAVE_EXPENSE,
    payload: { expenses, data },
  };
}

// Função assíncrona para buscar dados de despesas
export function dataFecth(expenses: object) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      dispatch(saveExpense(data, expenses));
    } catch (error:any) {
      console.log(error);
    }
  };
}

// Função assíncrona para buscar informações sobre moedas
export function infoFecth() {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      delete data.USDT;
      const currencies = Object.keys(data);
      dispatch(saveWallet(currencies));
    } catch (error:any) {
      console.log(error);
    }
  };
}
