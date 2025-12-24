export default function ServiceCard({ title, description }) {
    return (
        <div className="bg-white/30 dark:bg-white/5 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 border border-white/50 dark:border-white/10 hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-amber-50">
                {title}
            </h3>
            <p className="text-gray-600 dark:text-white/70 leading-relaxed">
                {description}
            </p>
        </div>
    )
}