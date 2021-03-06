import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form``;

export const FormTitle = styled.h2`
  color: var(--text-title);
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  border-radius: 0.25rem;
  border: 1px solid #d7d7d7;
  background: #e7e9ee;
  font-weight: 400;
  font-size: 1rem;
  &::placeholder {
    color: var(--text-body);
  }
  & + Input {
    margin-top: 1rem;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  background: var(--green);
  color: #fff;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  margin-top: 1.5rem;
  font-weight: 600;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const CloseImg = styled.img``;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface ButtonsProps {
  isActive: boolean;
  activeColor: "green" | "red";
}
const colors = {
  green: "#33CC95",
  red: "#E52E4D",
};

export const DepositButton = styled.button<ButtonsProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "trasparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;
  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }
  img {
    width: 20px;
    height: 20px;
  }
  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;

export const WithdrawButton = styled.button<ButtonsProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "trasparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;
  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }
  img {
    width: 20px;
    height: 20px;
  }
  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
