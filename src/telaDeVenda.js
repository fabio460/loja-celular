import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import Header from "./header";
import api from "./api";
function TelaDeVenda(){
    let h = useHistory()
    const [email,setEmail]=useState()
    const [quantidade,setQuantidade]=useState(0)
    const comprar = async()=>{
        try {
            if(quantidade === 0){
                alert('insira a quantidade');
            }else{
               if(  quantidade > localStorage.getItem('quantidade') ){
                   alert('quantidade de produto excedida')
               }else{
                const idDoEmail =await api.listarUsuarioPorEmail(email)
                const idDoCliente = idDoEmail[0].id
                const idDoProduto = localStorage.getItem('id')
                const data  = new Date()
                const horas = data.getHours()+":"+data.getMinutes()+":"+data.getSeconds()
                const mes = data.getMonth() + 1
                const dia = data.getDate() +"/"+mes+"/"+data.getFullYear()
                api.efetuarCompra(idDoProduto,idDoCliente,data,horas,quantidade)
                alert('compra efetuada com sucesso')
               }
            }
            
            
        } catch (error) {
            alert('usuario não existe')
        }
    
    }

    return<>
        <Header/>
        <div className="telaDeVenda">
            <img src={localStorage.getItem("imagem")} alt="immagem"/>
            <div className="telaDeVendaLeft">
                <h1>{localStorage.getItem("nome")}</h1>
                <h2 style={{"color":"red"}}>R$ {localStorage.getItem("preco")}</h2>
                <h2>{localStorage.getItem("descricao")}</h2>
                <div>Estoque: {localStorage.getItem('quantidade')}</div>
                <div className="botoes">
                                   
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                         comprar
                    </button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Digite seu email</h5>
                           
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email</label>
                                <input onChange={e=>setEmail(e.target.value)} type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                <label for="exampleFormControlInput1" class="form-label">quantidade</label>
                                <input onChange={e=>setQuantidade(e.target.value)} type="email" class="form-control" id="exampleFormControlInput1" placeholder="quantidade"/>
                            </div>
                          
                        </div>
                        <div class="modal-footer">
                            <button onClick={comprar} type="button" class="btn btn-primary">confirmar</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">fechar</button>
   
                        </div>
                        </div>
                    </div>
                    </div>

                    <button class="btn btn-danger" onClick={()=>h.push('/') }>voltar</button>
                   
                </div>
            </div>
        </div>

        
    </>
}
export default TelaDeVenda;