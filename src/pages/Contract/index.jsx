import { StyledCheckbox } from '../../components/StyledCheckbox'
import { InputNoMask } from '../../components/InputNoMask'
import { useNavigate, useParams } from 'react-router-dom'
import { NavButtons } from '../../components/NavButtons'
import { useContext, useEffect, useRef, useState } from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Title } from '../../components/Title'
import { Shape } from '../../components/Shape'
import { api } from '../../lib/axios'
import { Form } from '@unform/web'
import trash from '../../assets/trash.svg'
import { InputFile } from '../../components/InputFile'
import { UserContext } from '../../contexts/UserContext'

export function Contract() {
  const formRef = useRef(null)
  const navigate = useNavigate()
  const { signOut } = useContext(UserContext)

  const { id } = useParams()
  const [contractInfo, setContractInfo] = useState({})
  const [taxesField, setTaxesField] = useState(false)
  const [files, setFiles] = useState([])
  const [value, setValue] = useState()
  const { technicalRetentionPercent } = contractInfo || 0

  function handleFilesUploaded(e) {
    const filesSelected = e.target.files[0]
    setFiles((prevState) => [...prevState, filesSelected])
  }
  function sendData(formData) {
    alert('Solicitação 999999 cadastrada com sucesso!')
    console.log(formData)
    signOut()
    navigate('/')
  }
  function handleToggleTaxesField() {
    setTaxesField(!taxesField)
  }
  function handleTrash(e) {
    e.preventDefault()
    const nameOfFile = e.target.id
    const filteredFiles = files.filter((file) => file.name !== nameOfFile)
    setFiles(filteredFiles)
  }

  function calculateInvoiceRevenue(e) {
    const invoiceValue = e.target.value
    const technicalValue = (
      invoiceValue *
      (technicalRetentionPercent / 100)
    ).toFixed(2)
    setValue(technicalValue)
  }
  async function getContractData() {
    const { data: contractData } = await api.get(`/contracts/${id}`)
    setContractInfo(contractData)
  }
  useEffect(() => {
    getContractData()
  }, [])

  return (
    <Shape>
      <Header />
      <Title>Dados da Nota Fiscal</Title>
      <main className="border border-red-700 px-3 py-6 rounded-md relative mb-2 ">
        <div className="flex items-center mb-7">
          <p className="font-bold absolute">
            Código de contrato:{' '}
            <span className="font-normal">{contractInfo.code}</span>
          </p>
          <p className="text-center w-full">{contractInfo.name}</p>
        </div>

        <Form ref={formRef} onSubmit={sendData} className="flex flex-col gap-7">
          <fieldset className="flex gap-8">
            <InputNoMask
              name="noteNumber"
              label="Número da nota"
              type="number"
              min="1"
              required
            />
            <InputNoMask
              name="issuanceDate"
              label="Data de Emissão"
              type="date"
              required
            />
            <InputNoMask
              name="expirationDate"
              label="Data de Vencimento"
              type="date"
              required
            />
            <InputNoMask
              name="value"
              label="Valor"
              type="number"
              min="1"
              onChange={(e) => calculateInvoiceRevenue(e)}
              required
              currency
            />
          </fieldset>
          <div>
            <StyledCheckbox
              label="Retenção de Impostos"
              onChange={handleToggleTaxesField}
            />
            <fieldset className="border border-red-700 rounded-md p-8">
              <legend className="ml-3 px-3">Dados</legend>
              <div className="flex gap-4">
                <InputNoMask
                  name="ISSQN"
                  label="ISSQN"
                  type="number"
                  currency
                  min="1"
                  disabled={!taxesField}
                  required={taxesField}
                />
                <InputNoMask
                  name="IRRF"
                  label="IRRF"
                  type="number"
                  min="1"
                  currency
                  disabled={!taxesField}
                  required={taxesField}
                />
                <InputNoMask
                  name="CSLL"
                  label="CSLL"
                  type="number"
                  min="1"
                  currency
                  disabled={!taxesField}
                  required={taxesField}
                />
                <InputNoMask
                  name="COFINS"
                  label="COFINS"
                  type="number"
                  min="1"
                  currency
                  disabled={!taxesField}
                  required={taxesField}
                />
                <InputNoMask
                  name="INSS"
                  label="INSS"
                  type="number"
                  min="1"
                  currency
                  disabled={!taxesField}
                  required={taxesField}
                />
                <InputNoMask
                  name="PIS"
                  label="PIS"
                  type="number"
                  min="1"
                  currency
                  disabled={!taxesField}
                  required={taxesField}
                />
              </div>
            </fieldset>
          </div>
          <div>
            <StyledCheckbox label="Retenção Técnica" />
            <fieldset className="border border-red-700 rounded-md p-8">
              <legend className="ml-3 px-3">Dados</legend>
              <div className="flex gap-8">
                <InputNoMask
                  name="valueTecnicalRetention"
                  label="Valor"
                  readOnly
                  currency
                  value={value}
                />
                <InputNoMask
                  name="percentTecnicalRetention"
                  label="Percentual"
                  readOnly
                  value={technicalRetentionPercent}
                />
              </div>
            </fieldset>
          </div>
          <div className="flex gap-4">
            <seciton>
              <InputFile
                name="invoice"
                onChange={(e) => handleFilesUploaded(e)}
              />
            </seciton>

            <section className="flex flex-col gap-3">
              {files.map((file) => (
                <div key={file.name} className="flex items-center gap-3">
                  <img
                    src={trash}
                    alt="Lixeira"
                    width="32px"
                    onClick={(e) => {
                      handleTrash(e)
                    }}
                    id={file.name}
                    className="bg-red-700 p-1 rounded-sm cursor-pointer"
                  />

                  <span>{file.name}</span>
                </div>
              ))}
            </section>
          </div>
          <NavButtons
            nextFunc={() => {
              console.log()
            }}
            previousFunc={() => navigate('/')}
          />
        </Form>
      </main>
      <Footer />
    </Shape>
  )
}
