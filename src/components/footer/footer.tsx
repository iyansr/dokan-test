import React from "react";
import { LogoBrandSmall } from "../svgs/logo-brand-small";
import { IconFacebook } from "../svgs/icon-facebook";
import { IconTwitter } from "../svgs/icon-twitter";
import { IconInstagram } from "../svgs/icon-instagram";
import { IconLinkedin } from "../svgs/icon-linkedin";
import { IconEnvelope } from "../svgs/icon-envelope";
import { IconPhone } from "../svgs/icon-phone";
import { IconMapArea } from "../svgs/icon-map-area";

export function Footer() {
  return (
    <footer className="bg-app-bg-dark font-plus-jakarta-sans">
      <div className="w-full mx-auto p-10 md:p-20">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <LogoBrandSmall />
            <p className="text-app-gray text-sm font-medium mt-4">Dokan Front End Test</p>
            <div className="flex items-center gap-2 mt-7">
              <SocialIcon icon={IconFacebook} />
              <SocialIcon icon={IconTwitter} />
              <SocialIcon icon={IconInstagram} />
              <SocialIcon icon={IconLinkedin} />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-white">
            <div className="space-y-3 text-lg md:text-xl">
              <p>Home</p>
              <p>Features</p>
              <p>Pricing</p>
            </div>
            <div className="space-y-3 text-lg md:text-xl">
              <p>About Us</p>
              <p>Integrations</p>
              <p>FAQs</p>
            </div>
            <div className="space-y-3 text-lg md:text-xl">
              <p>Blog</p>
              <p>Contact Us</p>
              <p>Terms & Policies</p>
            </div>
            <div className="space-y-3 text-lg md:text-xl">
              <p>Our Contact</p>
              <div className="flex items-center gap-2 text-app-input-placeholder text-base md:text-lg">
                <IconEnvelope />
                <p>dokan@test.sa</p>
              </div>
              <div className="flex items-center gap-2 text-app-input-placeholder text-base md:text-lg">
                <IconPhone />
                <p>+999-234-324</p>
              </div>
              <div className="flex items-center gap-2 text-app-input-placeholder text-base md:text-lg">
                <IconMapArea />
                <p>Saudi Arabia, Jeddah</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-16 md:mt-40 text-app-gray text-center md:text-left">
          <p className="font-medium">© {new Date().getFullYear()} Dokan Inc. All rights reserved.</p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-11 text-sm font-medium">
            <p>Privacy Policy</p>
            <p>GDPR</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <div className="size-9 flex items-center justify-center">
      <Icon />
    </div>
  );
}
