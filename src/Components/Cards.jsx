import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Cards() {

    const [card, setCard] = useState([])
    useEffect(() => {
        axios.get('https://fakerapi.it/api/v1/companies?_quantity=5')
            .then((res) => setCard(res.data.data))
            .catch((e) => { console.log('Error is ', e) })
    }, [])
    return (
        <div>
            <h1>hello</h1>
            
            {card.map((res) => (
                <div key={res.id}>
                   <h2>{res.name}</h2>
                    <p>Email: {res.email}</p>
                    <p>Phone: {res.phone}</p>
                    <p>Vat: {res.vat}</p>
                    <p>Country: {res.country}</p>
                    <h3>Addresses:</h3>
                    <ul>
                        {res.addresses.map(address => (
                            <li key={address.id}>
                                {address.street}, {address.city}, {address.country}
                            </li>
                        ))}
                    </ul>
                    <p>{res.website}</p>
                    <p>{res.image}</p>
                    <h3>Contact Info : </h3>
                    <p>First Name: {res.contact.firstname}</p>
                    <p>Last Name: {res.contact.lastname}</p>
                    <p>Email: {res.contact.email}</p>
                    <p>Phone: {res.contact.phone}</p>
                    <p>Birthday: {res.contact.birthday}</p>
                    <p>Gender: {res.contact.gender}</p>
                </div>
            ))}
        </div>

    )
}

export default Cards
