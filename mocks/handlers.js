import { rest } from "msw"

export const handlers = [
  // Handles a GET request
  rest.get("/api/projects", (req, res, ctx) => {
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
  rest.get("/api/invitations", (req, res, ctx) => {
    // const id = req.url.searchParams.getAll('id')
    // console.log("ID:", id)
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: "1",
          name: "ZmartBuild",
          imgUrl:
            // eslint-disable-next-line max-len
            "https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg",
          createdAt: "12/11/2022",
        },
        {
          id: "2",
          name: "Inmobiliaria Berlini",
          imgUrl:
            // eslint-disable-next-line max-len
            "https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg",
          createdAt: "12/11/2022",
        },
        {
          id: "3",
          name: "ZmartBuild",
          imgUrl:
            // eslint-disable-next-line max-len
            "https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg",
          createdAt: "12/11/2022",
        },
        {
          id: "4",
          name: "ZmartBuild",
          imgUrl:
            // eslint-disable-next-line max-len
            "https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg",
          createdAt: "12/11/2022",
        },
      ])
    )
  }),
]
