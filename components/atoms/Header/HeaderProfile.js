import { IoEllipsisHorizontalSharp } from "react-icons/io5";

const HeaderProfile = () => (
    <div className="flex items-center gap-4 select-none p-4 w-72 cursor-pointer hover:bg-slate-100 transition-color">
        <img
            src="https://avatars.githubusercontent.com/u/43102813?v=4"
            className="h-10 w-10 object-cover"
        />

        <div className="flex items-center justify-between w-full">
            <div>
                <h3 className="font-bold">Nathan Pham</h3>
                <p className="text-slate-500">@phamn23</p>
            </div>

            <div>
                <IoEllipsisHorizontalSharp className="text-slate-500" />
            </div>
        </div>
    </div>
);

export default HeaderProfile;
