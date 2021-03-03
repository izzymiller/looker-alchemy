import React from 'react'
import { useDropComponent } from '~hooks/useDropComponent'
import { useInteractive } from '~hooks/useInteractive'
import icons from '~iconsList'
import { Box, Icon } from '@looker/components'

interface Props {
  component: IComponent
}

const IconPreview = ({ component }: Props) => {
  const { isOver } = useDropComponent(component.id)
  const {
    props: { color, boxSize, icon, ...props },
  } = useInteractive(component, true)

  if (isOver) {
    props.bg = 'teal.50'
  }

  if (icon) {
    if (icons.includes(icon)) {
      return <Icon name={icon ?? 'LogoRings'} color={color} {...props} />
    }
    return null
  }

  return null
}

export default IconPreview
