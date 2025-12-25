"use client";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  console.log(url);
  return (
    <div className="flex items-center gap-3 ">
      <FacebookShareButton url={url} title={title}>
        <FacebookIcon size={40} round />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={40} round />
      </TwitterShareButton>

      <LinkedinShareButton url={url} title={title}>
        <LinkedinIcon size={40} round />
      </LinkedinShareButton>

      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={40} round />
      </WhatsappShareButton>
    </div>
  );
}
