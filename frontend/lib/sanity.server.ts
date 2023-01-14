import sanityClient from "@sanity/client";
export const client = sanityClient({
  dataset: "dataset",
  projectId: "c0oblyev",
  useCdn: true,
  //   token:
  // "skFkKF9kegIs6Lzrfs501ULi7VIqVuc2V28HoliLv3OJnoZLDl143CLlf0JTGHEJCeFQWEN4WXv7eLwL6DLqOzvwXwreHfMGeUPqlRPwZouMzFdYybaauswDj6etACNLnwd0pfJNVItVWgRsZmBy2SFi91vd6HNSzxbk0RnIlqwLyJZCLe5o",
  apiVersion: "2021-03-25",
});
