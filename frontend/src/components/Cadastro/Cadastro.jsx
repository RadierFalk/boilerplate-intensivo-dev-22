import { useState, useEffect } from "react";
import API from "../../api/api";

function Cadastro(){
    const [categorias, setCategorias] = useState([
      { _id: 0, name: "Carregando Categorias..." },
    ]);

    async function loadCategories() {
        const categoriasDoBanco = await API.category.list()
        const categoriasCarregadas = await categoriasDoBanco.json()
        console.log("Carregou!!")
        setCategorias(categoriasCarregadas);
    }

    useEffect(function(){
        loadCategories();
    },[])

    async function cadastroItem(event) {
        event.preventDefault()

        const formEl = event.target

        formEl.submit.disabled = true

        const body = {
            "name" : formEl.nome.value,
            "image" : formEl.url.value,
            "category" : formEl.category.value
        }

        const request = await API.item.create(body)

        formEl.submit.disabled = false

        if (request.status == 201) {
            alert("Item cadastrado com sucesso!!")
            formEl.nome.value = ""
            formEl.url.value = ""
        }else { 
            alert("aconteceu algo, seu item NÃO foi cadastrado. :( ")
        }
    }

    return (
      <form className="container" onSubmit={cadastroItem}>  
        <h1>Cadastro de Items</h1>
        <div className="form-group mt-2">
          <label>Nome:</label>
          <input className="form-control" name="nome" type="text" />
        </div>

        <div className="form-group mt-2">
          <label>URL da Imagem:</label>
          <input className="form-control" name="url" type="url" />
        </div>

        <div className="form-group mt-2">
          <label>Categoria:</label>
          <select className="form-control" name="categoria">
            {categorias.map(
                el => <option key={el._id} value ={el._id}>{el.name}</option>
            )}
          </select>
        </div>
        <div className="form-group mt-3">
          <button type="submit" className="btn btn-primary">
            Cadastrar
          </button>
        </div>
      </form>
    );
}

export default Cadastro