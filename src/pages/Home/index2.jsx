import { Link } from "react-router-dom"
import './style.css'


function Page() {
    return (
        <>
            <h1>Page 2 :)</h1>

            <Link to={'/the-cat'}>
                <button>
                    Navegar para API
                </button>
            </Link>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/NjXweFUgY78?si=gi45nnxSgWJNJMoh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
            
        </>
    )
}

export default Page