'use client';
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [ // data points
    {label: 'Home', href: '/'}, 
    {label: 'Companions', href: '/companions'},
    {label: 'My Journey', href: '/my-journey'},
]

const NavItems = () => {
    const pathname = usePathname();
  return (
    <nav className="flex items-center gap-4">
        {navItems.map(({label, href}) => ( // ( being there means immediate return. Also destructuring
            <Link href={href} key={label} className={cn(pathname===href && 'text-primary font-semibold')}>
                {label}
            </Link>
        ))}
    </nav>
  )
}

export default NavItems
