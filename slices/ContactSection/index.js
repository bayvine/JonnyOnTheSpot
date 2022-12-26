import React from "react"
import ContactSectionTemplate from "../../sections/ContactSection"
/**
 * @typedef {import("@prismicio/client").Content.ContactSectionSlice} ContactSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactSectionSlice>} ContactSectionProps
 * @param { ContactSectionProps }
 */
const ContactSection = ({ slice }) => <ContactSectionTemplate slice={slice} />

export default ContactSection
