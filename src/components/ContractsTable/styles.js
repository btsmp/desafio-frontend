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
