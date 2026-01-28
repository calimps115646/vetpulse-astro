interface Props {
    endpoint: string;
    query?: Record<string, string>;
    wrappedByKey?: string;
    wrappedByList?: boolean;
  }
  
  /**
   * Fetches data from the Strapi API
   * @param endpoint - The endpoint to fetch from
   * @param query - The query parameters to add to the url
   * @param wrappedByKey - The key to unwrap the response from
   * @param wrappedByList - If the response is a list, unwrap it
   * @returns Promise with typed data
   */
  export default async function fetchApi<T>({
    endpoint,
    query,
    wrappedByKey,
    wrappedByList,
  }: Props): Promise<T> {
    if (endpoint.startsWith('/')) {
      endpoint = endpoint.slice(1);
    }
  
    const url = new URL(`${import.meta.env.STRAPI_URL}/api/${endpoint}`);
  
    if (query) {
      Object.entries(query).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }
  
    const res = await fetch(url.toString());
    
    if (!res.ok) {
      throw new Error(`Failed to fetch from Strapi: ${res.statusText}`);
    }
  
    let data = await res.json();
  
    if (wrappedByKey) {
      data = data[wrappedByKey];
    }
  
    if (wrappedByList) {
      data = data[0];
    }
  
    return data as T;
  }
  
  /**
   * Helper function to get full image URL from Strapi
   * @param url - The image URL from Strapi (can be relative or absolute)
   * @returns Full image URL
   */
  export function getStrapiMedia(url: string | null | undefined): string {
    if (!url) return '';
    
    // If URL is already absolute, return as-is
    if (url.startsWith('http') || url.startsWith('//')) {
      return url;
    }
    
    // Otherwise, prepend Strapi URL
    return `${import.meta.env.STRAPI_URL}${url}`;
  }
  
  /**
   * Fetch single post by slug
   */
  export async function getPostBySlug(slug: string) {
    try {
      const response = await fetch(
        `${import.meta.env.STRAPI_URL}/api/posts?filters[slug][$eq]=${slug}&populate=*`
      );
  
      if (!response.ok) {
        throw new Error('Post not found');
      }
  
      const { data }: StrapiResponse<any[]> = await response.json();
  
      if (!data || data.length === 0) {
        return null;
      }
  
      const post = data[0];
  
      return {
        id: post.id,
        title: post.title,
        slug: post.slug,
        date: post.date,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        readTime: post.readTime,
        cover: post.cover ? getStrapiMedia(post.cover.url) : null,
        coverAlt: post.cover?.alternativeText || post.title,
        tags: post.tags || [],
        published: post.published,
        featured: post.featured,
      };
    } catch (error) {
      console.error('Error fetching post:', error);
      return null;
    }
  }
  
  interface StrapiResponse<T> {
    data: T;
    meta?: any;
  }
  