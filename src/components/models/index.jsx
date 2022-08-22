import React from 'react'
import Icon1 from '../../images/image1.svg'
import { ModelsContainer, ModelsH1, ModelsCard, ModelsWrapper, ModelsH2, ModelsP, ModelsIcon } from './modelElements'

const Models = () => {
  return (
    
    <ModelsContainer id="models">
        <ModelsH1>Select from 3 different sizes</ModelsH1>
        <ModelsWrapper>
            <ModelsCard>
                <ModelsIcon src={Icon1}/>
                <ModelsH2>13"</ModelsH2>
                <ModelsP>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</ModelsP>
            </ModelsCard>
            <ModelsCard>
                <ModelsIcon src={Icon1}/>
                <ModelsH2>15"</ModelsH2>
                <ModelsP>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</ModelsP>
            </ModelsCard>
            <ModelsCard>
                <ModelsIcon src={Icon1}/>
                <ModelsH2>17"</ModelsH2>
                <ModelsP>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</ModelsP>
            </ModelsCard>
        </ModelsWrapper>
    </ModelsContainer>

  )
}

export default Models