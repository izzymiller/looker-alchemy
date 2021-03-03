import React, { ReactNode } from 'react'
import { Icon } from '@looker/components'
import FormControl from './FormControl'
import { useForm } from '~hooks/useForm'
import usePropsSelector from '~hooks/usePropsSelector'
import InputSuggestion from '~components/inspector/inputs/InputSuggestion'
import { ComboboxOption, ComboboxOptionText } from '@reach/combobox'
import icons from '~iconsList'

type IconControlProps = {
  name: string
  label: string | ReactNode
}

const IconControl: React.FC<IconControlProps> = ({ name, label }) => {
  const { setValueFromEvent } = useForm()
  const value = usePropsSelector(name)

  return (
    <FormControl label={label} htmlFor={name}>
      <InputSuggestion
        value={value}
        handleChange={setValueFromEvent}
        name={name}
      >
        {icons
          .filter(
            icon => icon.toUpperCase().includes(value.toUpperCase()) || !value,
          )
          .map((icon, index) => {
            return (
              <ComboboxOption key={index} value={icon}>
                <Icon
                  name={icon}
                  // @ts-ignore
                  path=""
                />
                <ComboboxOptionText />
              </ComboboxOption>
            )
          })}
      </InputSuggestion>
    </FormControl>
  )
}

export default IconControl
