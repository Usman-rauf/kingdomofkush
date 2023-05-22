import {
  Dialog,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";
import {
  TwitterIcon,
  LinkedinIcon,
  FacebookIcon,
  WhatsappIcon,
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
} from "next-share";
export default function SharePetition({ open, setOpen }) {
  const handleOpen = () => setOpen(!open);
  const shareUrl = `/petition`;
  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader className="text-center">
        <h5>Please Share With Support</h5>
      </DialogHeader>
      <DialogBody divider>
        <div className="flex px-6 justify-evenly items-center">
          <FacebookShareButton
            quote={"Kingdom of kush is..."}
            hashtag={"#kingdomofkush"}
            title="Hello world"
            url={shareUrl}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton
            url={"https://twitter.com/?lang=en/next-share"}
            quote={"Kingdom of kush is..."}
            hashtag={"#nextshare"}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <LinkedinShareButton
            url={"https://www.linkedin.com/feed/next-share"}
            quote={"Kingdom of kush is..."}
            hashtag={"#nextshare"}
          >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <WhatsappShareButton
            url={"https://web.whatsapp.com//next-share"}
            quote={"Kingdom of kush is..."}
            hashtag={"#nextshare"}
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
      </DialogBody>
    </Dialog>
  );
}
