import React from 'react'
import InputMask from 'react-input-mask';

import { InputWrapper, Error } from './style'

const Input = ({ placeholder, error, value, mask, onChange, ...props }) => {
  return (
    <>
      <InputWrapper value={value}>
        <label> {placeholder} </label>
        <InputMask mask={mask} maskChar=" " value={value} onChange={onChange} {...props}>
          {(inputProps) => <input name="test" {...inputProps} />}
        </InputMask>
      </InputWrapper>
      {error && <Error> {error} </Error>}
    </>
  )
}

export default Input
