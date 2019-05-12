module.exports = {
  title: "Un-Official Docs",
  description: "Un-Official faker.js Documentation",
  dest: "dist",
  themeConfig: {
    algolia: {
      apiKey: process.env.ALGOLIA_KEY,
      indexName: process.env.ALGOLIA_INDEX
    },
    logo: "/logo.png",
    sidebar: [
      ["/", "Overview"],
      {
        title: "API Methods",
        collapsable: false,
        children: [
          "/api/address",
          "/api/commerce",
          "/api/company",
          "/api/database",
          "/api/date",
          "/api/fake",
          "/api/finance",
          "/api/hacker",
          "/api/helpers",
          "/api/image",
          "/api/internet",
          "/api/lorem",
          "/api/name",
          "/api/phone",
          "/api/random",
          "/api/system"
        ]
      },
      "/localization"
    ],
    lastUpdated: "Last Updated",
    repo: "JeffBeltran/faker.js-docs",
    repoLabel: "Contribute!",
    editLinks: true,
    editLinkText: "Help improve this page!",
    plugins: [
      [
        "@vuepress/google-analytics",
        {
          ga: process.env.GATID
        }
      ]
    ]
  }
};
