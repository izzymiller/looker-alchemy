import React from 'react'
import { useDropComponent } from '~hooks/useDropComponent'
import { useInteractive } from '~hooks/useInteractive'
import {
  Button,
  ButtonOutline,
  ButtonTransparent,
  ButtonToggle,
} from '@looker/components'
import icons from '~iconsList'

interface Props {
  component: IComponent
}

const ButtonPreview = ({ component }: Props) => {
  const { isOver } = useDropComponent(component.id)
  const { props, ref } = useInteractive(component, true)

  if (isOver) {
    props.color = 'teal.50'
  }

  if (props.iconBefore) {
    if (icons.includes(props.iconBefore)) {
      props.iconBefore = String(props.iconBefore)
    } else {
      props.iconBefore = String('')
    }
  }

  if (props.leftIcon) {
    if (icons.includes(props.leftIcon)) {
      props.leftIcon = String(props.leftIcon)
    }
    props.iconBefore = String('')
  }

  if (props.variant == 'outline') {
    return <ButtonOutline ref={ref} {...props} />
  }

  if (props.variant == 'transparent') {
    return <ButtonTransparent ref={ref} {...props} />
  }

  return <Button ref={ref} {...props} />
}

export default ButtonPreview
