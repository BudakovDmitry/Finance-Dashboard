interface TransactionHistoryItemProps {
  reciever: string;
  type: string;
  date: string;
  amount: number;
}

export default function TransactionHistoryItem<TransactionHistoryItemProps>({
  reciever = '',
  type = '',
  date = '',
  amount = 0
}) {
  return (
    <tr>
      <td>{reciever}</td>
      <td>{type}</td>
      <td>{date}</td>
      <td>${amount}</td>
    </tr>
  );
}
