export type MenuItem = {
  children?: MenuItems
  soon?: boolean
  rootParentType?: ComponentType
}

type MenuItems = Partial<
  {
    [k in ComponentType]: MenuItem
  }
>

export const menuItems: MenuItems = {
  AvatarUser: {},
  AvatarIcon: {},
  Badge: {},
  Box: {},
  Button: {},
  IconButton: {},
  ButtonGroup: {},
  Code: {},
  Divider: {},
  Flex: {
    children: {
      FlexItem: {},
    },
  },
  Grid: {},
  Heading: {},
  Icon: {},
  InputText: {},
  Link: {},
  List: {
    children: {
      List: {},
      ListItem: {},
    },
  },
  Space: {},
  SpaceVertical: {},
  Select: {},
  Text: {},
}

export const componentsList: ComponentType[] = [
  'Accordion',
  'AccordionDisclosure',
  'AccordionContent',
  'AvatarUser',
  'AvatarIcon',
  'AvatarCombo',
  'Badge',
  'Box',
  'Breakpoint',
  'Button',
  'ButtonGroup',
  'ButtonOutline',
  'ButtonToggle',
  'ButtonTransparent',
  'Code',
  'Chip',
  'Divider',
  'Flex',
  'FlexItem',
  'Form',
  'Grid',
  'Heading',
  'Icon',
  'IconButton',
  'InlineInputText',
  'InputText',
  'InlineTextArea',
  'InputChips',
  'Input',
  'Link',
  'List',
  'ListItem',
  'ListIcon',
  'Menu',
  'ProgressCircular',
  'Radio',
  'RadioGroup',
  'Select',
  'SelectMulti',
  'Spinner',
  'Space',
  'SpaceVertical',
  'ToggleSwitch',
  'Tab',
  'Tabs',
  'TabList',
  'TabPanel',
  'TabPanels',
  'Text',
  'Textarea',
]
