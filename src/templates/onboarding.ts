export const onboarding: IComponents = {
  root: {
    id: 'root',
    parent: 'root',
    type: 'Box',
    children: ['comp-root', 'comp-K6GOMRTOCHZHD'],
    props: {
      backgroundColor: 'gray.100',
    },
  },
  'comp-1580479567': {
    id: 'comp-1580479567',
    props: {
      bg: '#ffffff',
      borderRadius: 'lg',
      width: 'sm',
      minHeight: 'sm',
      border: '1px solid lightgrey',
      overflow: 'hidden',
    },
    children: ['comp-1580479581', 'comp-1580479627'],
    type: 'Box',
    parent: 'comp-K6H1HKZ1MFW94',
  },
  'comp-1580479581': {
    id: 'comp-1580479581',
    props: {},
    children: ['comp-1580479588'],
    type: 'Box',
    parent: 'comp-1580479567',
  },
  'comp-1580479588': {
    id: 'comp-1580479588',
    props: {
      size: '100px',
      fallbackSrc: 'https://via.placeholder.com/150',
      src:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      width: '100%',
      height: 'auto',
      minHeight: '245px',
    },
    children: [],
    type: 'Image',
    parent: 'comp-1580479581',
  },
  'comp-1580479627': {
    id: 'comp-1580479627',
    props: {
      p: '5',
      pb: '8',
    },
    children: [
      'comp-1580479631',
      'comp-1580479743',
      'comp-1580479791',
      'comp-1580479811',
    ],
    type: 'Box',
    parent: 'comp-1580479567',
  },
  'comp-1580479631': {
    id: 'comp-1580479631',
    props: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      mb: '1',
      flexDirection: 'row',
    },
    children: ['comp-1580479639', 'comp-1580479654'],
    type: 'Box',
    parent: 'comp-1580479627',
  },
  'comp-1580479639': {
    id: 'comp-1580479639',
    props: {
      children: 'NEW',
      variant: 'subtle',
      colorScheme: 'teal',
      mr: '2',
      borderRadius: 'lg',
      pl: '2',
      pr: '2',
    },
    children: [],
    type: 'Badge',
    parent: 'comp-1580479631',
  },
  'comp-1580479654': {
    id: 'comp-1580479654',
    props: {
      children: '3 BEDS • 2 BATHS',
      color: 'gray.500',
      fontSize: 'xs',
    },
    children: [],
    type: 'Text',
    parent: 'comp-1580479631',
  },
  'comp-1580479743': {
    id: 'comp-1580479743',
    props: {
      children: 'Modern home in city center',
      fontWeight: 'bold',
      fontSize: 'xl',
    },
    children: [],
    type: 'Text',
    parent: 'comp-1580479627',
  },
  'comp-1580479791': {
    id: 'comp-1580479791',
    props: {
      children: '$119/night',
      fontSize: 'sm',
      mb: '3',
    },
    children: [],
    type: 'Text',
    parent: 'comp-1580479627',
  },
  'comp-1580479811': {
    id: 'comp-1580479811',
    props: {
      display: 'flex',
      alignItems: 'center',
      mb: '',
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    children: ['comp-1580479816', 'comp-1580479832', 'comp-1580479862'],
    type: 'Box',
    parent: 'comp-1580479627',
  },
  'comp-1580479816': {
    id: 'comp-1580479816',
    props: {
      icon: 'StarIcon',
      color: 'yellow.400',
      mr: '1',
    },
    children: [],
    type: 'Icon',
    parent: 'comp-1580479811',
  },
  'comp-1580479832': {
    id: 'comp-1580479832',
    props: {
      children: '4.84',
      fontWeight: 'bold',
      mr: '1',
    },
    children: [],
    type: 'Text',
    parent: 'comp-1580479811',
  },
  'comp-1580479862': {
    id: 'comp-1580479862',
    props: {
      children: '(190)',
      fontSize: 'sm',
    },
    children: [],
    type: 'Text',
    parent: 'comp-1580479811',
  },
  'comp-K6GOHZ8TESH7P': {
    id: 'comp-K6GOHZ8TESH7P',
    props: {
      isInline: true,
      spacing: '3',
    },
    children: ['comp-K6GOJIZK48606', 'comp-K6GOMJN7JIXFL'],
    type: 'Stack',
    parent: 'root',
    rootParentType: 'Stack',
  },
  'comp-K6GOIFAQVGRYM': {
    id: 'comp-K6GOIFAQVGRYM',
    props: {
      size: 'md',
      name: 'B A',
    },
    children: ['comp-K6GOIKKDQ4493'],
    type: 'Avatar',
    parent: 'comp-K6GOI5NIER4LV',
    rootParentType: 'Avatar',
  },
  'comp-K6GOIGUCZB1SL': {
    id: 'comp-K6GOIGUCZB1SL',
    props: {
      size: 'md',
      name: 'D SSQDDFFDQ',
    },
    children: ['comp-K6GOIMB85D7K4'],
    type: 'Avatar',
    parent: 'comp-K6GOI5NIER4LV',
    rootParentType: 'Avatar',
  },
  'comp-K6GOIIBO0XHI7': {
    id: 'comp-K6GOIIBO0XHI7',
    props: {
      size: 'md',
    },
    children: [],
    type: 'Avatar',
    parent: 'comp-K6GOI5NIER4LV',
    rootParentType: 'Avatar',
  },
  'comp-K6GOIKKDQ4493': {
    id: 'comp-K6GOIKKDQ4493',
    props: {
      bg: 'green.500',
      size: '1.25em',
      borderColor: 'white',
    },
    children: [],
    type: 'AvatarBadge',
    parent: 'comp-K6GOIFAQVGRYM',
    rootParentType: 'Avatar',
  },
  'comp-K6GOIMB85D7K4': {
    id: 'comp-K6GOIMB85D7K4',
    props: {
      bg: 'red.300',
      size: '1.25em',
      borderColor: 'white',
    },
    children: [],
    type: 'AvatarBadge',
    parent: 'comp-K6GOIGUCZB1SL',
    rootParentType: 'Avatar',
  },
  'comp-K6GOJIZK48606': {
    children: [
      'comp-K6GOJIZKP3TP4',
      'comp-K6GOJIZKBP51K',
      'comp-K6GOJIZKFGTBB',
    ],
    type: 'Alert',
    parent: 'comp-K6GPRW4QAMBNY',
    id: 'comp-K6GOJIZK48606',
    props: {
      variant: 'left-accent',
      status: 'success',
      width: '',
      mt: '10',
    },
    rootParentType: 'Alert',
  },
  'comp-K6GOJIZKP3TP4': {
    children: [],
    type: 'AlertIcon',
    parent: 'comp-K6GOJIZK48606',
    id: 'comp-K6GOJIZKP3TP4',
    props: {},
    rootParentType: 'Alert',
  },
  'comp-K6GOJIZKBP51K': {
    children: [],
    type: 'AlertTitle',
    parent: 'comp-K6GOJIZK48606',
    id: 'comp-K6GOJIZKBP51K',
    props: {
      children: 'Lorem IpsumD',
      mr: 1,
    },
    rootParentType: 'Alert',
  },
  'comp-K6GOJIZKFGTBB': {
    children: [],
    type: 'AlertDescription',
    parent: 'comp-K6GOJIZK48606',
    id: 'comp-K6GOJIZKFGTBB',
    props: {
      children: 'Lorem Ipsum',
    },
    rootParentType: 'Alert',
  },
  'comp-K6GOMJN7PJCDF': {
    children: [],
    type: 'FormLabel',
    parent: 'comp-K6GOMJN7JIXFL',
    id: 'comp-K6GOMJN7PJCDF',
    props: {
      children: 'Email',
    },
    rootParentType: 'FormControl',
  },
  'comp-K6GOMJN7RTBUI': {
    children: [],
    type: 'Input',
    parent: 'comp-K6GP5NLNTDJFV',
    id: 'comp-K6GOMJN7RTBUI',
    props: {
      size: 'md',
      as: 'input',
      variant: 'outline',
      isFullWidth: true,
      focusBorderColor: 'blue.500',
      errorBorderColor: 'red.500',
      placeholder: 'Your email',
    },
    rootParentType: 'FormControl',
  },
  'comp-K6GOMJN724L5A': {
    children: [],
    type: 'FormHelperText',
    parent: 'comp-K6GOMJN7JIXFL',
    id: 'comp-K6GOMJN724L5A',
    props: {
      children: 'Toggle the invalid props in the side panel ',
    },
    rootParentType: 'FormControl',
  },
  'comp-K6GOMJN725CHT': {
    children: [],
    type: 'FormErrorMessage',
    parent: 'comp-K6GOMJN7JIXFL',
    id: 'comp-K6GOMJN725CHT',
    props: {
      children: 'Invalid email',
    },
    rootParentType: 'FormControl',
  },
  'comp-K6GOMRTOCHZHD': {
    id: 'comp-K6GOMRTOCHZHD',
    props: {
      p: 10,
      gap: '6',
      templateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    },
    children: [
      'comp-K6GXBDLT2XCNC',
      'comp-K6H0JNXQ74O61',
      'comp-K6H1R04NDVRXG',
      'comp-K6H1HKZ1MFW94',
    ],
    type: 'Grid',
    parent: 'root',
    rootParentType: 'Grid',
  },
  'comp-K6GOPXN2COS0O': {
    id: 'comp-K6GOPXN2COS0O',
    props: {
      isInline: true,

      spacing: '4',
      p: '',
      m: '',
      mt: '10',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    children: ['comp-K6GOQACVR8I88', 'comp-K6GOQCQRD62NL'],
    type: 'Stack',
    parent: 'comp-K6GPRW4QAMBNY',
    rootParentType: 'Stack',
  },
  'comp-K6GOQACVR8I88': {
    id: 'comp-K6GOQACVR8I88',
    props: {
      color: 'blue',
      size: 'md',
      isChecked: true,
    },
    children: [],
    type: 'Switch',
    parent: 'comp-K6GOPXN2COS0O',
    rootParentType: 'Switch',
  },
  'comp-K6GOQCQRD62NL': {
    id: 'comp-K6GOQCQRD62NL',
    props: {
      color: 'red',
      size: 'md',
      isChecked: true,
    },
    children: [],
    type: 'Switch',
    parent: 'comp-K6GOPXN2COS0O',
    rootParentType: 'Switch',
  },
  'comp-K6GP5NLNTDJFV': {
    id: 'comp-K6GP5NLNTDJFV',
    props: {},
    children: ['comp-K6GOMJN7RTBUI', 'comp-K6GP5TB58TQP4'],
    type: 'InputGroup',
    parent: 'comp-K6GOMJN7JIXFL',
    rootParentType: 'Input',
  },
  'comp-K6GP5TB58TQP4': {
    id: 'comp-K6GP5TB58TQP4',
    props: {},
    children: ['comp-K6GP60GCOFWJI'],
    type: 'InputRightElement',
    parent: 'comp-K6GP5NLNTDJFV',
    rootParentType: 'Input',
  },
  'comp-K6GP60GCOFWJI': {
    id: 'comp-K6GP60GCOFWJI',
    props: {
      icon: 'EmailIcon',
      color: 'blackAlpha.300',
    },
    children: [],
    type: 'Icon',
    parent: 'comp-K6GP5TB58TQP4',
    rootParentType: 'Icon',
  },
  'comp-root': {
    id: 'comp-root',
    props: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontStyle: null,
      fontWeight: null,
      mt: '4',
    },
    children: ['comp-K6H1NISD15XAG', 'comp-K6H1NSQY3KC7W'],
    type: 'Flex',
    parent: 'root',
    rootParentType: 'Flex',
  },
  'comp-K6GPAPKNQACEE': {
    id: 'comp-K6GPAPKNQACEE',
    props: {
      children: '⚡️Welcome to OpenChakra',
      fontSize: '3xl',
      fontWeight: 'bold',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K6H1NISD15XAG',
    rootParentType: 'Text',
  },
  'comp-K6GPCGKZ5S4UA': {
    id: 'comp-K6GPCGKZ5S4UA',
    props: {
      children: 'BETA',
      variant: 'subtle',
      colorScheme: 'pink',
      ml: '1',
    },
    children: [],
    type: 'Badge',
    parent: 'comp-K6H1NISD15XAG',
    rootParentType: 'Badge',
  },
  'comp-K6GXBDLT2XCNC': {
    id: 'comp-K6GXBDLT2XCNC',
    props: {},
    children: ['comp-K6GXDV4IMW2CP'],
    type: 'Stack',
    parent: 'comp-K6GOMRTOCHZHD',
    rootParentType: 'Stack',
  },
  'comp-K6GXDV4IMW2CP': {
    id: 'comp-K6GXDV4IMW2CP',
    props: {
      backgroundColor: 'white',
      boxShadow: 'sm',
      borderRadius: 'lg',
      p: '',
      pl: '3',
      pr: '3',
      pt: '5',
      pb: '5',
    },
    children: ['comp-K6GXI36J9KZND', 'comp-K6GYT6R9XZ4FQ'],
    type: 'Box',
    parent: 'comp-K6GXBDLT2XCNC',
    rootParentType: 'Box',
  },
  'comp-K6GXFBY5JLD6C': {
    id: 'comp-K6GXFBY5JLD6C',
    props: {
      isInline: false,

      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      ml: '',
      spacing: '2',
    },
    children: [
      'comp-K6GZFELGGUNO9',
      'comp-K6GXFJ7TPU8HD',
      'comp-K6H0BMT29TH3Z',
    ],
    type: 'Stack',
    parent: 'comp-K6GYT6R9XZ4FQ',
    rootParentType: 'Stack',
  },
  'comp-K6GXFJ7TPU8HD': {
    id: 'comp-K6GXFJ7TPU8HD',
    props: {
      children:
        'Drag any component from the left hand panel into this editor. Then start interacting with them: try to drop the Avatar component in this box…',
      fontSize: 'md',
      color: 'gray.600',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K6GXFBY5JLD6C',
    rootParentType: 'Text',
  },
  'comp-K6GXHPLKU3KD7': {
    id: 'comp-K6GXHPLKU3KD7',
    props: {
      icon: 'ChevroniconBefore',
    },
    children: [],
    type: 'Icon',
    parent: 'comp-K6GXI36J9KZND',
    rootParentType: 'Icon',
  },
  'comp-K6GXI36J9KZND': {
    id: 'comp-K6GXI36J9KZND',
    props: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      pb: '2',
    },
    children: ['comp-K6GXHPLKU3KD7', 'comp-K6H1DN4WK66BJ'],
    type: 'Flex',
    parent: 'comp-K6GXDV4IMW2CP',
    rootParentType: 'Flex',
  },
  'comp-K6GYF54LO8XHL': {
    id: 'comp-K6GYF54LO8XHL',
    props: {
      ml: '',
      isInline: false,

      spacing: '2',
    },
    children: ['comp-K6GYJVZZPAWEH', 'comp-K6GYL9G557J57'],
    type: 'Stack',
    parent: 'comp-K6GYT6R9XZ4FQ',
    rootParentType: 'Stack',
  },
  'comp-K6GYJVZZPAWEH': {
    id: 'comp-K6GYJVZZPAWEH',
    props: {
      children: 'Preset',
      size: 'md',
      variant: 'subtle',
      isInline: false,
      colorScheme: 'whatsapp',
    },
    children: [],
    type: 'Tag',
    parent: 'comp-K6GYF54LO8XHL',
    rootParentType: 'Tag',
  },
  'comp-K6GYL9G557J57': {
    id: 'comp-K6GYL9G557J57',
    props: {
      children:
        'A preset is a group of components (like Alert). Just drop a preset to easily setup a complexe component like this:',
      color: 'gray.600',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K6GYF54LO8XHL',
    rootParentType: 'Text',
  },
  'comp-K6GYT6R9XZ4FQ': {
    id: 'comp-K6GYT6R9XZ4FQ',
    props: {
      ml: '4',
      spacing: '2',

      mt: '4',
      mr: '4',
    },
    children: [
      'comp-K6GXFBY5JLD6C',
      'comp-K6GYF54LO8XHL',
      'comp-K6H058BAEDGV1',
    ],
    type: 'Stack',
    parent: 'comp-K6GXDV4IMW2CP',
    rootParentType: 'Stack',
  },
  'comp-K6GZ3EKNXAMK3': {
    children: [],
    type: 'AlertIcon',
    parent: 'comp-K6GZ3EKNLDRNJ',
    id: 'comp-K6GZ3EKNXAMK3',
    props: {},
    rootParentType: 'Alert',
  },
  'comp-K6GZ3EKNM193L': {
    children: [],
    type: 'AlertTitle',
    parent: 'comp-K6GZ3EKNLDRNJ',
    id: 'comp-K6GZ3EKNM193L',
    props: {
      children: 'Lorem Ipsum',
      mr: 1,
    },
    rootParentType: 'Alert',
  },
  'comp-K6GZ3EKNST65I': {
    children: [],
    type: 'AlertDescription',
    parent: 'comp-K6GZ3EKNLDRNJ',
    id: 'comp-K6GZ3EKNST65I',
    props: {
      children: 'Lorem Ipsum',
    },
    rootParentType: 'Alert',
  },
  'comp-K6GZFELGGUNO9': {
    id: 'comp-K6GZFELGGUNO9',
    props: {
      children: 'Drag and Drop!',
      size: 'md',
      variant: 'subtle',
      colorScheme: 'whatsapp',
      borderRadius: 'sm',
      fontSize: 'sm',
    },
    children: [],
    type: 'Tag',
    parent: 'comp-K6GXFBY5JLD6C',
    rootParentType: 'Tag',
  },
  'comp-K6H058BAEDGV1': {
    children: [
      'comp-K6H058BALZ1ZY',
      'comp-K6H058BADYEBT',
      'comp-K6H058BA2BOTV',
    ],
    type: 'Alert',
    parent: 'root',
    id: 'comp-K6H058BAEDGV1',
    props: {
      variant: 'left-accent',
      status: 'success',
    },
    rootParentType: 'Alert',
  },
  'comp-K6H058BALZ1ZY': {
    children: [],
    type: 'AlertIcon',
    parent: 'comp-K6H058BAEDGV1',
    id: 'comp-K6H058BALZ1ZY',
    props: {},
    rootParentType: 'Alert',
  },
  'comp-K6H058BADYEBT': {
    children: [],
    type: 'AlertTitle',
    parent: 'comp-K6H058BAEDGV1',
    id: 'comp-K6H058BADYEBT',
    props: {
      children: 'Alert!',
      mr: 1,
    },
    rootParentType: 'Alert',
  },
  'comp-K6H058BA2BOTV': {
    children: [],
    type: 'AlertDescription',
    parent: 'comp-K6H058BAEDGV1',
    id: 'comp-K6H058BA2BOTV',
    props: {
      children: "I'm an Alert preset",
    },
    rootParentType: 'Alert',
  },
  'comp-K6H0BMT29TH3Z': {
    id: 'comp-K6H0BMT29TH3Z',
    props: {
      width: '200px',
      display: 'block',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      minWidth: '',
      backgroundColor: 'gray.100',
      borderRadius: 'lg',
      p: '3',
      minHeight: '60px',
    },
    children: [],
    type: 'Box',
    parent: 'comp-K6GXFBY5JLD6C',
    rootParentType: 'Box',
  },
  'comp-K6H0JNXQ74O61': {
    id: 'comp-K6H0JNXQ74O61',
    props: {
      mt: '',
    },
    children: ['comp-K6H0K8RWWJZI9'],
    type: 'Box',
    parent: 'comp-K6GOMRTOCHZHD',
    rootParentType: 'Box',
  },
  'comp-K6H0K8RWWJZI9': {
    id: 'comp-K6H0K8RWWJZI9',
    props: {
      backgroundColor: 'white',
      borderRadius: 'lg',
      boxShadow: 'sm',
      pl: '3',
      pr: '3',
      pt: '5',
      pb: '5',
    },
    children: ['comp-K6H0L0JI1C6Q8', 'comp-K6H0PTU71NGNY'],
    type: 'Box',
    parent: 'comp-K6H0JNXQ74O61',
    rootParentType: 'Box',
  },
  'comp-K6H0L0JI1C6Q8': {
    id: 'comp-K6H0L0JI1C6Q8',
    props: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    children: ['comp-K6H1E4X3P9NHB', 'comp-K6H0L81XGIHU1'],
    type: 'Flex',
    parent: 'comp-K6H0K8RWWJZI9',
    rootParentType: 'Flex',
  },
  'comp-K6H0L81XGIHU1': {
    id: 'comp-K6H0L81XGIHU1',
    props: {
      icon: 'ChevronleftIcon',
    },
    children: [],
    type: 'Icon',
    parent: 'comp-K6H0L0JI1C6Q8',
    rootParentType: 'Icon',
  },
  'comp-K6H0PTU71NGNY': {
    id: 'comp-K6H0PTU71NGNY',
    props: {
      spacing: '4',
      ml: '4',
      mt: '4',
    },
    children: [
      'comp-K6H0PXX1VMIEO',
      'comp-K6H175A76GO7R',
      'comp-K6H0VNVDZ2TRH',
    ],
    type: 'Stack',
    parent: 'comp-K6H0K8RWWJZI9',
    rootParentType: 'Stack',
  },
  'comp-K6H0PXX1VMIEO': {
    id: 'comp-K6H0PXX1VMIEO',
    props: {
      spacing: '2',
    },
    children: ['comp-K6H0Q3HFG0Q14', 'comp-K6H0RNTHVY7IT'],
    type: 'Stack',
    parent: 'comp-K6H0PTU71NGNY',
    rootParentType: 'Stack',
  },
  'comp-K6H0Q3HFG0Q14': {
    id: 'comp-K6H0Q3HFG0Q14',
    props: {
      children: 'Update props & style',
      size: 'md',
      variant: 'subtle',
      colorScheme: 'yellow',
    },
    children: [],
    type: 'Tag',
    parent: 'comp-K6H0PXX1VMIEO',
    rootParentType: 'Tag',
  },
  'comp-K6H0RNTHVY7IT': {
    id: 'comp-K6H0RNTHVY7IT',
    props: {
      children:
        "On the right hand side, you can find the inspectror panel. You will find the tools to edit the component's props and style.",
      fontSize: 'md',
      color: 'gray.600',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K6H0PXX1VMIEO',
    rootParentType: 'Text',
  },
  'comp-K6H0VNVDZ2TRH': {
    id: 'comp-K6H0VNVDZ2TRH',
    props: {
      spacing: '2',
    },
    children: ['comp-K6H0VZBSG4SCN', 'comp-K6H0WPDNKQ6CR'],
    type: 'Stack',
    parent: 'comp-K6H0PTU71NGNY',
    rootParentType: 'Stack',
  },
  'comp-K6H0VZBSG4SCN': {
    id: 'comp-K6H0VZBSG4SCN',
    props: {
      children: 'Sort components',
      size: 'md',
      variant: 'subtle',
      isInline: false,
      colorScheme: 'yellow',
    },
    children: [],
    type: 'Tag',
    parent: 'comp-K6H0VNVDZ2TRH',
    rootParentType: 'Tag',
  },
  'comp-K6H0WPDNKQ6CR': {
    id: 'comp-K6H0WPDNKQ6CR',
    props: {
      children:
        'By clicking on a component containing children, you will see a Children panel appearing on the right. It enables sorting the children. ',
      color: 'gray.600',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K6H0VNVDZ2TRH',
    rootParentType: 'Text',
  },
  'comp-K6H0YLJ6AL2ZP': {
    id: 'comp-K6H0YLJ6AL2ZP',
    props: {
      size: 'md',
      name: 'Baptiste Adrien',
    },
    children: ['comp-K6H12NJ1K1WWT'],
    type: 'Avatar',
    parent: 'comp-K6H0YIYKMTVPG',
    rootParentType: 'Avatar',
  },
  'comp-K6H0YNHI4ZZEL': {
    id: 'comp-K6H0YNHI4ZZEL',
    props: {
      size: 'md',
      name: 'Michel Gondry',
    },
    children: [],
    type: 'Avatar',
    parent: 'comp-K6H0YIYKMTVPG',
    rootParentType: 'Avatar',
  },
  'comp-K6H0YPEUOUQ9S': {
    id: 'comp-K6H0YPEUOUQ9S',
    props: {
      size: 'md',
      name: 'George Brassens',
    },
    children: ['comp-K6H12QD4UYFX0'],
    type: 'Avatar',
    parent: 'comp-K6H0YIYKMTVPG',
    rootParentType: 'Avatar',
  },
  'comp-K6H12NJ1K1WWT': {
    id: 'comp-K6H12NJ1K1WWT',
    props: {
      bg: 'green.500',
      size: '1.25em',
      borderColor: 'white',
    },
    children: [],
    type: 'AvatarBadge',
    parent: 'comp-K6H0YLJ6AL2ZP',
    rootParentType: 'Avatar',
  },
  'comp-K6H12QD4UYFX0': {
    id: 'comp-K6H12QD4UYFX0',
    props: {
      bg: 'green.500',
      size: '1.25em',
      borderColor: 'white',
    },
    children: [],
    type: 'AvatarBadge',
    parent: 'comp-K6H0YPEUOUQ9S',
    rootParentType: 'Avatar',
  },
  'comp-K6H175A76GO7R': {
    id: 'comp-K6H175A76GO7R',
    props: {
      spacing: '2',
    },
    children: ['comp-K6H17C6VB8XQL', 'comp-K6H17HIGGSUHM'],
    type: 'Stack',
    parent: 'comp-K6H0PTU71NGNY',
    rootParentType: 'Stack',
  },
  'comp-K6H17C6VB8XQL': {
    id: 'comp-K6H17C6VB8XQL',
    props: {
      children: 'Delete, reset and read doc',
      size: 'md',
      variant: 'subtle',
      colorScheme: 'yellow',
    },
    children: [],
    type: 'Tag',
    parent: 'comp-K6H175A76GO7R',
    rootParentType: 'Tag',
  },
  'comp-K6H17HIGGSUHM': {
    id: 'comp-K6H17HIGGSUHM',
    props: {
      children:
        'Reach the yellow bar on the top to delete, reset and access the Chakra doc of each component.',
      color: 'gray.600',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K6H175A76GO7R',
    rootParentType: 'Text',
  },
  'comp-K6H1DN4WK66BJ': {
    id: 'comp-K6H1DN4WK66BJ',
    props: {
      size: 'md',
      as: 'h2',
      lineHeight: 'shorter',
      fontWeight: 'bold',
      fontFamily: 'heading',
      children: 'Component Panel',
    },
    children: [],
    type: 'Heading',
    parent: 'comp-K6GXI36J9KZND',
    rootParentType: 'Heading',
  },
  'comp-K6H1E4X3P9NHB': {
    id: 'comp-K6H1E4X3P9NHB',
    props: {
      size: 'md',
      as: 'h2',
      lineHeight: 'shorter',
      fontWeight: 'bold',
      fontFamily: 'heading',
      children: 'Inspector',
    },
    children: [],
    type: 'Heading',
    parent: 'comp-K6H0L0JI1C6Q8',
    rootParentType: 'Heading',
  },
  'comp-K6H1HKZ1MFW94': {
    id: 'comp-K6H1HKZ1MFW94',
    props: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      pt: '',
      mt: '',
      p: '10',
    },
    children: ['comp-K6H1HWQ2NE07P', 'comp-1580479567'],
    type: 'Box',
    parent: 'comp-K6GOMRTOCHZHD',
    rootParentType: 'Box',
  },
  'comp-K6H1HWQ2NE07P': {
    id: 'comp-K6H1HWQ2NE07P',
    props: {
      children:
        'With a bit of practice, you will able to design awesome components:',
      fontSize: 'lg',
      fontWeight: null,
      lineHeight: 'normal',
      textAlign: 'center',
      mb: '5',
      color: 'twitter.900',
      maxWidth: 'sm',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K6H1HKZ1MFW94',
    rootParentType: 'Text',
  },
  'comp-K6H1NISD15XAG': {
    id: 'comp-K6H1NISD15XAG',
    props: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    children: ['comp-K6GPAPKNQACEE', 'comp-K6GPCGKZ5S4UA'],
    type: 'Flex',
    parent: 'comp-root',
    rootParentType: 'Flex',
  },
  'comp-K6H1NSQY3KC7W': {
    id: 'comp-K6H1NSQY3KC7W',
    props: {
      children: 'The Visual Editor for Chakra UI',
      color: 'gray.500',
    },
    children: [],
    type: 'Text',
    parent: 'comp-root',
    rootParentType: 'Text',
  },
  'comp-K6H1R04NDVRXG': {
    id: 'comp-K6H1R04NDVRXG',
    props: {},
    children: ['comp-K6H1RE2JP0JEX'],
    type: 'Box',
    parent: 'comp-K6GOMRTOCHZHD',
    rootParentType: 'Box',
  },
  'comp-K6H1RE2JP0JEX': {
    id: 'comp-K6H1RE2JP0JEX',
    props: {
      backgroundColor: 'white',
      borderRadius: 'lg',
      boxShadow: 'sm',
      pl: '3',
      pr: '3',
      pt: '5',
      pb: '5',
    },
    children: ['comp-K6H1SPAU7FGTI', 'comp-K6H1TRQ8GRP98'],
    type: 'Box',
    parent: 'comp-K6H1R04NDVRXG',
    rootParentType: 'Box',
  },
  'comp-K6H1SPAU7FGTI': {
    id: 'comp-K6H1SPAU7FGTI',
    props: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      pb: '',
      mb: '2',
      pl: '4',
    },
    children: ['comp-K6H1SW29GEL7E'],
    type: 'Flex',
    parent: 'comp-K6H1RE2JP0JEX',
    rootParentType: 'Flex',
  },
  'comp-K6H1SW29GEL7E': {
    id: 'comp-K6H1SW29GEL7E',
    props: {
      size: 'md',
      as: 'h2',
      lineHeight: 'shorter',
      fontWeight: 'bold',
      fontFamily: 'heading',
      children: 'Editor',
    },
    children: [],
    type: 'Heading',
    parent: 'comp-K6H1SPAU7FGTI',
    rootParentType: 'Heading',
  },
  'comp-K6H1TRQ8GRP98': {
    id: 'comp-K6H1TRQ8GRP98',
    props: {
      spacing: '5',
      pl: '4',
      pt: '4',
    },
    children: [
      'comp-K6H1UG7QF7UP4',
      'comp-K6H1WTCRIIFNG',
      'comp-K6HM4MGL0S6AH',
    ],
    type: 'Stack',
    parent: 'comp-K6H1RE2JP0JEX',
    rootParentType: 'Stack',
  },
  'comp-K6H1UG7QF7UP4': {
    id: 'comp-K6H1UG7QF7UP4',
    props: {
      spacing: '2',
    },
    children: ['comp-K6H1UMW2YLSAB', 'comp-K6H1VU1P3OYRQ'],
    type: 'Stack',
    parent: 'comp-K6H1TRQ8GRP98',
    rootParentType: 'Stack',
  },
  'comp-K6H1UMW2YLSAB': {
    id: 'comp-K6H1UMW2YLSAB',
    props: {
      children: 'Builder mode',
      size: 'md',
      variant: 'solid',
      colorScheme: 'facebook',
    },
    children: [],
    type: 'Tag',
    parent: 'comp-K6H1UG7QF7UP4',
    rootParentType: 'Tag',
  },
  'comp-K6H1VU1P3OYRQ': {
    id: 'comp-K6H1VU1P3OYRQ',
    props: {
      children:
        'The Builder mode adds extra padding/border to ease components selection (like containers).',
      color: 'gray.600',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K6H1UG7QF7UP4',
    rootParentType: 'Text',
  },
  'comp-K6H1WTCRIIFNG': {
    id: 'comp-K6H1WTCRIIFNG',
    props: {},
    children: ['comp-K6H1XCSNJY88G', 'comp-K6H1XZB37JTJ4'],
    type: 'Stack',
    parent: 'comp-K6H1TRQ8GRP98',
    rootParentType: 'Stack',
  },
  'comp-K6H1XCSNJY88G': {
    id: 'comp-K6H1XCSNJY88G',
    props: {
      children: 'Code Panel',
      size: 'md',
      variant: 'solid',
      colorScheme: 'facebook',
    },
    children: [],
    type: 'Tag',
    parent: 'comp-K6H1WTCRIIFNG',
    rootParentType: 'Tag',
  },
  'comp-K6H1XZB37JTJ4': {
    id: 'comp-K6H1XZB37JTJ4',
    props: {
      children:
        'Toggle the code panel for viewing the JSX/React code of your components. You can even export your code directly to CodeSandbox!',
      color: 'gray.600',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K6H1WTCRIIFNG',
    rootParentType: 'Text',
  },
  'comp-K6HM4MGL0S6AH': {
    id: 'comp-K6HM4MGL0S6AH',
    props: {
      spacing: '4',
    },
    children: [
      'comp-K6HMBS5MS8QPW',
      'comp-K6HM7KLJLO714',
      'comp-K6HMEG7J926M9',
      'comp-K6HM9HOFHX07Z',
      'comp-K6HMA6UCR000W',
    ],
    type: 'Stack',
    parent: 'comp-K6H1TRQ8GRP98',
    rootParentType: 'Stack',
  },
  'comp-K6HM71OF2R1BL': {
    id: 'comp-K6HM71OF2R1BL',
    props: {
      children: 'ctrl+z',
      size: 'sm',
      variant: 'subtle',
      colorScheme: 'gray',
    },
    children: [],
    type: 'Tag',
    parent: 'comp-K6HM7KLJLO714',
    rootParentType: 'Tag',
  },
  'comp-K6HM7F0ZLPGFE': {
    id: 'comp-K6HM7F0ZLPGFE',
    props: {
      children: 'cmd+z',
      size: 'sm',
      variant: 'subtle',
    },
    children: [],
    type: 'Tag',
    parent: 'comp-K6HM7KLJLO714',
    rootParentType: 'Tag',
  },
  'comp-K6HM7KLJLO714': {
    id: 'comp-K6HM7KLJLO714',
    props: {
      isInline: true,
    },
    children: [
      'comp-K6HM7F0ZLPGFE',
      'comp-K6HM71OF2R1BL',
      'comp-K6HM92YJGOGIE',
    ],
    type: 'Stack',
    parent: 'comp-K6HM4MGL0S6AH',
    rootParentType: 'Stack',
  },
  'comp-K6HM92YJGOGIE': {
    id: 'comp-K6HM92YJGOGIE',
    props: {
      children: 'Undo',
      color: 'gray.600',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K6HM7KLJLO714',
    rootParentType: 'Text',
  },
  'comp-K6HM9HOFHX07Z': {
    id: 'comp-K6HM9HOFHX07Z',
    props: {
      isInline: true,
    },
    children: ['comp-K6HM9L3VKMKHN', 'comp-K6HM9Y9W5FRUJ'],
    type: 'Stack',
    parent: 'comp-K6HM4MGL0S6AH',
    rootParentType: 'Stack',
  },
  'comp-K6HM9L3VKMKHN': {
    id: 'comp-K6HM9L3VKMKHN',
    props: {
      children: 'b',
      size: 'md',
      variant: 'subtle',
      colorScheme: 'gray',
    },
    children: [],
    type: 'Tag',
    parent: 'comp-K6HM9HOFHX07Z',
    rootParentType: 'Tag',
  },
  'comp-K6HM9Y9W5FRUJ': {
    id: 'comp-K6HM9Y9W5FRUJ',
    props: {
      children: 'Toggle Builder mode',
      color: 'gray.600',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K6HM9HOFHX07Z',
    rootParentType: 'Text',
  },
  'comp-K6HMA6UCR000W': {
    id: 'comp-K6HMA6UCR000W',
    props: {
      isInline: true,
    },
    children: ['comp-K6HMAAF672VE5', 'comp-K6HMAKMTZWD8Z'],
    type: 'Stack',
    parent: 'comp-K6HM4MGL0S6AH',
    rootParentType: 'Stack',
  },
  'comp-K6HMAAF672VE5': {
    id: 'comp-K6HMAAF672VE5',
    props: {
      children: 'c',
      size: 'sm',
      variant: 'subtle',
      colorScheme: 'gray',
    },
    children: [],
    type: 'Tag',
    parent: 'comp-K6HMA6UCR000W',
    rootParentType: 'Tag',
  },
  'comp-K6HMAKMTZWD8Z': {
    id: 'comp-K6HMAKMTZWD8Z',
    props: {
      children: 'Toggle Code panel',
      color: 'gray.600',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K6HMA6UCR000W',
    rootParentType: 'Text',
  },
  'comp-K6HMBS5MS8QPW': {
    id: 'comp-K6HMBS5MS8QPW',
    props: {
      children: 'Shortcuts',
      size: 'md',
      variant: 'solid',
      colorScheme: 'facebook',
    },
    children: [],
    type: 'Tag',
    parent: 'comp-K6HM4MGL0S6AH',
    rootParentType: 'Tag',
  },
  'comp-K6HMEG7J926M9': {
    id: 'comp-K6HMEG7J926M9',
    props: {
      isInline: true,
    },
    children: [
      'comp-K6HMEJQSG7IFT',
      'comp-K6HMGSAGN1JOU',
      'comp-K6HMEMNDIA4FF',
    ],
    type: 'Stack',
    parent: 'comp-K6HM4MGL0S6AH',
    rootParentType: 'Stack',
  },
  'comp-K6HMEJQSG7IFT': {
    id: 'comp-K6HMEJQSG7IFT',
    props: {
      children: 'cmd+y',
      size: 'sm',
      variant: 'subtle',
      colorScheme: 'gray',
      isInline: false,
    },
    children: [],
    type: 'Tag',
    parent: 'comp-K6HMEG7J926M9',
    rootParentType: 'Tag',
  },
  'comp-K6HMEMNDIA4FF': {
    id: 'comp-K6HMEMNDIA4FF',
    props: {
      children: 'Redo',
      color: 'gray.600',
    },
    children: [],
    type: 'Text',
    parent: 'comp-K6HMEG7J926M9',
    rootParentType: 'Text',
  },
  'comp-K6HMGSAGN1JOU': {
    id: 'comp-K6HMGSAGN1JOU',
    props: {
      children: 'ctrl+y',
      size: 'sm',
      variant: 'subtle',
      colorScheme: 'gray',
    },
    children: [],
    type: 'Tag',
    parent: 'comp-K6HMEG7J926M9',
    rootParentType: 'Tag',
  },
}
