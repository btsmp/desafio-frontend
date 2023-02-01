import { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { InputStyled, InputWrapper } from './styles'

export function Input({ name, label, ...rest }) {
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
      <InputStyled
        mask="99.999.999/9999-99"
        name={name}
        ref={inputRef}
        type="text"
        id={label}
        {...rest}
      />
    </InputWrapper>
  )
}
