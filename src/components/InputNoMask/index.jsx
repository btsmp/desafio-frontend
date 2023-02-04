import { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { InputStyled, InputWrapper } from './styles'

export function InputNoMask({ name, label, currency, ...rest }) {
  const { fieldName, registerField } = useField(name)
  const inputRef = useRef()

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: (ref) => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return (
    <InputWrapper>
      <label htmlFor={label} className="ml-2">
        {label}
      </label>
      <InputStyled className="flex items-center">
        {currency && <p> R$</p>}
        <input
          className="w-full ml-1 disabled:cursor-not-allowed"
          step=".01"
          name={name}
          ref={inputRef}
          id={label}
          {...rest}
        />
      </InputStyled>
    </InputWrapper>
  )
}
