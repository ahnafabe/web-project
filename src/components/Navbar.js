import React, {useState} from 'react'
import{
    NavbarContainer, 
    LeftContainer, 
    RightContainer, 
    NavbarInnerContainer, 
    NavbarExtendedContainer, 
    NavbarLinkContainer, 
    NavbarLink,
    Logo,
    OpenLinkButton,
    NavbarLinkExtended
} from '../components/styles/Navbar.style'
import LogoImg from '../assets/yelena-face.jpg'

function Navbar() {
  
    const [extendNavbar, setExtendNavbar] = useState(false);
    return (
    <NavbarContainer extendNavbar ={extendNavbar}> 
        <NavbarInnerContainer>
            <LeftContainer>
                <OpenLinkButton 
                    onClick={() => {
                        setExtendNavbar((curr) => !curr)
                    }}
                > 
                    {extendNavbar ? <> &#10005; </> : <> &#8801;</>}
                </OpenLinkButton>

                <NavbarLinkContainer>
                    <NavbarLink to="/"> Home</NavbarLink>
                    <NavbarLink to="/products"> Products</NavbarLink>
                    <NavbarLink to="/contact-us"> Contact Us</NavbarLink>
                    <NavbarLink to="/about-us"> About Us</NavbarLink>
               </NavbarLinkContainer> 
                
            </LeftContainer>
        <RightContainer>
               <Logo src={LogoImg}></Logo>
        </RightContainer>
        </NavbarInnerContainer>
        {extendNavbar && (
        <NavbarExtendedContainer>
            <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
            <NavbarLinkExtended to="/products"> Products</NavbarLinkExtended>
            <NavbarLinkExtended to="/contact-us"> Contact Us</NavbarLinkExtended>
            <NavbarLinkExtended to="/about-us"> About Us</NavbarLinkExtended>
        </NavbarExtendedContainer>
        )}
    </NavbarContainer>
  )
}

export default Navbar