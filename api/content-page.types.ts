export type MetaObject = {
    "title": string,
    "description": string;
    "image": string;
}

export enum SectionType {
  hero = "hero",
  socialProof = "social-proof",
  testimonials = "testimonials"
}

export type ImageObject = {
    src: string;
    width: number;
    height: number;
}

export type CompanyObject = {
  name: string;
  logo: string;
}

export type TestimonialObject = {
  title: string;
  text: string;
  userName: string;
  userRole: string;
  userCompany: string;
  userImage: ImageObject;
}

export type SectionObject = {
    sectionType: string,
    theme: string;
    title: string;
    subtitle?: string;
    image?: ImageObject;
    companies?: CompanyObject[];
    testimonials?: TestimonialObject[];
}

export type ContentPage = {
    meta: MetaObject; 
    sections: SectionObject;
}