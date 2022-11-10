import { rest } from "msw"

export const handlers = [
  // Handles a GET request
  rest.get("/api/myprojects", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: "1",
          author: "Elon Musk",
          name: "Project 1",
          imgUrl:
            // eslint-disable-next-line max-len
            "https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg",
        },
        {
          id: "2",
          author: "Elon Musk",
          name: "Project 2",
          imgUrl:
            // eslint-disable-next-line max-len
            "https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg",
        },
        {
          id: "3",
          author: "Elon Musk",
          name: "Project 3",
          imgUrl:
            // eslint-disable-next-line max-len
            "https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg",
        },
        {
          id: "4",
          author: "Elon Musk",
          name: "Project 4",
          imgUrl:
            // eslint-disable-next-line max-len
            "https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg",
        },
      ])
    )
  }),
]