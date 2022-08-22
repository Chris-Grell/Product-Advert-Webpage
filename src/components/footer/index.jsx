import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLink, FooterLinkItems, FooterLinkTitle, FooterLinksWrapper, SocialMediaWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, WebsiteRights } from './footerElements'

const Footer = () => {

    const toggleHome = () => {

        scroll.scrollToTop();

    }

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink>Facebook</FooterLink>
                        <FooterLink>Instagram</FooterLink>
                        <FooterLink>Twitter</FooterLink>
                        <FooterLink>Linkedin</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Careers</FooterLinkTitle>
                        <FooterLink>Montreal, QC</FooterLink>
                        <FooterLink>Toronto, ON</FooterLink>
                        <FooterLink>St-Johns, NL</FooterLink>
                        <FooterLink>Alberta, BC</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Business</FooterLinkTitle>
                        <FooterLink>Inquiries</FooterLink>
                        <FooterLink>Sponsorships</FooterLink>
                        <FooterLink>Partners</FooterLink>
                        <FooterLink>Merchandise</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink>Email</FooterLink>
                        <FooterLink>Phone</FooterLink>
                        <FooterLink>Address</FooterLink>
                        <FooterLink>Twitter Support</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo onClick={toggleHome}>
                        Razer
                    </SocialLogo>
                    <WebsiteRights>Razer C {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                        
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                        
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
                        
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink>
                        
                        <SocialIconLink href="/" target="_blank" aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
                        
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer