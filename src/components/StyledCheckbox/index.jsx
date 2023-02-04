import { NewCheckbox } from './styles'

export function StyledCheckbox({ name, label, ...rest }) {
  return (
    <div className="flex items-center gap-2">
      <NewCheckbox {...rest} name={name} id={label} />
      {label && <label htmlFor={label}>{label}</label>}
    </div>
  )
}
