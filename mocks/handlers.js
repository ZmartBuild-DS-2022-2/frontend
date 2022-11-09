import { rest } from "msw"

export const handlers = [
  // Handles a GET request
  rest.get("/proyects", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: '1',
          author: 'Elon Musk',
          name: 'Project 1',
          // eslint-disable-next-line max-len
          imgUrl: 'https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg',
        },
        {
          id: '2',
          author: 'Elon Musk',
          name: 'Project 2',
          // eslint-disable-next-line max-len
          imgUrl: 'https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg',
        },
        {
          id: '3',
          author: 'Elon Musk',
          name: 'Project 3',
          // eslint-disable-next-line max-len
          imgUrl: 'https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg',
        },
        {
          id: '4',
          author: 'Elon Musk',
          name: 'Project 4',
          // eslint-disable-next-line max-len
          imgUrl: 'https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg',
        },
        {
          id: '5',
          author: 'Elon Musk',
          name: 'Project 5',
          // eslint-disable-next-line max-len
          imgUrl: 'https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg',
        },
      ])
    )
  }),
]