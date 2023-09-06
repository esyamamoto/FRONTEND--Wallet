import { AnyAction } from 'redux';
import { USER_EMAIL } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INICIAL_STATE = {
  email: '',
  password: '',
};

const userReducer = (state = INICIAL_STATE, action: AnyAction) => {
  // Utiliza uma estrutura de switch para verificar o tipo da ação, pode ter mais que uma action (ai cria mais cases)
  switch (action.type) {
    // Caso a ação tenha o tipo USER_EMAIL
    case USER_EMAIL:
      return {
        ...state, // (...) manter/guardar o estado
        email: action.payload.email,
        password: action.payload.password,
      };
    default:
      return state;
  }
};
export default userReducer;
