import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button , NavbarMenuToggle , NavbarMenu , NavbarMenuItem } from "@nextui-org/react";
import React from 'react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems  : string[] = [
        "Applications",
        "Python Codes ",
        "python & backend",
      ];
  return (
<Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
           <img src="logo.png" width={50} height={50} alt="" />
          <p className="font-bold text-inherit">
            Blend
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" aria-current="page">
          Applications 
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" color="foreground" >
          Python Codes 
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
           python & backend
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
        <Button as={Link} color="primary" href="#" variant="flat">
           Random project
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Header