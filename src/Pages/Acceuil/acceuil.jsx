import React from 'react'
import WlcSection from '../../components/section/WlcSection/wlcSection'
import Separation from '../../components/separation/separation';
import Strategy from '../../components/strategy/strategy';
import Info from '../../components/Info/info';
import Boules from '../../components/Boules/Boules';
import Loginform from '../../components/LoginForm/loginform';
import StafCard from '../../components/stafCard/StafCard';

const Acceuil = () => {
  return (<>
    <WlcSection/>
    <Separation/>
    <Info/>
    <Strategy/>
    <Boules/>
    <StafCard></StafCard>
    <br />
    <br />
    <br />
    <br />
    <br />
  </>
    )
}

export default Acceuil