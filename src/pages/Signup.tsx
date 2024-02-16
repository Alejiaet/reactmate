export default function SignUp(){
 
    return(
        <>
            Singup

<div className="bg-slate-400 ">
Seleccione una imagen:
            <input type="file"  className="border-2 border-furnipurple p-1" accept="image/*"/>
            Local: <input type="checkbox" className="accent-furnipurple"/>
            Empresa: <input type="checkbox" className="accent-furnipurple"/>
            <input type="text" className="border-2 border-furnipurple rounded p-1" placeholder="Nombre de Usuario/Empresa"/>
            <input type="password" className="border-2 border-furnipurple rounded p-1" placeholder="Contraseña"/>
            <input type="password" className="border-2 border-furnipurple rounded p-1" placeholder="Confirmar Contraseña"/>
            <input type="number" className="border-2 border-furnipurple rounded p-1" placeholder="Telefono"/>
            <input type="email" className="border-2 border-furnipurple rounded p-1" placeholder="Correo Electronico"/>

</div>
            

            
        </>
    )
}
