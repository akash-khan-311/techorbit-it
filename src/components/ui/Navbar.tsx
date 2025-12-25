"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import React, { useRef, useState } from "react";
import Logo from "./shared/Logo";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useScrollSpy } from "@/hooks/useSCrollSpy";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}
interface navItemsType {
  name: string;
  link: string;
}
interface MobileNavMenuProps {
  children: React.ReactNode;
  navItems: navItemsType[];
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      className={cn(
        "sticky  top-5 z-40 w-full container mx-auto px-3 md:px-0 grow",
        className
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px) " : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "70% " : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "1200px",
      }}
      className={cn(
        "relative z-60 mx-auto hidden w-full  flex-row items-center justify-between self-start rounded-full  px-3  py-2 lg:flex dark:bg-transparent ",
        visible && "backdrop-blur-2xl bg-black/50  dark:bg-transparent ",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const pathname = usePathname();

  const router = useRouter();

  const sectionIds = items.map((item) => item.link.replace("#", ""));
  const activeId = useScrollSpy(sectionIds);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute  inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm text-zinc-600 transition duration-200 lg:flex lg:space-x-2",
        className
      )}
    >
      {items.map((item, idx) => {
        const isActive = activeId === item.link.replace("#", "");

        return (
          <Link
            onMouseEnter={() => setHovered(idx)}
            onClick={(e) => {
              e.preventDefault();

              const sectionId = item.link.replace("#", "");

              if (pathname !== "/") {
                // 🔥 First go to home, then scroll
                router.push(`/#${sectionId}`);
                return;
              }

              // 🔥 Already on home → smooth scroll
              const el = document.getElementById(sectionId);
              el?.scrollIntoView({ behavior: "smooth" });

              onItemClick?.();
            }}
            className={cn(
              "relative px-4 py-2 text-white cursor-pointer rounded-full transition duration-200",
              isActive &&
                "bg-linear-to-r from-[#30DBDC]/20 via-[#30DBDC]/20 to-[#035A69]"
            )}
            key={`link-${idx}`}
            href={item.link}
          >
            {hovered === idx && !isActive && (
              <motion.div
                layoutId="hovered"
                className="absolute z-10 inset-0 h-full w-full rounded-full backdrop-blur-sm bg-linear-to-r from-[#30DBDC]/20 via-[#30DBDC]/20 to-[#035A69]/20"
              />
            )}
            <span className="relative z-20">{item.name}</span>
          </Link>
        );
      })}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "bg-neutral-950/80",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  navItems,
  className,
  isOpen,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onClose,
}: MobileNavMenuProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const pathname = usePathname();

  const router = useRouter();

  // const isHome = pathname === "/";
  const sectionIds = navItems.map((item) => item.link.replace("#", ""));
  const activeId = useScrollSpy(sectionIds);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-slate-900 text-white px-4 py-8 shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]",
            className
          )}
        >
          {navItems.map((item, idx) => {
            const isActive = activeId === item.link.replace("#", "");
            return (
              <Link
                onMouseEnter={() => setHovered(idx)}
                onClick={(e) => {
                  e.preventDefault();

                  const sectionId = item.link.replace("#", "");

                  if (pathname !== "/") {
                    // 🔥 First go to home, then scroll
                    router.push(`/#${sectionId}`);
                    return;
                  }

                  // 🔥 Already on home → smooth scroll
                  const el = document.getElementById(sectionId);
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className={cn(
                  "relative px-4 py-1 text-white cursor-pointer rounded-full transition duration-200",
                  isActive &&
                    "bg-linear-to-r from-[#30DBDC]/20 via-[#30DBDC]/20 to-[#035A69]"
                )}
                key={`link-${idx}`}
                href={item.link}
              >
                {hovered === idx && !isActive && (
                  <motion.div
                    layoutId="hovered"
                    className="absolute z-10 inset-0 h-full w-full rounded-full backdrop-blur-sm bg-linear-to-r from-[#30DBDC]/20 via-[#30DBDC]/20 to-[#035A69]/20"
                  />
                )}
                <span className="relative z-20">{item.name}</span>
              </Link>
            );
          })}
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-white" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return <Logo className={"px-2 py-1 text-lg"} />;
};

export const NavbarButton = ({
  href = "/registration",
  children,
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "linear";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  return (
    <Link
      href={href}
      className={
        " rounded-md button  text-sm font-semibold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center text-white"
      }
    >
      {children}
    </Link>
  );
};
