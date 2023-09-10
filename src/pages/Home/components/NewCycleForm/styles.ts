import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background-color: transparent;
  height: 2.5rem;
  border: 0;
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;

  ${({ theme }) => ({
    color: theme['gray-100'],
    borderBottom: `2px solid ${theme['gray-500']}`,
    '&:focus': {
      boxShadow: 'none',
      borderColor: theme['green-500'],
    },
    '&::placeholder': {
      color: theme['gray-500'],
    },
  })}
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
