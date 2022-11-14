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
  rest.get("/api/subprojects", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: "1",
          author: "Elon Musk",
          name: "SubProject 1",
          imgUrl:
            // eslint-disable-next-line max-len
            "https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg",
        },
        {
          id: "2",
          author: "Elon Musk",
          name: "SubProject 2",
          imgUrl:
            // eslint-disable-next-line max-len
            "https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg",
        },
        {
          id: "3",
          author: "Elon Musk",
          name: "SubProject 3",
          imgUrl:
            // eslint-disable-next-line max-len
            "https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg",
        },
      ])
    )
  }),
  rest.get("/api/invitations", (req, res, ctx) => {
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
          name: "Constructora Los Castores Felices S.A",
          imgUrl:
            // eslint-disable-next-line max-len
            "https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg",
          createdAt: "12/11/2022",
        },
        {
          id: "4",
          name: "Fundación Mi Casita",
          imgUrl:
            // eslint-disable-next-line max-len
            "https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg",
          createdAt: "12/11/2022",
        },
      ])
    )
  }),
  rest.get("/api/project", (req, res, ctx) => {
    const id = req.url.searchParams.getAll("id")
    return res(
      ctx.status(200),
      ctx.json({
        id: `${id}`,
        title: `Rework Twin Towers with anti-aircraft system n° ${id}`,
        description:
          // eslint-disable-next-line max-len
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id ullamcorper sapien, non euismod mi. In semper dignissim efficitur. Integer porta nulla in efficitur mollis. Aenean risus orci, vestibulum quis ullamcorper pharetra, placerat non lorem. Aenean pharetra sagittis mattis. Proin maximus porttitor luctus. Vestibulum sagittis nec nisi quis dignissim. Aenean eu sem libero. Praesent purus massa, sagittis non egestas nec, porttitor ut urna. Curabitur vitae tellus sit amet nibh tincidunt aliquam. Curabitur lobortis a urna ac ultrices. Suspendisse scelerisque massa urna, a interdum leo sollicitudin in. Fusce maximus, odio ac dictum efficitur, ex tellus vestibulum dui, vel pretium velit lectus ut magna. Suspendisse viverra lacus quis elit condimentum elementum. Sed a tristique enim. Aliquam mi mauris, porta eu diam a, euismod consequat neque.",
        location: {
          latitude: 12.3456,
          longitude: 12.3456,
        },
        images: [
          "https://static.dw.com/image/52876284_303.jpg",
          "https://static.dw.com/image/51802842_303.jpg",
          "https://static.dw.com/image/45623799_303.jpg",
          "https://static.dw.com/image/51802842_303.jpg",
          "https://static.dw.com/image/45623799_303.jpg",
        ],
      })
    )
  }),
  rest.get("/api/subproject", (req, res, ctx) => {
    const id = req.url.searchParams.getAll("id")
    return res(
      ctx.status(200),
      ctx.json({
        id: `${id}`,
        title: `Rework Twin Towers with anti-aircraft system n° ${id}`,
        description:
          // eslint-disable-next-line max-len
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id ullamcorper sapien, non euismod mi. In semper dignissim efficitur. Integer porta nulla in efficitur mollis. Aenean risus orci, vestibulum quis ullamcorper pharetra, placerat non lorem. Aenean pharetra sagittis mattis. Proin maximus porttitor luctus. Vestibulum sagittis nec nisi quis dignissim. Aenean eu sem libero. Praesent purus massa, sagittis non egestas nec, porttitor ut urna. Curabitur vitae tellus sit amet nibh tincidunt aliquam. Curabitur lobortis a urna ac ultrices. Suspendisse scelerisque massa urna, a interdum leo sollicitudin in. Fusce maximus, odio ac dictum efficitur, ex tellus vestibulum dui, vel pretium velit lectus ut magna. Suspendisse viverra lacus quis elit condimentum elementum. Sed a tristique enim. Aliquam mi mauris, porta eu diam a, euismod consequat neque.",
        models: [
          "https://static.dw.com/image/52876284_303.jpg",
          "https://static.dw.com/image/51802842_303.jpg",
          "https://static.dw.com/image/45623799_303.jpg",
          "https://static.dw.com/image/51802842_303.jpg",
          "https://static.dw.com/image/45623799_303.jpg",
        ],
      })
    )
  }),

  // Handles a POST request

  rest.post("/api/newproject", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
      })
    )
  }),

  rest.post("/api/newsubproject", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
      })
    )
  }),
]
