
import './Cards.css'

function Cards2({ posts }) {
  const urlBase = 'http://localhost:3001/images/'

  if (posts.length === 0) {
    return (
      <div>
        <p>Não existem dados a serem exibidos!</p>
      </div>
    )
  }
  return (
    <div className='row'>
      {posts.map((post) => (
        <div className='col-sm-4' key={post.id}>
          <div className='card mb-3'>
            <img
              src={urlBase + post.foto}
              className='card-img-top'
              alt='foto'
            />
            <div className='card-body'>
              <h5 className='card-title'>{post.nome}</h5>
              <p className='card-text '>
                <i className="bi bi-chat-dots"></i> {post.descricao}
              </p>
            </div>
            {/* Removendo as opções de editar e excluir */}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards2