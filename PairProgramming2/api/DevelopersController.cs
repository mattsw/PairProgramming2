using System.Linq;
using System.Web.Http;
using PairProgramming2.Models;

namespace PairProgramming2.api
{
    public class DevelopersController : ApiController
    {
        Developer[] developers = new Developer[]
        {
            new Developer { Name = "Matt", DevSkillLevel = SkillLevel.Noob },
            new Developer { Name = "Kelly", DevSkillLevel = SkillLevel.Pro },
            new Developer { Name = "Becca", DevSkillLevel = SkillLevel.BadAss }
        };

        public IHttpActionResult GetAllDevelopers()
        {
            return Ok(developers);
        }

        public IHttpActionResult GetBestDeveloper()
        {
            var bestDeveloper = developers.FirstOrDefault((d) => d.DevSkillLevel == SkillLevel.BadAss);
            if (bestDeveloper == null)
            {
                return NotFound();
            }
            return Ok(bestDeveloper);
        }
    }
}
