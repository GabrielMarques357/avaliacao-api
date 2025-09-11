
import { useEffect, useState } from 'react'
import { getCharacters } from '../../api/character'
import { Link } from 'react-router-dom'




function RickAndMorty() {

    const [conteudo, setConteudo] = useState(<>Carregando</>)



    async function TranformaEmLista() {
        const todosGatos = await getCharacters()
        console.log(todosGatos)

        return todosGatos.map(gato =>
            <div className='card char' key={gato.id}>
                {/* 
                    ""
                */}
                <img src={`https://cdn2.thecatapi.com/images/${gato.reference_image_id}.jpg`} alt={`Foto de ${gato.name}`} />
                <h2>{gato.name}</h2>

                <div className='char-info'>
                    <span><b>Origem: </b> {gato.origin} </span>
                    <span><b>Pais: </b> {gato.country_codes} </span>
                </div>

                <div>
                    
                    <h5><b>Vai morrer em: </b> {gato.life_span} anos </h5>
                </div>

            </div>
        )
    }

    useEffect(() => {
        async function carregar() {
            setConteudo(await TranformaEmLista())
        }
        carregar()
    }, [])


    return (
        <>
            <main>
                <Link to='/'>
                    <button>
                        Voltar para Home
                    </button>
                </Link>
                <div className='lista-principal'>
                    {conteudo}
                </div>
            </main>
        </>
    )
}

export default RickAndMorty
