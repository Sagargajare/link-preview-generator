import fetch from "node-fetch";
import { load } from "cheerio";
import getUrls from "get-urls";
import request from "request";

const getTitle = async (html) => {
  const $ = load(html);
  if ($('meta[property="og:title"]').length > 0) {
    return $('meta[property="og:title"]').attr("content");
  }
  if ($("title").length > 0) {
    return $("title").text();
  }
  if ($("h1").length > 0) {
    return $("h1").text();
  }
  if ($("h2").length > 0) {
    return $("h2").text();
  }
  return null;
};
const getDescription = async (html) => {
  const $ = load(html);
  if ($('meta[property="og:description"]').length > 0) {
    return $('meta[property="og:description"]').attr("content");
  }
  if ($('meta[name="description"]').length > 0) {
    return $('meta[name="description"]').attr("content");
  }
  if ($('meta[name="twitter:description"]').length > 0) {
    return $('meta[name="twitter:description"]').attr("content");
  }

  return null;
};

const getDomainDetails = async (url, html) => {
  const $ = load(html);
  var domain = null;
  if ($("link[rel='canonical']").length > 0) {
    domain = $("link[rel='canonical']").attr("href");
  }
  if ($('meta[property="og:url"]').length > 0) {
    domain = $('meta[property="og:url"]').attr("content");
  }
  return domain == null
    ? new URL(url).hostname.replace("www.", "")
    : new URL(domain).hostname.replace("www.", "");
};
const getImage = async (html) => {
  const $ = load(html);
  const metaimg = $('meta[property="og:image"]');
  if (metaimg.length > 0) {
    return metaimg.attr("content");
  }
  const twtimg = $('meta[name="twitter:image"]');
  if (twtimg.length > 0) {
    return twtimg.attr("content");
  }
  
  if ($('link[rel="image_src"]').length > 0) {
    return $('link[rel="image_src"]').attr("href");
  }
  if ($('link[rel="icon"]').length > 0) {
    return $('link[rel="icon"]').attr("href");
  }
  if ($('img').length > 0) {
    return $('img').attr("src");
  }


  return null;
};
const getMetaData = async (url) => {
  const res = await fetch(url);
  const html = await res.text();
  const data = {};
  data.title = await getTitle(html);
  data.description = await getDescription(html);
  data.domain = await getDomainDetails(url, html);
  data.image = await getImage(html);
  return data;
};

export default getMetaData;
