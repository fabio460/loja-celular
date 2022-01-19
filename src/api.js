import axios from 'axios'
const link = "http://localhost:4000/" 
//const link = "https://api-loja-celulares.vercel.app/"
const api = {
    listarProduto: ()=>{
        const p = axios.get(link)
        .then(res=>res.data)
        return p
    },
    cadastrarUsuario:async (nome,email,senha)=>{
        const formdata = new FormData()
        formdata.append('nome',nome)
        formdata.append('email',email)
        formdata.append('senha',senha)
        return await fetch(link+'cliente',{
            method:'POST',
            body:formdata
        })   
        .then(res=> res)
    },
    listarUsuario: ()=>{
      const p = axios.get(link)
        .then(res=>res.data)
      return p ;  
    },
    listarUsuarioPorEmail : (email)=>{
        const p = axios.get(link+'cliente/'+email)
        .then(res=>res.data)
      return p ;  
    },
    efetuarCompra : (id_Produto,id_Cliente,data,hora,quantidade)=>{
      const formdata = new FormData()
      formdata.append('id_produto',id_Produto)
      formdata.append('id_cliente',id_Cliente)
      formdata.append('data',data)
      formdata.append('hora',hora)
      formdata.append('quantidadeCompra',quantidade)
      
      const p = fetch(link+'compra',{
          method:'POST',
          body:formdata
       }).then(res=>console.log(res))

      return p 
    },
    listarProdutoPorNome: (nome)=>{
      const p = axios.get(link+nome)
      .then(res=>res.data)
    return p ;  
    }
}

export default api