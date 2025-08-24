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
            {/* <div className="flex flex-none justify-items-end">
                {resource.footer.contact.map((value) => {
                    return (
                        <div className="flex-col flex-none px-3">
                            <a
                                className={`flex-none`}
                                href={
                                    value.type == "phone"
                                        ? `tel:${value.value}`
                                        : `mailto:${value.value}`
                                }
                            >
                                <div
                                    className={`icon-${value.type} m-auto w-6 h-6`}
                                ></div>
                            </a>
                            <div className="flex-none py-1">{value.value}</div>
                        </div>
                    );
                })}
            </div>
            <div className="flex-none px-4 h-full">
                <p className="font-bold text-center">Follow</p>
                <div className="flex justify-center">
                    {resource.footer.social.map((value) => {
                        return (
                            <a
                                className={`flex-none px-2`}
                                href={value.value}
                                target="__blank"
                            >
                                <div
                                    className={`icon-${value.type} m-auto w-6 h-6`}
                                ></div>
                            </a>
                        );
                    })}
                </div>
            </div> */}
        </footer>
    );
}
