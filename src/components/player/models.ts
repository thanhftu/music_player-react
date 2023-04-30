export interface Track {
  id: string;
  href: string;
  duration_ms: number;
  preview_url?: string;
  name: string;
  album: Album;
}

export interface Album {
  album_group: string;
  album_type: string;
  name: string;
  artists: Artist[];
  total_tracks: number;
  release_date: string;
  images: { height: number; url: string; width: number }[];
}

export interface PlayerList {
  track: Track;
  added_at: string;
  primary_color: string | null;
}

export interface Artist {
  name: string;
  id: string;
  uri: string;
  followers: { total: number };
  images: { height: number; width: number; url: string }[];
}

export interface Playlist {
  name: string;
  tracks: { href: string; total: number };
  type: string;
  id: string;
  description: string;
  uri: string;
  images: { height: number; width: number; url: string }[];
}
