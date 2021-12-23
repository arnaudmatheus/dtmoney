import { Dashboard } from "./components/Dashbooard";
import { Header } from "./components/Header";
import Modal from "react-modal";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { TransactionModal } from "./components/TransactionModal";
import { TransactionsProvider } from "./hooks/useTransaction";
Modal.setAppElement("#root");

export function App() {
  const [isTrasanctionModalOpen, setIsTransactionModalOpen] = useState(false);
  function handleOpenTransactionModal() {
    setIsTransactionModalOpen(true);
  }
  function handleCloseTransactionModal() {
    setIsTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <TransactionModal
        isOpen={isTrasanctionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />
    </TransactionsProvider>
  );
}
