import React, { memo, useState } from 'react'
import {
  Switch,
  Stack,
  FormLabel,
  DarkMode,
  FormControl,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  LightMode,
  PopoverFooter,
  Tooltip,
  HStack,
} from '@chakra-ui/react'
import {
  Box,
  Flex,
  Link,
  Button,
  Heading,
  ButtonTransparent,
} from '@looker/components'
import { ExternalLinkIcon, SmallCloseIcon, CheckIcon } from '@chakra-ui/icons'
import { DiGithubBadge } from 'react-icons/di'
import { AiFillThunderbolt } from 'react-icons/ai'
import { buildParameters } from '~utils/codesandbox'
import { generateCode } from '~utils/code'
import useDispatch from '~hooks/useDispatch'
import { useSelector } from 'react-redux'
import { getComponents } from '~core/selectors/components'
import { getShowLayout, getShowCode } from '~core/selectors/app'
import HeaderMenu from '~components/headerMenu/HeaderMenu'
import build from 'next/dist/build'

const OauthButton = () => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Tooltip>
      <ButtonTransparent
        onClick={async () => {
          setIsLoading(true)
          setIsLoading(false)
        }}
        isLoading={isLoading}
        iconBefore="LogoRings"
        size="medium"
        color="neutral"
      >
        Connect to Looker
      </ButtonTransparent>
    </Tooltip>
  )
}

const CodeSandboxButton = () => {
  const components = useSelector(getComponents)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Tooltip>
      {/* <Button
        onClick={async () => {
          setIsLoading(true)
          const code = await generateCode(components)
          setIsLoading(false)
          const parameters = buildParameters(code)

          window.open(
            `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`,
            '_blank',
          )
        }}
        isLoading={isLoading}
        leftIcon={<ExternalLinkIcon path="" />}
        variant="ghost"
        size="xs"
      > */}
      <ButtonTransparent
        onClick={async () => {
          setIsLoading(true)
          const code = await generateCode(components)
          buildParameters(code)
          setIsLoading(false)
        }}
        isLoading={isLoading}
        iconBefore="Download"
        size="medium"
      >
        Export code
      </ButtonTransparent>
    </Tooltip>
  )
}

const Header = () => {
  const showLayout = useSelector(getShowLayout)
  const showCode = useSelector(getShowCode)
  const dispatch = useDispatch()

  return (
    <>
      <Flex justifyContent="space-between" as="header" height="3rem" px="1rem">
        <Flex
          width="14rem"
          height="100%"
          color="white"
          as="a"
          fontSize="xl"
          flexDirection="row"
          alignItems="center"
          aria-label="Chakra UI, Back to homepage"
        >
          <Box fontSize="2xl" as={AiFillThunderbolt} mr={1} color="teal.100" />{' '}
          <Box>
            <Heading as="h3" color="key" fontWeight="bold">
              Looker Extension Builder
            </Heading>
          </Box>
        </Flex>

        <Flex flexGrow={1} justifyContent="space-between" alignItems="center">
          <HStack spacing={4} justify="center" align="center">
            <Box>
              <HeaderMenu />
            </Box>
            <FormControl flexDirection="row" display="flex" alignItems="center">
              <Tooltip>
                <FormLabel
                  color="#6C43E0"
                  fontSize="xs"
                  htmlFor="preview"
                  pb={0}
                  mb={0}
                  mr={2}
                  whiteSpace="nowrap"
                >
                  Builder mode
                </FormLabel>
              </Tooltip>
              <LightMode>
                <Switch
                  isChecked={showLayout}
                  colorScheme="teal"
                  size="sm"
                  onChange={() => dispatch.app.toggleBuilderMode()}
                  id="preview"
                />
              </LightMode>
            </FormControl>

            <FormControl display="flex" flexDirection="row" alignItems="center">
              <FormLabel
                color="#6C43E0"
                fontSize="xs"
                mr={2}
                mb={0}
                htmlFor="code"
                pb={0}
                whiteSpace="nowrap"
              >
                Code panel
              </FormLabel>
              <LightMode>
                <Switch
                  isChecked={showCode}
                  id="code"
                  colorScheme="teal"
                  onChange={() => dispatch.app.toggleCodePanel()}
                  size="sm"
                />
              </LightMode>
            </FormControl>
          </HStack>

          <Stack direction="row">
            <CodeSandboxButton />
            <Popover>
              {({ onClose }) => (
                <>
                  <PopoverTrigger>
                    <ButtonTransparent iconBefore="Close" size="medium">
                      Clear
                    </ButtonTransparent>
                  </PopoverTrigger>
                  <LightMode>
                    <PopoverContent zIndex={100} bg="white">
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Are you sure?</PopoverHeader>
                      <PopoverBody fontSize="sm">
                        Do you really want to remove all components on the
                        editor?
                      </PopoverBody>
                      <PopoverFooter display="flex" justifyContent="flex-end">
                        <Button
                          size="sm"
                          variant="ghost"
                          colorScheme="red"
                          leftIcon={<CheckIcon path="" />}
                          onClick={() => {
                            dispatch.components.reset()
                            if (onClose) {
                              onClose()
                            }
                          }}
                        >
                          Yes, clear
                        </Button>
                      </PopoverFooter>
                    </PopoverContent>
                  </LightMode>
                </>
              )}
            </Popover>
            <OauthButton />
          </Stack>
        </Flex>

        <Stack
          justifyContent="flex-end"
          width="13rem"
          align="center"
          direction="row"
          spacing="2"
        ></Stack>
      </Flex>
    </>
  )
}

export default memo(Header)
