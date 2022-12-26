// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Home page documents */
interface HomePageDocumentData {
    /**
     * yelp link field in *Home page*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: home_page.yelp_link
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    yelp_link: prismicT.LinkField;
    /**
     * instagram link field in *Home page*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: home_page.instagram_link
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    instagram_link: prismicT.LinkField;
    /**
     * facebook link field in *Home page*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: home_page.facebook_link
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    facebook_link: prismicT.LinkField;
    /**
     * Slice Zone field in *Home page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: home_page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomePageDocumentDataSlicesSlice>;
    /**
     * CTA Text field in *Home page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_page.cta_text
     * - **Tab**: Navigation
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    cta_text: prismicT.KeyTextField;
    /**
     * Title field in *Home page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_page.title
     * - **Tab**: Navigation
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Footer title field in *Home page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_page.footer_title
     * - **Tab**: Footer
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    footer_title: prismicT.KeyTextField;
    /**
     * Footer subtitle field in *Home page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_page.footer_subtitle
     * - **Tab**: Footer
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    footer_subtitle: prismicT.KeyTextField;
    /**
     * Business hours field in *Home page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_page.business_hours
     * - **Tab**: Footer
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    business_hours: prismicT.KeyTextField;
    /**
     * phone number field in *Home page*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_page.phone_number
     * - **Tab**: Footer
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    phone_number: prismicT.RichTextField;
    /**
     * email field in *Home page*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_page.email
     * - **Tab**: Footer
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    email: prismicT.RichTextField;
    /**
     * Footer text field in *Home page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_page.footer_text
     * - **Tab**: Footer
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    footer_text: prismicT.KeyTextField;
    /**
     * Site title field in *Home page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_page.site_title
     * - **Tab**: SEO
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    site_title: prismicT.KeyTextField;
}
/**
 * Slice for *Home page → Slice Zone*
 *
 */
type HomePageDocumentDataSlicesSlice = IntroSectionSlice | AboutSectionSlice | ServicesSectionSlice | PriceSectionSlice | TestimonialSectionSlice | GallerySectionSlice | ContactSectionSlice;
/**
 * Home page document from Prismic
 *
 * - **API ID**: `home_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomePageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomePageDocumentData>, "home_page", Lang>;
export type AllDocumentTypes = HomePageDocument;
/**
 * Primary content in AboutSection → Primary
 *
 */
interface AboutSectionSliceDefaultPrimary {
    /**
     * subtitle field in *AboutSection → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about_section.primary.subtitle
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    subtitle: prismicT.KeyTextField;
    /**
     * title field in *AboutSection → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about_section.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * about us description field in *AboutSection → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about_section.primary.about_us_description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    about_us_description: prismicT.RichTextField;
    /**
     * about us image field in *AboutSection → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: about_section.primary.about_us_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    about_us_image: prismicT.ImageField<never>;
    /**
     * primary button field in *AboutSection → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about_section.primary.primary_button
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    primary_button: prismicT.KeyTextField;
    /**
     * secondary button field in *AboutSection → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about_section.primary.secondary_button
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    secondary_button: prismicT.KeyTextField;
}
/**
 * Default variation for AboutSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: `AboutSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AboutSectionSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<AboutSectionSliceDefaultPrimary>, never>;
/**
 * Slice variation for *AboutSection*
 *
 */
type AboutSectionSliceVariation = AboutSectionSliceDefault;
/**
 * AboutSection Shared Slice
 *
 * - **API ID**: `about_section`
 * - **Description**: `AboutSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AboutSectionSlice = prismicT.SharedSlice<"about_section", AboutSectionSliceVariation>;
/**
 * Primary content in ContactSection → Primary
 *
 */
interface ContactSectionSliceDefaultPrimary {
    /**
     * Title field in *ContactSection → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: contact_section.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Subtitle field in *ContactSection → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contact_section.primary.subtitle
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    subtitle: prismicT.KeyTextField;
    /**
     * Contact us description field in *ContactSection → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contact_section.primary.contact_us_description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    contact_us_description: prismicT.RichTextField;
    /**
     * Show form field in *ContactSection → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: contact_section.primary.show_form
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    show_form: prismicT.BooleanField;
}
/**
 * Default variation for ContactSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ContactSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactSectionSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ContactSectionSliceDefaultPrimary>, never>;
/**
 * Slice variation for *ContactSection*
 *
 */
type ContactSectionSliceVariation = ContactSectionSliceDefault;
/**
 * ContactSection Shared Slice
 *
 * - **API ID**: `contact_section`
 * - **Description**: `ContactSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactSectionSlice = prismicT.SharedSlice<"contact_section", ContactSectionSliceVariation>;
/**
 * Primary content in GallerySection → Primary
 *
 */
interface GallerySectionSliceDefaultPrimary {
    /**
     * Title field in *GallerySection → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: gallery_section.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Subtitle field in *GallerySection → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: gallery_section.primary.subtitle
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    subtitle: prismicT.KeyTextField;
    /**
     * Instagram text field in *GallerySection → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: gallery_section.primary.instagram_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    instagram_text: prismicT.KeyTextField;
}
/**
 * Item in GallerySection → Items
 *
 */
export interface GallerySectionSliceDefaultItem {
    /**
     * Gallery item field in *GallerySection → Items*
     *
     * - **Field Type**: Link to Media
     * - **Placeholder**: *None*
     * - **API ID Path**: gallery_section.items[].gallery_item
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    gallery_item: prismicT.LinkToMediaField;
}
/**
 * Default variation for GallerySection Slice
 *
 * - **API ID**: `default`
 * - **Description**: `GallerySection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GallerySectionSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<GallerySectionSliceDefaultPrimary>, Simplify<GallerySectionSliceDefaultItem>>;
/**
 * Slice variation for *GallerySection*
 *
 */
type GallerySectionSliceVariation = GallerySectionSliceDefault;
/**
 * GallerySection Shared Slice
 *
 * - **API ID**: `gallery_section`
 * - **Description**: `GallerySection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GallerySectionSlice = prismicT.SharedSlice<"gallery_section", GallerySectionSliceVariation>;
/**
 * Primary content in IntroSection → Primary
 *
 */
interface IntroSectionSliceDefaultPrimary {
    /**
     * Title field in *IntroSection → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: JONNYONTHESPOT
     * - **API ID Path**: intro_section.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Subtitle field in *IntroSection → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: on the spot bartending for wed...
     * - **API ID Path**: intro_section.primary.subtitle
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    subtitle: prismicT.RichTextField;
    /**
     * Primary button field in *IntroSection → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: intro_section.primary.primary_button
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    primary_button: prismicT.KeyTextField;
    /**
     * Secondary button field in *IntroSection → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: intro_section.primary.secondary_button
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    secondary_button: prismicT.KeyTextField;
    /**
     * Video background field in *IntroSection → Primary*
     *
     * - **Field Type**: Link to Media
     * - **Placeholder**: *None*
     * - **API ID Path**: intro_section.primary.video_background
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    video_background: prismicT.LinkToMediaField;
}
/**
 * Item in IntroSection → Items
 *
 */
export interface IntroSectionSliceDefaultItem {
    /**
     * Summarized service field in *IntroSection → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: e.g. Cocktails, parties, weddings
     * - **API ID Path**: intro_section.items[].summarized_service
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    summarized_service: prismicT.RichTextField;
}
/**
 * Default variation for IntroSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: `IntroSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type IntroSectionSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<IntroSectionSliceDefaultPrimary>, Simplify<IntroSectionSliceDefaultItem>>;
/**
 * Slice variation for *IntroSection*
 *
 */
type IntroSectionSliceVariation = IntroSectionSliceDefault;
/**
 * IntroSection Shared Slice
 *
 * - **API ID**: `intro_section`
 * - **Description**: `IntroSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type IntroSectionSlice = prismicT.SharedSlice<"intro_section", IntroSectionSliceVariation>;
/**
 * Primary content in PriceSection → Primary
 *
 */
interface PriceSectionSliceDefaultPrimary {
    /**
     * Title field in *PriceSection → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: price_section.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Subtitle field in *PriceSection → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: price_section.primary.subtitle
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    subtitle: prismicT.KeyTextField;
    /**
     * Background image field in *PriceSection → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: price_section.primary.background_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    background_image: prismicT.ImageField<never>;
    /**
     * Accepted payment method text field in *PriceSection → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: price_section.primary.accepted_payment_method_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    accepted_payment_method_text: prismicT.KeyTextField;
    /**
     * Disclaimer text field in *PriceSection → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: price_section.primary.disclaimer_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    disclaimer_text: prismicT.KeyTextField;
}
/**
 * Item in PriceSection → Items
 *
 */
export interface PriceSectionSliceDefaultItem {
    /**
     * Price Item Image field in *PriceSection → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: price_section.items[].price_item_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    price_item_image: prismicT.ImageField<never>;
    /**
     * Price item title field in *PriceSection → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: price_section.items[].price_item_title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    price_item_title: prismicT.KeyTextField;
    /**
     * Price item description field in *PriceSection → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: price_section.items[].price_item_description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    price_item_description: prismicT.RichTextField;
    /**
     * Price item price field in *PriceSection → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: price_section.items[].price_item_price
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    price_item_price: prismicT.KeyTextField;
}
/**
 * Default variation for PriceSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: `PriceSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PriceSectionSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<PriceSectionSliceDefaultPrimary>, Simplify<PriceSectionSliceDefaultItem>>;
/**
 * Slice variation for *PriceSection*
 *
 */
type PriceSectionSliceVariation = PriceSectionSliceDefault;
/**
 * PriceSection Shared Slice
 *
 * - **API ID**: `price_section`
 * - **Description**: `PriceSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PriceSectionSlice = prismicT.SharedSlice<"price_section", PriceSectionSliceVariation>;
/**
 * Primary content in ServicesSection → Primary
 *
 */
interface ServicesSectionSliceDefaultPrimary {
    /**
     * Title field in *ServicesSection → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: BARTENDING SERVICES TAILOR...
     * - **API ID Path**: services_section.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Subtitle field in *ServicesSection → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: services_section.primary.subtitle
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    subtitle: prismicT.KeyTextField;
    /**
     * Service description field in *ServicesSection → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: services_section.primary.service_description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    service_description: prismicT.RichTextField;
    /**
     * Price button label field in *ServicesSection → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: services_section.primary.price_button_label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    price_button_label: prismicT.KeyTextField;
}
/**
 * Item in ServicesSection → Items
 *
 */
export interface ServicesSectionSliceDefaultItem {
    /**
     * Service card image  field in *ServicesSection → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: services_section.items[].service_card_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    service_card_image: prismicT.ImageField<never>;
    /**
     * Service card title field in *ServicesSection → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: services_section.items[].service_card_title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    service_card_title: prismicT.KeyTextField;
    /**
     * Service card description field in *ServicesSection → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: services_section.items[].service_card_description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    service_card_description: prismicT.RichTextField;
}
/**
 * Default variation for ServicesSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ServicesSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ServicesSectionSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ServicesSectionSliceDefaultPrimary>, Simplify<ServicesSectionSliceDefaultItem>>;
/**
 * Slice variation for *ServicesSection*
 *
 */
type ServicesSectionSliceVariation = ServicesSectionSliceDefault;
/**
 * ServicesSection Shared Slice
 *
 * - **API ID**: `services_section`
 * - **Description**: `ServicesSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ServicesSectionSlice = prismicT.SharedSlice<"services_section", ServicesSectionSliceVariation>;
/**
 * Primary content in TestimonialSection → Primary
 *
 */
interface TestimonialSectionSliceDefaultPrimary {
    /**
     * Title field in *TestimonialSection → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: testimonial_section.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Subtitle field in *TestimonialSection → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: testimonial_section.primary.subtitle
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    subtitle: prismicT.KeyTextField;
}
/**
 * Item in TestimonialSection → Items
 *
 */
export interface TestimonialSectionSliceDefaultItem {
    /**
     * Testimonial image field in *TestimonialSection → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: testimonial_section.items[].testimonial_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    testimonial_image: prismicT.ImageField<never>;
    /**
     * Testimonial description field in *TestimonialSection → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: testimonial_section.items[].testimonial_description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    testimonial_description: prismicT.RichTextField;
    /**
     * Testimonial one liner field in *TestimonialSection → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: testimonial_section.items[].testimonial_one_liner
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    testimonial_one_liner: prismicT.KeyTextField;
    /**
     * Testimonial author  field in *TestimonialSection → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: testimonial_section.items[].testimonial_author
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    testimonial_author: prismicT.KeyTextField;
}
/**
 * Default variation for TestimonialSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TestimonialSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TestimonialSectionSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TestimonialSectionSliceDefaultPrimary>, Simplify<TestimonialSectionSliceDefaultItem>>;
/**
 * Slice variation for *TestimonialSection*
 *
 */
type TestimonialSectionSliceVariation = TestimonialSectionSliceDefault;
/**
 * TestimonialSection Shared Slice
 *
 * - **API ID**: `testimonial_section`
 * - **Description**: `TestimonialSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TestimonialSectionSlice = prismicT.SharedSlice<"testimonial_section", TestimonialSectionSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomePageDocumentData, HomePageDocumentDataSlicesSlice, HomePageDocument, AllDocumentTypes, AboutSectionSliceDefaultPrimary, AboutSectionSliceDefault, AboutSectionSliceVariation, AboutSectionSlice, ContactSectionSliceDefaultPrimary, ContactSectionSliceDefault, ContactSectionSliceVariation, ContactSectionSlice, GallerySectionSliceDefaultPrimary, GallerySectionSliceDefaultItem, GallerySectionSliceDefault, GallerySectionSliceVariation, GallerySectionSlice, IntroSectionSliceDefaultPrimary, IntroSectionSliceDefaultItem, IntroSectionSliceDefault, IntroSectionSliceVariation, IntroSectionSlice, PriceSectionSliceDefaultPrimary, PriceSectionSliceDefaultItem, PriceSectionSliceDefault, PriceSectionSliceVariation, PriceSectionSlice, ServicesSectionSliceDefaultPrimary, ServicesSectionSliceDefaultItem, ServicesSectionSliceDefault, ServicesSectionSliceVariation, ServicesSectionSlice, TestimonialSectionSliceDefaultPrimary, TestimonialSectionSliceDefaultItem, TestimonialSectionSliceDefault, TestimonialSectionSliceVariation, TestimonialSectionSlice };
    }
}
