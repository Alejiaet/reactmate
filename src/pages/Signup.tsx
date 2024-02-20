export default function SignUp(){
 
    return(
        <>
            Singup  

<div className="bg-gray-200 p-4 rounded-2xl m-0-auto max-w-sm" align="center">
    
<button className="rounded-full bg-orange-500 border-2 border-orange-500 w-24 h-24">
    foto perfil
</button>

    <ul className="min-w-fit">
        <li className="p-2">
        Seleccione una imagen:
            <input type="file" className="border-2 border-gray-400 p-1" accept="image/*"/>
        </li>

    <li className="p-2">
        <label className="p-2">
            Local:
        <input type="checkbox" className="accent-furnipurple ml-1"/>
        </label>
<label className="p-2">
            Empresa:
        <input type="checkbox" className="accent-furnipurple ml-1"/>
        </label>
    </li>

           <li className="p-2">
           <input type="text" className="border-2 border-gray-400 rounded p-1 w-full" placeholder="Nombre de Usuario/Empresa"/>
            </li> 

            <li className="p-2">
            <input type="password" className="border-2 border-gray-400 rounded p-1 w-full" placeholder="Contraseña"/>
            </li> 

            <li className="p-2">
            <input type="password" className="border-2 border-gray-400 rounded p-1 w-full" placeholder="Confirmar Contraseña"/>
            </li> 

            <li className="p-2">
            <input type="number" className="border-2 border-gray-400 rounded p-1 w-full" placeholder="Telefono"/>
            </li> 

            <li className="p-2">
            <input type="email" className="border-2 border-gray-400 rounded p-1 w-full" placeholder="Correo Electronico"/>
            </li> 
            
            
           
            
           
    </ul>
    
    <button className="bg-violet-600 hover:bg-violet-800 border-2 border-violet-900 rounded p-1 text-white w-full my-2"> Registrarse </button>

    <div className="flex">
    <label>
    ¿Ya tienes una cuenta? 
</label>
<a href="Login" className="text-blue-400 pl-2">Inicia sesion</a>
    </div>

</div>
            

            
        </>
    )
}
