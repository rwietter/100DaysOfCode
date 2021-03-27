/**
 * ------------------- Format URL -------------------
 */
type VideoFormatURLs = {
  format360p: URL | string | null;
  format480p: URL | string | null;
  format720p: URL | string | null;
  format1080p: URL | string | null;
};

/**
 * ------------------- Share -------------------
 */

function isAvailable<Formats>(
  obj: Formats,
  key: string | number | symbol
): key is keyof Formats {
  return key in obj;
}

/**
 * ------------------- Subtitles -------------------
 */
declare const subtitle: SubtitleURLs;

type SubtitleURLs = {
  english: URL | string;
  german: URL | string;
  french: URL | string;
};

const video = {
  format360p: null,
  format480p: null,
  format720p: null,
  format1080p: "https://www.youtube.com/watch?v=sdPXVQTbvsA",
} as VideoFormatURLs;

// RESULT
function loadFormat() {
  if (isAvailable<VideoFormatURLs>(video, "format1080p")) {
    console.log(video["format1080p"]);
  }
}

loadFormat();
