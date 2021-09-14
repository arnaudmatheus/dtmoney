import styled from "styled-components";

export const ContentBox = styled.div`
  background: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: var(--text-title);
  &.total {
    background: var(--green);
    color: #ffff;
  }
`;

export const ContentHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.strong`
  display: block;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 3rem;
`;
