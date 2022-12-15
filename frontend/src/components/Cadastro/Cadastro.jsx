function Cadastro() {
    return(
        <form className="container">
            <h1>Cadastro de Itens</h1>
            <div className="form-group mt-2">
                <label>Nome</label>
                <input className="form-control" name="nome" type="text" />
            </div>
            <div className="form-group mt-2">
                <label>URL da Imagem:</label>
                <input className="form-control" name="url" type="url" />
            </div>
            <div className="form-group mt-2">
                <section className="form-control" name="categoria">
                    <option>Categoria</option>
                </section>
            </div>
            <div className="form-group mt-3" >
                <button type="submit" className="btn bt">Cadastrar</button>
            </div>
        </form>
    );
};

export default Cadastro;