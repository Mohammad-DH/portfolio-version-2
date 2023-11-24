import FingerprintJS from "@fingerprintjs/fingerprintjs";
import styles from "./contact.module.css";
import gsap from "gsap";
import contactImage1 from "./images/left.svg";
import contactImage2 from "./images/right.svg";
import topImage from "./images/top.svg";
import downImage from "./images/down.svg";
import hiImage from "./images/hi.svg";
import handImage from "./images/hand.png";
import heartImage from "./images/heart.png";
import sendImage from "./images/SEND.svg";
import reaction from "./images/reaction.svg";
import emojiHappy from "./images/emojiHappy.png";
import emojiLoved from "./images/emojiLoved.png";
import emojiMeh from "./images/emojiMeh.png";
import emojiPoker from "./images/emojiPoker.png";
import emojiSad from "./images/emojiSad.png";
import refresh from "./images/refresh.svg";
import resume from "./images/resume.png";
import mobileResume from "./images/mobileResume.png";
import github from "./images/github.png";
import instagram from "./images/instagram.png";
import linkedin from "./images/linkedin.png";
import youtube from "./images/youtube.png";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [HiBtn, setHiBtn] = useState(false);
  const [Reaction, setReaction] = useState();
  const [ReactionClassName, setReactionClassName] = useState();
  const [fpHash, setFpHash] = useState("");

  const timelineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      yoyo: true,
      repeat: -1,
    });
    tl.fromTo(
      ".emoji",
      {
        scale: 1,
        ease: "power1.inOut",
        duration: 1,
        stagger: {
          each: 0.2,
          from: "end",
        },
      },
      {
        scale: 1.1,
        ease: "power1.inOut",
        duration: 1,
        stagger: {
          each: 0.2,
          from: "end",
        },
      }
    );
    timelineRef.current = tl;
    return () => {
      tl.kill();
    };
  }, []);

  useLayoutEffect(() => {
    const setFp = async () => {
      const fp = await FingerprintJS.load();
      const { visitorId } = await fp.get();
      setFpHash(visitorId);
    };

    setFp();

    const storedReactionClassName = localStorage.getItem(
      "mr-j.dev_ReactionClassName"
    );
    if (storedReactionClassName) {
      setReactionClassName(JSON.parse(storedReactionClassName));
      const { textClassName, emojiClassName } = JSON.parse(
        storedReactionClassName
      );
      gsap.to(".refresh", {
        opacity: 1,
        display: "flex",
        ease: "power1.inOut",
        duration: 0.5,
      });
      emojiTextAnimationEnter(textClassName, emojiClassName);
    }
    const storedReactionScore = localStorage.getItem("mr-j.dev_ReactionScore");
    if (storedReactionScore) {
      setReaction(storedReactionScore);
    }
    const storedHi = localStorage.getItem("mr-j.dev_Hi");
    if (storedHi) {
      setHiBtn(true);
      hiAnimation();
    }
  }, []);

  const startAnimation = () => {
    timelineRef.current.play();
  };

  const stopAnimation = () => {
    timelineRef.current.pause();
  };

  const emojiTextAnimationEnter = (className, emoji) => {
    if (!Reaction) {
      gsap.to(className, {
        opacity: 0.8,
        ease: "power1.inOut",
        display: "block",
        duration: 0.5,
      });

      let list = [".emoji1", ".emoji2", ".emoji3", ".emoji4", ".emoji5"].filter(
        (item) => item !== emoji
      );
      gsap.to(list, {
        filter: "blur(10px)",
        ease: "power1.inOut",
        duration: 0.5,
      });
    }
  };

  const emojiTextAnimationLeave = (className, emoji, force) => {
    if (!Reaction || force) {
      gsap.to(className, {
        opacity: 0,
        ease: "power1.inOut",
        display: "none",
        duration: 0.5,
      });

      let list = [".emoji1", ".emoji2", ".emoji3", ".emoji4", ".emoji5"].filter(
        (item) => item !== emoji
      );
      gsap.to(list, {
        filter: "blur(0px)",
        ease: "power1.inOut",
        duration: 0.5,
      });
    }
  };

  const sendContact = async () => {
    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message, fingerPrint: fpHash }),
      });

      const data = await response.json();
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const sendReaction = async (score) => {
    try {
      const response = await fetch("/api/reaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ score, fingerPrint: fpHash }),
      });

      const data = await response.json();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const reactionClicked = async (textClassName, emojiClassName, reaction) => {
    localStorage.setItem(
      "mr-j.dev_ReactionClassName",
      JSON.stringify({ textClassName, emojiClassName })
    );
    localStorage.setItem("mr-j.dev_ReactionScore", reaction);

    setReactionClassName({ textClassName, emojiClassName });
    if (!Reaction) {
      //* show the refresh btn
      gsap.to(".refresh", {
        opacity: 1,
        display: "flex",
        ease: "power1.inOut",
        duration: 0.5,
      });
      setReaction(reaction);
      //* send request
      await sendReaction(reaction);
      //* stay on selection animation
      emojiTextAnimationEnter(textClassName, emojiClassName);
    }
  };

  const refreshReaction = () => {
    //* hide the refresh btn
    gsap.to(".refresh", {
      opacity: 0,
      display: "none",
      ease: "power1.inOut",
      duration: 0.5,
    });
    setReaction(null);
    const { textClassName, emojiClassName } = ReactionClassName;
    emojiTextAnimationLeave(textClassName, emojiClassName, true);
    setReactionClassName();
  };

  const sendHi = async () => {
    try {
      const response = await fetch("/api/hi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fingerPrint: fpHash }),
      });

      const data = await response.json();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const hiAnimation = () => {
    gsap.to(".hi", {
      opacity: 0,
      duration: 0.5,
    });
    gsap.to(".hand", {
      translateY: "-100%",
      duration: 1,
    });
    gsap.to(".heart", {
      translateY: "10%",
      duration: 1,
    });
  };

  const hiClicked = async () => {
    if (!HiBtn) {
      localStorage.setItem("mr-j.dev_Hi", true);
      setHiBtn(true);
      hiAnimation();
      await sendHi();
    }
  };

  return (
    <div className={[styles.contact, "page", "TEST6"].join(" ")}>
      <div className={["card", styles.contactCard, "CARD6"].join(" ")}>
        <div
          className={[styles.contactImagesBox, styles.contactImagesBox1].join(
            " "
          )}
        >
          <Image
            fetchPriority="low"
            className={[styles.contactImage, styles.contactImage1].join(" ")}
            src={contactImage1}
            alt="dont be shy"
          />
        </div>
        <div className={[styles.contactPanel].join(" ")}>
          <div
            onMouseEnter={stopAnimation}
            onMouseLeave={startAnimation}
            className={[styles.contactPanelBox1].join(" ")}
          >
            <Image
              fetchPriority="low"
              className={[styles.contactReactionTitle].join(" ")}
              src={reaction}
              alt="reaction"
            />
            <div className={[styles.contactReactionItems].join(" ")}>
              <div className={[styles.contactEmojiName].join(" ")}>
                <span
                  className={[styles.contactEmojiNameText, "emojiText1"].join(
                    " "
                  )}
                >
                  bad
                </span>
                <span
                  className={[styles.contactEmojiNameText, "emojiText2"].join(
                    " "
                  )}
                >
                  meh
                </span>
                <span
                  className={[styles.contactEmojiNameText, "emojiText3"].join(
                    " "
                  )}
                >
                  ok
                </span>
                <span
                  className={[styles.contactEmojiNameText, "emojiText4"].join(
                    " "
                  )}
                >
                  good
                </span>
                <span
                  className={[styles.contactEmojiNameText, "emojiText5"].join(
                    " "
                  )}
                >
                  wow
                </span>
              </div>
              <div className={[styles.contactEmojiImages].join(" ")}>
                <Image
                  fetchPriority="low"
                  alt="emoji"
                  className={[styles.contactEmoji, "emoji", "emoji1"].join(" ")}
                  src={emojiSad}
                  onClick={() => reactionClicked(".emojiText1", ".emoji1", 1)}
                  onMouseEnter={() =>
                    !Reaction &&
                    emojiTextAnimationEnter(".emojiText1", ".emoji1")
                  }
                  onMouseLeave={() =>
                    !Reaction &&
                    emojiTextAnimationLeave(".emojiText1", ".emoji1")
                  }
                />
                <Image
                  fetchPriority="low"
                  alt="emoji"
                  className={[styles.contactEmoji, "emoji", "emoji2"].join(" ")}
                  src={emojiMeh}
                  onClick={() => reactionClicked(".emojiText2", ".emoji2", 2)}
                  onMouseEnter={() =>
                    !Reaction &&
                    emojiTextAnimationEnter(".emojiText2", ".emoji2")
                  }
                  onMouseLeave={() =>
                    !Reaction &&
                    emojiTextAnimationLeave(".emojiText2", ".emoji2")
                  }
                />
                <Image
                  fetchPriority="low"
                  alt="emoji"
                  className={[styles.contactEmoji, "emoji", "emoji3"].join(" ")}
                  src={emojiPoker}
                  onClick={() => reactionClicked(".emojiText3", ".emoji3", 3)}
                  onMouseEnter={() =>
                    !Reaction &&
                    emojiTextAnimationEnter(".emojiText3", ".emoji3")
                  }
                  onMouseLeave={() =>
                    !Reaction &&
                    emojiTextAnimationLeave(".emojiText3", ".emoji3")
                  }
                />
                <Image
                  fetchPriority="low"
                  alt="emoji"
                  className={[styles.contactEmoji, "emoji", "emoji4"].join(" ")}
                  src={emojiHappy}
                  onClick={() => reactionClicked(".emojiText4", ".emoji4", 4)}
                  onMouseEnter={() =>
                    !Reaction &&
                    emojiTextAnimationEnter(".emojiText4", ".emoji4")
                  }
                  onMouseLeave={() =>
                    !Reaction &&
                    emojiTextAnimationLeave(".emojiText4", ".emoji4")
                  }
                />
                <Image
                  fetchPriority="low"
                  alt="emoji"
                  className={[styles.contactEmoji, "emoji", "emoji5"].join(" ")}
                  src={emojiLoved}
                  onClick={() => reactionClicked(".emojiText5", ".emoji5", 5)}
                  onMouseEnter={() =>
                    !Reaction &&
                    emojiTextAnimationEnter(".emojiText5", ".emoji5")
                  }
                  onMouseLeave={() =>
                    !Reaction &&
                    emojiTextAnimationLeave(".emojiText5", ".emoji5")
                  }
                />
              </div>
            </div>

            <Image
              fetchPriority="low"
              alt="refresh btn"
              className={[styles.contactReactionRefresh, "refresh"].join(" ")}
              src={refresh}
              onClick={refreshReaction}
            />
          </div>
          <div
            onClick={hiClicked}
            className={[styles.contactPanelBox2].join(" ")}
          >
            <div className={[styles.contactPanelImages, "hi"].join(" ")}>
              <Image
                fetchPriority="low"
                alt="hi"
                className={[styles.contactPanelHi].join(" ")}
                src={hiImage}
              />
            </div>
            <div className={[styles.contactPanelImages, "hand"].join(" ")}>
              <Image
                fetchPriority="low"
                alt="shaking hand"
                className={[styles.contactPanelHand].join(" ")}
                src={handImage}
              />
            </div>
            <div
              className={[
                styles.contactPanelImages,
                styles.contactPanelHeartBox,
                "heart",
              ].join(" ")}
            >
              <Image
                fetchPriority="low"
                alt="heart"
                className={[styles.contactPanelHeart].join(" ")}
                src={heartImage}
              />
            </div>
          </div>
          <div className={[styles.contactPanelBox3].join(" ")}>
            <input
              type="text"
              id="name"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              id="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              id="message"
              placeholder="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div
              onClick={sendContact}
              className={[styles.contactPanelBtn].join(" ")}
            >
              <Image
                fetchPriority="low"
                alt="send btn"
                className={[styles.contactPanelBtnImages].join(" ")}
                src={sendImage}
              />
            </div>
          </div>
          <div className={[styles.contactPanelBox4].join(" ")}>
            <Image
              fetchPriority="low"
              alt="resume"
              onClick={() => window.open("/resume.pdf", "_blank")}
              className={[
                styles.contactSocialImages,
                styles.contactSocialImagesResume,
              ].join(" ")}
              src={resume}
            />

            <Image
              fetchPriority="low"
              alt="linkedin"
              className={[styles.contactSocialImages].join(" ")}
              src={linkedin}
            />
            <Image
              fetchPriority="low"
              alt="github"
              className={[styles.contactSocialImages].join(" ")}
              src={github}
            />
            <Image
              fetchPriority="low"
              alt="instagram"
              className={[styles.contactSocialImages].join(" ")}
              src={instagram}
            />
            <Image
              fetchPriority="low"
              alt="youtube"
              className={[styles.contactSocialImages].join(" ")}
              src={youtube}
            />
          </div>
        </div>
        <div
          className={[styles.contactImagesBox, styles.contactImagesBox2].join(
            " "
          )}
        >
          <Image
            fetchPriority="low"
            className={[styles.contactImage, styles.contactImage2].join(" ")}
            src={contactImage2}
            alt="just say hi"
          />
        </div>
      </div>

      <div
        className={["card", "mobileCard", styles.contactCard, "CARD6"].join(
          " "
        )}
      >
        {/* top */}

        <div className={[styles.contactImagesBox].join(" ")}>
          <Image
            fetchPriority="low"
            className={[styles.contactImage].join(" ")}
            src={topImage}
            alt="dont be shy"
          />
        </div>
        {/* form */}
        <div className={[styles.contactPanel].join(" ")}>
          <div className={[styles.contactPanelBox1].join(" ")}>
            <Image
              fetchPriority="low"
              className={[styles.contactReactionTitle].join(" ")}
              src={reaction}
              alt="reaction"
            />
            <div className={[styles.contactReactionItems].join(" ")}>
              <div className={[styles.contactEmojiName].join(" ")}>
                <span
                  onClick={refreshReaction}
                  className={[styles.contactEmojiNameText, "emojiText1"].join(
                    " "
                  )}
                >
                  bad
                </span>
                <span
                  onClick={refreshReaction}
                  className={[styles.contactEmojiNameText, "emojiText2"].join(
                    " "
                  )}
                >
                  meh
                </span>
                <span
                  onClick={refreshReaction}
                  className={[styles.contactEmojiNameText, "emojiText3"].join(
                    " "
                  )}
                >
                  ok
                </span>
                <span
                  onClick={refreshReaction}
                  className={[styles.contactEmojiNameText, "emojiText4"].join(
                    " "
                  )}
                >
                  good
                </span>
                <span
                  onClick={refreshReaction}
                  className={[styles.contactEmojiNameText, "emojiText5"].join(
                    " "
                  )}
                >
                  wow
                </span>
              </div>
              <div className={[styles.contactEmojiImages].join(" ")}>
                <Image
                  fetchPriority="low"
                  alt="emoji"
                  className={[styles.contactEmoji, "emoji", "emoji1"].join(" ")}
                  src={emojiSad}
                  onClick={() => reactionClicked(".emojiText1", ".emoji1", 1)}
                />
                <Image
                  fetchPriority="low"
                  alt="emoji"
                  className={[styles.contactEmoji, "emoji", "emoji2"].join(" ")}
                  src={emojiMeh}
                  onClick={() => reactionClicked(".emojiText2", ".emoji2", 2)}
                />
                <Image
                  fetchPriority="low"
                  alt="emoji"
                  className={[styles.contactEmoji, "emoji", "emoji3"].join(" ")}
                  src={emojiPoker}
                  onClick={() => reactionClicked(".emojiText3", ".emoji3", 3)}
                />
                <Image
                  fetchPriority="low"
                  alt="emoji"
                  className={[styles.contactEmoji, "emoji", "emoji4"].join(" ")}
                  src={emojiHappy}
                  onClick={() => reactionClicked(".emojiText4", ".emoji4", 4)}
                />
                <Image
                  fetchPriority="low"
                  alt="emoji"
                  className={[styles.contactEmoji, "emoji", "emoji5"].join(" ")}
                  src={emojiLoved}
                  onClick={() => reactionClicked(".emojiText5", ".emoji5", 5)}
                />
              </div>
            </div>
          </div>
          <div
            onClick={hiClicked}
            className={[styles.contactPanelBox2].join(" ")}
          >
            <div className={[styles.contactPanelImages, "hi"].join(" ")}>
              <Image
                fetchPriority="low"
                alt="hi"
                className={[styles.contactPanelHi].join(" ")}
                src={hiImage}
              />
            </div>
            <div className={[styles.contactPanelImages, "hand"].join(" ")}>
              <Image
                fetchPriority="low"
                alt="shaking hand"
                className={[styles.contactPanelHand].join(" ")}
                src={handImage}
              />
            </div>
            <div
              className={[
                styles.contactPanelImages,
                styles.contactPanelHeartBox,
                "heart",
              ].join(" ")}
            >
              <Image
                fetchPriority="low"
                alt="heart"
                className={[styles.contactPanelHeart].join(" ")}
                src={heartImage}
              />
            </div>
          </div>
          <div className={[styles.contactPanelBox3].join(" ")}>
            <input
              type="text"
              id="mobile_name"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              id="mobile_email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              id="mobile_message"
              placeholder="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div
              onClick={sendContact}
              className={[styles.contactPanelBtn].join(" ")}
            >
              <Image
                fetchPriority="low"
                alt="send btn"
                className={[styles.contactPanelBtnImages].join(" ")}
                src={sendImage}
              />
            </div>
          </div>
          <div className={[styles.contactPanelBox4].join(" ")}>
            <Image
              fetchPriority="low"
              alt="resume"
              onClick={() => window.open("/resume.pdf", "_blank")}
              className={[
                styles.contactSocialImages,
                styles.contactSocialImagesResume,
              ].join(" ")}
              src={mobileResume}
            />

            <Image
              fetchPriority="low"
              alt="linkedin"
              className={[styles.contactSocialImages].join(" ")}
              src={linkedin}
            />
            <Image
              fetchPriority="low"
              alt="github"
              className={[styles.contactSocialImages].join(" ")}
              src={github}
              onClick={() =>
                window.open("https://github.com/Mohammad-DH", "_blank")
              }
            />
            <Image
              fetchPriority="low"
              alt="instagram"
              className={[styles.contactSocialImages].join(" ")}
              src={instagram}
            />
            <Image
              fetchPriority="low"
              alt="youtube"
              className={[styles.contactSocialImages].join(" ")}
              src={youtube}
            />
          </div>
        </div>
        {/* down */}
        <div className={[styles.contactImagesBox].join(" ")}>
          <Image
            fetchPriority="low"
            className={[styles.contactImage].join(" ")}
            src={downImage}
            alt="just say hi"
          />
        </div>
      </div>
    </div>
  );
}
