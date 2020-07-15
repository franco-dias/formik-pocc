import styled, { css } from 'styled-components'

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 250px;
  margin: 16px 0 0 0;
  border: 1px solid black;
  border-radius: 2px;
  label {
    font-size: 16px;
    color: #666;
    position: absolute;
    top: 50%;
    left: 17px;
    transform: translateY(-50%);
    pointer-events: none;
    transition: all 0.2s ease;
    ${({ value }) => Boolean(value) && css`
      transform: translateY(0);
      left: 0;
      top: -24px;
      font-size: 12px;
    `}
  }
  &:focus-within label{
    transform: translateY(0);
    left: 0;
    top: -24px;
    font-size: 12px;
  }
  &:focus-within input {
    border: 0 !important;
  }
  input {
    height: 40px;
    border: none;
    padding: 0 16px;
  }
  .error {
    font-size: 16px;
    color: red;
  }
`

const Error = styled.span`
  font-size: 12px;
  color: red;
`

export {
  InputWrapper,
  Error
}
