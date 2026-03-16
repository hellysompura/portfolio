import React from "react";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import PrimaryButton from "../components/PrimaryButton";

export default function ContactMe() {
  return (
    <React.Fragment>
      <div id="contact">
        <h1 className="lg:text-[90px] text-[60px] font-bold uppercase tracking-wider leading-none">
          let's
        </h1>
        <h1 className="lg:text-[90px] text-[60px] text-(--gray-20) font-bold uppercase tracking-wider leading-none">
          connect
        </h1>
      </div>

      <div>
        <Input id="name" label="Name" placeholder="Your Name" />

        <Input id="email" label="Email" placeholder="Your Email" />

        <TextArea id="message" label="Message" placeholder="Your Message" />
        
        <PrimaryButton width="w-full" text="Send Message" />
      </div>
    </React.Fragment>
  );
}
