export function Navbar(){
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-blue-300">
            <h1 className="text-xl font-bold">
                MiMarca
            </h1>
            <div className="hidden md:flex gap-6">
                <a href="#" className="hover:text-red-600">Inicio</a>
                <a href="#" className="hover:text-red-600">Servicios</a>
                <a href="#" className="hover:text-red-600">Contacto</a>
            </div>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-indigo-800 transition">
                Empezar
            </button>
        </nav>
    )
}