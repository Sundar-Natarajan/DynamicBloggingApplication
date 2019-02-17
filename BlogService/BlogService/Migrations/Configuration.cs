namespace BlogService.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using BlogService.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<BlogService.Models.BlogServiceContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(BlogService.Models.BlogServiceContext context)
        {
            context.UserBlogs.AddOrUpdate(
                x => x.Id,
                new UserBlog() { Id = 1, Title = "First Blog", Category = "Technology", Date_Created = new DateTime(2018,01,01), Content= "This is the first blog" },
                new UserBlog() { Id = 2, Title = "Second Blog", Category = "Travel", Date_Created = new DateTime(2018, 02, 01), Content = "This is the second blog" },
                new UserBlog() { Id = 3, Title = "Third Blog", Category = "Travel", Date_Created = new DateTime(2018, 03, 01), Content = "This is the third blog" },
                new UserBlog() { Id = 4, Title = "Fourth Blog", Category = "Technology", Date_Created = new DateTime(2018, 04, 01), Content = "This is the fourth blog" },
                new UserBlog() { Id = 5, Title = "Fifth Blog", Category = "Technology", Date_Created = new DateTime(2018, 05, 01), Content = "This is the fifth blog" }
                );            
        }
    }
}
