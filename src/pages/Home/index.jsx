import { Link } from "react-router-dom"
import './style.css'

function Home() {
    return (
        <>
            <h1>Gerador de Gatinhos 😻:</h1>

            <Link to={'/the-cat'}>
                <button>
                    Navegar para API
                </button>
            </Link>

            <Link to={'/index2'}>
                <button>
                    Page2
                </button>
            </Link>

        </>
    )
}

export default Home