import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const socialLinks = [
    {
      href: "mailto:contacto@sumiplas.mx",
      icon: faEnvelope,
      label: "contacto@sumiplas.mx",
    },
    {
      href: "https://www.facebook.com/sumiplas.mx/",
      icon: faFacebookF,
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/sumiplas.mx/",
      icon: faInstagram,
      label: "Instagram",
    },
  ];

  return (
    <footer className="flex flex-col w-full bg-spgradient text-spwhite p-8 pb-28 gap-12 z-[2]">
      <div className="flex flex-col w-full gap-6">
        <p className="font-medium text-xl">
          Encuéntranos
          <span className="font-serif italic"> también </span>
          en:
        </p>
        <div className="flex flex-col w-fit gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-3 text-lg transition-all duration-300 ease-in-out transform hover:translate-x-2 hover:text-gray-300"
            >
              <FontAwesomeIcon icon={link.icon} className="w-6 h-6" />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 font-bold text-spwhite hover:text-gray-300 text-3xl">
          <div className="relative aspect-square w-10">
            <Image
              className="object-contain"
              src="/icons/logo.svg"
              alt="Logo"
              fill
            />
          </div>
          <span className="transition-all duration-300 ease-in-out">
            SUMIPLAS
          </span>
        </div>
        <p className="font-medium text-xl">
          Bolsas a tu
          <span className="font-serif italic"> medida</span>
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 text-sm">
        <p className="text-gray-300">Sumiplas ©{new Date().getFullYear()}</p>
        <Link
          href="https://nightly.software"
          className="text-center transition-colors duration-300 ease-in-out hover:text-gray-500"
        >
          Website by Nightly Software
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
