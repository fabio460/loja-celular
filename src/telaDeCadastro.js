import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import api from './api'
function TelaDeCadastro(){
    const h = useHistory()

    const [nome,setNome]=useState()
    const [email,setEmail]=useState()
    const [senha,setSenha]=useState()
    const [valido,setValido]= useState(false)
    const cadastrar = async()=>{
        validacaoEmail(email)
        if(!nome || !email || !senha){
            alert('favor preencher todos os campos')
        }else{
            if(valido){
                const p =await api.cadastrarUsuario(nome,email,senha)
                if(p.status === 200){
                    alert('cliente cadastrado com sucesso')
                }else{
                    alert('usuario ja existe na base de dados')
                }
            }
        }

    }

    function validacaoEmail(field) {
        let  usuario = field.value.substring(0, field.value.indexOf("@"));
        let  dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
                if ((usuario.length >=1) &&
                    (dominio.length >=3) &&
                    (usuario.search("@")===-1) &&
                    (dominio.search("@")===-1) &&
                    (usuario.search(" ")===-1) &&
                    (dominio.search(" ")===-1) &&
                    (dominio.search(".")!==-1) &&
                    (dominio.indexOf(".") >=1)&&
                    (dominio.lastIndexOf(".") < dominio.length - 1)) {
                document.getElementById("exampleInputEmail1").innerHTML="E-mail válido";
                setValido(true)
                }
                else{
                document.getElementById("exampleInputEmail1").innerHTML="<font color='red'>Email inválido </font>";
                alert("E-mail invalido");
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
                        <input onChange={e=>setNome(e.target.value)} type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp"/>
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