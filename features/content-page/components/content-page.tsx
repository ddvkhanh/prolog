/* eslint-disable @next/next/no-img-element */
import { Routes } from "@config/routes";
import styles from "./content-page.module.scss";
import classNames from "classnames";
import { useState } from "react";
import { Button } from "@features/ui";
import Link from "next/link";
import {Modal} from './modal';
import { useGetContentPage } from "../api/user-get-content-page";
import { Content } from "./content/content";
import { SectionObject } from "@api/content-page.types";

const menuItems = [
  { text: "Home", href: "" },
  { text: "Product", href: "/products" },
  { text: "Documentation", href: "/documentation" },
  { text: "Pricing", href: "/pricing" },
];

export function ContentPage () {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setContactModal] = useState(false);

  const openModal = () => setContactModal(true);
  const closeModal = () => setContactModal(false);

  const { data, isLoading, isError, error } = useGetContentPage();

  // Debugging logs
  console.log("isLoading:", isLoading);
  console.log("isError:", isError);
  console.log("data:", data);

    if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    console.error(error);
    return <div>Error: {error.message}</div>;
  }

  const { sections } = data || {};
  const heroSection = sections?.find((section: SectionObject) => section.sectionType === "hero");
  const { image, title, subtitle } = heroSection || {};

  return (
    <div className={styles.container}>
      <header className={classNames(styles.header, isContactModalOpen && styles.contactModalOpened)}>
        <img src="/icons/logo-large.svg" alt="Prolog logo" />
        <button
          className={styles.hamburgerMenu}
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <img
            className={styles.imgMenu}
            src="/icons/bars.svg"
            alt={isMobileMenuOpen ? "open menu" : "close menu"}
          />
        </button>
        <nav className={styles.nav}>
          <ul>
            {menuItems.map((menuItem, index) => (
              <li key={index} className={classNames(styles.listItem)}>
                <Link className={styles.anchor} href={menuItem.href}>
                  {menuItem.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          className={styles.dashboardButton}
        ><Link href={Routes.projects}>
            Open Dashboard
          </Link>
        </Button>
      </header>
      <main className={classNames(styles.main, isContactModalOpen && styles.contactModalOpened)}>
        <div
          className={classNames(
            styles.collapsibleMenu,
            isMobileMenuOpen && styles.isMobileMenuOpen
          )}
        >
          <nav className={classNames(styles.mobileMenuNav, isMobileMenuOpen && styles.isMobileMenuOpen)}>
            <ul>
              {menuItems.map((menuItem, index) => (
                <li key={index} className={classNames(styles.listItem)}>
                  <Link className={styles.anchor} href={menuItem.href}>
                    {menuItem.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button
            className={classNames(styles.dashboardButton, isMobileMenuOpen && styles.isMobileMenuOpen)}
          ><Link href={Routes.projects}>
              Open Dashboard
            </Link>
          </Button>
        </div>
        <div className="">
            <div className={styles.hero}>
              {heroSection && <Content image = {image} title = {title} subtitle = {subtitle} />}
            </div>
            <button className={styles.contactButton} onClick={openModal}>
              <img src="/icons/message.svg" alt="Contact" />
            </button>
        </div>
      </main>
      <Modal isOpen={isContactModalOpen} onClose={closeModal} />

    </div>
  );
}