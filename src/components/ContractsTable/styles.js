import styled from 'styled-components'

export const MyTable = styled.table`
  table-layout: auto;

  thead {
    background-color: #aaa;
    color: white;
  }

  th {
    padding: 0.3rem;
  }

  tbody tr:nth-child(even) {
    background-color: #ddd;
  }

  tbody tr:nth-child(odd) {
    background-color: #eee;
  }
  tbody tr {
    border-width: 4px;
    border-color: white;
  }

  td {
    padding: 0.2rem;
  }
`
export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  border: 1px solid #000000;
`
