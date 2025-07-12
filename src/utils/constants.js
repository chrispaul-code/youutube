
const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;


export const YOUTUBE_VIDEO_API = 
  'https://youtube.googleapis.com/youtube/v3/videos?' +
  'part=snippet%2CcontentDetails%2Cstatistics' +
  '&chart=mostPopular' +
  '&maxResults=30' +
  '&regionCode=IN' +
  '&videoCategoryId=10' +
  '&videoDuration=long' + 
  '&key='+apiKey;


export const YOUTUBE_LIKED="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&myRating=like&key="+apiKey;

export const YOUTUBE_SEARCH_API="https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

