import express from 'express'
import { ControladorVehiculo } from '../controllers/ControladorVehiculo.js'
import {ControladorCelda} from '../controllers/ControladorCelda.js'
import {ControladorAdmin} from '../controllers/ControladorAdmin.js'

export let rutas=express.Router()

let admin = new ControladorAdmin()
rutas.get('/api/v1/parqueadero/admin/',admin.buscarAdmins)
rutas.get('/api/v1/parqueadero/admin/:id/', admin.buscarAdmin)
rutas.post('/api/v1/parqueadero/admin/',admin.agregarAdmin)
rutas.put('/api/v1/parqueadero/admin/:id/', admin.editarAdmin)


let celda = new ControladorCelda()

rutas.get('/api/v1/parqueadero/celda/',celda.buscarCeldas)
rutas.get('/api/v1/parqueadero/celda/:id/', celda.buscarCelda)
rutas.post('/api/v1/parqueadero/celda/',celda.agregarCelda)
rutas.put('/api/v1/parqueadero/celda/:id/', celda.editarCelda)

let vehiculo = new ControladorVehiculo()

rutas.get('/api/v1/parqueadero/vehiculos/',vehiculo.buscarVehiculos)
rutas.get('/api/v1/parqueadero/vehiculo/:id/', vehiculo.buscarVehiculo)
rutas.post('/api/v1/parqueadero/vehiculo/', vehiculo.agregarVehiculo)
rutas.put('/api/v1/parqueadero/vehiculo/:id/', vehiculo.editarVehiculo)