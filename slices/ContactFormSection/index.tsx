import ContactUsForm from "@/components/ContactUsForm";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContactFormSection`.
 */
export type ContactFormSectionProps =
  SliceComponentProps<Content.ContactFormSectionSlice>;

/**
 * Component for "ContactFormSection" Slices.
 */
const ContactFormSection = ({
  slice,
}: ContactFormSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        <h2>Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <ContactUsForm />
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
