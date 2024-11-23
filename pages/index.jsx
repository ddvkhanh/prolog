/* eslint-disable @next/next/no-img-element */
import { Routes } from "@config/routes";
import styles from "./index.module.scss";
import classNames from "classnames";
import { useState, useEffect } from "react";
import { Button } from "@features/ui";
import Link from "next/link";
import Modal from './Modal';

const menuItems = [
  { text: "Home", href: "" },
  { text: "Product", href: "/products" },
  { text: "Documentation", href: "/documentation" },
  { text: "Pricing", href: "/pricing" },
];

const ContentPage = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setContactModal] = useState(false);

  const openModal = () => setContactModal(true);
  const closeModal = () => setContactModal(false);

  useEffect(() => {

  }, [])


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
      </header>
      <main className={classNames(styles.main, isContactModalOpen && styles.contactModalOpened)}>

        <button
          className={styles.contactButton}
          onClick={openModal}
        >
          <img src="/icons/message.svg" alt="Contact" />
        </button>
      </main>
      <Modal isOpen={isContactModalOpen} onClose={closeModal}></Modal>

    </div>
  );
};

export default ContentPage;
