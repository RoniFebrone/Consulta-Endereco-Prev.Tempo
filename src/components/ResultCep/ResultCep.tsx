
import './index.scss';

import { Container, Form, Row, Col } from 'react-bootstrap';
import Local from '../../images/SectionImage/Local.svg';

interface CepDetails {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
}

interface ResultCepProps {
    cepDetails: CepDetails | null;
}


const ResultCep: React.FC<ResultCepProps> = ({ cepDetails }) => {

    return (

        <div className='ResultCep' id='Enderecos'>
            <Container className="ResultCep__Container">

                <h1>Resultado da busca por CEP: <img src={Local} alt='error' /> </h1>


                <div className="ResultCep__Container--Responsive">
                    <div className='ResultCep__Container--label'>
                        <Row className='ResultCep__Row--label' >
                            <Col>
                                <Form.Label>Logradouro/nome</Form.Label>
                            </Col>
                            <Col>
                                <Form.Label>Bairro/Distrito</Form.Label>
                            </Col>
                            <Col>
                                <Form.Label>Localidade/UF</Form.Label>
                            </Col>
                        </Row>
                    </div>

                    <div className='ResultCep__Container--input'>
                        <Row className='ResultCep__Row--input'>
                            <Col>
                                <Form.Control placeholder="Preencha o CEP acima" type="text" value={cepDetails?.logradouro} readOnly />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Preencha o CEP acima" type="text" value={cepDetails?.bairro} readOnly />
                            </Col>
                            <Col>

                                <Form.Control
                                    placeholder="Preencha o CEP acima"
                                    type="text"
                                    value={cepDetails ? `${cepDetails.localidade || ''}/${cepDetails.uf || ''}` : ''}
                                    readOnly
                                />
                            </Col>
                        </Row>
                    </div>

                </div>
            </Container>
        </div>
    );
}

export default ResultCep;

