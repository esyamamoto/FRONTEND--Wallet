function Table() {
  return <div>Table</div>;
}

export default Table;

/*
const initalState = useSelector((state: ReduxState) => state.wallet); // Usa o hook useSelector para obter parte do estado Redux.
  const dispatch = useDispatch(); // criando uma constante apenas para ter acesso a função do dispach, do store que estiver ativo

  function handleRemoveExpense(id: number) {
    dispatch(handleRemoveExpense(id));
  }

A tabela tem um cabeçalho com elementos <th> com os valores:
th:
- Descrição;
- Tag;
- Método de pagamento;
- Valor;
- Moeda;
- Câmbio utilizado;
- Valor convertido;
- Moeda de conversão;
- Editar/Excluir.
*/