import Modal from "react-modal";
import {
  Container,
  FormTitle,
  SubmitButton,
  Input,
  CloseButton,
  CloseImg,
  DepositButton,
  WithdrawButton,
  TransactionTypeContainer,
} from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState, useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
interface TransacTionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function TransactionModal({
  isOpen,
  onRequestClose,
}: TransacTionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);
  const [type, setType] = useState("deposit");
  const [title, SetTitle] = useState("");
  const [value, SetValue] = useState(0);
  const [category, SetCategory] = useState("");
  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    createTransaction({
      title,
      value,
      category,
      type,
    });
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <CloseButton type="button" onClick={onRequestClose}>
        <CloseImg src={closeImg} alt="fechar" />
      </CloseButton>
      <Container onSubmit={handleCreateNewTransaction}>
        <FormTitle>Cadastrar transação</FormTitle>
        <Input
          placeholder="Título"
          value={title}
          onChange={(event) => SetTitle(event.target.value)}
        />
        <Input
          placeholder="Valor"
          type="number"
          value={value}
          onChange={(event) => SetValue(Number(event.target.value))}
        />
        <TransactionTypeContainer>
          <DepositButton
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </DepositButton>

          <WithdrawButton
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="saida" />
            <span>Saída</span>
          </WithdrawButton>
        </TransactionTypeContainer>
        <Input
          placeholder="categoria"
          value={category}
          onChange={(event) => SetCategory(event.target.value)}
        />
        <SubmitButton type="submit">Cadastrar</SubmitButton>
      </Container>
    </Modal>
  );
}
