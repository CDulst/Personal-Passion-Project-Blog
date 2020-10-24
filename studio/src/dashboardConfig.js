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
                  buildHookId: '5f9433fd4b8347d65998b546',
                  title: 'Sanity Studio',
                  name: 'personal-passion-project-blog-studio',
                  apiId: 'dd377ad2-8ec1-496f-ad18-8c7050f4c92f'
                },
                {
                  buildHookId: '5f9433fdf6aab7e11e0c92e8',
                  title: 'Blog Website',
                  name: 'personal-passion-project-blog',
                  apiId: '1c1ab9dd-eb16-48b9-b859-3b3af518940b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CDulst/Personal-Passion-Project-Blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://personal-passion-project-blog.netlify.app', category: 'apps' }
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
