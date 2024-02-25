// Input.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Container, Button, Form } from 'react-bootstrap';

import './index.scss';

interface InputProps {
    onCepSubmit: (cep: string) => void;
    onLatLonSubmit: (lat: number, lon: number) => void;
}

const Input: React.FC<InputProps> = ({ onCepSubmit, onLatLonSubmit }) => {
    const [cep, setCep] = useState<string>('');
    const [lat, setLat] = useState<number>(0);
    const [lon, setLon] = useState<number>(0);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCep(event.target.value);
    };

    const handleLatChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLat(Number(event.target.value));
    };

    const handleLonChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLon(Number(event.target.value));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onCepSubmit(cep);
        onLatLonSubmit(lat, lon);
    };

    return (
        <div className="ContainerInput">
            <Container className='ContainerInput__Container'>
                <Container className='ContainerInput__Container--form'>
                    <Form onSubmit={handleSubmit} className='ContainerInput__Form'>
                        <Form.Group className="mb-4">
                            <Form.Label>Primeiro Nome:</Form.Label>
                            <Form.Control required defaultValue="Mark" placeholder="Insira seu primeiro nome:" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Label>Email </Form.Label>
                            <Form.Control id='Email' type="email" placeholder="Insira seu e-mail" />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label >Digite o CEP</Form.Label>
                            <Form.Control id='cep' type="text" value={cep} onChange={handleInputChange} placeholder="Insira o CEP:" />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label >Digite a latitude e a longitude</Form.Label>
                            <div className="d-flex">
                                <Form.Control
                                id='latInput'
                                    className="me-2"
                                    type="number"
                                    value={lat === 0 ? '' : lat}
                                    onChange={handleLatChange}
                                    placeholder="Latitude"
                                />
                                <Form.Control
                                id='longInput'
                                    type="number"
                                    value={lon === 0 ? '' : lon}
                                    onChange={handleLonChange}
                                    placeholder="Longitude"
                                />
                            </div>

                        </Form.Group>


                        <Button className="ContainerInput__Button" variant="primary" type="submit">
                            Acessar
                        </Button>
                    </Form>
                </Container>
            </Container>
        </div>
    )
}


export default Input;

//-22.382953251412633, -42.910269774398415
//25977310