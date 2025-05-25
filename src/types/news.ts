interface News {
  id: string;
  title: string;
  content: string;
  created: string;
}

export interface NewsResponseDto extends News {
  author_id: string;
}

export interface NewsWithAuthor extends News {
  author: string;
}
