// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BlogpostDocumentDataSlicesSlice = BlogIndexSlice | TextBlockSlice;

/**
 * Content for BlogPost documents
 */
interface BlogpostDocumentData {
  /**
   * Name field in *BlogPost*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Created at field in *BlogPost*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.created_at
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  created_at: prismic.DateField;

  /**
   * Slice Zone field in *BlogPost*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogpostDocumentDataSlicesSlice> /**
   * Meta Title field in *BlogPost*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blogpost.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *BlogPost*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blogpost.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *BlogPost*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * BlogPost document from Prismic
 *
 * - **API ID**: `blogpost`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogpostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BlogpostDocumentData>,
    "blogpost",
    Lang
  >;

type CoreteammemberDocumentDataSlicesSlice = LeftImageSliceSlice;

/**
 * Content for CoreTeamMember documents
 */
interface CoreteammemberDocumentData {
  /**
   * Name field in *CoreTeamMember*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: coreteammember.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Designation field in *CoreTeamMember*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: coreteammember.designation
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  designation: prismic.KeyTextField;

  /**
   * LinkedinLink field in *CoreTeamMember*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: coreteammember.linkedinlink
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  linkedinlink: prismic.LinkField;

  /**
   * MemberImage field in *CoreTeamMember*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: coreteammember.memberimage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  memberimage: prismic.ImageField<never>;

  /**
   * Slice Zone field in *CoreTeamMember*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: coreteammember.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<CoreteammemberDocumentDataSlicesSlice> /**
   * Meta Title field in *CoreTeamMember*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: coreteammember.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *CoreTeamMember*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: coreteammember.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *CoreTeamMember*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: coreteammember.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * CoreTeamMember document from Prismic
 *
 * - **API ID**: `coreteammember`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CoreteammemberDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CoreteammemberDocumentData>,
    "coreteammember",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | ContactFormSectionSlice
  | CoreTeamIndexSlice
  | BlogIndexSlice
  | TextBlockSlice
  | HeroSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes =
  | BlogpostDocument
  | CoreteammemberDocument
  | PageDocument;

/**
 * Primary content in *BlogIndex → Primary*
 */
export interface BlogIndexSliceDefaultPrimary {
  /**
   * Heading field in *BlogIndex → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_index.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Tagline field in *BlogIndex → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_index.primary.tagline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tagline: prismic.KeyTextField;
}

/**
 * Default variation for BlogIndex Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogIndexSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BlogIndexSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *BlogIndex*
 */
type BlogIndexSliceVariation = BlogIndexSliceDefault;

/**
 * BlogIndex Shared Slice
 *
 * - **API ID**: `blog_index`
 * - **Description**: BlogIndex
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogIndexSlice = prismic.SharedSlice<
  "blog_index",
  BlogIndexSliceVariation
>;

/**
 * Default variation for ContactFormSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactFormSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *ContactFormSection*
 */
type ContactFormSectionSliceVariation = ContactFormSectionSliceDefault;

/**
 * ContactFormSection Shared Slice
 *
 * - **API ID**: `contact_form_section`
 * - **Description**: ContactFormSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactFormSectionSlice = prismic.SharedSlice<
  "contact_form_section",
  ContactFormSectionSliceVariation
>;

/**
 * Default variation for CoreTeamIndex Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CoreTeamIndexSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *CoreTeamIndex*
 */
type CoreTeamIndexSliceVariation = CoreTeamIndexSliceDefault;

/**
 * CoreTeamIndex Shared Slice
 *
 * - **API ID**: `core_team_index`
 * - **Description**: CoreTeamIndex
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CoreTeamIndexSlice = prismic.SharedSlice<
  "core_team_index",
  CoreTeamIndexSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Background Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Heading field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Tagline field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.tagline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tagline: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *LeftImageSlice → Primary*
 */
export interface LeftImageSliceSliceDefaultPrimary {
  /**
   * ImageLeft field in *LeftImageSlice → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: left_image_slice.primary.imageleft
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  imageleft: prismic.BooleanField;

  /**
   * Content field in *LeftImageSlice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: left_image_slice.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Image field in *LeftImageSlice → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: left_image_slice.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for LeftImageSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LeftImageSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<LeftImageSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *LeftImageSlice*
 */
type LeftImageSliceSliceVariation = LeftImageSliceSliceDefault;

/**
 * LeftImageSlice Shared Slice
 *
 * - **API ID**: `left_image_slice`
 * - **Description**: LeftImageSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LeftImageSliceSlice = prismic.SharedSlice<
  "left_image_slice",
  LeftImageSliceSliceVariation
>;

/**
 * Primary content in *TextBlock → Primary*
 */
export interface TextBlockSliceDefaultPrimary {
  /**
   * Content field in *TextBlock → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for TextBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextBlockSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TextBlock*
 */
type TextBlockSliceVariation = TextBlockSliceDefault;

/**
 * TextBlock Shared Slice
 *
 * - **API ID**: `text_block`
 * - **Description**: TextBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSlice = prismic.SharedSlice<
  "text_block",
  TextBlockSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogpostDocument,
      BlogpostDocumentData,
      BlogpostDocumentDataSlicesSlice,
      CoreteammemberDocument,
      CoreteammemberDocumentData,
      CoreteammemberDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      BlogIndexSlice,
      BlogIndexSliceDefaultPrimary,
      BlogIndexSliceVariation,
      BlogIndexSliceDefault,
      ContactFormSectionSlice,
      ContactFormSectionSliceVariation,
      ContactFormSectionSliceDefault,
      CoreTeamIndexSlice,
      CoreTeamIndexSliceVariation,
      CoreTeamIndexSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      LeftImageSliceSlice,
      LeftImageSliceSliceDefaultPrimary,
      LeftImageSliceSliceVariation,
      LeftImageSliceSliceDefault,
      TextBlockSlice,
      TextBlockSliceDefaultPrimary,
      TextBlockSliceVariation,
      TextBlockSliceDefault,
    };
  }
}
