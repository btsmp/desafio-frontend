import { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { InputStyled, InputWrapper } from './styles'

export function InputWithMask({ name, label, mask, type, ...rest }) {
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
        mask={mask}
        name={name}
        ref={inputRef}
        type={type}
        id={label}
        {...rest}
      />
    </InputWrapper>
  )
}
