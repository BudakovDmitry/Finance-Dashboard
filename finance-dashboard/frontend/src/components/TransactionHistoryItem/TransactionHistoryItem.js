export default function TransactionHistoryItem({
  reciever,
  type,
  date,
  amount,
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
