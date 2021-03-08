import React, { memo } from 'react'

import ButtonPanel from '~components/inspector/panels/components/ButtonPanel'
import BadgePanel from '~components/inspector/panels/components/BadgePanel'
import IconPanel from '~components/inspector/panels/components/IconPanel'
import BoxPanel from '~components/inspector/panels/components/BoxPanel'
import ChildrenControl from '~components/inspector/controls/ChildrenControl'
import IconButtonPanel from '~components/inspector/panels/components/IconButtonPanel'
import LinkPanel from '~components/inspector/panels/components/LinkPanel'
import SpinnerPanel from '~components/inspector/panels/components/SpinnerPanel'
import DividerPanel from '~components/inspector/panels/components/DividerPanel'
import CodePanel from '~components/inspector/panels/components/CodePanel'
import TextareaPanel from '~components/inspector/panels/components/TextareaPanel'
import CircularProgressPanel from '~components/inspector/panels/components/CircularProgressPanel'
import HeadingPanel from '~components/inspector/panels/components/HeadingPanel'

import FlexPanel from '~components/inspector/panels/styles/FlexPanel'

import TabsPanel from '~components/inspector/panels/components/TabsPanel'
import InputPanel from '~components/inspector/panels/components/InputPanel'
import RadioPanel from '~components/inspector/panels/components/RadioPanel'
import RadioGroupPanel from '~components/inspector/panels/components/RadioGroupPanel'
import SelectPanel from '~components/inspector/panels/components/SelectPanel'
import ListPanel from '~components/inspector/panels/components/ListPanel'
import ListItemPanel from '~components/inspector/panels/components/ListItemPanel'
import ListIconPanel from '~components/inspector/panels/components/ListIconPanel'
import AccordionPanel from '~components/inspector/panels/components/AccordionPanel'

import GridPanel from '~components/inspector/panels/components/GridPanel'

const Panels: React.FC<{ component: IComponent; isRoot: boolean }> = ({
  component,
  isRoot,
}) => {
  const { type } = component

  if (isRoot) {
    return null
  }

  return (
    <>
      {type === 'Button' && <ButtonPanel />}
      {type === 'Box' && <BoxPanel />}
      {type === 'Badge' && <BadgePanel />}
      {type === 'Icon' && <IconPanel />}
      {type === 'IconButton' && <IconButtonPanel />}
      {type === 'Text' && <ChildrenControl />}
      {type === 'Link' && <LinkPanel />}
      {type === 'Spinner' && <SpinnerPanel />}
      {type === 'Code' && <CodePanel />}
      {type === 'Divider' && <DividerPanel />}
      {type === 'Textarea' && <TextareaPanel />}
      {type === 'ProgressCircular' && <CircularProgressPanel />}
      {type === 'Heading' && <HeadingPanel />}
      {type === 'Flex' && <FlexPanel />}
      {type === 'Tabs' && <TabsPanel />}
      {type === 'Input' && <InputPanel />}
      {type === 'Radio' && <RadioPanel />}
      {type === 'RadioGroup' && <RadioGroupPanel />}
      {type === 'Select' && <SelectPanel />}
      {type === 'List' && <ListPanel />}
      {type === 'ListItem' && <ListItemPanel />}
      {type === 'ListIcon' && <ListIconPanel />}
      {type === 'Accordion' && <AccordionPanel />}
      {type === 'Grid' && <GridPanel />}
    </>
  )
}

export default memo(Panels)
