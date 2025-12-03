import { sanityClient } from "@/lib/sanity/client";

const REVALIDATE_TIME =
  process.env.NODE_ENV === "production"
    ? Number(process.env.REVALIDATE_TIME) || 3600
    : 0;

export async function getHeroData(): Promise<HeroType | null> {
  const query = `*[_type == "main"][0]{
    button {
      prefix,
      action,
      suffix,
      link
    },
    heading {
      firstLine,
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
          tags: ["main"],
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
          tags: ["partners"],
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
          tags: ["services"],
        },
      }
    );
  } catch (error) {
    console.error("Error fetching services data:", error);
    return null;
  }
}

export async function getSettingsData(): Promise<SettingsType | null> {
  const query = `*[_type == "settings"][0]{
    email,
    phone, 
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
          tags: ["settings"],
        },
      }
    );
  } catch (error) {
    console.error("Error fetching settings data:", error);
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
    }
  }`;

  try {
    return await sanityClient.fetch(
      query,
      {},
      {
        next: {
          revalidate: REVALIDATE_TIME,
          tags: ["aboutUs"],
        },
      }
    );
  } catch (error) {
    console.error("Error fetching about data:", error);
    return null;
  }
}
