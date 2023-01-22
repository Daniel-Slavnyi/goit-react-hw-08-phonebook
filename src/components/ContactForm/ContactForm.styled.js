import styled from '@emotion/styled/macro';

export const FormEl = styled.form`
  box-sizing: border-box;
  display: flex;
  max-width: 600px;
  padding: 20px;
  justify-content: space-between;
  gap: 50px;
  position: relative;
`;

export const InputEl = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  outline: transparent;
`;

export const LabelEl = styled.label`
  position: relative;
`;

export const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s ease;

  ${InputEl}:focus-within + & {
    transform: translateY(-140%);
    color: #1890ff;
  }
  ${InputEl}:not(:placeholder-shown) + & {
    transform: translateY(-140%);
    color: #1890ff;
  }
`;

export const WrapInputs = styled.div`
  display: flex;

  flex-direction: column;
  gap: 50px;
`;

export const WrapBtnSpin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
`;
