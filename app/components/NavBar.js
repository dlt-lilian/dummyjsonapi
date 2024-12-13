export default function NavBar({ searchQuery, setSearchQuery }) {
    return (
        <div className="relative flex w-64">
            <svg
                className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6 text-black ${searchQuery}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
            </svg>

            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full py-1 rounded-md shadow-lg bg-white text-gray-500 placeholder-gray-500"
                placeholder="Search..."
            />
        </div>
    );
}
