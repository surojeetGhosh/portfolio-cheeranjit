import { navigationData } from "@/data/navigationData";

interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={className}>
      <div className="px-5 py-2">
        ©{" "}
        {navigationData.footer["copyright-year"]
          ? navigationData.footer["copyright-year"]
          : ""}{" "}
        {navigationData.footer["copyright-org"]
          ? navigationData.footer["copyright-org"]
          : ""}
      </div>
    </footer>
  );
}
