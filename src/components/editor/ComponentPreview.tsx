import React, { Component, memo } from 'react'
import { useSelector } from 'react-redux'

import AvatarPreview, {
  AvatarGroupPreview,
} from '~components/editor/previews/AvatarPreview'
import * as Components from '@looker/components'
import { getComponentBy } from '~core/selectors/components'
import { InputRightElementPreview } from '~components/editor/previews/InputRightElement'
import { InputLeftElementPreview } from '~components/editor/previews/InputLeftElement'
import AspectRatioPreview from '~components/editor/previews/AspectRatioBoxPreview'
import ButtonPreview from '~components/editor/previews/ButtonPreview'
import HeadingPreview from '~components/editor/previews/HeadingPreview'
import PreviewContainer from '~components/editor/PreviewContainer'
import WithChildrenPreviewContainer from '~components/editor/WithChildrenPreviewContainer'
import IconPreview from './previews/IconPreview'
import IconButtonPreview from './previews/IconButtonPreview'
import SelectPreview from '~components/editor/previews/SelectPreview'
import NumberInputPreview from '~components/editor/previews/NumberInputPreview'

const ComponentPreview: React.FC<{
  componentName: string
}> = ({ componentName, ...forwardedProps }) => {
  const component = useSelector(getComponentBy(componentName))
  console.log(component)
  if (!component) {
    console.error(`ComponentPreview unavailable for component ${componentName}`)
  }

  const type = (component && component.type) || null

  switch (type) {
    // Simple components
    // case 'AvatarIcon':
    // case 'AvatarUser':
    case 'Badge':
    case 'Link':
    case 'Spinner':
    case 'ProgressCircular':
    case 'ToggleSwitch':
    case 'Tab':
    case 'Radio':
    case 'ListItem':
    case 'List':
      return (
        <PreviewContainer
          component={component}
          type={Components[type]}
          {...forwardedProps}
        />
      )
    // Wrapped functional components (forward ref issue)
    case 'Code':
    case 'Divider':
      return (
        <PreviewContainer
          component={component}
          type={Components[type]}
          {...forwardedProps}
          isBoxWrapped
        />
      )
    // Components with childrens
    case 'Box':
    case 'Grid':
    case 'Flex':
    case 'Form':
    case 'Tabs':
    case 'TabPanels':
    case 'TabPanel':
    case 'TabList':
    case 'List':
    case 'TabList':
    case 'TabPanels':
    case 'Space':
    case 'SpaceVertical':
      return (
        <WithChildrenPreviewContainer
          enableVisualHelper
          component={component}
          type={Components[type]}
          {...forwardedProps}
        />
      )
    case 'RadioGroup':
      return (
        <WithChildrenPreviewContainer
          enableVisualHelper
          component={component}
          type={Components[type]}
          {...forwardedProps}
          isBoxWrapped
        />
      )
    // More complex components
    case 'AvatarUser':
      return <AvatarPreview component={component} />
    case 'Button':
      return <ButtonPreview component={component} />
    case 'Icon':
      return <IconPreview component={component} />
    case 'IconButton':
      return <IconButtonPreview component={component} />
    case 'Select':
      return <SelectPreview component={component} />
    case 'Heading':
      return <HeadingPreview component={component} />
    default:
      return null
  }
}

export default memo(ComponentPreview)
