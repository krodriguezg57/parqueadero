import {ServicioVehiculo} from '../services/ServicioVehiculo.js'
import {ServicioCelda} from '../services/ServicioCelda.js'

export class ControladorVehiculo{

    constructor(){}

    async buscarVehiculos(request,response){
        let servicioVehiculo=new ServicioVehiculo()
        try{
            response.status(200).json({
                mensaje:'exito en la consulta',
                data: await servicioVehiculo.buscar()
            })
        }catch(error){
            response.status(400).json({
                mensaje:'fallamos en la consulta'+error,
                data: null
            })
        }
        
    }

    async buscarVehiculo(request,response){

        let servicioVehiculo=new ServicioVehiculo()
        try{
            let id=request.params.id
            response.status(200).json({
                mensaje:'exito buscando la vehiculo',
                data: await servicioVehiculo.buscarPorId(id)
            })
        }catch(error){
            response.status(400).json({
                mensaje:'fallo buscando la vehiculo'+error,
                data: null
            })
        }
    }

    async editarVehiculo(request,response){

        let servicioVehiculo=new ServicioVehiculo()
        let servicioCelda= new ServicioCelda()

        try{
            let id      =request.params.id
            let datos   =request.body
            let celda   = await servicioCelda.buscarPorId(datos.id_celda)
            let tarifa  = celda.tarifa
            let fecha   = new Date()
            let vehiculo= await servicioVehiculo.buscarPorId(id)
            let fechaEntrada= vehiculo.fecha_ingreso      
            let diferencia= fecha.getTime()-fechaEntrada.getTime()
            let diferenciaEnSegundos= diferencia/1000
            let diferenciaEnMinutos=Math.round(diferenciaEnSegundos/60)
            let costo=diferenciaEnMinutos*tarifa
            
            datos.minutos=diferenciaEnMinutos
            datos.fecha_salida=fecha
            datos.total_pago=costo

            await servicioVehiculo.editar(id,datos)
            response.status(200).json({
                mensaje:'exito editando la vehiculo',
                data: null
            })

        }catch(error){
            response.status(400).json({
                mensaje:'fallo editando la vehiculo'+error,
                data: null
            })

        }

    }

    async agregarVehiculo(request,response){
        let servicioVehiculo=new ServicioVehiculo()
        let servicioCelda=new ServicioCelda()

        try{

            let datos=request.body
            let celda=await servicioCelda.buscarPorId(datos.id_celda)

            if (celda.estado){
                let fechaEntrada= new Date()
                datos.fecha_ingreso= fechaEntrada

                await servicioVehiculo.ingresar(datos)
                response.status(200).json({
                    mensaje:'exito registrando la vehiculo',
                    data: null
                })
            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        }catch(error){

            response.status(200).json({
                mensaje:'fallo registrando la vehiculo'+error,
                data: null
            })

        }
    }

}