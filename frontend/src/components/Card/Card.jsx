function Card() {
    return (
        <div class="card mb-5">
            <img 
             src="https://picsum.photos/300/200"
             class="card-img-top" 
             alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Nome do Item</h5>
                <p class="card-text">Categoria</p>
                <a href="#" class="btn btn-danger">
                    Remover
                </a>
              </div>
            </div>
    )
}

export default Card;