import { ModeToggle } from "./theme-toogle";



export default function Header() {
    return (
        <header className="flex justify-between items-center gap-10 mb-8 mx-auto max-w-7xl">
            <h1 className="text-lg md:text-3xl font-bold">Реестр селекционных достижений Республики Беларусь</h1>
            <ModeToggle />
        </header>
    );
}