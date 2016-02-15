namespace PairProgramming2.Core.Repositories
{
    using Newtonsoft.Json.Linq;
    using System.IO;

    public interface ICatRepository
    {
        JToken GetCats();
    }

    public class CatRepository : ICatRepository
    {
        private JToken Cats { get; set; }

        public CatRepository(string catsPath)
        {
            Cats = JObject.Parse(File.ReadAllText(catsPath));
        }

        public JToken GetCats()
        {
            return Cats;
        }
    }
}
