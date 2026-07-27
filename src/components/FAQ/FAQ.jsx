import React, { useState } from "react";
import styles from './FAQ.module.css';

import girlWithLaptop from '../../assets/faq/FAQ_1.png';
import cakeWithFork from '../../assets/faq/FAQ_2.png';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
          question: "When and where is ElleHacks?",
          answer:
            "ElleHacks will be hosted at York University (Keele Campus) in Toronto, Ontario, Canada."
        },
        {
          question: "What's a hackathon?",
          answer:
            "At ElleHacks, you'll get to make tons of new friends, network with recruiters, and pick up cool skills through workshops, speaker sessions, activities, and games!"
        },
        {
          question: "Do I need to know how to code?",
          answer:
            "Nope! Students of all skill levels are welcome at ElleHacks (even if you have absolutely zero experience)! Tons of hackathon participants are total newbies, and we'll be there to support you through workshops and mentorship. :) Still not sure? Check this out for inspiration: https://medium.com/tfogo/hackathons-are-for-beginners-77e9c9cb000#.cj21niskl"
        },
        {
          question: "Who can apply?",
          answer:
            "We welcome all students from underrepresented gender groups (i.e., women and gender-diverse students) who either live or attend school in North America. Only students who are currently enrolled in college/university, or have graduated within the past 12 months, are eligible to attend. You must bring a valid student or government-issued ID card for admission."
        },
        {
          question: "Is ElleHacks in-person or virtual?",
          answer:
            "Yes! ElleHacks will be in-person at York University in Toronto. There will be no option to participate in the event virtually."
        },
        {
          question: "When will applications open?",
          answer:
            "Applications are not open yet. We’ll share application dates and details closer to our scheduled event date. Follow our Instagram for the latest updates and announcements so you don’t miss when applications go live."
        },
        {
          question: "MLH Code of Conduct",
          answer: "https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
        }
      ];

      return (
        <div className={styles.faqSection}>
          <p className={styles.highlight}> FAQ </p>
    
          <div className={styles.faqContentWrapper}>
            <div
              className={styles.faqContainer}
              style={{
                '--faq-image-top': `url(${girlWithLaptop})`,
                '--faq-image-bottom': `url(${cakeWithFork})`
              }}
            >
              <div className={styles.faqContainerInner}>
                <div className={styles.faqItems}>
                  {faqData.map((faq, index) => (
                    <div
                      key={index}
                      className={`${styles.faqItem} ${openIndex === index ? styles.active : ""}`}
                    >
                      <div
                        className={styles.faqHeader}
                        onClick={() => toggleFAQ(index)}
                      >
                        <span className={styles.faqQuestion}>{faq.question}</span>
                        <span className={styles.faqIcon} />
                      </div>
                      {openIndex === index && (
                        <div className={styles.faqAnswer}>{faq.answer}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
export default FAQ;