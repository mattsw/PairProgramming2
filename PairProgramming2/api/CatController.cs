using System.Web.Http;

namespace PairProgramming2.api
{
    public class CatController : ApiController
    {
        public IHttpActionResult Get()
        {
            return Ok(new[]
            {
                "brown",
                "grey"
            });
        }
    }
}
