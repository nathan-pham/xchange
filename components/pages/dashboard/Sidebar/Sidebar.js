import {
    IoHomeOutline,
    IoNotificationsOutline,
    IoBookmarkOutline,
} from "react-icons/io5";

import SidebarIcon from "./SidebarIcon";

const Sidebar = () => (
    <aside className="sticky top-10 h-fit">
        <ul className="flex flex-col gap-8 w-fit">
            <SidebarIcon icon={<IoHomeOutline />} href="/~" tooltip="Home" />
            <SidebarIcon
                icon={<IoNotificationsOutline />}
                href="/notifications"
                tooltip="Notifications"
            />
            <SidebarIcon
                icon={<IoBookmarkOutline />}
                href="/bookmarks"
                tooltip="Bookmarks"
            />
        </ul>
    </aside>
);

export default Sidebar;
