import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/base/Header'
import { MainLayout } from './components/base/MainLayout'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { SignUp } from './pages/Signup'
import { RouteName } from './shared/routers'

function App() {
    return (
        <>
            <Routes>
                <Route path={RouteName.SignUp} element={<SignUp />}></Route>
                <Route path={RouteName.Login} element={<Login />}></Route>
                <Route element={<MainLayout />}>
                    <Route path={RouteName.Home} element={<Home />}></Route>
                </Route>
            </Routes>
        </>
    )
}

export default App
