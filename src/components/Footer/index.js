import React from 'react'
import * as C from './styles'

const Footer = () => {
  return (
    <C.Footer>
      <C.Containers>
        <C.ContainerPublicity>
        <h4>Todo's</h4>
        <p>A project aimed at helping people get organized in their day-to-day tasks </p>
        </C.ContainerPublicity>
        {/* <C.ContainerServices className='containerStyle'>
          <h5>Services</h5>
          <nav>
          <C.FooterLink href="#">Email Marketing</C.FooterLink>
          <C.FooterLink href="#">Campaigns</C.FooterLink>
          <C.FooterLink href="#">Branding</C.FooterLink>
          </nav>
        </C.ContainerServices>
        <C.ContainerFurniture className='containerStyle'>
          <h5>Furniture</h5>
          <nav>
          <C.FooterLink href="#">Beds</C.FooterLink>
          <C.FooterLink href="#">Chair</C.FooterLink>
          <C.FooterLink href="#">All</C.FooterLink>
          </nav>
        </C.ContainerFurniture> */}
        <C.ContainerFollowUs className='containerStyle'>
          <h5>Follow Us</h5>
          <nav>
          <C.FooterLink href="https://www.linkedin.com/in/maycomcosta/">Linkedin</C.FooterLink>
          <C.FooterLink href="https://github.com/MaycomCosta">Github</C.FooterLink>
          <C.FooterLink href="https://twitter.com/DamnDolar">Twitter</C.FooterLink>
          </nav>
        </C.ContainerFollowUs>
      </C.Containers>
      <C.CopyrightContainer>
      <h5 className='copyright'>Copyright © 2023</h5>
      <C.FooterLink href="#">Terms & Conditions</C.FooterLink>
      <C.FooterLink href="#">Privacy Policy</C.FooterLink>
      </C.CopyrightContainer>
      </C.Footer>
  )
}


export default Footer