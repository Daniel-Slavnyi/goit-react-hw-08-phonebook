import styled from '@emotion/styled/macro';

export const UlElem = styled.ul`
  list-style: none;
  box-sizing: border-box;
  max-width: 600px;
  padding: 0;
`;

export const LiElem = styled.li`
  display: flex;
  margin-bottom: 20px;
  padding: 20px;
  height: 150px;
  justify-content: space-between;
  gap: 20px;
  border: 1px solid black;
  border-radius: 10px;
`;
export const WrappInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Form = styled.form`
  display: flex;
  gap: 20px;
`;

export const WrappBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LabelEl = styled.label`
  position: relative;
`;

export const InputEl = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  outline: transparent;

  &:focus-within {
    border-bottom: 1px solid #1890ff;
  }

  &:not(:placeholder-shown) {
    border-bottom: 1px solid #1890ff;
  }
`;

export const SpanEl = styled.span`
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

export const FilterLabel = styled.label`
  position: relative;
`;

export const FilterInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  outline: transparent;
  margin: 20px 0 20px 20px;
`;

export const FilterSpanEl = styled.span`
  position: absolute;
  top: 0;
  left: 20px;
  transition: all 0.5s ease;

  ${FilterInput}:focus-within + & {
    transform: translateY(-140%);
    color: #1890ff;
  }
  ${FilterInput}:not(:placeholder-shown) + & {
    transform: translateY(-140%);
    color: #1890ff;
  }
`;
