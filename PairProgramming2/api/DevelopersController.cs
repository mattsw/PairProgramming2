using System.Linq;
using System.Web.Http;
using PairProgramming2.Models;

namespace PairProgramming2.api
{
    public class DevelopersController : ApiController
    {
        Developer[] developers = new Developer[]
        {
            new Developer { Name = "Matt", SkillLevel = new DevSkillLevel { SkillLevel = 0, SkillLevelValue = "Noob" } },
            new Developer { Name = "Kelly", SkillLevel = new DevSkillLevel { SkillLevel = 2, SkillLevelValue = "Pro" } },
            new Developer { Name = "Becca", SkillLevel = new DevSkillLevel { SkillLevel = 3, SkillLevelValue = "Bad Ass" } }
        };

        public IHttpActionResult Get()
        {
            return Ok(developers);
        }

        public IHttpActionResult Get(int skillLevel)
        {
            var bestDeveloper = developers.FirstOrDefault((developer) => developer.SkillLevel.SkillLevel == skillLevel);
            if (bestDeveloper == null)
            {
                return NotFound();
            }
            return Ok(bestDeveloper);
        }
    }
}
