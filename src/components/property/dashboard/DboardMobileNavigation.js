"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const DboardMobileNavigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const sidebarItems = [
    {
      title: "Propiedades",
      items: [
        {
          href: "/dashboard-home",
          icon: "flaticon-discovery",
          text: "Tablero",
        },
        {
          icon: "flaticon-new-tab",
          text: "Nueva propiedad",
          href: "/dashboard-add-property",
        },
        {
          href: "/dashboard-my-properties",
          icon: "flaticon-home",
          text: "Mis Propiedades",
        }
      ],
    },
    {
      title: "Barrios o countries",
      items: [
        {
          icon: "flaticon-new-tab",
          text: "Nuevo barrio",
          href: "/dashboard-add-property",
        },

        {
          href: "/dashboard-my-favourites",
          icon: "flaticon-home",
          text: "Todos los barrios",
        },
      ],
    },
    {
      title: "Emprendimientos",
      items: [
        {
          icon: "flaticon-new-tab",
          text: "Nuevo Emprendimiento",
          href: "/dashboard-add-property",
        },
        {
          href: "/dashboard-my-properties",
          icon: "flaticon-home",
          text: "Todos los emprendimientos",
        },
      ],
    },
    {
      title: "Localidades",
      items: [
        {
          icon: "flaticon-new-tab",
          text: "Nueva localidad",
          href: "/dashboard-add-property",
        },
        {
          href: "/dashboard-my-properties",
          icon: "flaticon-home",
          text: "Todas las localidades",
        },
      ],
    },
    {
      title: "MANAGE ACCOUNT",
      items: [
        {
          href: "/dashboard-my-profile",
          icon: "flaticon-user",
          text: "Mi cuenta",
        },
        {
          href: "/login",
          icon: "flaticon-logout",
          text: "Logout",
        },
      ],
    },
  ]

  return (
    <div className="dashboard_navigationbar d-block d-lg-none">
      <div className="dropdown">
        <button
          className="dropbtn"
          onClick={() => setIsDropdownOpen((prevOpen) => !prevOpen)}
        >
          <i className="fa fa-bars pr10" /> Dashboard Navigation
        </button>
        <ul className={`dropdown-content ${isDropdownOpen ? "show" : ""}`}>
          {sidebarItems.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <p
                className={`fz15 fw400 ff-heading mt30 pl30 ${sectionIndex === 0 ? "mt-0" : "mt30"
                  }`}
              >
                {section.title}
              </p>
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="sidebar_list_item">
                  <Link
                    href={item.href}
                    className={`items-center   ${pathname == item.href ? "-is-active" : ""
                      } `}
                  >
                    <i className={`${item.icon} mr15`} />
                    {item.text}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DboardMobileNavigation;
