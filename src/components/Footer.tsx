import resource from "@assets/resource.json";

interface FooterProps {
  className?: string;
}

// next step footer

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={className}>
      <div>
        ©{" "}
        {resource.footer["copyright-year"]
          ? resource.footer["copyright-year"]
          : ""}{" "}
        {resource.footer["copyright-org"]
          ? resource.footer["copyright-org"]
          : ""}
      </div>
      <div className=""></div>
    </footer>
  );
}
