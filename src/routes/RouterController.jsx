import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './product/Product'

const Login = lazy(() => import('../routes/login/Login'))
const Register = lazy(() => import('../routes/register/Register'))
const Profile = lazy(() => import('../routes/profile/Profile'))
const Products = lazy(() => import('../routes/products/Products'))

const RouterController = () => {
  return (
    <Routes>
        <Route path='/products' element={<Suspense fallback='<loading...>' ><Products/></Suspense>} />
        <Route path='/login' element={<Suspense fallback='<loading...>' ><Login/></Suspense>} />
        <Route path='/register' element={<Suspense fallback='<loading...>' ><Register/></Suspense>} />
        <Route path='/profile' element={<Suspense fallback='<loading...>' ><Profile/></Suspense>} />
        <Route path='/product/:id' element={<Suspense fallback='<loading...>' ><Product/></Suspense>} />
    </Routes>
  )
}

export default RouterController