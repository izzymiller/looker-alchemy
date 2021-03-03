import React, { useState, ChangeEvent, memo } from 'react'
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  DarkMode,
  IconButton,
} from '@chakra-ui/react'
import { Tree, TreeItem } from '@looker/components'
import { CloseIcon, SearchIcon } from '@chakra-ui/icons'
import DragItem, { DragItemTree } from './DragItem'
import { menuItems, MenuItem } from '~componentsList'

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <Box
      maxH="calc(100vh - 3rem)"
      overflowY="auto"
      overflowX="visible"
      boxShadow="xl"
      flex="0 0 14rem"
      p={5}
      m={0}
      as="menu"
      width="15rem"
    >
      <InputGroup size="sm" mb={4}>
        <Input
          value={searchTerm}
          color="gray.300"
          placeholder="Search component…"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(event.target.value)
          }
          borderColor="rgba(255, 255, 255, 0.04)"
          bg="rgba(255, 255, 255, 0.06)"
          _hover={{
            borderColor: 'rgba(255, 255, 255, 0.08)',
          }}
          zIndex={0}
        />
        <InputRightElement zIndex={1}>
          {searchTerm ? (
            <IconButton
              color="gray.300"
              aria-label="clear"
              icon={<CloseIcon path="" />}
              size="xs"
              onClick={() => setSearchTerm('')}
            />
          ) : (
            <SearchIcon path="" color="gray.300" />
          )}
        </InputRightElement>
      </InputGroup>
      <Tree defaultOpen label="Components">
        {(Object.keys(menuItems) as ComponentType[])
          .filter(c => c.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(name => {
            const { children, soon } = menuItems[name] as MenuItem

            if (children) {
              const elements = Object.keys(children).map(childName => (
                <DragItemTree
                  isChild
                  key={childName}
                  label={childName}
                  type={childName as any}
                  id={childName as any}
                  rootParentType={menuItems[name]?.rootParentType || name}
                >
                  {childName}
                </DragItemTree>
              ))

              return [
                <DragItemTree
                  isMeta
                  soon={soon}
                  key={`${name}Meta`}
                  label={name}
                  type={`${name}Meta` as any}
                  id={`${name}Meta` as any}
                  rootParentType={menuItems[name]?.rootParentType || name}
                >
                  {name}
                </DragItemTree>,
                ...elements,
              ]
            }

            return (
              <DragItemTree
                soon={soon}
                key={name}
                label={name}
                type={name as any}
                id={name as any}
                rootParentType={menuItems[name]?.rootParentType || name}
              >
                {name}
              </DragItemTree>
            )
          })}
      </Tree>

      {/* {(Object.keys(menuItems) as ComponentType[])
          .filter(c => c.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(name => {
            const { children, soon } = menuItems[name] as MenuItem

            if (children) {
              const elements = Object.keys(children).map(childName => (
                <DragItem
                  isChild
                  key={childName}
                  label={childName}
                  type={childName as any}
                  id={childName as any}
                  rootParentType={menuItems[name]?.rootParentType || name}
                >
                  {childName}
                </DragItem>
              ))

              return [
                <DragItem
                  isMeta
                  soon={soon}
                  key={`${name}Meta`}
                  label={name}
                  type={`${name}Meta` as any}
                  id={`${name}Meta` as any}
                  rootParentType={menuItems[name]?.rootParentType || name}
                >
                  {name}
                </DragItem>,
                ...elements,
              ]
            }

            return (
              <DragItem
                soon={soon}
                key={name}
                label={name}
                type={name as any}
                id={name as any}
                rootParentType={menuItems[name]?.rootParentType || name}
              >
                {name}
              </DragItem>
            )
          })} */}
    </Box>
  )
}

export default memo(Menu)
