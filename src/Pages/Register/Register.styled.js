import styled from '@emotion/styled/macro';
import { Form, Field } from 'formik';

export const FormEl = styled(Form)`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
`;

export const LabelEl = styled.label`
  position: relative;
`;

export const InputEl = styled(Field)`
  background-color: transparent;
  border: none;
  outline: transparent;
  border-bottom: 1px solid black;
  transition: all 0.5s ease;

  &:focus-within {
    border-bottom: 1px solid #1890ff;
  }

  &:not(:placeholder-shown) {
    border-bottom: 1px solid #1890ff;
  }
`;

export const SpanEl = styled.span`
  position: absolute;
  left: 0;
  top: 0;
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

export const ErrorEl = styled.span`
  display: block;
  color: red;
`;

export const BtnEl = styled.button`
  background-color: #1890ff;
  border: none;
  color: white;
  padding: 10px 40px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #2990df;
  }
`;
