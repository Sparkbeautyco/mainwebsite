import { writeFile } from "node:fs/promises";

const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
const userId = process.env.INSTAGRAM_USER_ID;

if (!accessToken || !userId) {
  throw new Error(
    "INSTAGRAM_ACCESS_TOKEN and INSTAGRAM_USER_ID are required."
  );
}

const fields = [
  "id",
  "caption",
  "media_type",
  "media_url",
  "thumbnail_url",
  "permalink",
  "timestamp",
  "children{media_type,media_url,thumbnail_url}"
].join(",");

const endpoint = new URL(
  `https://graph.instagram.com/v25.0/${userId}/media`
);

endpoint.searchParams.set("fields", fields);
endpoint.searchParams.set("limit", "6");
endpoint.searchParams.set("access_token", accessToken);

const response = await fetch(endpoint);

if (!response.ok) {
  const errorBody = await response.text();

  throw new Error(
    `Instagram API returned ${response.status}: ${errorBody}`
  );
}

const result = await response.json();

const posts = (result.data ?? [])
  .map((post) => {
    const firstCarouselItem = post.children?.data?.[0];

    const displayUrl =
      post.thumbnail_url ||
      post.media_url ||
      firstCarouselItem?.thumbnail_url ||
      firstCarouselItem?.media_url;

    return {
      id: post.id,
      caption: post.caption ?? "",
      media_type: post.media_type,
      display_url: displayUrl,
      permalink: post.permalink,
      timestamp: post.timestamp
    };
  })
  .filter((post) => post.display_url && post.permalink);

const publicFeed = {
  updated_at: new Date().toISOString(),
  data: posts.slice(0, 6)
};

await writeFile(
  "instagram-feed.json",
  `${JSON.stringify(publicFeed, null, 2)}\n`,
  "utf8"
);

console.log(`Saved ${publicFeed.data.length} Instagram posts.`);