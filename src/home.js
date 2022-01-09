import React, { useEffect, useState } from "react";
import api from "./api";
import Header from "./header";
import Produto from "./produto";

function Home(){
    const [lista,selLista]=useState([])
    async function atualizarTela(){
        const p =await api.listarProduto()
        selLista(p)
        console.log(p)
    }
    useEffect(()=>{
        atualizarTela()
    },[])
    return<>
       <Header/>
       <div className="produtos">
            {lista.map(item=>{
                return <Produto nome={item.nome} imagem={item.imagem} preco={item.preco} id={item.id} quantidade={item.quantidade} descricao={item.descricao}/>
            })}
       </div>
    </>
}
export default Home