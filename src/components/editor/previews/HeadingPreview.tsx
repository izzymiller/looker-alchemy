import React from 'react'
import { useDropComponent } from '~hooks/useDropComponent'
import { useInteractive } from '~hooks/useInteractive'
import { Heading } from '@looker/components'

interface Props {
  component: IComponent
}

const HeadingPreview = ({ component }: Props) => {
  const { isOver } = useDropComponent(component.id)
  const { props, ref } = useInteractive(component, true)

  return <Heading ref={ref} {...props} />
}

export default HeadingPreview
