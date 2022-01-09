import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import api from './api'
function TelaDeCadastro(){
    const h = useHistory()

    const [nome,setNome]=useState()
    const [email,setEmail]=useState()
    const [senha,setSenha]=useState()

    const cadastrar = async()=>{
        if(!nome || !email || !senha){
            alert('favor preencher todos os campos')
        }else{
            const p =await api.cadastrarUsuario(nome,email,senha)
            if(p.status === 200){
                alert('cliente cadastrado com sucesso')
            }else{
                alert('usuario ja existe na base de dados')
            }
        }

    }
    return<>
        <div className="formulario">
            <div className="formulario_left">
                <h1>faça seu cadastro</h1>
            </div>
            <div className="formulario_right">
                <form>
                    <div class="mb-3">
                        <label  class="form-label">Usuario</label>
                        <input onChange={e=>setNome(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input onChange={e=>setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Senha</label>
                        <input onChange={e=>setSenha(e.target.value)} type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button class="btn btn-primary" onClick={cadastrar}>Confirmar</button>
                    <button type="button" class="btn btn-danger" onClick={()=>h.push("/")}>Retornar</button>
                </form>
            </div>
        </div>
    </>
}
export default TelaDeCadastro;