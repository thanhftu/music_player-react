import React, { useEffect, useState } from "react";
import apiClient from "../../spotify";
import WidgetCard from "./widget/WidgetCard";

function Widgets({ artistId }: { artistId?: string }) {
  const [similar, setSimilar] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [newRelease, setNewRelease] = useState([]);
  console.log(similar);

  useEffect(() => {
    if (artistId) {
      apiClient
        .get(`/artists/${artistId}/related-artists`)
        .then((res) => {
          const a = res.data.artists.slice(0, 3);
          setSimilar(a);
        })
        .catch((error) => console.log(error));
      apiClient
        .get(`/browse/featured-playlists`)
        .then((res) => {
          const a = res.data?.playlists.items.slice(0, 3);
          setFeatured(a);
        })
        .catch((err) => console.error(err));

      apiClient
        .get(`/browse/new-releases`)
        .then((res) => {
          const a = res.data?.albums.items.slice(0, 3);
          setNewRelease(a);
        })
        .catch((err) => console.error(err));
    }
  }, [artistId]);

  return (
    <div className="w-[100%] h-[50%] mt-2 mb-3 mx-auto px-5 bg-[#1e2a3e] rounded-md flex flex-row items-center justify-between">
      <WidgetCard title="Similar Artist" similar={similar} />
      <WidgetCard title="Made For You" featured={featured} />
      <WidgetCard title="New Releases" newRelease={newRelease} />
    </div>
  );
}

export default Widgets;
