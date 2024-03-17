
import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';

export default function NavbarComponent() {
  return (
    <Navbar className="w-full bg-blue-700">
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <img src="/logo.png" className="mr-3 h-9 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-bold text-white">C S T A D</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink  className="text-base text-white" href="/">
          Home
        </NavbarLink>
        <NavbarLink  className="text-base text-white" as={Link} href="/enroll">
          Enroll
        </NavbarLink>
        <NavbarLink  className="text-base text-white" href="/course">Course</NavbarLink>
        <NavbarLink  className="text-base text-white" href="/itnew">IT News</NavbarLink>
        <NavbarLink  className="text-base text-white" href="/jobopportunity">Job Opportunity</NavbarLink>
        <NavbarLink  className="text-base text-white" href="/about">About Us</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
