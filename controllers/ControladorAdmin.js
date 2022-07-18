import {ServicioAdministrador} from '../services/ServicioAdministrador.js'

export class ControladorAdmin{

    constructor(){}

    async buscarAdmins(request,response){
        let servicioAdmin=new ServicioAdministrador()
        try{
            response.status(200).json({
                mensaje:'exito en la consulta',
                data: await servicioAdmin.buscar()
            })
        }catch(error){
            response.status(400).json({
                mensaje:'fallamos en la consulta'+error,
                data: null
            })
        }
        
    }

    async buscarAdmin(request,response){

        let servicioAdmin=new ServicioAdministrador()
        try{
            let id=request.params.id
            response.status(200).json({
                mensaje:'exito buscando la admin',
                data: await servicioAdmin.buscarPorId(id)
            })
        }catch(error){
            response.status(400).json({
                mensaje:'fallo buscando la admin'+error,
                data: null
            })
        }
    }

    async editarAdmin(request,response){

        let servicioAdmin=new ServicioAdministrador()
        try{
            let id=request.params.id
            let datos=request.body
            await servicioAdmin.editar(id,datos)
            response.status(200).json({
                mensaje:'exito editando la admin',
                data: null
            })

        }catch(error){
            response.status(400).json({
                mensaje:'fallo editando la admin'+error,
                data: null
            })

        }

    }

    async agregarAdmin(request,response){
        let servicioAdmin=new ServicioAdministrador()
        try{

            let datos=request.body
            await servicioAdmin.ingresar(datos)
            response.status(200).json({
                mensaje:'exito registrando la admin',
                data: null
            })

        }catch(error){
            response.status(200).json({
                mensaje:'fallo registrando la admin'+error,
                data: null
            })

        }
    }

}