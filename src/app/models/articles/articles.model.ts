
interface IAuthor {
  username: string;
  bio: null;
  image: string;
  following: boolean;
}

interface IArticles {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: Array<any>;
  description: string;
  author: IAuthor;
  favorited: boolean;
  favoritesCount: number;
}
