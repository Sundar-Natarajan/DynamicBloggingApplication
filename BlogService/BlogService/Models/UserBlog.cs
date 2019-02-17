using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BlogService.Models
{
    public class UserBlog
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Category { get; set; }
        public DateTime Date_Created { get; set; }
        public string Content { get; set; }
    }
}