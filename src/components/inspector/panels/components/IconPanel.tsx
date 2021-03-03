import React, { memo } from 'react'
import ColorsControl from '~components/inspector/controls/ColorsControl'
import InputSuggestion from '~components/inspector/inputs/InputSuggestion'
import SizeControl from '~components/inspector/controls/SizeControl'

import theme from '@chakra-ui/theme'
import { ComboboxOption } from '@reach/combobox'
import FormControl from '~components/inspector/controls/FormControl'
import { useForm } from '~hooks/useForm'
import usePropsSelector from '~hooks/usePropsSelector'
import IconControl from '~components/inspector/controls/IconControl'

const IconPanel = () => {
  const { setValueFromEvent } = useForm()

  const size = usePropsSelector('size')

  return (
    <>
      <IconControl label="Icon" name="icon" />

      <SizeControl name="size" label="Size" value={size} />

      <ColorsControl withFullColor label="Color" name="color" enableHues />
    </>
  )
}

export default memo(IconPanel)
