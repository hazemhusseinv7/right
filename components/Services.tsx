"use client";

import ExpandableCard, { CardList } from "./forgeui/expandable-card";
import {
  FaBolt,
  FaFileCircleCheck,
  FaFireExtinguisher,
  FaToolbox,
} from "react-icons/fa6";
import { FaPallet } from "react-icons/fa";
import { HiServer } from "react-icons/hi2";
import { PiComputerTowerFill, PiPackageFill } from "react-icons/pi";
import { BsCloudCheckFill } from "react-icons/bs";
import { BiSolidCustomize } from "react-icons/bi";
import {
  RiDeviceFill,
  RiOilFill,
  RiRobot3Fill,
  RiShieldCheckFill,
  RiShieldFlashFill,
} from "react-icons/ri";

const Services = () => {
  const services: CardList[] = [
    {
      title: "IT services",
      list: [
        {
          title: "Software and Licensing Services",
          description:
            "Comprehensive software solutions and licensing management for all your business needs",
          icon: FaFileCircleCheck,
          items: [
            "OS: Windows, macOS, Linux",
            "Productivity Software: Office suites, email clients, collaboration tools",
            "Design and Creative Software: Adobe Creative Cloud, AutoCAD",
            "ERP and CRM Systems",
            "Security Software: Antivirus, anti-malware, encryption",
            "Virtualization and Development Tools: Hypervisors, IDEs, version control",
          ],
        },
        {
          title: "Computing and Storage",
          description:
            "Complete hardware solutions from computing devices to advanced storage systems",
          icon: HiServer,
          items: [
            "Computers: Desktops, laptops, workstations, servers",
            "Mobile Devices: Smartphones, tablets, 2-in-1 devices",
            "Peripherals: Keyboards, mice, printers",
            "Storage Solutions: HDDs, SSDs, USB drives, NAS, SAN",
            "Interactive Displays: Touchscreens, digital whiteboards",
            "Embedded Systems: IoT devices, industrial controllers",
          ],
        },
        {
          title: "Managed IT Services",
          description:
            "Streamline operations with automatic upgrades, proactive protection, and rapid issue resolution",
          icon: PiComputerTowerFill,
          items: [
            "Automatic system upgrades",
            "Proactive data protection",
            "Rapid resolution of downtime issues",
            "Focus on innovation rather than troubleshooting",
            "Reduce maintenance time by 80%",
          ],
        },
        {
          title: "Integration & Engineering Services",
          description:
            "Full-spectrum IT infrastructure management and engineering support",
          icon: BiSolidCustomize,
          items: [
            "End-to-End Infrastructure Oversight",
            "Turnkey Network Solutions - From design to deployment",
            "Network Monitoring Licensing",
            "System & Network Integration",
            "IT Outsourcing & Service Management",
            "Custom Network Design & 24/7 Support",
            "Hardware & Software Repair Services",
          ],
        },
        {
          title: "Cybersecurity Solutions",
          description:
            "End-to-end cybersecurity to safeguard your entire IT ecosystem with maximum protection",
          icon: RiShieldCheckFill,
          items: [
            "Advanced Threat Protection",
            "Email Security - Block phishing and malware",
            "Data Backup & Recovery",
            "Privileged Access Management",
            "Endpoint Protection",
            "Data Security",
            "Security Awareness Training",
            "Threat Defense",
            "AI-Driven Data Protection",
            "Incident Response",
            "OT Penetration Testing",
          ],
        },
        {
          title: "Data Center & Cloud Services",
          description:
            "Scalable and secure cloud and data center solutions for digital transformation",
          icon: BsCloudCheckFill,
          items: [
            "Data Center Design, Implementation & Management",
            "Public, Private & Hybrid Cloud Services",
            "Virtualization & Hypervisor Optimization",
            "Disaster Recovery & Backup Planning",
            "Cloud Migration & Managed Services",
            "Security, Compliance & Scalability",
          ],
        },
        {
          title: "Enterprise Network Solutions",
          description:
            "Enterprise-grade network solutions that protect and future-proof your business",
          icon: RiDeviceFill,
          items: [
            "Optimized Network Architecture",
            "Application Support & Management",
            "Security-Driven Design",
            "Training for Long-Term Resilience",
            "Quality of Service Assurance",
          ],
        },
        {
          title: "Enterprise Security Solutions",
          description:
            "Protect your digital infrastructure with precision and scalable security services",
          icon: RiShieldFlashFill,
          items: [
            "Cybersecurity Frameworks - Aligned with global standards",
            "Threat Detection & Response - Real-time monitoring",
            "Endpoint & Network Security - Antivirus, firewalls",
            "Cloud Security - Identity management and encryption",
            "Risk & Compliance Management",
            "Dedicated Security Team - Expert audits and assessments",
          ],
        },
        {
          title: "AI & Intelligent Automation Solutions",
          description:
            "AI-driven solutions tailored for real-world impact across various industries",
          icon: RiRobot3Fill,
          items: [
            "On-Premise LLM Integration - Secure, scalable AI models",
            "AI-Powered Chatbots & Virtual Assistants",
            "Predictive Maintenance for Industrial Systems",
            "Document Intelligence - Automate data extraction",
            "Custom AI Model Development",
            "Arabic Language Support & GCC Compliance",
          ],
        },
      ],
    },
    {
      title: "Industrial services",
      list: [
        {
          title: "Mechanical Equipment & Power Tools",
          description:
            "Comprehensive range of mechanical equipment and industrial power tools for various applications",
          icon: FaToolbox,
          items: [
            "Pumps & Compressors",
            "Valves & Actuators",
            "Hydraulic & Pneumatic Systems",
            "Gearboxes & Motors",
            "Industrial Fans & Blowers",
            "Heat Exchangers",
            "Bearings & Transmission Components",
            "Welding Equipment",
            "Industrial Generators",
            "HVAC Systems & Components",
          ],
        },
        {
          title: "Material Handling",
          description:
            "Complete material handling solutions including lifting, conveying, and storage equipment",
          icon: FaPallet,
          items: [
            "Material Handling Equipment",
            "Forklifts & Pallet Trucks",
            "Hoists & Cranes",
            "Conveyors & Conveyor Systems",
            "Lifting Slings, Chains & Shackles",
            "Drum Handling Equipment",
            "Trolleys & Hand Trucks",
            "Storage Racks & Shelving Systems",
            "Dock Levelers & Loading Equipment",
            "Winches & Pullers",
            "Secutex Web Slings",
          ],
        },
        {
          title: "Electrical Supplies",
          description:
            "Comprehensive electrical solutions from power distribution to control systems",
          icon: FaBolt,
          items: [
            "Transformers & Generators",
            "Switchgear & Circuit Protection",
            "Lighting Solutions",
            "Conduits & Cable",
            "Control & Automation",
            "Power Distribution",
            "Electrical Accessories",
            "Energy Management",
            "Tools & Test Equipment",
          ],
        },
        {
          title: "Lubrications and Adhesives",
          description:
            "Complete range of industrial lubricants and adhesive solutions for various applications",
          icon: RiOilFill,
          items: [
            "Lubrication Oils",
            "High Temp Greases",
            "Dry Lubricants",
            "Anti-Friction Fluids",
            "Synthetic Lubricants",
            "Penetrating Lubricants",
            "Epoxy Adhesives",
            "Cyanoacrylate Adhesives (Super Glue)",
            "Anaerobic Adhesives",
            "Hot Melt Adhesives",
            "Pressure-Sensitive Adhesives",
          ],
        },
        {
          title: "Fire and Safety",
          description:
            "Comprehensive fire safety equipment and personal protective equipment solutions",
          icon: FaFireExtinguisher,
          items: [
            "Fire Extinguishers",
            "Fire Alarm Systems",
            "Smoke & Gas Detectors",
            "Fire Hose Reels & Cabinets",
            "Fire Sprinkler Systems",
            "Fire Blankets",
            "Emergency Exit Signs & Lighting",
            "Personal Protective Equipment (PPE)",
            "Fireproof Clothing & Gear",
            "Emergency Evacuation Equipment",
            "Fire Safety and Chemical Coveralls",
            "Safety Helmets & Gloves",
            "Safety Shoes & Reflective Vests",
            "Fall Protection Systems",
            "Eye & Face Protection",
            "Respiratory Protection Equipment",
          ],
        },
        {
          title: "General Trading",
          description:
            "Wide range of general industrial items and supplies for diverse business needs",
          icon: PiPackageFill,
          items: [
            "Building Materials & Construction Supplies",
            "Plumbing & Sanitary Ware",
            "Tools & Hardware",
            "Office & Stationery Supplies",
            "Automotive Parts & Accessories",
            "Packaging Materials",
          ],
        },
      ],
    },
  ];

  return (
    <section id="services">
      <h2 className="font-semibold text-2xl lg:text-7xl mx-auto w-fit text-emerald-700 mb-4">
        Services
      </h2>
      <div className="max-w-300 mx-auto">
        <ExpandableCard items={services} />
      </div>
    </section>
  );
};

export default Services;
