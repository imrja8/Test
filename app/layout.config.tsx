// import { source } from '@/lib/source';;
import { Logo } from '@/components/Logo/Logo';
import type { HomeLayout } from '@/utils/types';
import { Github, Facebook, Globe, Twitter } from 'lucide-react';

// shared configuration for site (home layout)
export const baseOptions: HomeLayout = {
  githubUrl: 'https://github.com/frontendweb3/Nextify',
  nav: {
    title: (<Logo />),
    transparentMode: 'top'
  },
  links: [
    { url: "/", text: "Home" },
    { url: "/docs/get-started/introduction", text: "Documatation" },
    { url: "/blog", text: "Blog" },
    { url: "/page/about", text: "About us" },
    { url: "/page/changelog", text: "Change log" },
    { url: "https://twitter.com/Official_R_deep", text: "Twitter", type: 'icon', icon: <Twitter /> }
  ],
  blog_nav: [
    { name: "Computer Science", url: "/blog/tag/computer-science" },
    { name: "Photography", url: "/blog/tag/photography" },
    { name: "Programming", url: "/blog/tag/programming" }
  ],
  social: [{
    icon: <Github />,
    name: "Github",
    url: "https://github.com/officialrajdeepsingh"
  },
  {
    icon: <Facebook />,
    name: "Facebook",
    url: "https://www.facebook.com/officialrajdeepsingh"
  },
  {
    icon: <Globe />,
    name: "Website",
    url: "https://officialrajdeepsingh.dev"
  }],
  faqs: [
    {
      key: 1,
      question: "How this theme is different from others in market?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
    },
    {
      key: 2,
      question: "What is your policy on distribution of Devjoy assets?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
    },
    {
      key: 3,
      question: "How can I contribute to Devjoy?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
    },
    {
      key: 4,
      question: "What other themes do you have?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
    },
  ]
};
