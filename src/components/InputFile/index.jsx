import { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

export function InputFile({ name, ...rest }) {
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
    <>
      <label
        htmlFor="invoice"
        className="bg-[#67685A] p-3 text-white font-semibold cursor-pointer"
      >
        Anexar nota fiscal
      </label>

      <input
        ref={inputRef}
        type="file"
        name={name}
        id="invoice"
        className="hidden"
        {...rest}
      />
    </>
  )
}
