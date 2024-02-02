import SocialNetworks from './SocialNetworks'
import InformationContainer from './informationContainer'

import Avatar from '../img/Foto perfil.jpg'

import '../styles/components/sidebar.sass'


const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt='Victor Guilherme'/>
            <p className="title">Desenvolvedor</p>
            <SocialNetworks />
            <InformationContainer />
            <p>informações de contato</p>
            <a href="" className="btn">
                Download currículo
            </a>
        </aside>
    )
}

export default Sidebar