// You can add new scenarios, but make sure that there is exactly...
// * 1 hackerCard per scenario
// * 3 playerCards per scenario

var scenarios = [
  {
    hackerCard : {
      description : "I set up a fake Wi-Fi station to steal people’s email and track them online.",
      power : 4,
    },
    playerCards : [
      {
        description : "I never use public wifi networks.",
        power : 5,
      },
      {
        description : "I browse the web, but I never do any personal business on a public wifi network.",
        power : 3,
      },
      {
        description : "I connect to any wifi network I can use in public.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I sent a fake email from your bank asking for your account details.",
      power : 3,
    },
    playerCards : [
      {
        description : "I checked the email address - the message didn’t come from my bank.",
        power : 5,
      },
      {
        description : "I never give out personal information in response to an email.",
        power : 4,
      },
      {
        description : "I sent the details you asked for so you could check on my account.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I figured out where you live from all the personal information you share on social media.",
      power : 3,
    },
    playerCards : [
      {
        description : "I never share personal information on my social media accounts.",
        power : 5,
      },
      {
        description : "I keep my accounts private so only my friends can see them.",
        power : 4,
      },
      {
        description : "I tag everything so my friends always know what I’m doing.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I watched you type your password and hacked your account.",
      power : 2,
    },
    playerCards : [
      {
        description : "I use different passwords for all of my other accounts.",
        power : 4,
      },
      {
        description : "I changed my password on all of my accounts because they are the same.",
        power : 2,
      },
      {
        description : "I deleted that account and started a new one. ",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I looked at your browsing history on your phone to see what you do online.",
      power : 2,
    },
    playerCards : [
      {
        description : "I always use a private browser that never keeps my history.",
        power : 4,
      },
      {
        description : "I set my browser to delete my history every time I quit. ",
        power : 3,
      },
      {
        description : "I never clear my browser history because I don’t like typing in big web addresses.",
        power : 1,
      }
    ]
  }, 

  {
    hackerCard : {
      description : "I hacked your system and all your data is deleted now.",
      power : 2,
    },
    playerCards : [
      {
        description : "I follow the 3-2-1 backup rule. I have on-site as well as off-site location (cloud storage) backup.",
        power : 4,
      },
      {
        description : "I have my data backed up in local and external hard drive.",
        power : 3,
      },
      {
        description : "I never backed up my data in any way.",
        power : 1,
      }
    ]
  }, 

  {
    hackerCard : {
      description : "I provided you my USB for content transfer.",
      power : 2,
    },
    playerCards : [
      {
        description : "I use Anti-Virus Protection & Firewall to protect my system.",
        power : 4,
      },
      {
        description : "I refused to use your USB as my system was not having Anti-Virus Protection & Firewall.",
        power : 3,
      },
      {
        description : "I used your USB as I am not afraid of my system getting corrupted.",
        power : 1,
      }
    ]
  }, 
  {
    hackerCard : {
      description : "I will crash your vulnerable system using ransomware attacks, malware and data breaches.",
      power : 2,
    },
    playerCards : [
      {
        description : "You can't because I have turnned on Automatic Updates for my operating system.",
        power : 4,
      },
      {
        description : "I use web browsers such as Chrome or Firefox that receive frequent, automatic security updates.",
        power : 3,
      },
      {
        description : "I don't update my softwares nor do I download security updates.",
        power : 1,
      }
    ]
  },
  {
    hackerCard: {
      description: "I sent a phishing email that looks like it’s from a trusted company to steal login credentials.",
      power: 2
    },
    playerCards: [
      {
        description: "I always verify the sender’s email address and avoid clicking suspicious links.",
        power: 4
      },
      {
        description: "I open emails from unknown senders but never click on the links.",
        power: 3
      },
      {
        description: "I click on links in emails without checking the sender's details.",
        power: 1
      }
    ]
  },
  {
    hackerCard: {
      description: "I created a fake social media profile to gather personal details about you.",
      power: 2
    },
    playerCards: [
      {
        description: "I keep my social media accounts private and avoid sharing personal details.",
        power: 4
      },
      {
        description: "I limit the personal information I share online but still accept friend requests from unknown people.",
        power: 3
      },
      {
        description: "I accept any friend request and share personal details online.",
        power: 1
      }
    ]
  },
  {
    hackerCard: {
      description: "I use keylogging malware to steal your login details.",
      power: 2
    },
    playerCards: [
      {
        description: "I use multi-factor authentication (MFA) and strong passwords.",
        power: 4
      },
      {
        description: "I use a strong password but don’t enable MFA.",
        power: 3
      },
      {
        description: "I use simple passwords that are easy to remember.",
        power: 1
      }
    ]
  },
  {
    hackerCard: {
      description: "I created a malicious app that asks for too many permissions to access your phone data.",
      power: 2
    },
    playerCards: [
      {
        description: "I review app permissions and only install apps from trusted sources.",
        power: 4
      },
      {
        description: "I install apps from known sources but rarely check permissions.",
        power: 3
      },
      {
        description: "I install apps from any source without checking permissions.",
        power: 1
      }
    ]
  },
  {
    hackerCard: {
      description: "I set up a fake website to steal your credit card details.",
      power: 2
    },
    playerCards: [
      {
        description: "I always check for HTTPS and use a virtual card for online payments.",
        power: 4
      },
      {
        description: "I check for HTTPS but use my main card for online purchases.",
        power: 3
      },
      {
        description: "I enter my card details on any website that looks legitimate.",
        power: 1
      }
    ]
  },
  {
    hackerCard: {
      description: "I target outdated software with known security vulnerabilities.",
      power: 2
    },
    playerCards: [
      {
        description: "I regularly update all my software and enable automatic updates.",
        power: 4
      },
      {
        description: "I update my software occasionally but disable automatic updates.",
        power: 3
      },
      {
        description: "I rarely update my software unless I’m forced to.",
        power: 1
      }
    ]
  },
  {
    hackerCard: {
      description: "I compromised a public charging station with a USB skimmer to steal data from your phone.",
      power: 2
    },
    playerCards: [
      {
        description: "I use my own charging cable and avoid public charging stations.",
        power: 4
      },
      {
        description: "I sometimes use public charging stations but use a data-blocking adapter.",
        power: 3
      },
      {
        description: "I regularly use public charging stations without precautions.",
        power: 1
      }
    ]
  },
  {
    hackerCard: {
      description: "I exploit weak passwords to gain access to your online accounts.",
      power: 2
    },
    playerCards: [
      {
        description: "I use unique, strong passwords for every account and enable MFA.",
        power: 4
      },
      {
        description: "I use a strong password for important accounts but reuse some passwords.",
        power: 3
      },
      {
        description: "I use the same password for multiple accounts.",
        power: 1
      }
    ]
  },
  {
    hackerCard: {
      description: "I created a malicious browser extension that tracks your browsing activity.",
      power: 2
    },
    playerCards: [
      {
        description: "I only install browser extensions from trusted sources and review permissions.",
        power: 4
      },
      {
        description: "I install extensions from trusted sources but rarely check permissions.",
        power: 3
      },
      {
        description: "I install any extension that looks useful without checking permissions.",
        power: 1
      }
    ]
  },
  {
    hackerCard: {
      description: "I launched a ransomware attack, encrypting your files and demanding payment.",
      power: 2
    },
    playerCards: [
      {
        description: "I back up my data regularly and use strong endpoint protection.",
        power: 4
      },
      {
        description: "I have some backups but don’t update them regularly.",
        power: 3
      },
      {
        description: "I don’t back up my data or have any protection in place.",
        power: 1
      }
    ]
  }
];