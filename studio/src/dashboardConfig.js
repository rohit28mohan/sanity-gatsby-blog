export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f4f4b4da20a7e70b5aa6bfe',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-rhn7dp5p',
                  apiId: '138f79eb-d34e-4746-ab9d-50bcc62b14fa'
                },
                {
                  buildHookId: '5f4f4b4d1b2e0961f5c3a691',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-dsud3jz1',
                  apiId: 'c3b29f72-cb6d-4bdc-a622-6515e2fe7a9e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rohit28mohan/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-dsud3jz1.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
