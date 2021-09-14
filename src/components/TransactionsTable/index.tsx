import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import {
  Container,
  Table,
  TableHead,
  TableGroup,
  TableBody,
  TableHeader,
  TableBodyText,
} from "./styles";

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <Table>
        <TableHead>
          <TableGroup>
            <TableHeader>Titulo</TableHeader>
            <TableHeader>Valor</TableHeader>
            <TableHeader>Categoria</TableHeader>
            <TableHeader>Data</TableHeader>
          </TableGroup>
        </TableHead>
        <TableBody>
          {transactions.map((trasaction) => {
            return (
              <TableGroup key={trasaction.id}>
                <TableBodyText>{trasaction.title}</TableBodyText>
                <TableBodyText className={trasaction.type}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(trasaction.value)}
                </TableBodyText>
                <TableBodyText>{trasaction.category}</TableBodyText>
                <TableBodyText>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(trasaction.createdAT)
                  )}
                </TableBodyText>
              </TableGroup>
            );
          })}
        </TableBody>
      </Table>
    </Container>
  );
}
