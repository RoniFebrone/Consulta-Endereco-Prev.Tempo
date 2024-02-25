import { useState } from 'react';
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Input from "../../components/Input/Input"
import NavbarComponent from "../../components/Navbar/Navbar"
import ResultCep from "../../components/ResultCep/ResultCep"
import ResultTemp from "../../components/ResultTemp/ResultTemp";

const HomePage = () => {
    const [cepDetails, setCepDetails] = useState<any | null>(null);
    const [temperature, setTemperature] = useState<number | null>(null); // Estado para armazenar a temperatura obtida da API
    

    const handleCepSubmit = async (cep: string) => {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const data = await response.json();
            console.log('Dados da resposta da API de CEP:', data); // Adicionar mensagem de console para verificar os dados da API de CEP
            setCepDetails(data);
        } catch (error) {
            alert(`Erro na busca: ${error}`);
            console.log(error);
        }
    }

    const handleLatLonSubmit = async (lat: number, lon: number) => {
        try {
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&forecast_days=1`;
            const response = await fetch(url);
            const data = await response.json();
            
            if (data.hourly) {
                const temperature2m = data.hourly.temperature_2m;
                
                // Obter a última temperatura do array
                const currentTemperature = temperature2m[temperature2m.length - 1];
                
                setTemperature(currentTemperature);
            } else {
                alert('Dados de previsão do tempo indisponíveis para esta localização.');
            }
        } catch (error) {
            alert(`Erro na busca: ${error}`);
            console.log(error);
        }
    };
    

    return (
        <div>
            <NavbarComponent />
            <Header />
            <Input onCepSubmit={handleCepSubmit} onLatLonSubmit={handleLatLonSubmit} />
            <ResultCep cepDetails={cepDetails} />
            <ResultTemp temperature={temperature} />
            <Footer />
        </div>
    )
}

export default HomePage;
