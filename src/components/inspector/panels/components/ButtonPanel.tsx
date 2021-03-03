import React, { memo } from 'react'
import ColorsControl from '~components/inspector/controls/ColorsControl'
import SizeControl from '~components/inspector/controls/SizeControl'
import { Select } from '@chakra-ui/react'
import ChildrenControl from '~components/inspector/controls/ChildrenControl'
import FormControl from '~components/inspector/controls/FormControl'
import { useForm } from '~hooks/useForm'
import usePropsSelector from '~hooks/usePropsSelector'
import IconControl from '~components/inspector/controls/IconControl'

const ButtonPanel = () => {
  const { setValueFromEvent } = useForm()

  const size = usePropsSelector('size')
  const variant = usePropsSelector('variant')
  const color = usePropsSelector('color')

  return (
    <>
      <ChildrenControl />

      <SizeControl name="size" label="Size" value={size} />

      <FormControl htmlFor="variant" label="Variant">
        <Select
          id="variant"
          onChange={setValueFromEvent}
          name="variant"
          size="sm"
          value={variant || ''}
        >
          <option>outline</option>
          <option>transparent</option>
          <option>toggle</option>
          <option>link</option>
          <option>solid</option>
        </Select>
      </FormControl>

      <FormControl htmlFor="color" label="Color">
        <Select
          id="color"
          onChange={setValueFromEvent}
          name="color"
          size="sm"
          value={color || ''}
        >
          <option>key</option>
          <option>critical</option>
          <option>neutral</option>
        </Select>
      </FormControl>

      <ColorsControl label="Color Scheme" name="colorScheme" />
      <IconControl label="Left icon" name="iconBefore" />
      <IconControl label="Right icon" name="iconAfter" />
    </>
  )
}

export default memo(ButtonPanel)
