import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-400 to-purple-500 py-5 shadow-lg">
            <nav className="container mx-auto flex flex-wrap justify-center gap-6">
                <Link to="/todo-add">
                    <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg shadow hover:bg-blue-100 transition duration-300 ease-in-out">
                        ➕ Add Task
                    </button>
                </Link>

                <Link to="/todo-show">
                    <button className="bg-white text-purple-600 font-semibold px-6 py-2 rounded-lg shadow hover:bg-purple-100 transition duration-300 ease-in-out">
                        📋 Show Tasks
                    </button>
                </Link>

                <Link to="/todo-done">
                    <button className="bg-white text-green-600 font-semibold px-6 py-2 rounded-lg shadow hover:bg-green-100 transition duration-300 ease-in-out">
                        ✅ Done
                    </button>
                </Link>
            </nav>
        </header>
    );
}

export default Header;