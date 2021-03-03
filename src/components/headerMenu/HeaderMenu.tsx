import React, { memo } from 'react'
import dynamic from 'next/dynamic'
import {
  Box,
  LightMode,
  MenuButton,
  MenuList,
  MenuDivider,
  LinkProps,
  MenuItemProps,
  MenuButtonProps,
  ButtonProps,
  Portal,
} from '@chakra-ui/react'

import {
  Menu,
  MenuItem,
  Button,
  ButtonOutline,
  ButtonTransparent,
} from '@looker/components'

import { ChevronDownIcon } from '@chakra-ui/icons'
import { FaBomb } from 'react-icons/fa'
import { GoRepo, GoArchive } from 'react-icons/go'

const ExportMenuItem = dynamic(() => import('./ExportMenuItem'), { ssr: false })
const ImportMenuItem = dynamic(() => import('./ImportMenuItem'), { ssr: false })

const HeaderMenu = () => {
  return (
    <Menu
      content={
        <>
          <ExportMenuItem />
          <ImportMenuItem />
          <MenuItem itemRole="link" href="https://components.looker.com">
            Looker Components Docs{' '}
          </MenuItem>
          <MenuItem
            itemRole="link"
            href="https://docs.looker.com/data-modeling/extension-framework/extension-framework-intro"
          >
            Looker Extension Docs{' '}
          </MenuItem>
        </>
      }
    >
      <ButtonTransparent iconBefore="CaretDown" color="key">
        Editor
      </ButtonTransparent>
    </Menu>
  )
}

export default HeaderMenu
