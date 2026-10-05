"use client";

import Link from "next/link";

import {
  Menu,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import { usePathname } from "next/navigation";

import ThemeToggle from "./ThemeToggle";

const links = [
  {
    label: "Projects",
    href: "/#work",
    section: "work",
  },
  {
    label: "Experience",
    href: "/#experience",
    section: "experience",
  },
  {
    label: "Stack",
    href: "/#stack",
    section: "stack",
  },
  {
    label: "About",
    href: "/#about",
    section: "about",
  },
  {
    label: "Contact",
    href: "/#contact",
    section: "contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [
    activeSection,
    setActiveSection,
  ] = useState("");

  /*
   * Highlight Work automatically
   * when viewing a project page.
   */
  useEffect(() => {
    if (
      pathname.startsWith(
        "/projects/"
      )
    ) {
      setActiveSection("work");
      return;
    }

    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sectionElements =
      links
        .map((link) =>
          document.getElementById(
            link.section
          )
        )
        .filter(
          (
            section
          ): section is HTMLElement =>
            section !== null
        );

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visibleEntries =
            entries
              .filter(
                (entry) =>
                  entry.isIntersecting
              )
              .sort(
                (a, b) =>
                  b.intersectionRatio -
                  a.intersectionRatio
              );

          if (
            visibleEntries.length > 0
          ) {
            setActiveSection(
              visibleEntries[0].target.id
            );
          }
        },
        {
          rootMargin:
            "-20% 0px -55% 0px",

          threshold: [
            0,
            0.2,
            0.4,
            0.6,
          ],
        }
      );

    sectionElements.forEach(
      (section) =>
        observer.observe(section)
    );

    function handleTop() {
      if (window.scrollY < 250) {
        setActiveSection("");
      }
    }

    window.addEventListener(
      "scroll",
      handleTop,
      {
        passive: true,
      }
    );

    handleTop();

    return () => {
      observer.disconnect();

      window.removeEventListener(
        "scroll",
        handleTop
      );
    };
  }, [pathname]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className={`navbar ${
        menuOpen
          ? "navbar-menu-open"
          : ""
      }`}
    >
      <div className="container navbar-inner">
        <Link
          href="/"
          className="logo"
          aria-label="Isaiah Concepcion homepage"
          onClick={closeMenu}
        >
          Isaiah Concepcion
        </Link>

        <nav
          className="desktop-nav"
          aria-label="Primary navigation"
        >
          {links.map((link) => {
            const active =
              activeSection ===
              link.section;

            return (
              <Link
                key={link.section}
                href={link.href}
                className={`nav-link ${
                  active
                    ? "nav-link-active"
                    : ""
                }`}
                aria-current={
                  active
                    ? "location"
                    : undefined
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="navbar-actions">
          <ThemeToggle />

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() =>
              setMenuOpen(
                (current) =>
                  !current
              )
            }
            aria-label={
              menuOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>
        </div>
      </div>

      <div
        className={`mobile-nav ${
          menuOpen
            ? "mobile-nav-open"
            : ""
        }`}
      >
        <div className="container">
          {links.map((link) => {
            const active =
              activeSection ===
              link.section;

            return (
              <Link
                href={link.href}
                key={link.section}
                className={`mobile-nav-link ${
                  active
                    ? "mobile-nav-link-active"
                    : ""
                }`}
                onClick={closeMenu}
              >
                <span>
                  {String(
                    links.indexOf(
                      link
                    ) + 1
                  ).padStart(2, "0")}
                </span>

                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}