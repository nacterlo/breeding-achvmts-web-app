


export default function Header() {
    return (
        <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-emerald-600 dark:bg-emerald-500 p-2 rounded-lg">
                            {/* <Award className="h-6 w-6 text-white" /> */}
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Селекционные достижения
                            </h1>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Реестр селекционных достижений Республики Беларусь
                            </p>
                        </div>
                    </div>
                    {/* <ThemeToggle /> */}
                </div>
            </div>
        </header>
    );
}