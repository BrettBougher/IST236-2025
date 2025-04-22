// /context/bookmarks-context.ts

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { NewsItem } from '../data/newsData';

interface BookmarksContextProps {
  bookmarkedNews: NewsItem[];
  toggleBookmark: (newsItem: NewsItem) => void;
}

const BookmarksContext = createContext<BookmarksContextProps | undefined>(undefined);

export const useBookmarks = (): BookmarksContextProps => {
  const context = useContext(BookmarksContext);
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarksProvider');
  }
  return context;
};

interface BookmarksProviderProps {
  children: ReactNode;
}

export const BookmarksProvider: React.FC<BookmarksProviderProps> = ({ children }) => {
  const [bookmarkedNews, setBookmarkedNews] = useState<NewsItem[]>([]);

  const toggleBookmark = (newsItem: NewsItem) => {
    setBookmarkedNews((prevBookmarks) => {
      if (prevBookmarks.some((item) => item.id === newsItem.id)) {
        return prevBookmarks.filter((item) => item.id !== newsItem.id);
      }
      return [...prevBookmarks, newsItem];
    });
  };

  return (
    <BookmarksContext.Provider value={{ bookmarkedNews, toggleBookmark }}>
      {children}
    </BookmarksContext.Provider>
  );
};
