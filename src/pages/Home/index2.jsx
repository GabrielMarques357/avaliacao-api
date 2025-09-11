import { Link } from "react-router-dom"
import './style.css'

function Page() {
    return (
        <>
            <h1>Page 2 :)</h1>

            <Link to={'/RickAndMorty'}>
                <button>
                    Navegar para API
                </button>
            </Link>

            <Link to={'/RickAndMorty'}>
                <button>
                    Navegar para API
                </button>
            </Link>

        </>
    )
}

export default Page