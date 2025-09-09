import { Link } from "react-router-dom"
import './style.css'

function Home() {
    return (
        <>
            <h1>Minha Home</h1>

            <Link to={'/the-cat'}>
                <button>
                    Navegar para API
                </button>
            </Link>

        </>
    )
}

export default Home