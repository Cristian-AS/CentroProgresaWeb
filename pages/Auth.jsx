import React, {useState} from "react";
import 'firebase/Auth';
import { useState } from 'react';
import {useFirebaseApp} from 'reactfire';


export default (props) => {
    const [email, setemail] = useState ( '' );
    const [password, setpassword] = useState ( '' );

    const firebase = useFirebaseApp();
    

    return (
        <>
            <div class="container" id="container">
                <div class="form-container sign-up-container">
                    <form action="#">
                        <h1>Registrate en PractiYa</h1>
                        <div class="social-container">
                            <a href="#" class="social">
                                <Image src={icono.src} width={74} height={74} alt='Imagen Logotipo' />
                            </a>
                            <a href="#" class="social">
                                <Image src={icono_2.src} width={74} height={74} alt='Imagen Logotipo' />
                            </a>
                        </div>
                        <span>Ingresa con tu correo!</span>
                        <input type="text" placeholder="Nombre"></input>
                        <input type="email" placeholder="Correo" />
                        <input type="password" placeholder="Contraseña" />
                        <button className="btnRegistrar">Registrate</button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
                    <form action="#">
                        <h1>Ingresa a PractiYa</h1>
                        <div class="social-container">
                            <a href="#" class="social">
                                <Image src={icono.src} width={74} height={74} alt='Imagen Logotipo' />
                            </a>
                            <a href="#" class="social">
                                <Image src={icono_2.src} width={74} height={74} alt='Imagen Logotipo' />
                            </a>
                        </div>
                        <span>Ingresa con tu correo!</span>
                        <input type="email" placeholder="Correo" />
                        <input type="password" placeholder="Contraseña" />
                        <a href="#">¿Olvidaste tu contraseña?</a>
                        <button className="btnIngresar">Ingresa</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>¡Hola, amigo!</h1>
                            <Image src={logo.src} width={300} height={40} alt='Imagen Logotipo' />
                            <button class="ghost" id="signIn">Inicia Sesion</button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>¡Bienvenid@!</h1>
                            <Image src={logo.src} width={300} height={40} alt='Imagen Logotipo' />
                            <button class="ghost" id="signUp">Registrate</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



