export type URL = {
  _id: string;
  longUrl: string;
  shortUrl: string;
  shortenId: string;
  created_date: Date;
  expiry_date: Date;
};

export interface UrlState {
  allUrl: URL[];
  loadingList: boolean;
  addingUrl: boolean;
  tempUrlInfo: URL | null;
  addUrlError: string | null;
  deletingUrl: boolean;
  deleteUrlError: string | null;
}
