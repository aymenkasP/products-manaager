import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router'

import './index.css';
import image from './opt_md_nextjs_thumbnail.jpg'
export default function Home() {
    const history = useHistory()
/*     const Learn = useRef('this')
 */
    return (
        <div className="home">

        <section className="hero " >
            <div className="hero-text body" onClick={()=> history.push('/warehouses')} >
                <h1>products manager</h1>
                <p>Manage your products data withe es way  </p>
                <button className="btn btn-try"  >
                    Try for free
                </button>
            </div>

            <div className='image '>
            <img src={image} alt="images" />
            </div>

        </section>

        <section className='feature container ' >
        <dev className="feature-header">
        <h2>Features</h2>
        </dev>

        <div className='feature-body' >
            {/* 
                create warehouse
                add stoke
                sell stoke
                track data 
                today data in and out 
                profit lose
                create notes
            
             */}
             <p className='body' >create warehouse</p>
             <p className='body' >add stoke</p>
             <p className='body' >sell stoke</p>
             <p className='body' >track data</p>
             <p className='body' >profit and Lose </p>
             <p className='body' >create notes </p>
        </div>

        </section>

        <section className="price" > 
        <h2>price</h2>

                <div className='body'>
                        <diV>
                            <h3>free</h3>
                        </diV>
                        <div>
                            <p>ultimate warehouses </p> 
                            <p>ultimate stoke </p> 
                            <p>track 30days data  </p> 
                            <p>ultimate notes </p> 
                        </div>
                        <div>
                        <button className="btn btn-try"  >
                              Try for free
                        </button>
                        </div>
                </div>
                    
        </section>

        <section class="contact" id="contact">
        <div className="container_" >

    <h1 class="heading"><span>contact</span> us</h1>

    <div class="row">

        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1632137920043!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>

        <form action="">
            <h3>get in touch</h3>
            <input type="text" placeholder="your name" class="box" />
            <input type="email" placeholder="your email" class="box" />
            <input type="tel" placeholder="subject" class="box" />
            <textarea placeholder="your message" class="box" cols="30" rows="10">

            </textarea>
            <input type="submit" value="send message" class="btn" />
        </form>

    </div>
</div>
</section>

        <footer className="footer" >

        </footer>
        </div>
    )
}
