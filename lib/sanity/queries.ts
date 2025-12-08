import { sanityClient } from "@/lib/sanity/client";

const REVALIDATE_TIME =
  process.env.NODE_ENV === "production"
    ? Number(process.env.REVALIDATE_TIME) || 3600
    : 0;

export async function getSettingsData(): Promise<SettingsType | null> {
  const query = `*[_type == "settings"][0]{
    location,
    phones,
    emails,
    twitter,
    linkedin,
    tiktok,
    instagram,
    snapchat,
    whatsapp,
    facebook,
    youtube
  }`;

  try {
    return await sanityClient.fetch(
      query,
      {},
      {
        next: {
          revalidate: REVALIDATE_TIME,
          tags: ["settings", "content"],
        },
      }
    );
  } catch (error) {
    console.error("Error fetching settings data:", error);
    return null;
  }
}

export async function getHeroData(): Promise<HeroType | null> {
  const query = `*[_type == "main"][0]{
    button {
      prefix,
      action,
      suffix,
      link
    },
    heading {
      firstWord,
      rotatingWords,
      lastWord,
      highlightedWord {
        text
      }
    },
    description,
    ctaButton {
      text,
      link
    }
  }`;

  try {
    return await sanityClient.fetch(
      query,
      {},
      {
        next: {
          revalidate: REVALIDATE_TIME,
          tags: ["main", "content"],
        },
      }
    );
  } catch (error) {
    console.error("Error fetching hero data:", error);
    return null;
  }
}

export async function getPartnersData(): Promise<PartnersType | null> {
  const query = `*[_type == "partners"][0]{
    title,
    logos[] {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      }
    }
  }`;

  try {
    return await sanityClient.fetch(
      query,
      {},
      {
        next: {
          revalidate: REVALIDATE_TIME,
          tags: ["partners", "content"],
        },
      }
    );
  } catch (error) {
    console.error("Error fetching partners data:", error);
    return null;
  }
}

export async function getServicesData(): Promise<ServicesType | null> {
  const query = `*[_type == "services"][0]{
    title,
    serviceCategories[] {
      categoryTitle,
      services[] {
        title,
        description,
        icon {
          asset-> {
            _id,
            url,
            metadata {
              dimensions
            }
          }
        },
        items
      }
    }
  }`;

  try {
    return await sanityClient.fetch(
      query,
      {},
      {
        next: {
          revalidate: REVALIDATE_TIME,
          tags: ["services", "content"],
        },
      }
    );
  } catch (error) {
    console.error("Error fetching services data:", error);
    return null;
  }
}

export async function getAboutData(): Promise<AboutUsType | null> {
  const query = `*[_type == "aboutUs"][0]{
    title,
    heroImage {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    heading,
    subheading,
    content,
    leftTopStat {
      value,
      label
    },
    leftBottomStat {
      value,
      label
    },
    rightTopStat {
      value,
      label
    },
    rightBottomStat {
      value,
      label
    },
    certificateTitle,
    certificateDescription,
    certificateImages[] {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      }
    }
  }`;

  try {
    return await sanityClient.fetch(
      query,
      {},
      {
        next: {
          revalidate: REVALIDATE_TIME,
          tags: ["aboutUs", "content"],
        },
      }
    );
  } catch (error) {
    console.error("Error fetching about data:", error);
    return null;
  }
}

export async function getClientsData(): Promise<ClientsType | null> {
  const query = `*[_type == "clients"][0]{
    logos[] {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      }
    }
  }`;

  try {
    return await sanityClient.fetch(
      query,
      {},
      {
        next: {
          revalidate: REVALIDATE_TIME,
          tags: ["clients", "content"],
        },
      }
    );
  } catch (error) {
    console.error("Error fetching clients data:", error);
    return null;
  }
}

export async function getBlogPosts(): Promise<BlogPost[] | null> {
  const query = `*[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "author": author->{name, image, bio},
    "categories": categories[]->{title, description}
  }`;

  try {
    return await sanityClient.fetch(
      query,
      {},
      {
        next: { revalidate: REVALIDATE_TIME, tags: ["blog", "content"] },
      }
    );
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body,
    "author": author->{name, image, bio},
    "categories": categories[]->{title, description}
  }`;

  try {
    return await sanityClient.fetch(
      query,
      { slug },
      {
        next: {
          revalidate: REVALIDATE_TIME,
          tags: [`blog-post-${slug}`, "content"],
        },
      }
    );
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export async function getCareersData(): Promise<CareersType | null> {
  const query = `*[_type == "careers"][0]{
    title,
    description,
    jobCards[] {
      _key,
      title,
      description,
      image {
        asset-> {
          _id,
          url,
          metadata {
            dimensions
          }
        }
      },
      url
    }
  }`;

  try {
    return await sanityClient.fetch(
      query,
      {},
      {
        next: {
          revalidate: REVALIDATE_TIME,
          tags: ["careers", "content"],
        },
      }
    );
  } catch (error) {
    console.error("Error fetching careers data:", error);
    return null;
  }
}

export async function getTestimonialsData(): Promise<TestimonialsType | null> {
  const query = `*[_type == "testimonials"][0]{
    testimonials[] {
      _key,
      name,
      content
    }
  }`;

  try {
    return await sanityClient.fetch(
      query,
      {},
      {
        next: {
          revalidate: REVALIDATE_TIME,
          tags: ["testimonials", "content"],
        },
      }
    );
  } catch (error) {
    console.error("Error fetching testimonials data:", error);
    return null;
  }
}
