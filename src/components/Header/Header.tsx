import './index.scss'
import Clima from '../../images/SectionImage/Clima.svg'

const Header = () => {
    return (
        <div className='Header'>
            <div className='Header__Container'>
                <h1>
                    Descubra Mais com Precisão: <br /> Previsões do Tempo e endereços em tempo real.
                </h1>
                <div>
                    <img src={Clima} alt="Error" />
                </div>
            </div>

        </div>
    )
}

export default Header