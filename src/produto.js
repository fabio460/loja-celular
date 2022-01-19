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
    let Preco = parseFloat(preco).toFixed(2)
    let desconto = Preco*0.8
    let parcelas = desconto/10
    return<>
       <div onClick={getItens} className="produto">    
           
           <div className="produto_top"><img src={imagem} alt="imagem"/></div>
           <div className="produto_bottom">
                <div>{nome}</div>
                <div>de R${Preco} por</div>
                <h5>R$ {desconto.toFixed(2)} a vista</h5>
                <div>ou</div>
                <div>10x de {parcelas.toFixed(2)} sem juros</div>
           </div>
       </div>
    </>
}

export default Produto