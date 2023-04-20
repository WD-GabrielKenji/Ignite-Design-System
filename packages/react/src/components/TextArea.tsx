import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  minHeight: 80,
  padding: '$3 $4',
  border: '2px solid $gray900',
  borderRadius: '$sm',
  resize: 'vertical',
  backgroundColor: '$gray900',
  boxSizing: 'border-box',
  color: '$white',
  fontSize: '$sm',
  fontWeight: '$regular',
  fontFamily: '$default',

  '&:focus': {
    borderColor: '$ignite300',
    outline: 0,
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'
