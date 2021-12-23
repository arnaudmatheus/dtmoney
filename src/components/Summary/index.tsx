import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { ContentCard } from "../ContentCard";
import { useTransactions } from "../../hooks/useTransaction";

export function Summary() {
  const { transactions } = useTransactions();
  const money = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.income += transaction.value;
        acc.total += transaction.value;
      } else {
        acc.withdraw += transaction.value;
        acc.total -= transaction.value;
      }
      return acc;
    },
    {
      income: 0,
      withdraw: 0,
      total: 0,
    }
  );
  return (
    <Container>
      <ContentCard
        title="Entrada"
        img={incomeImg}
        value={money.income}
        color={true}
      />
      <ContentCard
        title="Saida"
        img={outcomeImg}
        value={money.withdraw}
        color={true}
      />
      <ContentCard
        title="Total"
        img={totalImg}
        value={money.total}
        color={false}
      />
    </Container>
  );
}
