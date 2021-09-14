import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { ContentCard } from "../ContentCard";
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);
  console.log(transactions);
  return (
    <Container>
      <ContentCard
        title="Entrada"
        img={incomeImg}
        value="R$ 1000"
        color={true}
      />
      <ContentCard
        title="Saida"
        img={outcomeImg}
        value="R$ -500"
        color={true}
      />
      <ContentCard title="Total" img={totalImg} value="R$ 500" color={false} />
    </Container>
  );
}
