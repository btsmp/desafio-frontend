import { Form } from '@unform/web'
import tw from 'tailwind-styled-components'

export const Container = tw.div`
  bg-white
  rounded-lg
  flex
  flex-col
  items-center
  w-[400px]
  m-auto
  py-9
  
  border
  border-gray-300

  shadow-gray-900
  shadow-md
`

export const MyForm = tw(Form)`
  w-2/3
  flex
  flex-col
  items-center
  rounded-sm

  border  
  border-x-gray-200
  pt-3
  px-4
  pb-10
  gap-4
  
`
