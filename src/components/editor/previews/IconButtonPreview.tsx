import React from 'react'
import { useDropComponent } from '~hooks/useDropComponent'
import { useInteractive } from '~hooks/useInteractive'
import icons from '~iconsList'
import { IconButton } from '@looker/components'

interface Props {
  component: IComponent
}

const IconButtonPreview = ({ component }: Props) => {
  const { isOver } = useDropComponent(component.id)
  const {
    props: { icon, ...props },
    ref,
  } = useInteractive(component, true)

  if (isOver) {
    props.bg = 'teal.50'
  }

  if (icon) {
    if (Object.keys(icons).includes(icon)) {
      return <IconButton ref={ref} icon={icon} {...props} />
    }
    return null
  }

  return null
}

export default IconButtonPreview
