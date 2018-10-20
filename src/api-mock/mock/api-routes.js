const routes = [
  {
    method: 'GET',
    url: '/backend/common/users',
    response: {
      code: 401,
      status: 'NOT_AUTHORIZED'
    }
  },
  {
    method: 'GET',
    url: '/backend/config/menus',
    response: {
      code: 200,
      status: 'OK',
      data: [
        {
          name: 'HOME',
          link: '/'
        },
        {
          name: 'NEWS',
          link: '/news'
        },
        {
          name: 'MATCH',
          link: '/match'
        },
        {
          name: 'TEAM',
          link: '/team'
        },
        {
          name: 'GALLERY',
          link: '/gallery'
        }
      ]
    }
  }
]
export default routes
