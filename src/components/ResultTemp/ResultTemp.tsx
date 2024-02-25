import { Container, Form } from 'react-bootstrap';
import './index.scss';
import Nuvem from '../../images/SectionImage/Nuvem.svg';

interface ResultTempProps {
    temperature: number | null;
}

const ResultTemp: React.FC<ResultTempProps> = ({ temperature }) => {
    return (
        <div className='ResultTemp' id='Prev'>
            <Container className="ResultTemp__Container">        
                <h1>Previsão do tempo na região: <img src={Nuvem} alt='error'/> </h1> 
                <div className='ResultTemp__Container--input'>
                    <Form.Group className="mb-3" controlId="previsaoTempo">
                        
                        <Form.Control 
                        type="text" 
                        placeholder={`Preencha a Latitude a Longitude acima`} 
                        value={ temperature !== null ? `Previsão do tempo de acordo com a região: ${temperature}°C` : ''} 
                        readOnly />

                    </Form.Group>
                </div>
            </Container>
        </div>
    );
}

export default ResultTemp;
