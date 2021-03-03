import React from 'react'
import { useSelector } from 'react-redux'
import { MenuItem, Box } from '@looker/components'
import { saveAsJSON } from '~utils/import'
import { getComponents } from '~core/selectors/components'

const ExportMenuItem = () => {
  const components = useSelector(getComponents)

  return (
    <MenuItem icon="Download" onClick={() => saveAsJSON(components)}>
      Save components
    </MenuItem>
  )
}

export default ExportMenuItem
