import React, { ReactNode } from 'react'
import FormControl from './FormControl'
import { Select } from '@chakra-ui/react'
import { useForm } from '~hooks/useForm'

export type Size =
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
type SizeControlPropsType = {
  name?: string
  label?: string | ReactNode
  value: string
  options?: Size[]
}

const options = ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge']

const SizeControl = (props: SizeControlPropsType) => {
  const { setValueFromEvent } = useForm()
  const choices = props.options || options

  return (
    <FormControl label={props.label} htmlFor={props.name || 'size'}>
      <Select
        size="sm"
        id={props.name || 'size'}
        name={props.name || 'size'}
        value={props.value || ''}
        onChange={setValueFromEvent}
      >
        {choices.map(choice => (
          <option key={choice}>{choice}</option>
        ))}
      </Select>
    </FormControl>
  )
}

export default SizeControl
