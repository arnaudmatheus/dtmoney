import logoImg from "../../assets/logo.svg";
import { Container, Content, Button } from "./styles";

interface HeaderProps {
  onOpenTransactionModal: () => void;
}

export function Header({ onOpenTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt-money" />
        <Button onClick={onOpenTransactionModal}>Nova transação</Button>
      </Content>
    </Container>
  );
}
