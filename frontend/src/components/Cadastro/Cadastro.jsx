function Cadastro() {
    return(
        <form className="container">
            <div className="form-group">
                <label>Nome</label>
                <input name="nome" type="text" />
            </div>
            <div className="form-group">
                <label>URL da Imagem:</label>
                <input name="url" type="url" />
            </div>
            <div className="form-group">
                <section name="categoria">
                    <option>Categoria</option>
                </section>
            </div>
            <div className="form-group">
                <button type="submit" className="btn bt">Cadastrar</button>
            </div>
        </form>
    );
};

export default Cadastro;