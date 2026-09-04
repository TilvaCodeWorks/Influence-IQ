export function formatNumber(
  value: number
): string {
  return new Intl.NumberFormat("en-IN", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

export function formatINR(
  value: number
): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function detectPlatform(
  url: string
): string {
  const value = url.toLowerCase();

  if (value.includes("instagram.com")) {
    return "Instagram";
  }

  if (
    value.includes("youtube.com") ||
    value.includes("youtu.be")
  ) {
    return "YouTube";
  }

  if (value.includes("tiktok.com")) {
    return "TikTok";
  }

  if (
    value.includes("facebook.com") ||
    value.includes("fb.com")
  ) {
    return "Facebook";
  }

  if (value.includes("linkedin.com")) {
    return "LinkedIn";
  }

  if (value.includes("snapchat.com")) {
    return "Snapchat";
  }

  if (
    value.includes("x.com") ||
    value.includes("twitter.com")
  ) {
    return "X";
  }

  return "Unknown";
}