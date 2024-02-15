export default function SignUp(){
    return(
        <>
            Singup
            Selecciones una imagen:
            <input type="image" className="border-2 border-furnipurple bg-violet-600 rounded p-1"/>
            Local: <input type="checkbox" className="accent-furnipurple"/>
            Empresa: <input type="checkbox" className="accent-furnipurple"/>
            <input type="text" className="border-2 border-furnipurple bg-violet-600 rounded p-1" placeholder="Nombre de Usuario/Empresa"/>
            <input type="text" className="border-2 border-furnipurple bg-violet-600 rounded p-1" placeholder="Contraseña"/>
            <input type="text" className="border-2 border-furnipurple bg-violet-600 rounded p-1" placeholder="Confirmar Contraseña"/>
            <input type="text" className="border-2 border-furnipurple bg-violet-600 rounded p-1" placeholder="Telefono"/>
            <input type="text" className="border-2 border-furnipurple bg-violet-600 rounded p-1" placeholder="Correo Electronico"/>

        </>
    )
}