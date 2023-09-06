// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';

export const userEmail = (userInfos: object) => ({
  // A action é um objeto que envia uma ação ao reducer, o qual realizará uma alteração no estado global, ele representa uma intenção de mudança no estado.
  // Elas devem ter uma propriedade type(OBRIGATORIAMENTE) que descreve o tipo da ação (geralmente uma string), e pode ter outros valores.
  type: 'USER_EMAIL',
  payload: userInfos, // payload é o nome dado à chave que será enviada ao reducer.
}
);
