import {IPhoto, PhotoID} from '../types';

const BASE_URL = 'https://picsum.photos';

export function formatPhotoUri(id: string, width: number, height: number) {
  return `${BASE_URL}/id/${id}/${width}/${height}`;
}

export function generatePhotosIDs(page = 1, limit = 20): PhotoID[] {
  let out = Array.from(Array(limit), (_, i) => {
    return {id: '' + (limit * (page - 1) + i)};
  });
  return out;
}

export async function getPhotosList(page = 1, limit = 20) {
  const response = await fetch(
    `${BASE_URL}/v2/list?page=${page}&limit=${limit}`,
  );
  const photos = await response.json();
  return photos as IPhoto[];
}
