import Link from "next/link";

const SidebarIcon = ({ icon, href, tooltip }) => (
    <li>
        <Link href={href}>
            <a className="flex items-center relative select-none">
                <span className="text-3xl peer cursor-pointer">{icon}</span>
                <span className="bg-black text-white shadow-lg px-2 py-1 pointer-events-none absolute left-10 opacity-0 peer-hover:opacity-100 transition-opacity">
                    {tooltip}
                </span>
            </a>
        </Link>
    </li>
);

export default SidebarIcon;
