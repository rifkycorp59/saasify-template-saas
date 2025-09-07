import qs from "qs";

if (!process.env.API_URL) {
  throw new Error("API_URL environment variable is not defined");
}

export const apiUrl = process.env.API_URL;

interface FetchOptions {
  cache?: RequestCache;
  next?: {
    tags?: string[];
  };
}

async function fetchWithError(url: string, options: FetchOptions = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

// Get Data Navbar
export async function GetDataNavbar() {
  try {
    const query = qs.stringify({
      fields: ["name_saas", "link_sign_in", "link_sign_up"],
      populate: {
        logo: {
          fields: ["name", "url"],
        },
        menu: {
          fields: ["name", "link"],
        },
      },
    });

    const data = await fetchWithError(`${apiUrl}/navbar?${query}`);

    return data.data;
  } catch (error) {
    console.error("Error fetching Data Navbar:", error);
    throw error;
  }
}

// Fetch data Footer
export async function GetDataFooter() {
  try {
    const query = qs.stringify({
      fields: ["name_saas", "description_saas"],
      populate: {
        logo: {
          fields: ["name", "url"],
        },
        products: {
          fields: ["name", "link"],
        },
        company: {
          fields: ["name", "link"],
        },
        media_social: {
          fields: ["link"],
          populate: {
            logo: {
              fields: ["name", "url"],
            },
          },
        },
        legal_link: {
          fields: ["name", "link"],
        },
      },
    });

    const data = await fetchWithError(`${apiUrl}/footer?${query}`);

    return data.data;
  } catch (error) {
    console.error("Error fetching Data Footer:", error);
    throw error;
  }
}

// Get Data Features
export async function GetDataFeatures() {
  try {
    const query = qs.stringify({
      fields: ["title", "description"],
      populate: {
        logo: {
          fields: ["name", "url"],
        },
      },
    });

    const data = await fetchWithError(`${apiUrl}/features?${query}`);

    return data.data;
  } catch (error) {
    console.error("Error fetching Data Features:", error);
    throw error;
  }
}

// Get Data Hero
export async function GetDataHero() {
  try {
    const query = qs.stringify({
      fields: [
        "title",
        "description",
        "link_get_started",
        "link_demo",
        "rate_number",
        "user_number",
      ],
      populate: {
        image: {
          fields: ["name", "url"],
        },
        advantages: {
          fields: ["advantage"],
        },
      },
    });

    const data = await fetchWithError(`${apiUrl}/hero?${query}`);

    return data.data;
  } catch (error) {
    console.error("Error fetching Data Hero:", error);
    throw error;
  }
}

// Get Data FAQ
export async function GetDataFAQ() {
  try {
    const data = await fetchWithError(`${apiUrl}/faqs`);

    return data.data;
  } catch (error) {
    console.error("Error fetching Data FAQ:", error);
    throw error;
  }
}

// Get Data Testimonials
export async function GetDataTestimonials() {
  try {
    const query = qs.stringify({
      fields: ["rating", "name", "title", "testimoni"],
      populate: {
        image: {
          fields: ["name", "url"],
        },
      },
    });

    const data = await fetchWithError(`${apiUrl}/testimonials?${query}`);

    return data.data;
  } catch (error) {
    console.error("Error fetching Data Testimonial:", error);
    throw error;
  }
}

// Get Data Service
export async function GetDataServices() {
  try {
    const query = qs.stringify({
      fields: [
        "price",
        "price_suffix",
        "title",
        "description",
        "link_button",
        "isPopular",
        "isStartFree",
      ],
      populate: {
        benefits: {
          fields: ["text"],
        },
      },
    });

    const data = await fetchWithError(`${apiUrl}/services?${query}`);

    return data.data;
  } catch (error) {
    console.error("Error fetching Data Services:", error);
    throw error;
  }
}

// Get Data CTA
export async function GetDataCTA() {
  try {
    const query = qs.stringify({
      fields: ["title", "description"],
      populate: {
        advantages: {
          fields: ["highlight", "advantage"],
        },
      },
    });

    const data = await fetchWithError(`${apiUrl}/cta?${query}`);

    return data.data;
  } catch (error) {
    console.error("Error fetching Data CTA:", error);
    throw error;
  }
}

// Get Data Hero Section
export async function GetDataHeroSection() {
  try {
    const query = qs.stringify({
      fields: ["name", "title", "description"],
      populate: {
        logo: {
          fields: ["name", "url"],
        },
      },
    });

    const data = await fetchWithError(`${apiUrl}/hero-sections?${query}`);

    return data.data;
  } catch (error) {
    console.error("Error fetching Data Hero Section:", error);
    throw error;
  }
}

// Get data GLobal
export async function GetDataGLobal() {
  try {
    const query = qs.stringify({
      populate: {
        openGraph: {
          fields: ["title", "description"],
          populate: {
            image: {
              fields: ["name", "url"],
            },
          },
        },
        twitter: {
          fields: ["title", "description", "creator"],
          populate: {
            image: {
              fields: ["name", "url"],
            },
          },
        },
        robots: {
          fields: ["index", "follow"],
        },
      },
    });

    const res = await fetch(`${apiUrl}/global?${query}`);
    const data = await res.json();

    return data.data;
  } catch (err) {
    console.error("Failed Fetching Data Global: ", err);
  }
}
