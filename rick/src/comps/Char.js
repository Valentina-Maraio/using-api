import React from 'react'

const Char = ({char = [] }) => {
    return (
        <div className="row">
            {
                char.map((item, id) => (
                    <div key={id} className="col">
                        <div className="card">
                            <img src={item.image}></img>
                            <div className="card-body">
                                <h5>Name: {item.name}</h5>
                                <h5>Location: {item.location.name}</h5>
                                <h5>Status: {item.status}</h5>
                                <h5>Species: {item.species}</h5>
                                <h5>Gender: {item.gender}</h5>
                                <h5>Origin: {item.origin.name}</h5>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Char
