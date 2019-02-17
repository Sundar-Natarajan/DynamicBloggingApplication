using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using BlogService.Models;

namespace BlogService.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class UserBlogsController : ApiController
    {
        private BlogServiceContext db = new BlogServiceContext();

        // GET: api/UserBlogs
        public IQueryable<UserBlog> GetUserBlogs()
        {
            return db.UserBlogs;
        }

        // GET: api/UserBlogs/5
        [ResponseType(typeof(UserBlog))]
        public async Task<IHttpActionResult> GetUserBlog(int id)
        {
            UserBlog userBlog = await db.UserBlogs.FindAsync(id);
            if (userBlog == null)
            {
                return NotFound();
            }

            return Ok(userBlog);
        }

        // PUT: api/UserBlogs/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutUserBlog(int id, UserBlog userBlog)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userBlog.Id)
            {
                return BadRequest();
            }

            db.Entry(userBlog).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserBlogExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/UserBlogs
        [ResponseType(typeof(UserBlog))]
        public async Task<IHttpActionResult> PostUserBlog(UserBlog userBlog)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.UserBlogs.Add(userBlog);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = userBlog.Id }, userBlog);
        }

        // DELETE: api/UserBlogs/5
        [ResponseType(typeof(UserBlog))]
        public async Task<IHttpActionResult> DeleteUserBlog(int id)
        {
            UserBlog userBlog = await db.UserBlogs.FindAsync(id);
            if (userBlog == null)
            {
                return NotFound();
            }

            db.UserBlogs.Remove(userBlog);
            await db.SaveChangesAsync();

            return Ok(userBlog);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserBlogExists(int id)
        {
            return db.UserBlogs.Count(e => e.Id == id) > 0;
        }
    }
}