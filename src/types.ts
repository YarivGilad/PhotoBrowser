export type PhotoID = {
  id: string;
};

export interface IPhoto {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export interface IPhotoStore {
  loading: boolean;
  error: boolean;
  photos: IPhoto[];
  nextPage: number;
}
