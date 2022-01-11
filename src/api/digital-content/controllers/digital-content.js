'use strict';
const { sanitizeEntity } = require("strapi-utils");
/**
 *  digital-content controller
 */

 const { createCoreController } = require('@strapi/strapi').factories;

 module.exports = createCoreController('api::digital-content.digital-content', ({ strapi }) =>  ({
        async update(ctx) {
            // some logic here
            
            let entity = await super.findOne(ctx)
            let author = entity.data.attributes.Author
            console.log(entity.data.attributes.Author)
            
            
            if(author.includes(ctx.state.user.username)){
                return await super.update(ctx)
            } else {
                return ctx.badRequest(401, [{ messages: [{ id: "You're not the author!" }] }]);
                
            }
        },

        async delete(ctx) {
            // some logic here
            
            let entity = await super.findOne(ctx)
            let author = entity.data.attributes.Author
            console.log(entity.data.attributes.Author)
            
            
            if(author.includes(ctx.state.user.username)){
                return await super.delete(ctx)
            } else {
                return ctx.badRequest(401, [{ messages: [{ id: "You're not the author!" }] }]);
                
            }
        },

        async create(ctx){

            ctx.request.body.data.Author = ctx.state.user.username;
            let entity = await strapi.service('api::digital-content.digital-content').create(ctx.request.body)
            
            return entity

        },

        
}));
