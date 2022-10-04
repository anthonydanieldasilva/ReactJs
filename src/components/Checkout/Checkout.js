import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firebase/fireconfig"

export const Checkout = () => {

    const {cart, cartTotal, compraFinalizada } = useCartContext()


    const [values, setValues] = useState({
        nombreyapellido: '',
        email: '',
        direccion: '',
    })

    const HandleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const Handlesubmit = (e) => {
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal()
        }

        if(values.nombreyapellido.length < 3){
            alert("Debes ingresar un Nombre valido")
            return
        }

        if(values.email.length < 2){
            alert("Debes ingresar un EMAIL")
            return
        }

        if(values.direccion.length < 3){
            alert("Debes ingresar una direccion valida")
            return
        } 

        const ordenReferencia = collection( db, 'ordenes' )

        addDoc( ordenReferencia , orden )
            .then((doc)=>{
            console.log(doc.id)
            compraFinalizada(doc.id)
        })
    }

    if(cart.length ===0){
        return <Navigate to="/"/>
    }



    return (

        <div className="container my-5">

            <h2>Checkout</h2>

            <hr />

            <form onSubmit={Handlesubmit} >

                <input
                    name="nombreyapellido"
                    values={values.nombre}
                    onChange={HandleInputChange}
                    type={"text"}
                    className="my-3 form-control"
                    placeholder="Tu nombre">
                </input>

                <input
                    name="email"
                    values={values.email}
                    onChange={HandleInputChange}
                    type={"email"}
                    className="my-3 form-control"
                    placeholder="Email">
                </input>

                <input
                    name="direccion"
                    values={values.direccion}
                    onChange={HandleInputChange}
                    type={"text"}
                    className="my-3 form-control"
                    placeholder="Tu dirección">
                </input>


                <button type="submit" className="btn btn-primary">Enviar</button>

            </form>

        </div>

    )
}