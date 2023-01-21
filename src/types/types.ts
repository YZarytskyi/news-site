export interface Article {
  id: 0;
  featured: false;
  title: 'string';
  url: 'string';
  imageUrl: 'string';
  newsSite: 'string';
  summary: 'string';
  publishedAt: 'string';
  launches: [
    {
      id: 'string';
      provider: 'string';
    }
  ];
  events: [
    {
      id: 'string';
      provider: 'string';
    }
  ];
}

export interface ArticlesData {
  count: number;
  articles: Article[];
}

export interface FetchArticlesReturnType {
  query: string;
  page: number;
}
