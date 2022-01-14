import React from "react";
import {useHistory} from 'react-router-dom'
function Produto({id,nome,imagem,preco,quantidade,descricao}){
    let h = useHistory()
    const getItens = ()=>{
       localStorage.setItem("id",id)
       localStorage.setItem("nome",nome)
       localStorage.setItem("imagem",imagem)
       localStorage.setItem("preco",preco)
       localStorage.setItem("quantidade",quantidade)
       localStorage.setItem("descricao",descricao)
       h.push('/venda')

    }
    return<>
       <div onClick={getItens} className="produto">    
           
           <img src={imagem} alt="imagem"/>
           <h5>{nome}</h5>
           <h3>R$ {preco}</h3>
       </div>
    </>
}

export default Produto