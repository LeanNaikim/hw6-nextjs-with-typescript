
import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
  } from 'flowbite-react';
  import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
  
  export default function FooterComponent() {
    return (
      <Footer container className="bg-blue-700">
        <div className="w-full">
          <div className="w-full flex justify-between sm:flex sm:items-center sm:justify-between">
            <div>
              <FooterBrand className="w-[200px]"
                href="https://flowbite.com"
                src="/logo.png"
                alt="Flowbite Logo"
                // name="Start your IT career with CSTAD"
              />
              <FooterTitle className="text-white mt-4 tracking-wider" title="Start your IT career with CSTAD" />
            </div>  
              <div>
                <FooterTitle className="text-white tracking-wider" title="learn more" />
                <FooterLinkGroup col>
                  <FooterLink className="text-white tracking-wider" href="/course">Course</FooterLink>
                  <FooterLink className="text-white tracking-wider" href="/itnew">IT News</FooterLink>
                  <FooterLink className="text-white tracking-wider" href="jobopportunity">Job Opportuniry</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle className="text-white tracking-wider" title="Contact Us" />
                <FooterLinkGroup col>
                  <FooterLink className="text-white tracking-wider" href="#">(+885) 95-990-910</FooterLink>
                  <FooterLink className="text-white tracking-wider" href="#">(+885) 93-990-910</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle className="text-white tracking-wider" title="Follow Us" />
                <FooterBrand className=""
                href="https://istad.co/"
                src="/footer-img.jpg"
                alt="Flowbite Logo"
              />
              </div>
          </div>
          <FooterDivider/>
          <div className="w-full text-center sm:flex sm:items-center justify-center">
            <FooterCopyright className="text-white tracking-wider" href="#" by="Center of Science and Technology Advanced Development | All Rights Reserved" year={2022} />
          </div>
        </div>
      </Footer>
    );
  }
  