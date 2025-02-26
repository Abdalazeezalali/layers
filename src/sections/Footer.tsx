import logo from "@/assets/images/logo.svg"
import { footerLinks } from "@/constants/footerLinks";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
    return <footer className="py-16">
            <div className="container">
                    <div className="flex flex-col md:flex-row md:justify-between gap-6 items-center">
                        <div>
                            <Image src={logo} alt="Layers Logo"/>
                        </div>
                        <div>
                            <nav className="flex gap-6">
                                {footerLinks.map(link=>(
                                    <Link className="text-white/50 text-sm" href={link.href} key={link.href}>{link.label}</Link>
                                ))}
                            </nav>
                        </div>
                    </div>
            </div>
        </footer>;
}
