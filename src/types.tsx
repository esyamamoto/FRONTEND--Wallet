import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type User = {
  email: string;
  password: string;
};

export type FormWallet = {
  id: number,
  value: number;
  currency: number;
  method: string;
  tag: string;
  description: string;
  exchangeRates: { [key: string]: { ask: number }
  },
};

export type Wallet = {
  currencies: string[],
  expenses: [{
    id: number,
    value: number;
    currency: number;
    method: string;
    tag: string;
    description: string;
    exchangeRates: [{
      ask: number;
      name: string;
    }];
  }],
  editor: boolean;
  idToEdit: number;
};

export type GlobalState = {
  user: {
    email: string;
  };
  wallet: {
    currencies: string[];
    expenses: FormWallet[];
    editor: boolean;
    idToEdit: number;
  };
  isLoading: boolean;
  error: any;
};

export type Dispatch = ThunkDispatch<GlobalState, null, AnyAction>;
