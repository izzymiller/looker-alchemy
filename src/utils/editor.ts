export const COMPONENTS: (ComponentType | MetaComponentType)[] = [
  'Badge',
  'Box',
  'Button',
  'Code',
  'Divider',
  'Flex',
  'Grid',
  'Heading',
  'Icon',
  'IconButton',
  'Input',
  'Link',
  'List',
  'ListItem',
  'ProgressCircular',
  'Radio',
  'RadioGroup',
  'Spinner',
  'Select',
  'Text',
  'Textarea',
  'Tab',
  'Accordion',
  'Menu',
  // Allow meta components
  'AlertMeta',
  'FormControlMeta',
  'AccordionMeta',
  'ListMeta',
  'InputGroupMeta',
  'BreadcrumbMeta',
]

export const rootComponents = COMPONENTS
  // Remove specific components
  .filter(
    name =>
      ![
        'AlertIcon',
        'AlertDescription',
        'AlertTitle',
        'AvatarBadge',
        'AccordionButton',
        'AccordionPanel',
        'AccordionIcon',
      ].includes(name),
  )
