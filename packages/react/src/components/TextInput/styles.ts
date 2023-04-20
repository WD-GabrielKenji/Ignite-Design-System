import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '$3 $4',
  border: '2px solid $gray900',
  borderRadius: '$sm',
  backgroundColor: '$gray900',
  boxSizing: 'border-box',

  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
  },

  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  defaultVariants: {
    size: 'md',
  },
})

export const Prefix = styled('span', {
  color: '$gray400',
  fontSize: '$sm',
  fontWeight: 'regular',
  fontFamily: '$default',
})

export const Input = styled('input', {
  width: '100%',
  border: 0,
  background: 'transparent',
  color: '$white',
  fontSize: '$sm',
  fontWeight: 'regular',
  fontFamily: '$default',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray500',
  },
})
