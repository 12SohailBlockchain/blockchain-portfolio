import React from "react";
import { Button } from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillGithub, AiFillTwitterCircle, AiOutlineArrowRight } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import "./Contact.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { text } from "../../helpers/text";

export type Contact = {
  name: string,
  info: string,
  icon: React.ReactElement,
  url: string,
}

export const contacts: Contact[] = [
  {
    name: "EMAIL:",
    info: "Sohail Ahmed",
    icon: <MdOutlineEmail className="contact-icon" />,
    url: "sohailahmedlaghari21@gmail.com",
  },



  // sohail twiter here
  {
    name: "TWITTER:",
    info: "@Sohail Ahmed",
    icon: <AiFillTwitterCircle className="contact-icon" />,
    url: "https://x.com/Sohail23179667",
  },




  // Sohail telegram here
  {
    name: "TELEGRAM:",
    info: "Sohail Ahmed",
    icon: <BsTelegram className="contact-icon" />,
    url: "",
  },
  {
    name: "DISCORD:",
    info: "Sohailahmed12345",
    icon: <FaDiscord className="contact-icon" />,
    url: "https://discord.gg/2uhc7USEVm",
  },
  {
    name: "GitHub:",
    info: "Sohail Ahmed",
    icon: <AiFillGithub className="contact-icon" />,
    url: "https://github.com/12SohailBlockchain",
  },
  {
    name: "LOCATION & ZONE:",
    info: "Pakistan Standard Time (PST)",
    icon: <IoLocationOutline className="contact-icon" />,
    url: "https://www.timeanddate.com/worldclock/pakistan/islamabad",
  },
];

const Contact = () => {

  const { language } = useLanguage();

  return(
    <div className="bg-contact">
      <div className="contact-header">
        <p className="heading">{text[language].contactHeading}</p>
        {/*<p className="text">If you have any questions or want to hire me, please contact me:</p>*/}
      </div>

      <div className="contact-grid">
        {contacts.map((contact: Contact) => {
          return(
            <a key={uuidv4()} href={contact.url} target="_blank" rel="noreferrer">
              <div className="contact-section">
                {contact.icon}
                <div className="contact-text-div">
                  <p className="contact-title">{contact.name}</p>
                  <p className="contact-details">{contact.info}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <div className="button-container">
        <a href="sohailahmedlaghari21@gmail.com">
          <Button size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid' className="contact-btn">
            {text[language].contactButton}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Contact;