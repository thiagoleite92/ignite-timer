import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

const BaseCountDownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  color: ${({ theme }) => theme['gray-100']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  &:disabled {
    cursor: 'not-allowed';
    opacity: 0.7;
  }
`

export const StartCountDownButton = styled(BaseCountDownButton)`
  ${({ theme }) => ({
    backgroundColor: theme['green-500'],
    '&:not(:disabled):hover': {
      backgroundColor: theme['green-700'],
    },
  })}
`
export const StopCountDownButton = styled(BaseCountDownButton)`
  ${({ theme }) => ({
    backgroundColor: theme['red-500'],

    '&:not(:disabled):hover': {
      backgroundColor: theme['red-700'],
    },
  })}
`
