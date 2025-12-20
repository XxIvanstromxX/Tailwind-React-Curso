export default function Hero() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-12 h-screen md:h-150">
            <div className="flex flex-col items-center justify-center mb-10">
                <h2 className="text-4xl font-bold mb-4 text-gray-800">
                    Diseña Interfaces Modernas
                </h2>
                <p className="text-gray-600 mb-6">
                    Contruye landing pages atractivas y funcionales con React y Tailwind CSS.
                </p>
                <button className="bg-linear-to-br from-amber-700 to-amber-500  hover:bg-linear-to-br hover:from-amber-900 hover:to-amber-700 transition-colors duration-200 px-6 py-3 rounded-xl text-amber-50">
                    Comenzar Ahora
                </button>
            </div>

            <div className="w-full max-w-2xl mx-auto px-4">
                <div className="w-full h-fit bg-white/30 shadow-sm rounded-[34px] flex flex-row items-center justify-between p-4 gap-3">
                    <div className="bg-amber-600 hover:bg-amber-700 rounded-[18px] p-4 min-h-52 flex flex-col justify-center items-center flex-1">
                        <h3 className="text-white">
                            Mobile App UI
                        </h3>
                    </div>
                    <div className="bg-amber-600 hover:bg-amber-700 rounded-[18px] p-4 min-h-52 flex flex-col justify-center items-center flex-1">
                        <h3 className="text-white">
                            Web DashBoard
                        </h3>
                    </div>
                    <div className="bg-amber-600 hover:bg-amber-700 rounded-[18px] p-4 min-h-52 flex flex-col justify-center items-center flex-1">
                        <h3 className="text-white">
                            Desings Systems
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}