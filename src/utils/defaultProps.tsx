import React from 'react'
import * as Components from '@looker/components'
import {
  AccordionProps,
  AccordionDisclosureProps,
  AccordionContentProps,
  AvatarUserProps,
  AvatarIconProps,
  AvatarComboProps,
  BadgeProps,
  BoxProps,
  BreakpointProps,
  ButtonProps,
  ButtonToggleProps,
  ChipProps,
  DividerProps,
  FlexProps,
  FlexItemProps,
  FormProps,
  GridProps,
  HeadingProps,
  IconProps,
  IconButtonProps,
  InlineInputTextProps,
  InputTextProps,
  InlineTextAreaProps,
  InputChipsProps,
  LinkProps,
  ListProps,
  ListItemProps,
  MenuProps,
  ProgressCircularProps,
  RadioProps,
  RadioGroupProps,
  SelectProps,
  SelectMultiProps,
  SpinnerProps,
  SpaceVerticalProps,
  ToggleSwitchProps,
  TabProps,
  TabsProps,
  TabListProps,
  TabPanelProps,
  TabPanelsProps,
  TextProps,
  TextAreaProps,
} from '@looker/components'

import iconsList from '~iconsList'

type PropsWithForm<T> = T & { form?: T }

type PreviewDefaultProps = {
  Badge?: PropsWithForm<BadgeProps>
  Box?: PropsWithForm<BoxProps>
  Button?: PropsWithForm<ButtonProps>
  Icon?: PropsWithForm<IconProps> & { icon: keyof typeof iconsList }
  IconButton?: PropsWithForm<IconButtonProps>
  Text?: PropsWithForm<TextProps>
  AvatarCombo?: PropsWithForm<AvatarComboProps>
  AvatarIcon?: PropsWithForm<AvatarIconProps>
  Link?: PropsWithForm<LinkProps>
  Spinner?: PropsWithForm<SpinnerProps>
  Divider?: PropsWithForm<DividerProps>
  TextArea?: PropsWithForm<TextAreaProps>
  ProgressCircular?: PropsWithForm<ProgressCircularProps>
  Heading?: PropsWithForm<HeadingProps>
  ToggleSwitch?: PropsWithForm<ToggleSwitchProps>
  Flex?: PropsWithForm<FlexProps>
  Accordion?: PropsWithForm<Omit<AccordionProps, 'children'>>
  AccordionContent?: PropsWithForm<Omit<AccordionContentProps, 'children'>>
  AccordionDisclosure?: PropsWithForm<AccordionDisclosureProps>
  AccordionIcon?: PropsWithForm<IconProps>
  Grid?: PropsWithForm<GridProps>
  TabList?: PropsWithForm<TabListProps>
  TabPanel?: PropsWithForm<TabPanelProps>
  TabPanels?: PropsWithForm<TabPanelsProps>
  Tab?: PropsWithForm<TabProps>
  Tabs?: PropsWithForm<TabsProps>
  Select?: PropsWithForm<SelectProps & { children: JSX.Element }>
  InputText?: PropsWithForm<InputTextProps>
  InputLeftAddon?: PropsWithForm<any>
  InputRightAddon?: PropsWithForm<any>
  InputLeftElement?: PropsWithForm<any>
  InputRightElement?: PropsWithForm<any>
  Menu?: PropsWithForm<MenuProps>
  Radio?: PropsWithForm<RadioProps>
  RadioGroup?: PropsWithForm<RadioGroupProps>
  List?: PropsWithForm<ListProps>
  ListIcon?: PropsWithForm<IconProps>
  ListItem?: PropsWithForm<any>
}

export const DEFAULT_PROPS: PreviewDefaultProps = {
  AvatarIcon: {
    icon: 'User',
  },
  Badge: {
    children: 'Badge name',
    size: 'small',
    intent: 'key',
  },
  Button: {
    children: 'Button text',
    color: 'key',
    size: 'medium',
  },
  ProgressCircular: {
    size: 'medium',
    progress: 0.5,
  },
  CloseButton: {
    size: 'md',
  },
  Code: {
    children: 'Code value',
  },
  Flex: {},
  FormLabel: { children: 'Label' },
  FormHelperText: {
    children: 'Helper message',
  },
  FormErrorMessage: {
    children: 'Error message',
  },
  Grid: {
    gap: 'medium',
    form: {
      display: 'grid',
    },
  },
  Heading: {
    children: 'Heading title',
  },
  Icon: {
    name: 'Account',
  },
  IconButton: {
    'aria-label': 'icon',
    // @ts-ignore
    icon: 'CopyIcon',
    size: 'md',
  },
  Image: {
    height: '100px',
    width: '100px',
  },
  InputLeftAddon: { children: 'left' },
  InputRightAddon: {
    children: 'right',
  },
  Link: { children: 'Link text' },
  List: {
    form: {
      styleType: 'none',
    },
  },
  ListItem: { children: 'list' },
  Progress: {
    value: 60,
    min: 0,
    max: 100,
  },
  Radio: { children: 'Radio' },
  Select: {
    // @ts-ignore
    icon: 'ChevronDownIcon',
    variant: 'outline',
    size: 'md',
    // @ts-ignore
    form: {
      children: (
        <>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </>
      ),
    },
  },
  SimpleGrid: {
    columns: 2,
    spacingX: 1,
    spacingY: 1,
  },
  Stack: {
    spacing: 2,
    form: {
      display: 'flex',
    },
  },
  Switch: {
    isChecked: false,
  },
  Tab: { children: 'Tab' },
  TabPanel: { children: 'Tab' },
  Tag: {
    children: 'Tag name',
  },
  Text: { children: 'Text value' },
}

export const getDefaultFormProps = (type: ComponentType) => {
  //@ts-ignore
  const componentsDefaultProps = Components[type].defaultProps
  // @ts-ignore
  return { ...componentsDefaultProps, ...DEFAULT_PROPS[type]?.form }
}
