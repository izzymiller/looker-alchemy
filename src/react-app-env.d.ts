/// <reference types="react-scripts" />;
declare module 'prettier/standalone'
declare module 'coloreact'
declare module 'browser-nativefs'

type ComponentType =
  | 'Accordion'
  | 'AccordionDisclosure'
  | 'AccordionContent'
  | 'AvatarUser'
  | 'AvatarIcon'
  | 'AvatarCombo'
  | 'Badge'
  | 'Box'
  | 'Breakpoint'
  | 'Button'
  | 'ButtonGroup'
  | 'ButtonOutline'
  | 'ButtonToggle'
  | 'ButtonTransparent'
  | 'Code'
  | 'Chip'
  | 'Divider'
  | 'Flex'
  | 'FlexItem'
  | 'Form'
  | 'Grid'
  | 'Heading'
  | 'Icon'
  | 'IconButton'
  | 'InlineInputText'
  | 'InlineTextArea'
  | 'InputText'
  | 'InputChips'
  | 'Input'
  | 'Link'
  | 'List'
  | 'ListItem'
  | 'ListIcon'
  | 'Menu'
  | 'ProgressCircular'
  | 'Radio'
  | 'RadioGroup'
  | 'Select'
  | 'SelectMulti'
  | 'Spinner'
  | 'Space'
  | 'SpaceVertical'
  | 'ToggleSwitch'
  | 'Tab'
  | 'Tabs'
  | 'TabList'
  | 'TabPanel'
  | 'TabPanels'
  | 'Text'
  | 'Textarea'

type MetaComponentType =
  | 'FormControlMeta'
  | 'AccordionMeta'
  | 'ListMeta'
  | 'AlertMeta'
  | 'InputGroupMeta'
  | 'BreadcrumbMeta'

interface IComponent {
  children: string[]
  type: ComponentType
  parent: string
  id: string
  props: any
  rootParentType?: ComponentType
  componentName?: string
}

interface IComponents {
  [name: string]: IComponent
}

interface IPreviewProps {
  component: IComponent
}

interface ComponentItemProps {
  id: string
  label: string
  type: ComponentType
  isMoved?: boolean
  isChild?: boolean
  isMeta?: boolean
  soon?: boolean
  rootParentType?: ComponentType
}
