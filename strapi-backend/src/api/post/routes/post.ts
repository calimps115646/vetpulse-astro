import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::post.post', {
  config: {
    findOne: {
      auth: false,
    }
  }
});
