"use strict";

const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

module.exports = {
  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);

      if (!data || !data.description) {
        ctx.throw(400, "Please provide a description");
      }

      if (!files || !files.image) {
        ctx.throw(400, "Please provide a valid image file");
      }

      entity = await strapi.services.post.create(
        { ...data, likes: 0 },
        { files }
      );
    } else {
      ctx.throw(400, "Please use multipart/form-data");
    }
    return sanitizeEntity(entity, { model: strapi.models.post });
  },
};
