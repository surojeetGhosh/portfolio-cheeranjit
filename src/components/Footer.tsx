import resource from "@assets/resource.json";

interface FooterProps {
    className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
    return (
        <footer className={className}>
            <div className="px-5 py-2">
                ©{" "}
                {resource.footer["copyright-year"]
                    ? resource.footer["copyright-year"]
                    : ""}{" "}
                {resource.footer["copyright-org"]
                    ? resource.footer["copyright-org"]
                    : ""}
            </div>
        </footer>
    );
}
