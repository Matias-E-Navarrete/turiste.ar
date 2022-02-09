import React, { useContext, useState } from 'react';
import { getFirestore } from '../../firebase/config';
import { useNavigate } from 'react-router-dom'
import firebase from 'firebase/app'
import { useFormik } from 'formik';
import { CartContext } from '../../context/CartContext';
import './PaymentMethod.css'
import { Loading } from '../Loading/Loading';

export const PaymentMethod = () => {
    const navigate = useNavigate()
    const db = getFirestore();
    const orders = db.collection("orders")
    const [orderId, setOrderId] = useState({})
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)
    const { cart } = useContext(CartContext)

    const getError = (name) => {
        const err = formik.errors[name];
        return <p style={{ color: 'red' }}>{err}</p>
    }

    const getTotal = () => {
        let total = 0;
        if (cart.length > 0)
            cart.forEach(element => total += Number(element.item.price));

        return total;
    }

    const validate = values => {

        const errors = {};
        if (!values.name) {
            errors.name = 'Requerido.';
        }
        if (!values.lastname) {
            errors.lastname = 'Requerido.';
        }
        if (!values.phone) {
            errors.phone = 'Requerido.';
        }
        if (!values.address) {
            errors.address = 'Requerido.';
        }
        if (!values.email) {
            errors.email = 'Requerido.';
        }
        if (!values.secondEmail) {
            errors.secondEmail = 'Requerido.';
        }
        if (values.secondEmail !== values.email) {
            errors.secondEmail = 'Los emails deben coincidir';
        }

        return errors;
    };


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            address: "",
            name: "",
            lastname: "",
            phone: 54,
            email: "",
            secondEmail: ""
        },
        validate,
        onSubmit: async (values) => {

            const order = {
                buyer: {
                    name: values.name,
                    lastname: values.lastname,
                    phone: values.phone,
                    email: values.email,
                    address: values.address
                },
                items: [
                    ...cart
                ],
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                total: getTotal()
            }

            orders.add(order).then(({ id }) => {
                setLoading(true);
                setOrderId(id)
            }).catch((err) => {
                setError(err)
            }).finally(() => {
                setLoading(false)
            })
            navigate('/checkout')

        },
    });
    const isDisable = () => {
        if (formik.isSubmitting) {
            return true
        } else if (!validate) {
            return true
        } else if (cart.length === 0) {
            return true
        }

        return false;
    }

    return (
        <div>

            {!loading ?
                <div className='container'>
                    <section className='purchase'>
                        <section className='purchase-header'>
                            <h3>Datos de Pago</h3>
                        </section>

                        <section className='purchase-body'>
                            <form onSubmit={formik.handleSubmit}>
                                <section className='purchase-total'>
                                    <section className='purchase-data' >
                                        <label htmlFor="address">Domicilio</label>
                                        <input
                                            name="address"
                                            type="text"
                                            placeholder='Domicilio'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.address}
                                        />
                                        {getError('address')}
                                        <label htmlFor='name'>Nombre</label>
                                        <input
                                            name="name"
                                            type="text"
                                            placeholder='Nombre'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.name}
                                        />
                                        {getError('name')}
                                        <label htmlFor='lastname'>Apellido</label>
                                        <input
                                            name="lastname"
                                            type="text"
                                            placeholder='Apellido'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.lastname}
                                        />
                                        {getError('lastname')}
                                        <label htmlFor='phone'>Phone</label>
                                        <input
                                            name="phone"
                                            type="number"
                                            placeholder='+54'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.phone}
                                        />
                                        {getError('phone')}
                                        <label htmlFor='email'>Email</label>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder='Correo'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email}
                                        />
                                        {getError('email')}
                                        <label htmlFor='secondEmail'>Repita su Email</label>
                                        <input
                                            name='secondEmail'
                                            type="email"
                                            placeholder='Repita su correo'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.secondEmail}
                                        />
                                        {getError('secondEmail')}
                                    </section>

                                </section>

                                <section className='purchase-payment'>
                                    {/* <NavLink to={`/payment`} style={{ textDecoration: 'none', color: 'inherit' }}> */}
                                    <button
                                        className="payment"
                                        type="submit"
                                        disabled={isDisable()}
                                    > Finalizar </button>
                                    {/* </NavLink> */}
                                </section>
                            </form>
                        </section>
                    </section>
                </div>
                : <Loading />
            }
        </div>
    )
};
