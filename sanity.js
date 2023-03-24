// import { SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// const client = SanityClient({
//   projectId: "64sgkvln",
//   dataset: "production",
//   useCdn: true,
//   apiVersion: "2021-10-21",
// });

// import { createClient } from "@sanity/client";

// const sanityClient = createClient({
//   projectId: "64sgkvln",
//   dataset: "production",
//   useCdn: true,
//   apiVersion: "2021-10-21",
// });
// // const builder = imageUrlBuilder(sanityClient);
// // export const urlFor = (source) => builder.image(source);

// export default sanityClient;

import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "64sgkvln",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}

