import gsap from "gsap";
import styles from "./experience.module.css";
import experienceImage from "./images/experience.svg";

import mobileExp1Image from "./images/m_exp1.svg";
import mobileExp2Image from "./images/m_exp2.svg";
import mobileExp3Image from "./images/m_exp3.svg";
import mobileExp4Image from "./images/m_exp4.svg";

import arrowImage from "./images/arrow.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import ImageComponent1 from "./images/imageComponent_1";
import ImageComponent2 from "./images/imageComponent_2";
import ImageComponent3 from "./images/imageComponent_3";
import ImageComponent4 from "./images/imageComponent_4";

export default function Experience() {
  const [Exp, setExp] = useState(0);
  const [FirstTime, setFirstTime] = useState(false);

  useEffect(() => {
    if (!FirstTime) {
      SETExp(1);
      SETExpMobile(1);
      setFirstTime(true);
    }
  }, []);

  const nextExp = () => {
    if (Exp < 4) {
      SETExpMobile(Exp + 1);
    } else {
      SETExpMobile(1);
    }
  };

  const preExp = () => {
    if (Exp > 1) {
      SETExpMobile(Exp - 1);
    } else {
      SETExpMobile(4);
    }
  };

  const SETExp = (id) => {
    if (id !== Exp) {
      gsap.to(`.exp${id}`, {
        ease: "linear",
        duration: 0.3,
        fill: "#4971ff",
      });
      if (Exp > 0) {
        gsap.to(`.exp${Exp}`, {
          ease: "linear",
          duration: 0.3,
          fill: "black",
        });
        gsap.to(`.expText${Exp}`, {
          ease: "linear",
          duration: 1,
          opacity: "0%",
          display: "none",
        });
      }

      setExp(id);
      gsap.to(`.expText${id}`, {
        ease: "linear",
        duration: 1,
        opacity: "100%",
        display: "block",
      });
    }
  };

  const SETExpMobile = (id) => {
    if (id !== Exp) {
      if (Exp > 0) {
        gsap.to(`.exp${Exp}`, {
          ease: "linear",
          duration: 1,
          opacity: "0%",
        });
        gsap.to(`.expText${Exp}`, {
          ease: "linear",
          duration: 1,
          opacity: "0%",
          display: "none",
        });
      }
      setExp(id);
      gsap.to(`.exp${id}`, {
        ease: "linear",
        duration: 1,
        opacity: "100%",
      });
      gsap.to(`.expText${id}`, {
        ease: "linear",
        duration: 1,
        opacity: "100%",
        display: "block",
      });
    }
  };

  return (
    <div className={[styles.experience, "page", "TEST5"].join(" ")}>
      <div className={["card", styles.experienceCard, "CARD5"].join(" ")}>
        <div className={[styles.experienceCardItems].join(" ")}>
          <div className={[styles.experienceCardTitle].join(" ")}>
            <Image src={experienceImage} alt="experiences" />
          </div>
          <div className={[styles.experienceCardBox].join(" ")}>
            <ImageComponent1 Exp={Exp} set={SETExp} />
            <ImageComponent2 Exp={Exp} set={SETExp} />
            <ImageComponent3 Exp={Exp} set={SETExp} />
            <ImageComponent4 Exp={Exp} set={SETExp} />
          </div>
        </div>
        <div
          className={[styles.experienceCardPanel, "experienceText"].join(" ")}
          data-lenis-prevent
        >
          <div
            className={[styles.experienceCardPanelText, "expText1"].join(" ")}
          >
            <h3>when i lead</h3>
            <p>
              During my time at baloot studio , I embraced an exciting
              challenge: developing a real-time online game server from scratch
              within a tight deadline. This project presented me with new
              problems that tested my skills and problem-solving abilities.
              <br />
              <br />
              I began by carefully designing the server&apos;s architecture,
              ensuring it would meet the demands of a real-time gaming
              experience. From there, I transitioned into the development phase,
              where I brought the server to life by implementing the necessary
              features and functionalities. Testing and debugging played a
              crucial role as I fine-tuned the server&apos;s performance and
              addressed any issues that emerged along the way.
              <br />
              <br />
              To ensure a smooth and efficient deployment process, I leveraged a
              CI/CD pipeline. This allowed for continuous integration and
              deployment, streamlining the entire workflow and ensuring a
              seamless end result.
              <br />
              <br />
              Overall, my experience at baloot studio showcased my ability to
              tackle complex challenges head-on. From design to development to
              deployment, I successfully navigated the entire lifecycle of the
              real-time online game server, delivering exceptional results
              within the given deadline.
            </p>
          </div>

          <div
            className={[styles.experienceCardPanelText, "expText2"].join(" ")}
          >
            <h3>first flame of Innovation</h3>
            <p>
              Its hard to come up with new ideas but implementation is way
              harder . after years of thousand ideas , there was one that was
              within reach of my hands , low risk, no budget and with great
              potential for reward.
              <br />
              <br />
              proTube is an all in one youtube streaming application with
              focused on how the end-user customers perceive the impact , user
              friendly interface and ease of use were my main goals Though it
              may not appear groundbreaking from the outside, elevating an
              existing concept to a whole new level is a truly mind-bending
              task. Transforming something great into a masterpiece is far from
              easy.
              <br />
              <br />
              I began by gathering feedback, identifying user needs, problems,
              and requests.
              <br />
              <br />
              after analyzing every possible aspect I proceeded to the design
              phase. First, I designed the app&apos;s user interface then I
              dived into the architecture design, mapping out the overall
              features and creating UML diagrams.
              <br />
              <br />
              With the design phase complete, I transitioned into the
              implementation stage. I adopted a hybrid approach, combining
              pre-planning with on-the-spot decision-making to enhance
              productivity and keep the project progressing smoothly.
              <br />
              <br />
              to this day im enjoying the implementation phase
              <br />
              <br />
              “If I have 1,000 ideas and only one turns out to be good, I am
              satisfied.” —Alfred Nobel
            </p>
          </div>

          <div
            className={[styles.experienceCardPanelText, "expText3"].join(" ")}
          >
            <h3>experience is the source of knowledge.</h3>
            <p>
              During my time at arz4u , I had the opportunity to work on my
              first government organization project, which involved developing a
              calendar management software specifically designed for government
              office secretaries.
              <br />
              <br />
              As a full-stack developer, my primary responsibility was to
              implement the requested features as designed by the business
              owner. However, I encountered numerous challenges along the way,
              including outdated frameworks, security vulnerabilities, and poor
              architectural decisions. Despite these obstacles, I made a
              concerted effort to effectively communicate with the design team,
              resulting in updates to the framework and a more suitable
              architecture. I also took it upon myself to rectify mistakes in
              the database schema and UI design.
              <br />
              <br />
              Moving forward to the implementation phase , I was very determined
              . However, the process was far from smooth . The agile system was
              broken and often disregarded , leading to a lack of proper
              planning , no development pipeline, no documenting and there was
              not a clear vision. Despite these setbacks, my dedication to
              seeing the product released motivated me to persevere. I engaged
              in numerous discussions with the management , hoping to increased
              effectiveness and professionalism . Unfortunately, i failed and
              the absence of a clear plan resulted in frequent changes and code
              rewrites Ultimately, made me to do the difficult decision and
              leave the project.
              <br />
              <br />
              While the project presented its fair share of challenges, it also
              provided valuable insights that have shaped my approach to
              subsequent projects.
              <br />
              <br />i learned the value of effective communication, the
              importance of planning and vision, and the need for a well-defined
              development pipeline.
            </p>
          </div>

          <div
            className={[styles.experienceCardPanelText, "expText4"].join(" ")}
          >
            <h3>humble beginning</h3>
            <p>
              The journey of a thousand miles begins with a single step. A
              little kid who&apos;s learning to walk has no idea where he&apos;s
              going to step one day and where he&apos;s going to fall ;
              <br />
              <br />
              darning my freelancing time i worked on few projects mostly small
              business websites to gain experience and living , in all of them
              one was most benefit to me , a customized warehouse management
              system , where i joined a development team as a front end
              developer , i was so happy to experience a true team work
              <br />
              <br />
              however it wasn&apos;t easy for me , development challenges and
              problems aside , adapting to the team was my biggest challenge and
              my biggest gain , i put every bit of my energy to be a perfect fit
              to the team , from learning new things to changing my habits ,
              pipelines and styles according to seniors . after all it was the
              job experience that shaped , i learned how to behave and work in a
              team and what Are the red lines to maximize the potential of team
              by analyzing , questioning and using other people experiences.
              <br />
              <br />i wasn&apos;t getting paid fierily but i had no problems
              since i knew its a step to grow , for a better future there should
              be a sacrifice today ; looking at it today , i prod of that young
              man who endure pain and growth to a fine man , deadly wounds of
              those days are just little marks and stories to entertain others .
            </p>
          </div>
        </div>
      </div>

      <div
        className={[
          "card",
          "mobileCard",
          styles.experienceCard,
          styles.mobileExperienceCard,
          "CARD5",
        ].join(" ")}
      >
        <div className={[styles.experienceCardTitle].join(" ")}>
          <Image src={experienceImage} alt="experiences" />
        </div>

        <div
          className={[
            styles.experienceCardPanel,
            styles.mobileExperienceCardPanel,
            "experienceText",
          ].join(" ")}
          data-lenis-prevent
        >
          <div
            className={[styles.experienceCardPanelText, "expText1"].join(" ")}
          >
            <h3>when i lead</h3>
            <p>
              During my time at baloot studio , I embraced an exciting
              challenge: developing a real-time online game server from scratch
              within a tight deadline. This project presented me with new
              problems that tested my skills and problem-solving abilities.
              <br />
              <br />
              I began by carefully designing the server&apos;s architecture,
              ensuring it would meet the demands of a real-time gaming
              experience. From there, I transitioned into the development phase,
              where I brought the server to life by implementing the necessary
              features and functionalities. Testing and debugging played a
              crucial role as I fine-tuned the server&apos;s performance and
              addressed any issues that emerged along the way.
              <br />
              <br />
              To ensure a smooth and efficient deployment process, I leveraged a
              CI/CD pipeline. This allowed for continuous integration and
              deployment, streamlining the entire workflow and ensuring a
              seamless end result.
              <br />
              <br />
              Overall, my experience at baloot studio showcased my ability to
              tackle complex challenges head-on. From design to development to
              deployment, I successfully navigated the entire lifecycle of the
              real-time online game server, delivering exceptional results
              within the given deadline.
            </p>
          </div>

          <div
            className={[styles.experienceCardPanelText, "expText2"].join(" ")}
          >
            <h3>first flame of Innovation</h3>
            <p>
              Its hard to come up with new ideas but implementation is way
              harder . after years of thousand ideas , there was one that was
              within reach of my hands , low risk, no budget and with great
              potential for reward.
              <br />
              <br />
              proTube is an all in one youtube streaming application with
              focused on how the end-user customers perceive the impact , user
              friendly interface and ease of use were my main goals Though it
              may not appear groundbreaking from the outside, elevating an
              existing concept to a whole new level is a truly mind-bending
              task. Transforming something great into a masterpiece is far from
              easy.
              <br />
              <br />
              I began by gathering feedback, identifying user needs, problems,
              and requests.
              <br />
              <br />
              after analyzing every possible aspect I proceeded to the design
              phase. First, I designed the app&apos;s user interface then I
              dived into the architecture design, mapping out the overall
              features and creating UML diagrams.
              <br />
              <br />
              With the design phase complete, I transitioned into the
              implementation stage. I adopted a hybrid approach, combining
              pre-planning with on-the-spot decision-making to enhance
              productivity and keep the project progressing smoothly.
              <br />
              <br />
              to this day im enjoying the implementation phase
              <br />
              <br />
              “If I have 1,000 ideas and only one turns out to be good, I am
              satisfied.” —Alfred Nobel
            </p>
          </div>

          <div
            className={[styles.experienceCardPanelText, "expText3"].join(" ")}
          >
            <h3>experience is the source of knowledge.</h3>
            <p>
              During my time at arz4u , I had the opportunity to work on my
              first government organization project, which involved developing a
              calendar management software specifically designed for government
              office secretaries.
              <br />
              <br />
              As a full-stack developer, my primary responsibility was to
              implement the requested features as designed by the business
              owner. However, I encountered numerous challenges along the way,
              including outdated frameworks, security vulnerabilities, and poor
              architectural decisions. Despite these obstacles, I made a
              concerted effort to effectively communicate with the design team,
              resulting in updates to the framework and a more suitable
              architecture. I also took it upon myself to rectify mistakes in
              the database schema and UI design.
              <br />
              <br />
              Moving forward to the implementation phase , I was very determined
              . However, the process was far from smooth . The agile system was
              broken and often disregarded , leading to a lack of proper
              planning , no development pipeline, no documenting and there was
              not a clear vision. Despite these setbacks, my dedication to
              seeing the product released motivated me to persevere. I engaged
              in numerous discussions with the management , hoping to increased
              effectiveness and professionalism . Unfortunately, i failed and
              the absence of a clear plan resulted in frequent changes and code
              rewrites Ultimately, made me to do the difficult decision and
              leave the project.
              <br />
              <br />
              While the project presented its fair share of challenges, it also
              provided valuable insights that have shaped my approach to
              subsequent projects.
              <br />
              <br />i learned the value of effective communication, the
              importance of planning and vision, and the need for a well-defined
              development pipeline.
            </p>
          </div>

          <div
            className={[styles.experienceCardPanelText, "expText4"].join(" ")}
          >
            <h3>humble beginning</h3>
            <p>
              The journey of a thousand miles begins with a single step. A
              little kid who&apos;s learning to walk has no idea where he&apos;s
              going to step one day and where he&apos;s going to fall ;
              <br />
              <br />
              darning my freelancing time i worked on few projects mostly small
              business websites to gain experience and living , in all of them
              one was most benefit to me , a customized warehouse management
              system , where i joined a development team as a front end
              developer , i was so happy to experience a true team work
              <br />
              <br />
              however it wasn&apos;t easy for me , development challenges and
              problems aside , adapting to the team was my biggest challenge and
              my biggest gain , i put every bit of my energy to be a perfect fit
              to the team , from learning new things to changing my habits ,
              pipelines and styles according to seniors . after all it was the
              job experience that shaped , i learned how to behave and work in a
              team and what Are the red lines to maximize the potential of team
              by analyzing , questioning and using other people experiences.
              <br />
              <br />i wasn&apos;t getting paid fierily but i had no problems
              since i knew its a step to grow , for a better future there should
              be a sacrifice today ; looking at it today , i prod of that young
              man who endure pain and growth to a fine man , deadly wounds of
              those days are just little marks and stories to entertain others .
            </p>
          </div>
        </div>

        <div className={[styles.mobileExperienceCardBox].join(" ")}>
          <Image
            alt="experience"
            className={[styles.experienceImages, "exp1"].join(" ")}
            src={mobileExp1Image}
          />

          <Image
            alt="experience"
            className={[styles.experienceImages, "exp2"].join(" ")}
            src={mobileExp2Image}
          />

          <Image
            alt="experience"
            className={[styles.experienceImages, "exp3"].join(" ")}
            src={mobileExp3Image}
          />

          <Image
            alt="experience"
            className={[styles.experienceImages, "exp4"].join(" ")}
            src={mobileExp4Image}
          />
        </div>

        <div className={[styles.experienceArrow].join(" ")}>
          <div className={[styles.experienceArrowBox].join(" ")}>
            <Image
              alt="arrowToPre"
              onClick={preExp}
              className={[styles.experienceArrowImage].join(" ")}
              src={arrowImage}
            />
            <Image
              alt="arrowToNext"
              onClick={nextExp}
              className={[
                styles.experienceArrowImage,
                styles.experienceArrowRight,
              ].join(" ")}
              src={arrowImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
