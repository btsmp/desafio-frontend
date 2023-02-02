import { ImgWrapper } from '../ImgWrapper'
import { Apresentation, Basic } from './styles'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

export function Header() {
  const { userData } = useContext(UserContext)
  return (
    <>
      <Apresentation>
        <ImgWrapper />
        <h1 className="font-semibold text-5xl px-20">
          PAGAMENTO DO FORNECEDOR
        </h1>
      </Apresentation>
      <Basic>
        <p>
          Razão social:{' '}
          <span className="font-normal">{userData.socialReason}</span>
        </p>
        <p>
          CNPJ: <span className="font-normal">{userData.cnpj}</span>
        </p>
        <p className="basis-full">
          Nome Fantasia:{' '}
          <span className="font-normal">{userData.fantasyName}</span>
        </p>
      </Basic>
    </>
  )
}
