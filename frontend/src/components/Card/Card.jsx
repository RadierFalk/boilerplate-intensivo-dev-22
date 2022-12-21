function Card(props) {
    return (
        <div className="card mb-5">
            <img 
             src= {props.url}
             className="card-img-top" 
             alt= {props.name}
              />
              <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.category}</p>
                <a href="#" className="btn btn-danger">
                    Remover
                </a>
              </div>
            </div>
    )
}

export default Card;