import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { FaBars } from 'react-icons/fa'

import { Button, Container, ContainerSeparator, Item } from './styles'

const Dropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button>
          <FaBars size={23} />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <Container sideOffset={5}>
          <Item>Visualizar perfil</Item>
          <Item>Editar perfil</Item>
          <ContainerSeparator />
          <Item>Visualizar perfil</Item>
        </Container>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default Dropdown
