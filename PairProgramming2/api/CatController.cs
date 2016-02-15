namespace PairProgramming2.api
{
    using System.Web.Http;
    using PairProgramming2.Core.Repositories;

    public class CatController : ApiController
    {
        private ICatRepository CatRepository;

        public CatController(ICatRepository catRepository)
        {
            this.CatRepository = catRepository;
        }

        public IHttpActionResult Get()
        {
            return Ok(CatRepository.GetCats());
        }
    }
}
