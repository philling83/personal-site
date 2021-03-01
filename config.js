module.exports = {
  siteTitle: 'Portfolio Site', // <title>
  manifestName: 'Portfolio',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/personal-site/`, // This path is subpath of your hosting https://domain/portfolio
  authorName: 'Philip Ling',
  heading: 'Fullstack Software Developer',
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/philling83',
    },
    {
      icon: 'fa-linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/philip-ling-218082204/',
    },
    {
      icon: 'fa-envelope-o',
      name: 'Email',
      url: 'mailto:philling83@gmail.com',
    },
  ],
};
