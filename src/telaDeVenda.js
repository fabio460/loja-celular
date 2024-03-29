import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import Header from "./header";
import api from "./api";
function TelaDeVenda(){
    let h = useHistory()
    const [email,setEmail]=useState('')
    const [quantidade,setQuantidade]=useState(0)
    const comprar = async()=>{
            let estoque = localStorage.getItem('quantidade')

            if(quantidade === '0' || quantidade === ''){
                alert('insira a quantidade');
            }
            else{
                if(email === ''){
                    alert('insira um email')
                }
                else{
                    if(  quantidade > parseInt(estoque) ){
                        alert('quantidade excedida')
                    }else{
                        const idDoEmail =await api.listarUsuarioPorEmail(email)
                        if(!idDoEmail.email){
                            alert('usuario não existe na base de dados')
                        }
                        else{
                            const idDoCliente = idDoEmail._id
                            const idDoProduto = localStorage.getItem("id")
                            const data  = new Date()
                            const horas = data.getHours()+"h:"+data.getMinutes()+"m:"+data.getSeconds()+'s'
                            const mes = data.getMonth() + 1
                            const dia = data.getDate() +"/"+mes+"/"+data.getFullYear()
                            api.efetuarCompra(idDoProduto,idDoCliente,dia,horas,quantidade)
                            alert('compra efetuada com sucesso')
                        }
                    }
                }
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