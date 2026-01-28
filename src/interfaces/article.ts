export default interface Article {
    id: number;
    attributes: {
      title: string;
      excerpt: string;
      content: string;
      slug: string;
      category: string;
      readTime: string;
      published: boolean;
      date: string;
      cover?: {
        data?: {
          attributes: {
            url: string;
            alternativeText: string;
          };
        };
      };
      tags?: string[];
    };
  }
