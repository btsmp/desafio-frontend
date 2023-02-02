import { ButtonGreen } from '../../components/ButtonGreen'
import { UserContext } from '../../contexts/UserContext'
import { ImgWrapper } from '../../components/ImgWrapper'
import { Input } from '../../components/Input'
import { Container, MyForm } from './style'
import { useContext, useRef } from 'react'
import { api } from '../../lib/axios'
import * as Yup from 'yup'

export function SignIn() {
  const { signIn } = useContext(UserContext)
  const formRef = useRef(null)

  async function cnpjValidate(cnpjToValidate) {
    // Regex to validate CNPJ
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/
    const cnpjSchema = Yup.string().matches(cnpjRegex, 'CNPJ inválido')
    const isValid = await cnpjSchema.validate(cnpjToValidate.cnpj)
    return isValid
  }

  async function handleFormSubmit(formData, { reset }) {
    try {
      await cnpjValidate(formData)
      const { data: userData } = await api.get(`/users?cnpj=${formData.cnpj}`)
      if (userData.length === 0) {
        throw new Error('CNPJ sem contratos ativos.')
      }
      signIn(userData[0])
      reset()
    } catch (err) {
      alert(err.message)
      reset()
    }
  }

  return (
    <Container>
      <ImgWrapper />
      <h1 className="uppercase font-bold text-lg">Pagamento de forncedor</h1>
      <MyForm ref={formRef} onSubmit={handleFormSubmit}>
        <Input name="cnpj" label="CNPJ" />
        <ButtonGreen type="submit">Acessar</ButtonGreen>
      </MyForm>
    </Container>
  )
}
