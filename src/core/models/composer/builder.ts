import Composer from './composer'

type ComposedComponent = {
  components: IComponents
  root: string
  parent: string
}

// export const buildFormControl = (parent: string): ComposedComponent => {
//   const composer = new Composer()

//   const nodeId = composer.addNode({ type: 'FormControl', parent })

//   composer.addNode({ type: 'FormLabel', parent: nodeId })
//   composer.addNode({ type: 'Input', parent: nodeId, rootParentType: 'Input' })
//   composer.addNode({ type: 'FormHelperText', parent: nodeId })
//   composer.addNode({ type: 'FormErrorMessage', parent: nodeId })

//   const components = composer.getComponents()

//   return {
//     components,
//     root: nodeId,
//     parent,
//   }
// }

export const buildList = (parent: string): ComposedComponent => {
  const composer = new Composer('List')

  const nodeId = composer.addNode({ type: 'List', parent })
  composer.addNode({ type: 'ListItem', parent: nodeId })

  const components = composer.getComponents()

  return {
    components,
    root: nodeId,
    parent,
  }
}

type BuilderFn = (parent: string) => ComposedComponent

type ComposerBuilders = {
  [k: string]: BuilderFn
}

const builders: ComposerBuilders = {
  ListMeta: buildList,
}

export default builders
