import AvatarComp from "./comps/AvatarComp";
import { DropdownMenuDemo } from "./comps/DropMenu";
import cl from "./Header.module.css"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "./comps/ModeToggle";

const Header = () => {
    return (
        <div className={cl.header + " border-gray-200 bg-white dark:bg-slate-950 text-black dark:text-white"}>
            <div className={cl.logo}>
                <AvatarComp/>
                <span className={cl.logo_title}>Vite + React + Shadcn/ui + R3F</span>
            </div>
            <div className={cl.search}>
                <Input placeholder="Search" />
            </div>
            <div className={cl.btn}>
                <a href="https://ui.shadcn.com/docs" className="mr-8 font-normal no-underline text-slate-500 hover:text-slate-600 dark:text-slate-200">Documentation</a>
                <a href="https://github.com/dkDevHub" className="mr-8 font-normal no-underline text-slate-500 hover:text-slate-600 dark:text-slate-200">GitHub</a>
                <ModeToggle />
                <DropdownMenuDemo />
            </div>
        </div>
    )
};

export default Header;
