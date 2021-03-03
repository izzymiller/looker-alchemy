import React from 'react'
import { MenuItem, Box } from '@looker/components'
import { loadFromJSON } from '~utils/import'
import useDispatch from '~hooks/useDispatch'

const ImportMenuItem = () => {
  const dispatch = useDispatch()

  return (
    <MenuItem
      icon="CircleAdd"
      onClick={async () => {
        const components = await loadFromJSON()
        dispatch.components.reset(components)
      }}
    >
      Import components
    </MenuItem>
  )
}

export default ImportMenuItem
