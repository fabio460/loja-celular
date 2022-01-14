import React, { useEffect, useState } from "react";
import api from "./api";
import Header from "./header";
import Produto from "./produto";

function Home(){
    const [lista,setLista]=useState([])
    const [listaCompleta,setListaCompleta]= useState([])
    const pagina= []
    const inicio = 0
    const fim = 3  // a variável 'fim' mostra a quantidade de itens por pagina, so alterar o seu valor
    
    var finalDaLista = listaCompleta.length

    async function atualizarLista(){
        const p =await api.listarProduto()
        setListaCompleta(p)
        setLista(p.slice(inicio,fim))

    }
    // criando lista de paginas
    listaCompleta.map((item,key)=>{
        if( ((key+1) % fim) === 0 ){    
           pagina.push(key+1)
        }
        return ''; 
    })
    pagina.push(finalDaLista)
    const paginaSemDuplicata = [...new Set(pagina)]
    
    
    const paginacao = (e)=>{
        let elem = e.target.id
        var f =e.target.id
        var i =1
        if( elem%fim !== 0){
             f = finalDaLista
             i = finalDaLista - finalDaLista%fim
             
        }else{
            i = f - fim
        }

        let l = listaCompleta.slice(i,f)
        setLista(l)
        
        document.querySelectorAll('.btn_pagina').forEach(elem=>{
            elem.classList.remove('active')
        })
        document.getElementById(e.target.id).classList.add('active')
        console.log(e.target)
    }
    
    useEffect(()=>{
      atualizarLista() 
      
    },[])
    

    return<>
       <Header/>
       <div className="produtos">
            {lista.map((item,key)=>{
                return <Produto chave={key} nome={item.nome} imagem={item.imagem} preco={item.preco} id={item.id} quantidade={item.quantidade} descricao={item.descricao}/>
            })}
       </div>
       <div className="paginas">
            <button className="btn_prev">{"<<"}</button>
            {paginaSemDuplicata.map((item,key)=>{
                return <button className="btn_pagina" id={item}  onClick={paginacao}>{key+1}</button>
            })}
            <button className="btn_next">{">>"}</button>
       </div>
    </>
}
export default Home