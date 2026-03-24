import React from "react";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

export default function ContactMe() {
  const [contactObj, setContactObj] = useState({
    name: "",
    email: "",
    message: "",
  });
  
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
        <Input id="name" label="Name" placeholder="Your Name" value={contactObj.name} onChange={(e) => setContactObj({...contactObj, name: e.target.value})} />

        <Input id="email" label="Email" placeholder="Your Email" value={contactObj.email} onChange={(e) => setContactObj({...contactObj, email: e.target.value})} />

        <TextArea id="message" label="Message" placeholder="Your Message" value={contactObj.message} onChange={(e) => setContactObj({...contactObj, message: e.target.value})} />
        
        <PrimaryButton width="w-full" text="Send Message" />
      </div>
    </React.Fragment>
  );
}
