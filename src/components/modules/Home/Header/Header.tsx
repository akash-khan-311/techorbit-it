"use client";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/Navbar";
import RegistrationButton from "@/components/ui/shared/RegistrationButton";
import { useTranslation } from "@/hooks/useTranslation";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslation();

  return (
    <Navbar>
      {/* Desktop Navbar */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={t.navItems} />

        <div className="flex items-center gap-x-5">
          <LanguageSwitcher />
          <NavbarButton>
            <RegistrationButton className="text-sm  text-gray-800" />
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navbar */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex justify-center items-center gap-x-3">
            <LanguageSwitcher />
            <MobileNavToggle
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={isOpen}
          navItems={t.navItems}
          onClose={() => setIsOpen(false)}
        >
          <NavbarButton>
            <RegistrationButton className="text-sm  text-gray-800" />
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
